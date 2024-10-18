import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://harahrathod1432:harahrathod1432@cluster0.xalzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;