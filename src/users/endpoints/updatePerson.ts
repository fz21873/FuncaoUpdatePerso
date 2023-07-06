import { Request, Response } from "express";
import { JSONManager } from "../JSONManager";

export const updatePerson = (req: Request, res: Response) => {

    try {
        const { nome, cpf, dataDeNascimento } = req.body
        const id = Number(req.params.id)
        if (!nome || !cpf || !dataDeNascimento) {
            throw new Error()
        }

        

        JSONManager.update(id, nome, cpf, dataDeNascimento)

        res.send('Pessoa atualizada com sucesso').status(200).end()


    } catch (error) {

        res.send("Você precisa enviar os dados: nome, cpf, dataDeNascimento").status(400).end()

    }
}