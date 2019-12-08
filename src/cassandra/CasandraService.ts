import {User} from "../model/User";
import {CassandraConnector} from "./CassandraConnector";


export class CassandraService {

    connector: CassandraConnector;

    constructor(connector: CassandraConnector) {
        this.connector = connector;
    }

    async populateFakes(fields: number): Promise<void> {
        for (let i = 0; i < fields; i += 1) {
            const user = this.generateFake();
            await this.insertUser(user);
        }
    }

    generateFake(): User {
        return new User('foo', 'foo@foo.net')
    }

    insertUser(user): Promise<boolean> {
        return this.connector.insertUser(user);
    }

}