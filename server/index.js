const express = require("express");
const {graphqlHTTP} =require("express-graphql");
const cors = require('cors');
const app = express();
const schema = require("./schema")

app.use(cors());

app.use("/graphql",graphqlHTTP({
    graphiql:true,
    schema: schema,
}))
const PORT = 5000;
app.listen(PORT,()=>console.log(`server runnning on `,{PORT}));