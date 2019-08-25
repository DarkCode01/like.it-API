exports.userFilter = ({ search }) => {
    search = search.toLowerCase();

    return {
        $or: [
            {
                nickname: {
                    $regex: search
                }
            },
            {
                fullName: {
                    $regex: search
                }
            }
        ]
    }
}