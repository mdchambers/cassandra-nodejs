import { fake } from "faker"
import { Client } from "cassandra-driver"
import {createLogger, query} from "winston"
import * as winston from "winston";
import {logger} from "./util/logger";
import {CassandraConnector} from "./cassandra/CassandraConnector";
import {CassandraService} from "./cassandra/CasandraService";







const cass = new CassandraConnector();

const main = async () => {
    if( await cass.cassandraStart()) {
        logger.info('Back in business')
        const service = new CassandraService(cass);

        await service.populateFakes(5);
    }
};



main();