import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

export const chamberType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Chamber',
  fields: () => ({
    _id: { type: GraphQLString },
    number: { type: GraphQLString },
    typology: { type: GraphQLString },
    description: { type: GraphQLString },
    pricing: { type: GraphQLFloat },
    pictures: { type: new GraphQLList(GraphQLString) },
  }),
});
