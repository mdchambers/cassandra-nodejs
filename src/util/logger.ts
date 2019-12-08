import * as winston from "winston";
import {createLogger} from "winston";

export const logger = createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});