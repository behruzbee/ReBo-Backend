import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      file?: {
        path: string;
        mimetype: string;
        filename: string;
        originalname: string;
        size: number;
      };
    }
  }
}