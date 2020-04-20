module.exports = class CustomError extends Error {
  constructor(type, message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = type || 'HylariaLibError';
    this.message = message;
  }
};
