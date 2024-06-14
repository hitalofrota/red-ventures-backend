import OrderIdService from '../services/orderIdService.js';
import Protein from '../models/proteinsModel.js';
import Broth from '../models/brothsModel.js';
import mongoose from 'mongoose';

class OrderRepository {
    static async addOrder(req, res) {
        console.log("Request Body:", req.body);
        const { proteinId, brothId } = req.body;

        if (!proteinId || !brothId) {
            console.error('Missing proteinId or brothId');
            return res.status(400).json({ error: 'proteinId and brothId are required' });
        }

        // Verificar se os IDs têm o formato correto
        if (!mongoose.Types.ObjectId.isValid(proteinId) || !mongoose.Types.ObjectId.isValid(brothId)) {
            return res.status(400).json({ error: 'Invalid proteinId or brothId' });
        }

        try {
            // Converter IDs para ObjectId
            const proteinObjectId = new mongoose.Types.ObjectId(proteinId);
            const brothObjectId = new mongoose.Types.ObjectId(brothId);

            const protein = await Protein.findById(proteinObjectId);
            const broth = await Broth.findById(brothObjectId);

            if (!protein) {
                console.error('Protein not found:', proteinId);
                return res.status(404).json({ error: 'Protein not found' });
            }

            if (!broth) {
                console.error('Broth not found:', brothId);
                return res.status(404).json({ error: 'Broth not found' });
            }

            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                protein,
                broth
            };

            console.log('New Order:', newOrder);

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
