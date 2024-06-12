import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";

class OrderRepository {
    static async addOrder(req, res) {
        const { protein, broth } = req.body;

        const proteinId = proteins.find(prot => prot.id === protein);
        const brothId = broths.find(brot => brot.id === broth);

        try {
            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                proteinId,
                brothId
            };

            orders.push(newOrder);
            return res.status(201).json(`id: ${orderId} description: ${newOrder.brothId.name} and ${newOrder.proteinId.name} image:`);
        } catch (error) {
            return res.status(500).send({ error: "an error occurred while creating the order" });
        }
    }

    //OBS:
    //metodos abaixo nao utilizados pela regra de negocio do projeto
    //foi inserito ao projeto para caso, em um futuro, houver alguma implementacao
    static getAllOrders(req, res) {
        res.json(orders);
    }

    static getOrderById(req, res) {
        const id = req.params.id;
        const order = orders.find(o => o.id === id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).send({ message: "Order not found" });
        }
    }
}

export default OrderRepository;