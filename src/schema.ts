const typeDefs = `#graphql
  type User {
    _id: ID!
    name: String!
    age: Int!
    address: String!
    birthday: String!
    scores: [Score!]!
  }

  type Score {
    _id: ID!
    userId: ID!
    subjectId: String!
    value: Int!
  }

  type Query {
    users: [User!]!
    user(_id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int!, address: String!, birthday: String!): User!
    updateUser(_id: ID!, name: String, age: Int, address: String, birthday: String): User!
    deleteUser(_id: ID!): User!
    addScore(userId: ID!, subjectId: String!, value: Int!): Score!
    updateScore(_id: ID!, subjectId: String, value: Int): Score!
    deleteScore(_id: ID!): Score!
  }
`;

export default typeDefs;
