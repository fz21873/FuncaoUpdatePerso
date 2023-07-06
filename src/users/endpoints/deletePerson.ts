import { Request, Response } from "express";
import { JSONManager } from "../JSONManager";

export const deletePerson = (req: Request, res: Response) => {

    try {

        const id = Number(req.params.id)

        if (!id) {
            throw new Error()
        }
        
        JSONManager.delete(id)

        res.send("Pessoa removida com sucesso").status(200).end()

    } catch (error) {

        res.send("Algo deu errado").status(500).end()

    }

}