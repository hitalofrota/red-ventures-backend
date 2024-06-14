import brothsData from './broths.json' assert { type: 'json' };

const broths = brothsData.broths.map(broth => {
    return {
        ...broth,
    };
});

export default broths;