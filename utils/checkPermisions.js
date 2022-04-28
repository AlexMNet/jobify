import { UnauthenticatedError } from '../errors/index.js';

const checkPermisions = (requestUser, resourceUserId) => {
  console.log(requestUser.userId, resourceUserId.toString());
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnauthenticatedError('Not authoerized to access this route');
};

export default checkPermisions;
