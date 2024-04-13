import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
  
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());

// Define middleware function to set Cache-Control headers
const setCacheControl = (req, res, next) => {
  // Check if the request URL is the root or other HTML pages except /dmca-validation.html
  if (req.originalUrl === '/' || req.originalUrl.endsWith('.html')) {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache HTML for 1 hour
  } else if (req.originalUrl !== '/dmca-validation.html') {
    res.setHeader('Cache-Control', 'public, max-age=604800'); // Cache other assets for 1 week
  }
  next();
};

// Apply middleware to set Cache-Control headers for relevant routes
app.use(setCacheControl);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/dmca-validation.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dmca-validation.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
