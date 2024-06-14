import Broth from "../models/brothsModel.js";

class BrothRepository {
    static getAllbrothDataBase = async (req, res) => {
        try {
            const broths = await Broth.find({});
            res.status(200).json(broths)
        } catch (erro) {
            console.error(error);
            res.status(500).json({ error: "Error finding comments" });
        }
    }
    
    static getBrothById(req, res) {
        const id = req.params.id;
        const foundBroth = broths.find(p => p.id === id);
        if (foundBroth) {
            res.json(foundBroth);
        } else {
            res.status(404).send({ message: "Erro ao procurar a sopa" });
        }
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
