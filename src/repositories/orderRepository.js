import orders from "../dataBase-mok/orderDatabase.js";
import proteins from "../dataBase-mok/proteinDataBase.js";
import broths from "../dataBase-mok/brothDataBase.js";
import OrderIdService from "../services/orderIdService.js";

class OrderRepository {
    static async addOrder(req, res) {

        const protein =  {
            id: '1',
            imageInactive: 'path/to/imageInactive1.jpg',
            imageActive: 'path/to/imageActive1.jpg',
            name: 'Proteina 1',
            description: 'Description for Broth 1',
            price: 10.0
        }
        
        const broth = {
            id: '1',
            imageInactive: `https://drive.google.com/file/d/1SJEBHOcP3z3Zc3qhA9lO8H2Wo99IXUm6/view?usp=sharing`,
            imageActive: `https://drive.google.com/file/d/1fyHfQOkMNrauHeiS8xyvkXD9EJQqvpUd/view?usp=sharing`,
            name: 'Sopa Low Carb',
            description: 'Sopa detox que irá transformar o seu físico',
            price: 10.0
        };

        try {
            const orderId = await OrderIdService.generateOrderId();

            const newOrder = {
                protein,
                broth
            };

            orders.push(newOrder);
            return res.status(201).json(`id: ${orderId} description: ${newOrder.broth.name} and ${newOrder.protein.name} image:`);
        } catch (error) {
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