const { Category } = require('../models/index');

const getAllCategories = async () => {
    const result = await Category.findAll();
    return result;
};

const createCategories = async (name) => {
    const result = await Category.create({ name });
    return result;
};

module.exports = { getAllCategories, createCategories };