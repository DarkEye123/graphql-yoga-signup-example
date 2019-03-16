import { NotImplemented } from '../../errors';

async function signUp(parent, { email, password, confirmPassword }, ctx, info) {
  return new NotImplemented();
}

export default signUp;
