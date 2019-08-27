exports.getToken = {
    $id: 'token',
    tags: ['Token Authorization'],
    body: {
        type: 'object',
        properties: {
            email: { type: 'string' },
            nickname: { type: 'string' },
            password: { type: 'string' }
        },
        required: ['password', 'email', 'nickname']
    },
    response: {
        200: {
            type: 'object',
            description: 'Return prefix and token access.',
            properties: {
                prefix: { type: 'string' },
                access: { type: 'string' }
            }
        },
        403: {
            type: 'object',
            description: 'Response when token is invalid.',
            properties: {
                statusCode: { type: 'string' },
                error: { type: 'string' },
                message: { type: 'string' }
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