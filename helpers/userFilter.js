exports.userFilter = ({ search }) => {
    search = search.toLowerCase();

    console.log(search);
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