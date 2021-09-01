import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.get('/', (req, res) => {
    return res.send("oi, foi");
})

app.listen(3333, () => console.log("Server is running"));