const { newConnection } = require("../db/db_connection");
const { dbCreateTheme, dbUpdateTheme, dbGetThemeById, dbDeleteThemeById, dbGetThemes } = require("../db/theme");
const { sendResponse } = require("./util/responseUtil");
const { validateTheme } = require("./util/validationUtil");

exports.createTheme = async (req, res) => {
    try {
        const db = await newConnection();
        const body = req.body;

        const newTheme = validateTheme(body, false);

        dbCreateTheme(
            db,
            newTheme,
            sendResponse(res, { tableName: "theme", methodVerb: "creating" })
        );

        db.end();

    } catch (err) {
        console.log(`Error creating theme: ${err.message}`);
        res.status(500).send({
            message: "Error creating theme"
        });
    }
};

exports.updateThemeById = async (req, res) => {
    try {
        const db = await newConnection();
        const id = req.params.id;
        const body = req.body;

        const updatedTheme = validateTheme({ id, ...body }, true);

        dbUpdateTheme(
            db,
            id,
            updatedTheme,
            sendResponse(res, { tableName: "theme", columnName: "id", columnVal: id, methodVerb: "updating" })
        );

        db.end();

    } catch (err) {
        console.log(`Error updating theme: ${err.message}`);
        res.status(500).send({
            message: "Error updating theme"
        });
    }
};

exports.getThemeById = async (req, res) => {
    try {
        const id = req.params.id
        const db = await newConnection();

        dbGetThemeById(
            db, 
            id, 
            sendResponse(res, { tableName: "theme", columnName: "id", columnVal: id, methodVerb: "getting" })
        );

        db.end();

    } catch (err) {
        console.log(`Error getting theme: ${err.message}`);
        res.status(500).send({
            message: "Error getting theme"
        });
    }
};

exports.deleteThemeById = async (req, res) => {
    try {
        const id = req.params.id
        const db = await newConnection();

        dbDeleteThemeById(
            db, 
            id, 
            sendResponse(res, { tableName: "theme", columnName: "id", columnVal: id, methodVerb: "deleting" })
        );

        db.end();

    } catch (err) {
        console.log(`Error deleting theme: ${err.message}`);
        res.status(500).send({
            message: "Error deleting theme"
        });
    }
};

exports.getThemes = async (req, res) => {
    try {
        const db = await newConnection();

        dbGetThemes(
            db, 
            sendResponse(res, { tableName: "themes",  methodVerb: "getting" })
        );

        db.end();

    } catch (err) {
        console.log(`Error getting themes: ${err.message}`);
        res.status(500).send({
            message: "Error getting themes"
        });
    }
};

