import express, { Express } from 'express';
import cors from 'cors'

export const app: Express = express()

app.set("view engine", "ejs")

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("rodando na porta 3003")
})