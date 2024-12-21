const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  input BookInput {
    title: String!
    author: String!
  }

  type Query {
    getBooks: [Book!]!
    getBook(id: ID!): Book
  }

  type Mutation {
    addBook(input: BookInput!): Book
    updateBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): String
  }
`);
