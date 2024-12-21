const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bookSchema = require('./schemas/bookSchema');
const bookResolvers = require('./resolvers/bookResolvers');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: bookSchema,
    rootValue: bookResolvers,
    graphiql: true, // Interface gráfica para testar o GraphQL
  })
);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
