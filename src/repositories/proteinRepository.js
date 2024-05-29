import proteinDataBase from "../dataBase-mok/proteinDataBase";

class ProteinRepository {
    static getAllproteinDataBase() {
        return proteinDataBase;
    }
    
    static getProteinById(id) {
        return proteinDataBase.find(broth => broth.id === id);
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
