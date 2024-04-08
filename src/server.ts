import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import typeDefs from './schema';
import userResolver from './resolvers/userResolver';
import scoreResolver from './resolvers/scoreResolver';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  mongoose.set('debug', true);
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/graphql');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers: [userResolver, scoreResolver]
  });

  const port = parseInt(process.env.PORT || '3000');

  const { url } = await startStandaloneServer(server, {
    listen: { port }
  });
  console.log(`🚀 Server ready at ${url}`);
})();
