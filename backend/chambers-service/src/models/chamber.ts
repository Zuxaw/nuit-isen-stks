import mongoose from 'mongoose';

interface ChamberAttrs {
  number: number;
  typology: string;
  description?: string;
  pricing: number;
  pictures?: string[];
}

interface ChamberModel extends mongoose.Model<ChamberDoc> {
  build(attrs: ChamberAttrs): ChamberDoc;
}

interface ChamberDoc extends mongoose.Document {
  number: number;
  typology: string;
  description?: string;
  pricing: number;
  pictures?: string[];
}

const chamberSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      unique : true,
    },
    typology: {
      type: String,
      required: true,
      default: 'double',
    },
    description: String,
    pricing: {
      type: Number,
      required: true,
    },
    pictures: [String],
  },
  { versionKey: false }
);
chamberSchema.statics.build = (attrs: ChamberAttrs) => {
  return new Chamber(attrs);
};

const Chamber = mongoose.model<ChamberDoc, ChamberModel>('Chamber', chamberSchema);

export { Chamber };
