const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')

// Hardcoded Data

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    mail: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
})

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    mail: { type: GraphQLString },
    age: { GraphQLInt },
  }),
})

// Root Query
const RootQuery = GraphQLObjectType({
  name: 'RootQueryType',
  customer: {
    type: CustomerType,
  },
})

module.exports = new GraphQLSchema({})
