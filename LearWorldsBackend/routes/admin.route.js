import { Router } from 'express';
import { admins } from '../db/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { adminMiddleware } from '../middlewares/login.admin.middleware.js';
import addCourses from '../controllers/admin.uploadCourse.js';

const jwtSecretKey = 'jhschjebfkjeh';
const router = Router();

router.post('/signup', async (req, res) => {
  const { username, password, description, fullname } = req.body;

  try {
    const existingAdmin = await admins.findOne({ username });
    if (existingAdmin) {
      return res.status(409).json({
        message: 'User already exists. Please proceed to the login page.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const token = jwt.sign({ username }, jwtSecretKey, { expiresIn: '1d' });
    const newAdmin = new admins({
      username,
      password: hashedPassword, // Corrected property name to 'password'
      description,
      fullname,
      token:token
    });

    await newAdmin.save();

    
    
    return res.status(200).json({
      message: 'Admin added successfully',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Database error. Admin could not be added.',
    });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const existingAdmin = await admins.findOne({ username });

  if (!existingAdmin) {
    return res.send({
      message: 'User not found. Please sign up or retry.',
    });
  } else {
    await bcrypt.compare(password, existingAdmin.password, async(err, result) => {
      if (err) {
        return res.send('Error with bcrypt');
      }
      if (result) {
        const token = jwt.sign({ username }, jwtSecretKey, { expiresIn: '1d' });
        existingAdmin.token=token;
        await existingAdmin.save()

        return res.send({
          
          message: 'Welcome! Login successful',
          token: token, // Corrected property name to 'token'
          fullname: existingAdmin.fullname,
        });
      } else {
        return res.send({
          message: 'Password is incorrect',
        });
      }
    });
  }
});
router.use(adminMiddleware)
router.get('/dashboard', (req, res) => {
  res.send('Welcome, this is a dashboard!');
});
router.post('/makecourse',addCourses)

export default router;