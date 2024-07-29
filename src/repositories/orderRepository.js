import OrderIdService from '../services/orderIdService.js';
import Protein from '../models/proteinsModel.js';
import Broth from '../models/brothsModel.js';

class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body;
        console.log("req.headers", req.headers['x-api-key']);

        console.log(req.body);

        console.log("proteinId", proteinId, "brothId", brothId)

        if (!proteinId || !brothId) {
            console.error('Missing proteinId or brothId');
            return res.status(400).json({ error: 'proteinId and brothId are required' });
        }

        try {
            const resultadoProtein = await Protein.findOne({ id: proteinId });
            const resultadoBroth = await Broth.findOne({ id: brothId });    

            console.log("Resultado", resultadoProtein.id, resultadoBroth.id)

            if (!resultadoProtein) {
                console.error('Protein not found:', proteinId);
                return res.status(404).json({ error: 'Protein not found' });
            }

            if (!resultadoBroth) {
                console.error('Broth not found:', brothId);
                return res.status(404).json({ error: 'Broth not found' });
            }

            const orderId = await OrderIdService.generateOrderId();

            console.log("Order: ", orderId)

            const newOrder = {
                resultadoProtein,
                resultadoBroth
            };

            return res.status(201).json({
                id: orderId,
                description: `${newOrder           }`,
                image: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png'
            });
        } catch (error) {
            console.error('Error creating order:', error);
            return res.status(500).send({ error: 'An error occurred while creating the order' });
        }
    }
}

export default OrderRepository;
