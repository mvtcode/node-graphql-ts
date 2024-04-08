import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  age: number;
  address: string;
  birthday: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  birthday: { type: Date, required: true }
});

export default mongoose.model<User>('User', UserSchema);
