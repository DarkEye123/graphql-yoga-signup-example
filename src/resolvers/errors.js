/* eslint-disable no-proto */
class AppErr extends Error {
  constructor(msg = 'oopsie ... not implemented (╯°□°)╯') {
    super(msg);
    // this is useful for Jest and error subclassing https://github.com/facebook/jest/issues/5416#issuecomment-456414004
    this.constructor = AppErr;
    this.__proto__ = AppErr.prototype;
  }
}

export default AppErr;
