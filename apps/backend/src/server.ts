import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import sinRoutes from './routes/sinRoutes';

// Load environment variables
config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sin', sinRoutes);

export default app;
