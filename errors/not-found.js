import APIError from './APIError.js';
import { StatusCodes } from 'http-status-codes';

class NotFoundError extends APIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
