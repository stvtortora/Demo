const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const { getStatsById } = require("./controllers/stats_controller");
const { createTheme, getThemeById, updateThemeById, deleteThemeById, getThemes } = require("./controllers/theme_controller");

const port = 7070;

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.get("/test", (req, res) => {
    res.send({test: "test"});
})

app.get("/stats/:id", (req, res) => getStatsById(req, res));

app.post("/theme", (req, res) => createTheme(req, res));

app.get("/theme/:id", (req, res) => getThemeById(req, res));

app.patch("/theme/:id", (req, res) => updateThemeById(req, res));

app.delete("/theme/:id", (req, res) => deleteThemeById(req, res));

app.get("/themes", (req, res) => getThemes(req, res));

app.listen(port, () => {
    console.log("listening");
});
