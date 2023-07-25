const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

//mongodb://localhost:27017/test?retryWrites=true&w=majority
mongoose.connect('mongodb://0.0.0.0:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   }).then(() => {
    console.log('connected to database');
   });

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on PORT 4000!')
})