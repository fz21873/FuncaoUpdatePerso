import { Request, Response } from "express";
import { JSONManager } from "../JSONManager";

export const getUsers = (req: Request, res: Response) => {

    try {

        const allUsers = JSONManager.read()

        if (!allUsers) {
            throw new Error()
        }

        res.send(allUsers).status(200).end()

    } catch (error) {
        res.send("Ocorreu um erro").status(500).end()

    }

}