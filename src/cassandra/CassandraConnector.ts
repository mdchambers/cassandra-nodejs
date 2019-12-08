import {Client} from "cassandra-driver";
import {logger} from "../util/logger";
import {User} from "../model/User";

export class CassandraConnector {
    private client: Client;

    constructor() {
        this.client = new Client({
            contactPoints: ['127.0.0.1'],
            localDataCenter: 'datacenter1',
            keyspace: 'fakeapp'
        });
    }

    cassandraStart(): Promise<boolean> {
        return this.client.connect().then(() => {
            logger.info('Cassandra connected successfully');
            return true
        }).catch((err) => {
            logger.info('Cassandra did not connect')
            return false
        });
    }

    insertUser(user: User): Promise<boolean> {
        const query = 'insert into fakeapp.users (id, name, email) values(?, ?, ?)';
        return this.client.execute(query, [user.id, user.name, user.email]).then(res => {
            logger.info('Insert successful');
            return true;
        }).catch( err => {
            logger.info('Insert unsuccessful');
            return false;
        })
    }
}

