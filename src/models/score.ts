import mongoose, { Schema, Document } from 'mongoose';

export interface Score extends Document {
  userId: string;
  subjectId: string;
  value: number;
}

const ScoreSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subjectId: { type: String, required: true },
  value: { type: Number, required: true }
});

export default mongoose.model<Score>('Score', ScoreSchema);
