import mongoose from 'mongoose';

interface UserAttrs {
  uid: string;
  name?: string;
  surname?: string;
  email: string;
  phoneNumber?: string;
  role: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  uid: string;
  name?: string;
  surname?: string;
  email: string;
  phoneNumber?: string;
  role: string;
}

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    surname: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: String,
    role: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
