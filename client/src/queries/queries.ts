import { gql } from '@apollo/client';

const getChambersQuery = gql`
  {
    chambers {
      _id
      number
      typology
      description
      pricing
      pictures
    }
  }
`;

const addBookingMutation = gql`
  mutation AddBooking(
    $startDate: String!
    $endDate: String!
    $idChamber: String!
    $countAdults: Int!
    $idInvoice: String
    $supplements: [String]
    $idUser: String
    $emailCustomer: String!
    $nameCustomer: String
    $surnameCustomer: String
    $phoneNumber: String
    $demands: String
  ) {
    addBooking(
      startDate: $startDate
      endDate: $endDate
      idChamber: $idChamber
      countAdults: $countAdults
      idInvoice: $idInvoice
      supplements: $supplements
      idUser: $idUser
      emailCustomer: $emailCustomer
      nameCustomer: $nameCustomer
      surnameCustomer: $surnameCustomer
      phoneNumber: $phoneNumber
      demands: $demands
    ) {
      startDate
      endDate
      idChamber
      countAdults
      idInvoice
      supplements
      idUser
      emailCustomer
      nameCustomer
      surnameCustomer
      phoneNumber
      demands
    }
  }
`;

export { getChambersQuery, addBookingMutation };
