import brothDataBase from "../dataBase-mok/databrothDataBase";

class BrothRepository {
    static getAllbrothDataBase() {
        return brothDataBase;
    }
    
    static getBrothById(id) {
        return brothDataBase.find(broth => broth.id === id);
    }
    
    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static addBroth(newBroth) {
        brothDataBase.push(newBroth);
    }
    
    static updateBroth(id, updatedBroth) {
        const index = brothDataBase.findIndex(broth => broth.id === id);
        if (index !== -1) {
            brothDataBase[index] = { ...brothDataBase[index], ...updatedBroth };
            return brothDataBase[index];
        }
        return null;
    }
    
    static deleteBroth(id) {
        const index = brothDataBase.findIndex(broth => broth.id === id);
        if (index !== -1) {
            return brothDataBase.splice(index, 1);
        }
        return null;
    }
}

export default BrothRepository;
