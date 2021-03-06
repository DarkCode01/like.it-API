exports.User = {
    $id: 'User',
    properties: {
        _id: { type: 'string' },
        gravatar: { type: 'string' },
        fullName: { type: 'string' },
        nickname: { type: 'string' },
        bio: { type: 'string' }
    }
}

exports.Post = {
    $id: 'Post',
    properties: {
        _id: { type: 'string'},
        uniconrs: {
            type: 'array',
            items: {
                $ref: 'User#/_id'
            }
        }
    }
}

exports.ErrorSchema = {
    description: 'Body of response error.',
    properties: {
        statusCode: { type: 'string' },
        error: { type: 'string' },
        message: { type: 'string' }
    }
}