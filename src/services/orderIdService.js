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
            return response.data.orderId;
        } catch (error) {
            throw new Error(`Error generating order ID: ${error.message}`);
        }
    }
}

export default OrderIdService;