const jwt = require('jsonwebtoken');
const boom = require('boom');
const { validatePassword } = require('../utils');
const User = require('../models/user.model');

exports.getToken = async (req, reply) => {
    try {
        const { email, nickname, password } = req.body;
        const user = await User.findOne({
                                    $or: [
                                        {
                                            nickname: nickname
                                        },
                                        {
                                            email: email
                                        }
                                    ]
                                })
                                .select('-__v -postsCreated');
        const isValidPassword = validatePassword(password, user.password);

        if (user && isValidPassword) {
            const token = jwt.sign(
                {
                    _id: user._id,
                    nickname: user.nickname,
                    email: user.email,
                    password: user.email,
                    gravatar: user.gravatar,
                    bio: user.bio,
                },
                process.env.SECRET,
                { expiresIn: '12h' }
            );

            reply
                .code(200)
                .send({
                    prefix: 'Bearer',
                    access: token
                });
        } else {
            reply
                .code(403)
                .send({
                    statusCode: 403,
                    error: "Not Authorizaded",
                    message: "Nickname/email or password not valid."
                });
        }
    } catch(err) {
        throw boom.boomify(err);
    }
}