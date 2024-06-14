import brothsData from './broths.json';

const broths = brothsData.broths.map(broth => {
    return {
        ...broth,
        price: parseFloat(broth.price)
    };
});

export default broths;