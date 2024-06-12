import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";

class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body;

        const resultProtein = proteinId.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {});

        const resultBroth = brothId.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
        }, {});

        const protein = proteins.find(prot => prot.id === resultProtein);
        const broth = broths.find(brot => brot.id === resultBroth);

        if(!protein || !broth){
            return res.status(400).send({ error: "protein or broth null" })
        }

        try {
            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                protein,
                broth
            };

            orders.push(newOrder);
            return res.status(201).json(`id: ${orderId} description: ${newOrder.broth.name} and ${newOrder.protein.name} image:`);
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