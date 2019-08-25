const crypt = require('crypto-js');
const bcrypt = require('bcryptjs');

exports.lower = (value) => {
    return value.toLowerCase();
}

exports.setPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

exports.gravatar = email => {
    const hash = crypt.MD5(email);
    const url = process.env.GRAVATAR_URL;

    return `${url}/${hash.toString()}?d=retro`;
}