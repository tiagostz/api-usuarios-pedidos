const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (data) => {
    const { senha, ...rest } = data;

    const senhaHash = await bcrypt.hash(senha, 10);

    return await User.create({
        ...rest,
        senha: senhaHash
    });
};

exports.findUserByLogin = async (login) => {
    return await User.findOne({ login });
};

exports.listInactiveUsers = async () => {
    return await User.find({ ativo: false })
        .select('_id nome login idade email');
};

exports.listActiveUsers = async () => {
    return await User.find({ ativo: { $ne: false } })
        .select('_id nome login idade email');
};

exports.updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, {
        returnDocument: 'after'
    });
};

exports.inactivateUser = async (id) => {
    return await User.findByIdAndUpdate(id, { ativo: false });
};