import OrderRepository from "../repositories/orderRepository.js";

class OrderController {
    static createOrder = OrderRepository.addOrder;
    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static findAllOrder = OrderRepository.getAllOrders;
    static findOneOrder = OrderRepository.getOrderById;
}

export default OrderController;
