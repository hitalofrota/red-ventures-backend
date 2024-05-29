import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";

class OrderRepository {
    static addOrder(req, res) {
        const { proteinId, brothId } = req.body;
        
        const protein = proteins.find(prot => prot.id === proteinId);
        const broth = broths.find(brot => brot.id === brothId);

        if (!protein || !broth) {
            return res.status(404).send({ message: "Alguns dos ingredientes nao foram encontrado" });
        }

        const newOrder = {
            id: orders.length + 1,
            protein,
            broth,
        };

        orders.push(newOrder);
        res.status(201).json(`${newOrder.protein.name} and ${newOrder.broth.name}`);
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