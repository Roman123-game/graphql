const express = require("express");
const {graphqlHTTP} =require("express-graphql");
const cors = require('cors');
const app = express();
const schema = require("./schema")
const rootValue =require("./")
const users =[{id:1,username: "Vasya", age:25 }];

app.use(cors());

const root = {
    getAllUsers:()=>{
return users
    },
    getUser:({id})=>{
return users.find(user=>user.id==id)
    }
}

app.use("/graphql",graphqlHTTP({
    graphiql:true,
    schema: schema,
    rootValue: root,
}))


const PORT = 5000;
app.listen(PORT,()=>console.log(`server runnning on `,{PORT}));