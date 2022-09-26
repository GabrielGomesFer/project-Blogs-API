const UserModel = require('../models/User');

const userValidation = async (req, res, next) => {
    const { email, password } = req.body;

    const result = await UserModel.findOne({ where: { email } });

    if (!!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (!result) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    next();
};

module.export = userValidation;