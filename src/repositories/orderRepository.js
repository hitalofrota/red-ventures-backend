import OrderIdService from '../services/orderIdService.js';
import Protein from '../models/proteinsModel.js';
import Broth from '../models/brothsModel.js';

class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body;

        if (!proteinId || !brothId) {
            return res.status(400).json({ error: 'proteinId and brothId are required' });
        }

        try {
            const protein = await Protein.findById(proteinId);
            const broth = await Broth.findById(brothId);

            if (!protein) {
                return res.status(404).json({ error: 'Protein not found' });
            }

            if (!broth) {
                return res.status(404).json({ error: 'Broth not found' });
            }

            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                protein,
                broth
            };

            return res.status(201).json({
                id: orderId,
                description: `${newOrder.broth.name} and ${newOrder.protein.name}`,
                image: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png'
            });
        } catch (error) {
            console.error('Error creating order:', error);
            return res.status(500).send({ error: 'An error occurred while creating the order' });
        }
    }
}

export default OrderRepository;
