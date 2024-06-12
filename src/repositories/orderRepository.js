import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";

class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body;
    
        console.log("0", proteinId, brothId);
    
        if (!proteinId || !brothId) {
            return res.status(400).send({ error: "protein or broth null" });
        }
    
        let protein = null;
        let broth = null;
    
        // Usando forEach para encontrar protein e broth
        proteins.forEach(prot => {
            if (prot.id === proteinId) {
                protein = prot;
            }
        });
    
        broths.forEach(brot => {
            if (brot.id === brothId) {
                broth = brot;
            }
        });
    
        console.log("1", protein, broth);
    
        if (!protein) {
            return res.status(404).send({ error: "protein not found" });
        }
    
        if (!broth) {
            return res.status(404).send({ error: "broth not found" });
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
            console.error("Error while creating order:", error);
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