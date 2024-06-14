import proteinsData from './proteins.json';

const proteins = proteinsData.proteins.map(protein => {
    return {
        ...protein,
        price: parseFloat(protein.price)  // Garantindo que o preço seja um número
    };
});

export default proteins;