import ScoreModel, { Score } from '../models/score';

const resolvers = {
  User: {
    scores: async (user: any) => {
      return await ScoreModel.find({ userId: user._id });
    }
  },
  Mutation: {
    addScore: async (_: any, args: any) => {
      return await ScoreModel.create(args);
    },
    updateScore: async (_: any, score: Score) => {
      return await ScoreModel.findByIdAndUpdate(
        score._id,
        { subjectId: score.subjectId, value: score.value },
        { new: true }
      );
    },
    deleteScore: async (_: any, { _id }: { _id: string }) => {
      return await ScoreModel.findByIdAndDelete(_id);
    }
  }
};

export default resolvers;
