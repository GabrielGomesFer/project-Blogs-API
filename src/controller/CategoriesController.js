const categoriesServices = require('../services/Categories');

const createCategories = async (req, res) => {
    try {
        const { name } = req.body;

        const result = await categoriesServices.createCategories(name);

        return res.status(201).json(result);
    } catch (error) {
                return res.status(500).json({ message: error.message });
    }
};

const getAllCategories = async (req, res) => {
        const result = await categoriesServices.getAllCategories();

        return res.status(200).json(result);
};

module.exports = { createCategories, getAllCategories };