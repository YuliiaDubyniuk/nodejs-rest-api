const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError } = require('../../helpers');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, 'Email or password is wrong')
    };

    if (!user.verify) {
        throw HttpError(401, 'Email is not verified')
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
       throw HttpError(401, 'Email or password is wrong') 
    };

    const payload = {
        id: user._id,
    }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
    await User.findByIdAndUpdate(user._id, { token });

    res.status(201).json({
        token,
        email: user.email,
        subscription: user.subscription,
    });
}

module.exports = login;