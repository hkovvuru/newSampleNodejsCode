import mongoose from 'mongoose';

const uri = "mongodb://localhost/sampleDB";

mongoose.connect(uri, (err,data) => {
    console.log('Connected to sampleDB datebase');
});

export default mongoose;

