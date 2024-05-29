import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";

class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body;
        
        const protein = proteins.find(prot => prot.id === proteinId);
        const broth = broths.find(brot => brot.id === brothId);

        try {
            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                orderId,
                protein,
                broth,
            };

            orders.push(newOrder);
            res.status(201).json(`id: ${orderId} description: ${newOrder.broth.name} and ${newOrder.protein.name} image:`);
        } catch (error) {
            res.status(400).send({error: "both brothId and proteinId are required"});
        }
    }

    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static getAllOrders(req, res) {
        res.json(orders);
    }

    static getOrderById(req, res) {
        const id = parseInt(req.params.id);
        const order = orders.find(o => o.id === id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).send({ message: "Order not found" });
        }
    }
}

export default OrderRepository;