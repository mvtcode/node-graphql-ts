import UserModel, { User } from '../models/user';

const resolvers = {
  Query: {
    users: async () => {
      return await UserModel.find();
    },
    user: async (_: any, { _id }: { _id: string }) => {
      return await UserModel.findById(_id);
    }
  },
  Mutation: {
    addUser: async (_: any, args: User) => {
      return await UserModel.create(args);
    },
    updateUser: async (_: any, user: User) => {
      return await UserModel.findByIdAndUpdate(user._id, user, { new: true });
    },
    deleteUser: async (_: any, { _id }: { _id: string }) => {
      return await UserModel.findByIdAndDelete(_id);
    }
  }
};

export default resolvers;
