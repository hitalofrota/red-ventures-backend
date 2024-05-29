import protein from "../dataBase-mok/proteinDataBase.js";

class ProteinRepository {
    static getAllproteinDataBase(req, res) {
        res.json(protein); // Enviar a resposta como JSON
    }
    
    static getProteinById(req, res) {
        const id = req.params.id;
        const foundProtein = protein.find(p => p.id === id);
        if (foundProtein) {
            res.json(foundProtein);
        } else {
            res.status(404).send({ message: "Erro ao procurar a proteina" });
        }   
    }  
    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static addProtein(newBroth) {
        proteinDataBase.push(newBroth);
    }
    
    static updateProtein(id, updatedBroth) {
        const index = proteinDataBase.findIndex(broth => broth.id === id);
        if (index !== -1) {
            proteinDataBase[index] = { ...proteinDataBase[index], ...updatedBroth };
            return proteinDataBase[index];
        }
        return null;
    }
    
    static deleteProtein(id) {
        const index = proteinDataBase.findIndex(broth => broth.id === id);
        if (index !== -1) {
            return proteinDataBase.splice(index, 1);
        }
        return null;
    }
}

export default ProteinRepository;
