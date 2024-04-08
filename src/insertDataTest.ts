import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserModel, { User } from './models/user';
import ScoreModel from './models/score';

dotenv.config();
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/graphql');

    console.log('Connected to MongoDB');

    // Tạo 20 bản ghi người dùng ngẫu nhiên
    const testDataUsers: Partial<User>[] = [];
    for (let i = 0; i < 20; i++) {
      testDataUsers.push({
        name: `User ${i + 1}`,
        age: Math.floor(Math.random() * 50) + 18, // Tuổi từ 18 đến 67
        address: `Address ${i + 1}`,
        birthday: new Date(`1990-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`) // Ngày sinh từ 1/1/1990 đến 31/12/1990
      });
    }

    // Thêm dữ liệu vào bảng users
    const insertedUsers = await UserModel.insertMany(testDataUsers);
    console.log('Inserted 20 records into the users collection');

    // Tạo 20 bản ghi điểm số ngẫu nhiên
    const testDataScores = [];
    const userIds = insertedUsers.map((user) => user._id);
    const subjects = ['Math', 'Science', 'History', 'English', 'Programming'];
    for (let i = 0; i < 20; i++) {
      testDataScores.push({
        userId: userIds[Math.floor(Math.random() * userIds.length)],
        subjectId: subjects[Math.floor(Math.random() * subjects.length)],
        value: Math.floor(Math.random() * 100) // Điểm số từ 0 đến 100
      });
    }

    // Thêm dữ liệu vào bảng scores
    await ScoreModel.insertMany(testDataScores);
    console.log('Inserted 20 records into the scores collection');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    mongoose.disconnect();
  }
})();
