import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";
import orders from "../dataBase-mok/orderDatabase.js";

class OrderRepository {
    static async addOrder(req, res) {
        const valor = req.body
        const proteinId= "1"
        const brothId= "1"

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
                image: `https://cdn-icons-png.flaticon.com/512/4436/4436481.png`
            });
        } catch (error) {
            console.error('Error creating order:', error);
            return res.status(500).send({ error: "an error occurred while creating the order" });
        }
    }
}

export default OrderRepository;
