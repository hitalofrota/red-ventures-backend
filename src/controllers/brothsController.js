import BrothRepository from "../repositories/brothRepository.js";

class BrothController {
    static findAllBroths = BrothRepository.getAllbrothDataBase;
    static findOneBroth = BrothRepository.getBrothById;
    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static createBroth = BrothRepository.addBroth;
    static updateBroth = BrothRepository.updateBroth;
    static deleteBroth = BrothRepository.deleteBroth;
}

export default BrothController;