import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'e63AMG2022',
    fragmentReplacements
})

export default prisma;

// const createPostForUser = async (authorId, data) => {
//     const userExist = await prisma.exists.User({id: authorId})

//     if(!userExist){
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ id }')
    
//     return post.author 
// }

// const updatePostForUser = async (postId, data) => {

//     const postExist = await prisma.exists.Post({id: postId})

//     if(!postExist){
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         data: {
//             ...data
//         },
//         where: {
//             id: postId
//         }
//     },'{ id author { id } }')
   
//     return post.author;
// }

// updatePostForUser("112",{
//     body: 'I mire eshte ky'
// }).then((user)=>{
//     console.log(user)
// }).catch(err => {console.log(err)})

// createPostForUser("cl8c40ixu00eo0998kxxdil4j", {
//     title: 'Great books to read',
//     body: 'The War of Art',
//     published: true
// }).then((user)=>{
//     console.log(user)
// })