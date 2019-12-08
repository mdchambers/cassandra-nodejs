"use strict";
exports.__esModule = true;
var logger_1 = require("logger");
var cassandra_driver_1 = require("cassandra-driver");
var logger = logger_1.createLogger();
var client = new cassandra_driver_1.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1'
});
client.connect().then(function () {
    logger.info('Connected...');
})["catch"](function (err) {
    logger.debug("err " + err);
});
