const express = require("express");
const {graphqlHTTP} =("express-graphql");
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;
app.listen(PORT,()=>console.log(`server runnning on `,{PORT}));