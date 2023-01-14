import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

export const bookingType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Booking',
  fields: () => ({
    _id: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    idChamber: { type: GraphQLString },
    countAdults: { type: GraphQLInt },
    idInvoice: { type: GraphQLString },
    supplements: { type: new GraphQLList(GraphQLString) },
    idUser: { type: GraphQLString },
    emailCustomer: { type: GraphQLString },
    nameCustomer: { type: GraphQLString },
    surnameCustomer: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    demands: { type: GraphQLString },
  }),
});
