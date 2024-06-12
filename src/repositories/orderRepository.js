import orders from "../dataBase-mok/orderDatabase.js";
import OrderIdService from "../services/orderIdService.js";

const broths = [
    {
        id: '1',
        imageInactive: `https://drive.google.com/file/d/1SJEBHOcP3z3Zc3qhA9lO8H2Wo99IXUm6/view?usp=sharing`,
        imageActive: `https://drive.google.com/file/d/1fyHfQOkMNrauHeiS8xyvkXD9EJQqvpUd/view?usp=sharing`,
        name: 'Sopa Low Carb',
        description: 'Sopa detox que irá transformar o seu físico',
        price: 10.0
    },
    {
        id: '2',
        imageInactive: `https://drive.google.com/file/d/1SJEBHOcP3z3Zc3qhA9lO8H2Wo99IXUm6/view?usp=sharing`,
        imageActive: `https://drive.google.com/file/d/1NVOS-40XA0p8bbnk93RhqOSbEyMnRh_g/view?usp=sharing`,
        name: 'Sopa de Verdura',
        description: 'Sopa de verdura que irá transformar o seu cérebro',
        price: 15.0
    },
    {
        id: '3',
        imageInactive: `https://drive.google.com/file/d/1SJEBHOcP3z3Zc3qhA9lO8H2Wo99IXUm6/view?usp=sharing`,
        imageActive: `https://drive.google.com/file/d/1ThcbpoIiG59xLw-VD_wEdIJJ7QW4uSs2/view?usp=sharing`,
        name: 'Sopa de Variedades',
        description: 'Sopa de variedades que irá transformar o seu metabolismo',
        price: 20.0
    }
];

const proteins = [
    {
        id: '1',
        imageInactive: 'path/to/imageInactive1.jpg',
        imageActive: 'path/to/imageActive1.jpg',
        name: 'Proteina 1',
        description: 'Description for Broth 1',
        price: 10.0
    },
    {
        id: '2',
        imageInactive: 'path/to/imageInactive2.jpg',
        imageActive: 'path/to/imageActive2.jpg',
        name: 'Proteina 2',
        description: 'Description for Broth 2',
        price: 15.0
    }
];


class OrderRepository {
    static async addOrder(req, res) {
        const { proteinId, brothId } = req.body;

        if (!proteinId || !brothId) {
            console.log('Request body:', req.body); // Adicione este log para depuração
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
            return res.status(201).json(newOrder);
        } catch (error) {
            console.error('Error creating order:', error); // Adicione este log para depuração
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
