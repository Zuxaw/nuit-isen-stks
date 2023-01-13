import axios from 'axios';
import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { chamberType } from './chambers-service/chamberType';
import { userType } from './users-service/userType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: chamberType,
      args: { _id: { type: GraphQLString } },
      async resolve(parent, args) {
        const post = await axios.get(
          (process.env.API_POSTS_URL || 'http://localhost:4011') + '/api/chamber/?_id=' + args._id
        );
        return post.data;
      },
    },
    user: {
      type: userType,
      args: { _id: { type: GraphQLString } },
      async resolve(parent, args) {
        const user = await axios.get(
          (process.env.API_USERS_URL || 'http://localhost:4010') + '/api/user/?_id=' + args._id
        );
        return user.data;
      },
    },
    posts: {
      type: new GraphQLList(chamberType),
      async resolve(parent, args) {
        const posts = await axios.get((process.env.API_POSTS_URL || 'http://localhost:4011') + '/api/chambers');
        return posts.data;
      },
    },
    users: {
      type: new GraphQLList(userType),
      async resolve(parent, args) {
        const users = await axios.get((process.env.API_USERS_URL || 'http://localhost:4010') + '/api/users');
        return users.data;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: userType,
      args: {
        username: { type: GraphQLString },
        uid: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        profilePicture: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const user = await axios.post((process.env.API_USERS_URL || 'http://localhost:4010') + '/api/user/create', {
          username: args.name,
          uid: args.uid,
          email: args.email,
          profilePicture: args.profilePicture,
        });
        return user.data;
      },
    },
    addPost: {
      type: chamberType,
      args: {
        number: { type: GraphQLInt },
        typology: { type: GraphQLString },
        pricing: { type: GraphQLFloat },
        pictures: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        console.log(args.userId);
        const post = await axios.post((process.env.API_POSTS_URL || 'http://localhost:4011') + '/api/chamber/create', {
          number: args.number,
          typology: args.typology,
          pricing: args.pricing,
          pictures: args.pictures,
        });
        return post.data;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
