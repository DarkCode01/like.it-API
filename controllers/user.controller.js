const boom = require('boom');
const User = require('../models/user.model');
const { userFilter } = require('../helpers/userFilter');


exports.addUser = async (req, resply) => {
    try {
        const user = new User(req.body);
        
        reply
            .code(201)
            .send({
                data: user.save()
            });
    } catch(err) {
        throw boom.boomify(err);
    }
}

exports.getUsers = async (req, reply) => {
    try {
        const filter = userFilter(req.query);
        const users = await User
                                .find(filter)
                                .select('-_id -__v -password -postsCreated -birth -active -email');

        return {
            data_length: users.length,
            data: users
        };
    } catch(err) {
        throw boom.boomify(err);
    }
}

exports.getUserByNickname = async (req, reply) => {
    try {
        const { nickname } = req.params;
        const user = await User
                            .findOne({
                                nickname: nickname
                            })
                            .select('-__v -password')

        if (user) {
            return user;
        } else {
            reply
                .code(404)
                .send({
                    statusCode: 404,
                    error: 'Not Found',
                    message: 'User not found with that nickname.'
                });
        }
    } catch(err) {
        return boom.boomify(err);
    }
}

exports.updateUser = async (req, reply) => {
    try {
        const { _id } = req.body;
        const { fields } = req.body;

        const result = await User.update(
            { _id: _id },
            fields
        );

        if (result.ok) {
            reply
                .code(201)
                .send({
                    data: result
                });
        } else {
            throw new Error('Error while updating user.');
        }
    } catch(err) {
        return boom.boomify(err);
    }
}

exports.desactivateUser = async (req, reply) => {
    try {
        const { _id } = req.body;

        const result = await User.update(
            { _id: _id },
            { active: false }
        );

        if (result.ok) {
            return result;
        } else {
            throw new Error('Error while desactivating user.');
        }
    } catch(err) {
        throw boom.boomify(err);
    }
}