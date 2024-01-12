import jwt from 'jsonwebtoken';
import { admins } from '../db/index.js';

const jwtSecretKey = 'jhschjebfkjeh';

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized. Token missing.' });
    }

    jwt.verify(token, jwtSecretKey, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
      }

      const username = decoded.username;
      const admin = await admins.findOne({ username });

      if (admin) {
        
        next();
      } else {
        
        return res.status(403).json({ message: 'Access denied. Please log in.' });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export { adminMiddleware };
