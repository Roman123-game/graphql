const express = require("express");
const {graphqlHTTP} =("express-graphql");
const cors = require('cors');
const app = express();
const PORT = 5000;
app.listen(PORT,()=>console.log(`server runnning on `,{PORT}));