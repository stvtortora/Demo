const { newConnection } = require("../db/db_connection");
const { dbGetStatsById } = require("../db/stats");
const { sendResponse } = require("./util/responseUtil");

exports.getStatsById = async (req, res) => {
    try {
        const id = req.params.id
        const db = await newConnection();

        dbGetStatsById(
            db, 
            id, 
            sendResponse(res, { tableName: "stats", columnName: "id", columnVal: id })
        );

        db.end();

    } catch (err) {
        console.log(`Error getting stats: ${err.message}`);
        res.status(500).send({
            message: "Error getting stats"
        });
    }
};