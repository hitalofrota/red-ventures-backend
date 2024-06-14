import proteinsData from "./proteins.json" assert { type: 'json' };

const proteins = proteinsData.proteins.map(protein => {
    return {
        ...protein,
    };
});

export default proteins;