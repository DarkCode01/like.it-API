exports.getUserByNickname = {
    $id: 'getUserByNickname',
    tags: ['Users Accounts'],
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
        '5xx': {
            type: 'object',
            description: 'Return type and short description of error.',
            properties: {
                statusCode: { type: 'string' },
                error: { type: 'string' },
                message: { type: 'string' }
            }
        }
    }
}

exports.getUsers = {
    $id: 'getUsers',
    tags: ['Users Accounts'],
    response: {
        200: {
            type: 'object',
            description: 'Response with all users accounts.',
            properties: {
                data_length: { type: 'string' },
                data: { type: 'array', items: { $ref: 'User' } }
            }
        },
        '5xx': {
            type: 'object',
            description: 'Return type and short description of error.',
            properties: {
                statusCode: { type: 'string' },
                error: { type: 'string' },
                message: { type: 'string' }
            }
        }
    }
}