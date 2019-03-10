import AppErr from '../../../errors';

async function signUp(parent, { email, password, confirmPassword }, ctx, info) {
  return new AppErr();
}

export { signUp };
