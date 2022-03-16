const sterilization = (data) => {
    if (data) {
        const { password, ...sterilizationData } = data;
        return sterilizationData;
    }
    return null
}

module.exports = {
    sterilization
}