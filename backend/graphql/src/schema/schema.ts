import axios from 'axios';
import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { bookingType } from './booking-service/bookingType';
import { userType } from './users-service/userType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
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
    bookings: {
      type: new GraphQLList(bookingType),
      async resolve(parent, args) {
        const bookings = await axios.get(
          (process.env.API_BOOKINGS_URL || 'http://localhost:4012') + '/api/bookings'
        );
        return bookings.data;
      },
    },
    users: {
      type: new GraphQLList(userType),
      async resolve(parent, args) {
        const users = await axios.get(
          (process.env.API_USERS_URL || 'http://localhost:4010') + '/api/users'
        );
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
        const user = await axios.post(
          (process.env.API_USERS_URL || 'http://localhost:4010') + '/api/user/create',
          {
            username: args.name,
            uid: args.uid,
            email: args.email,
            profilePicture: args.profilePicture,
          }
        );
        return user.data;
      },
    },
    addBooking: {
      type: bookingType,
      args: {
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        idChamber: { type: GraphQLString },
        countAdults: { type: GraphQLInt },
        countChildren: { type: GraphQLInt },
        idInvoice: { type: GraphQLString },
        supplements: { type: new GraphQLList(GraphQLString) },
        idUser: { type: GraphQLString },
        emailCustomer: { type: GraphQLString },
        nameCustomer: { type: GraphQLString },
        surnameCustomer: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        demands: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const booking = await axios.post(
          (process.env.API_BOOKINGS_URL || 'http://localhost:4012') + '/api/booking/create',
          {
            content: args.content,
            images: args.images,
            likes: args.likes,
            shares: args.shares,
            comments: args.comments,
            createdAt: args.createdAt,
            userId: args.userId,
          }
        );
        return booking.data;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
