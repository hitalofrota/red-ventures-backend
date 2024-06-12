import OrderRepository from "../repositories/orderRepository.js";

class OrderController {
    static async createOrder(req, res) {
        try {
            await OrderRepository.addOrder(req, res);
        } catch (error) {
            res.status(500).send({ error: "An error occurred while creating the order" });
        }
    }
}

export default OrderController;
