const Query = {
    users(parent, args, { prisma }, info) {
        const opArgs = {}

        if(args.query){
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                },{
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)
    },
    posts(parent, args, { prisma }, info) {
        const opArgs = {}

        if(args.query){
            opArgs.where = {
                OR: [{
                    body_contains: args.query
                },{
                    title_contains: args.query
                }]
            }
        }

        return prisma.query.posts(opArgs, info)
    },
    comments(parent, args, { prisma }, info) {
        const opArgs = {}

        if(args.query){
            opArgs.where={
                OR: [{
                    text_contains: args.query
                }]    
            }
        }

        return prisma.query.comments(opArgs, info)
    },
    me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    post() {
        return {
            id: '092',
            title: 'GraphQL 101',
            body: '',
            published: false
        }
    }
}

export default Query;