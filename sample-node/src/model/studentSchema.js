import mongoose from "../config/dbConfig";
import { Schema } from "mongoose";

const studentSchema = new Schema({
    stuId: Number,
    name: String,
    college: String,
    location: String,
});

const student = mongoose.model('student', studentSchema);

export default student;