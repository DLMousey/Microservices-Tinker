import { Request, Response } from "express";

export default class PingController {

    public pong(req: Request, res: Response): any {
        res.status(200);
        return res.json({
            status: 200,
            message: "Pong from mses-data"
        });
    }
}
