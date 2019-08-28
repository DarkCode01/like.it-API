const { ErrorSchema } = require('../config/schemas.config');

exports.getUserByNickname = {
    $id: 'getUserByNickname',
    tags: ['Users Accounts'],
    params: {
        nickname: {
            type: 'string',
            description: 'Contain nickname of user account to get data.'
        }
    },
    response: {
        200: {
            type: 'object',
            description: 'Response with all data of user account.',
            properties: {
                _id: { type: 'string' },
                gravatar: { type: 'string' },
                fullName: { type: 'string' },
                nickname: { type: 'string' },
                email: { type: 'string' },
                bio: { type: 'string' },
                birth: { type: 'string' },
                active: { type: 'boolean' },
                postsCreated: {
                    type: 'array',
                    items: {
                        $ref: 'Post#/properties/_id'
                    }
                }
            }
        },
        404: ErrorSchema,
        '5xx': ErrorSchema
    }
}

exports.getUsers = {
    $id: 'getUsers',
    tags: ['Users Accounts'],
    querystring: {
        search: {
            type: 'string',
            description: 'Query param to search data user, supportted (nickname, full_name)'
        }
    },
    response: {
        200: {
            type: 'object',
            description: 'Response with all users accounts.',
            properties: {
                data_length: { type: 'string' },
                data: { type: 'array', items: { $ref: 'User' } }
            }
        },
        '5xx': ErrorSchema
    }
}

exports.addUser = {
    $id: 'addUser',
    tags: ['Users Accounts'],
    body: {
        type: 'object',
        required: ['nickname', 'email', 'password'],
        properties: {
            fullName: { type: 'string' },
            nickname: { type: 'string' },
            email: { type: 'string' },
            bio: { type: 'string' },
            birth: { type: 'string' },
            password: { type: 'string' }
        }
    },
    response: {
        200: 'User#',
        '5xx': ErrorSchema
    }
}

exports.updateUser = {
    $id: 'updateUser',
    tags: ['Users Accounts'],
    body: {
        type: 'object',
        properties: {
            fullName: { type: 'string' },
            nickname: { type: 'string' },
            bio: { type: 'string' },
            birth: { type: 'string' }
        }
    },
    response: {
        200: 'User#',
        '5xx': ErrorSchema
    },
    security: [{ "apiKey": ['token'] }]
}

exports.desactivateUser = {
    $id: 'desactivateUser',
    tags: ['Users Accounts'],
    body: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            nickname: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                error: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        '5xx': ErrorSchema
    },
    security: [{ "apiKey": ['token'] }]
}