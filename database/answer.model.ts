import { model, models, Schema, Types } from "mongoose";

export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  upvotes?: number;
  downvotes?: number;
  content: string;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
