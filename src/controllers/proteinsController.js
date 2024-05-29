import ProteinRepository from "../repositories/proteinRepository.js";

class ProteinController {
    static findAllProteins = ProteinRepository.getAllproteinDataBase;
    static findOneProtein = ProteinRepository.getProteinById;
    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static createProtein = ProteinRepository.addProtein;
    static updateProtein = ProteinRepository.updateProtein;
    static deleteProtein = ProteinRepository.deleteProtein;
}

export default ProteinController;

