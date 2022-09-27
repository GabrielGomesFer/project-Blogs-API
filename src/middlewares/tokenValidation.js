require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenValidation = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
try { // precisei do try catch para pegar o erro já e o if não estava funcionando
    const verified = jwt.verify(token, secret);
    console.log('testeeee', verified);
    return next();
} catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
}
};

// if (!verified) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
// }
module.exports = tokenValidation;