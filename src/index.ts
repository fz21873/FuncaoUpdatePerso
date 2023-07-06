import { Request, Response } from 'express';
import { app } from './app';

import { createNewPerson } from './users/endpoints/createNewPerson';
import { getUsers } from './users/endpoints/getUsers';
import { deletePerson } from './users/endpoints/deletePerson';
import { updatePerson } from './users/endpoints/UpdatePerson';

//rotas para os endpoints do back

//users
app.get("/users", getUsers)
app.post("/users", createNewPerson)
app.put("/users/:id", updatePerson)
app.delete("/users/:id", deletePerson)







