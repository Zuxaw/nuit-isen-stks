import axios from 'axios';
import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { postType } from '../posts-service/postType';

export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLString },
    uid: { type: GraphQLString },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    role: { type: GraphQLString },
  }),
});
