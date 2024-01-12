import express from 'express';
import { Router } from 'express';
import adminRoute from './routes/admin.route.js';
import { connectDb } from './db/index.js';
import cors from 'cors';
const app = express();
const router = Router();
const PORT = 3000;
app.use(cors())
try {
  connectDb()
} catch (error) {
  console.log('cannot connect to database', error);
}
app.use(express.json());

// Apply adminMiddleware before any '/admin' routes


// Define the admin routes using the router instance
router.use('/admin', adminRoute);

// Mount the router middleware on the main app
app.use(router);

app.get('/', (req, res) => {
  res.send('this is a home page');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
