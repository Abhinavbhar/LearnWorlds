import mongoose from "mongoose";

// Connect to MongoDB
const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://abhinavbhar2004:bhar2004@cluster0.xex9w2e.mongodb.net/?retryWrites=true&w=majority');
        console.log("connected to db")
    } catch (error) {
        throw new Error(501,"could not connect to database ")
    }

}

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    fullname:String,
    description:String,
    token:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    token:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const admins = mongoose.model('Admin', AdminSchema);
const users = mongoose.model('User', UserSchema);
const courses = mongoose.model('Course', CourseSchema);

export {admins,users,courses,connectDb}






