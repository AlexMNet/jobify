import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong. Try again later',
  };

  // if (err.name === 'ValidationError') {
  //   const errors = err.errors;
  //   const errMessages = [];
  //   for (const key in errors) {
  //     errMessages.push(`${errors[key].message}`);
  //     console.log(errMessages);
  //   }
  //   res.status(StatusCodes.BAD_REQUEST).json({ msg: errMessages });
  // }

  if (err.code === 11000) {
    const keys = Object.keys(err.keyValue)
      .map((value) => value)
      .join(', ');

    const numErrors = Object.keys(err.keyValue).length;

    defaultError.msg = `${keys} ${
      numErrors > 1 ? 'fields must be unique' : 'field must be unique'
    }.`;
  }

  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((err) => err.message)
      .join(', ');
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
