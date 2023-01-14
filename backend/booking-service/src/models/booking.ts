import mongoose from 'mongoose';

interface BookingAttrs {
  startDate: Date;
  endDate: Date;
  idChamber: string;
  countAdults: number;
  countChildren: number;
  idInvoice?: string;
  supplements?: string[];
  idUser?: string;
  emailCustomer: string;
  nameCustomer?: string;
  surnameCustomer?: string;
  phoneNumber?: string;
  demands?: string;
}

interface BookingModel extends mongoose.Model<BookingDoc> {
  build(attrs: BookingAttrs): BookingDoc;
}

interface BookingDoc extends mongoose.Document {
  startDate: Date;
  endDate: Date;
  idChamber: string;
  countAdults: number;
  countChildren: number;
  idInvoice?: string;
  supplements?: string[];
  idUser?: string;
  emailCustomer: string;
  nameCustomer?: string;
  surnameCustomer?: string;
  phoneNumber?: string;
  demands?: string;
}

const BookingSchema = new mongoose.Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    idChamber: {
      type: String,
      required: true,
    },
    countAdults: {
      type: Number,
      required: true,
    },
    countChildren: {
      type: Number,
      required: true,
    },
    idInvoice: {
      type: String,
    },
    supplements: {
      type: [String],
    },
    idUser: {
      type: String,
    },
    emailCustomer: {
      type: String,
      required: true,
    },
    nameCustomer: {
      type: String,
    },
    surnameCustomer: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    demands: {
      type: String,
    },
  },
  { versionKey: false }
);
BookingSchema.statics.build = (attrs: BookingAttrs) => {
  return new Booking(attrs);
};

const Booking = mongoose.model<BookingDoc, BookingModel>('Booking', BookingSchema);

export { Booking };
