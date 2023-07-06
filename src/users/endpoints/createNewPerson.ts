import { Request, Response } from "express";
import { JSONManager } from "../JSONManager";

export const createNewPerson = (req: Request, res: Response) => {

    try {
        const { nome, cpf, dataDeNascimento } = req.body

        if (!nome || !cpf || !dataDeNascimento) {
            throw new Error()
        }

        const id = Math.floor(Math.random() * 1000)

        JSONManager.create(id, nome, cpf, dataDeNascimento)

        res.send('Pessoa criada com sucesso').status(200).end()


    } catch (error) {

        res.send("Você precisa enviar os dados: nome, cpf, dataDeNascimento").status(400).end()

    }
}