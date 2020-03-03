import { Router } from "express";
import PingController from "./../controllers/ping.controller";

export default class PingRouter {

    public path: string;
    public router: Router;
    public controller: PingController;

    constructor() {
        this.path = "/api/ping";
        this.router = Router();
        this.controller = new PingController();

        this.router.get("/", (req, res) => this.controller.pong(req, res));
    }
}
