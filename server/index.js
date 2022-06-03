const express = require("express");
const {graphqlHTTP} =("express-graphql")
const app = express();
const PORT = 5000;
app.listen(PORT,()=>console.log(`server runnning on `,{PORT}));