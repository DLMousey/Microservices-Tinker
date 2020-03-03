import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import bodyParser from "body-parser";
import morgan from "morgan";

import * as ApiRouters from "./routers/index";

dotenv.config();

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Object.values(ApiRouters).forEach((router: any) => {
    const instance: any = new router();
    app.use(instance.path, instance.router);
});

app.listen(port, () => {
    console.log(`Auth API: Running on port ${port}`);
});
