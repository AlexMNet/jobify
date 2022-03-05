import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please fill out all fields');
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BadRequestError('Error: Email already in use');
  }

  const user = await User.create({ name, email, password });

  const jwtToken = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    jwtToken,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //Checkout if email and password exist
  if (!email || !password) {
    throw new BadRequestError('Please provided all values');
  }

  //Find user by email
  const user = await User.findOne({ email }).select('+password');

  //Send error if there is no user
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  //Check if password is correct
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  //create token
  const token = user.createJWT();

  //Take user password out of user object so it does not show in the response
  user.password = undefined;

  //Send response with token
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
const updateUser = async (req, res) => {
  res.send('updateUser user');
};

export { register, login, updateUser };
