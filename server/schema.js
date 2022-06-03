const { buildSchema } = require("graphql");

const schema = buildSchema(`
   type  User{
       id:ID
       username: String
       ade:Int
        posts:[Post]
     },
type Post{
id:ID
content:String
title: String
}
input userInput{
    id:ID
    username: String!
    age: Int
    post: [PostInput]
}
input PostInput{
    id:ID
    title: String!
    content: String!
}

type Query{
    getAllUsers: [User]
    getUser : (id:ID) :user
}
`);

module.exports = schema;
