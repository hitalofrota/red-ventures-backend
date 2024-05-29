import axios from 'axios';
import dotenv from "dotenv";

class OrderIdService {
    static async generateOrderId() {
        dotenv.config();
        try {
            const response = await axios.post(process.env.URL_SITE, {}, {
                headers: {
                    'x-api-key': process.env.X_API_KEY
                }
            });
            if(!response){
                return res.status(403).send({error: "x-api-key header missing"});
            }
            return response.data.orderId;
        } catch (error) {
            res.status(500).send({error: "could not place order"});
        }
    }
}

export default OrderIdService;