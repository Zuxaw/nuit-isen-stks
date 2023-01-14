import axios from 'axios';
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { bookingType } from './booking-service/bookingType';
import { chamberType } from './chambers-service/chamberType';
import { userType } from './users-service/userType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    chamber: {
      type: chamberType,
      args: { _id: { type: GraphQLString } },
      async resolve(parent, args) {
        const chamber = await axios.get(
          (process.env.API_CHAMBERS_URL || 'http://localhost:4011') +
            '/api/chamber/?_id=' +
            args._id
        );
        return chamber.data;
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
    chambers: {
      type: new GraphQLList(chamberType),
      async resolve(parent, args) {
        const chambers = await axios.get(
          (process.env.API_CHAMBERS_URL || 'http://localhost:4011') + '/api/chambers'
        );
        return chambers.data;
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
        uid: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        surname: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLString },
        role: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const user = await axios.post(
          (process.env.API_USERS_URL || 'http://localhost:4010') + '/api/user/create',
          {
            uid: args.uid,
            name: args.name,
            surname: args.surname,
            email: args.email,
            phoneNumber: args.phoneNumber,
            role: args.role,
          }
        );
        return user.data;
      },
    },
    addChamber: {
      type: chamberType,
      args: {
        number: { type: GraphQLInt },
        typology: { type: GraphQLString },
        description: { type: GraphQLString },
        pricing: { type: GraphQLFloat },
        pictures: { type: new GraphQLList(GraphQLString) },
      },
      async resolve(parent, args) {
        console.log(args.userId);
        const chamber = await axios.post((process.env.API_CHAMBERS_URL || 'http://localhost:4011') + '/api/chamber/create', {
          number: args.number,
          typology: args.typology,
          description: args.description,
          pricing: args.pricing,
          pictures: args.pictures,
        });
        return chamber.data;
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
            startDate: args.startDate,
            endDate: args.endDate,
            idChamber: args.idChamber,
            countAdults: args.countAdults,
            countChildren: args.countChildren,
            idInvoice: args.idInvoice,
            supplements: args.supplements,
            idUser: args.idUser,
            emailCustomer: args.emailCustomer,
            nameCustomer: args.nameCustomer,
            surnameCustomer: args.surnameCustomer,
            phoneNumber: args.phoneNumber,
            demands: args.demands,
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
