const { ErrorSchema } = require('../config/schemas.config');

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
        403: ErrorSchema,
        '5xx': ErrorSchema
    }
}