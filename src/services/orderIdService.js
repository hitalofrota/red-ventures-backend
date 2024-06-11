import axios from 'axios';
import dotenv from "dotenv";

class OrderIdService {
    static async generateOrderId() {
        dotenv.config();
        const URL_SITE = process.env.URL_SITE 
        const X_API_KEY = process.env.X_API_KEY 

        try {
            const response = await axios.post(URL_SITE, {}, {
                headers: {
                    'x-api-key': X_API_KEY
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