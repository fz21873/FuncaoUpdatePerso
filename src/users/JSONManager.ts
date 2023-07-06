import * as fs from 'fs'
import { Users } from './types'

const data = () => {
    const data = fs.readFileSync("src/users/user.json", 'utf-8')
    
    return JSON.parse(data)
}

export const JSONManager = {

    user: data(),
   

    read() {
        return data()
    },
    create(id: number, nome: string, cpf: string, dataDeNascimento: string) {

        const newPerson: Users = { id, nome, cpf, dataDeNascimento }

        this.user.push(newPerson)

        const dataNewPerson: string = JSON.stringify(this.user, null, 2)

        fs.writeFileSync('src/users/user.json', dataNewPerson)
    },

    update(id: number, nome: string, cpf: string, dataDeNascimento: string) {
        
        for (var i = 0; i < this.user.length; i++) {
            
            var obj =  this.user[i];
          
         
            if (obj.id == id) {
               
                obj.nome= nome;
                obj.cpf= cpf;
                obj.dataDeNascimento= dataDeNascimento;
            }
        }
        
        const dataUpdatePerson: string = JSON.stringify(this.user, null, 2)

        fs.writeFileSync('src/users/user.json', dataUpdatePerson)
     },

    delete(id: number) {

        const itemRemove = this.user.findIndex((item: Users) => item.id === id)
        this.user.splice(itemRemove, 1)

        const dataRemovePerson = JSON.stringify(this.user, null, 2)
        fs.writeFileSync('src/users/user.json', dataRemovePerson)


    }

}