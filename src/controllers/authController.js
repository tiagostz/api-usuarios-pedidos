const userService = require('../services/userService'); // 🔥 faltava isso
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { login, senha } = req.body;

        const user = await userService.findUserByLogin(login);

        if (!user) {
            return res.status(401).json({ erro: 'Usuário não encontrado' });
        }

        if (!user.ativo) {
            return res.status(403).json({ erro: 'Usuário inativado' });
        }

        const valid = await bcrypt.compare(senha, user.senha);

        if (!valid) {
            return res.status(401).json({ erro: 'Senha inválida' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token });

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};