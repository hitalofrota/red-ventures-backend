import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";

class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body

        if (!proteinId || !brothId ) {
            return res.status(400).json({ error: 'proteinId and brothId are required' });
        }

        const protein = proteins.find(prot => prot.id === proteinId);
        const broth = broths.find(brot => brot.id === brothId);

        if (!protein) {
            return res.status(404).json({ error: 'Protein not found' });
        }
          
        if (!broth) {
            return res.status(404).json({ error: 'Broth not found' });
        }

        try {
            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                protein,
                broth
            };

            orders.push(newOrder);
            return res.status(201).json({
                id: orderId,
                description: newOrder.broth.name + " and " + newOrder.protein.name,
                image: ""
            });
        } catch (error) {
            console.error('Error creating order:', error);
            return res.status(500).send({ error: "an error occurred while creating the order" });
        }
    }

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
