import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import prisma from './prisma'
import { fragmentReplacements, resolvers } from './resolvers/index'

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    context(request) {
        return {
            db,
            pubsub,
            prisma,
            request
        }
    },
    fragmentReplacements
})

server.start(() => {
    console.log('The server is up on:')
    console.log("http://localhost:4000/");
})