const regexp_username = new RegExp("[A-Za-z0-9]+");
const regexp2 = new RegExp('[äöüÄÖÜß!"§$%&/()=?{}\\[\\],;.:-]');
const underscore_regexp = new RegExp("_");
const star_regexp = new RegExp("\\*");
const hashtag_regexp = new RegExp("#");
const tilde_regexp = new RegExp("~");
const highcomma_regexp = new RegExp("'");
const accent_gue_regexp = new RegExp("´");
const accent_grave_regexp = new RegExp("`");
const plus_regexp = new RegExp("\\+");
const lower_than_regexp = new RegExp("\\<");
const greater_than_regexp = new RegExp("\\>");
const pipe_regexp = new RegExp("\\|");
const caret_regexp = new RegExp("\\^");
const degree_regexp = new RegExp("\\°");
const minLengthUsername = 8;
const maxLengthUsername = 30;
// password regexp
const minLengthPassword = 12;
const maxLengthPassword = 64;
const regexp_password = new RegExp('[A-Za-z0-9!"§%&/()=?;:-]+');
const regexp_umlaute = new RegExp("[äöüÄÖÜß.,{}\\[\\]]");
const dollar_regexp = new RegExp("\\$");

function validateUsername(username: string): boolean {
  if (typeof username !== "string") {
    return false;
  }
  return performRegexpUsername(username);
}

function validatePassword(password: string): boolean {
  if (typeof password !== "string") {
    return false;
  }
  return performRegexpPassword(password);
}

function performRegexpUsername(username: string): boolean {
  return regexp_password.test(username) &&
    username.length >= minLengthUsername &&
    username.length <= maxLengthUsername &&
    !regexp2.test(username) &&
    !underscore_regexp.test(username) &&
    !star_regexp.test(username) &&
    !hashtag_regexp.test(username) &&
    !tilde_regexp.test(username) &&
    !highcomma_regexp.test(username) &&
    !accent_gue_regexp.test(username) &&
    !accent_grave_regexp.test(username) &&
    !plus_regexp.test(username) &&
    !lower_than_regexp.test(username) &&
    !greater_than_regexp.test(username) &&
    !pipe_regexp.test(username) &&
    !caret_regexp.test(username) &&
    !degree_regexp.test(username);
}

function performRegexpPassword(password: string): boolean {
  return regexp_username.test(password) &&
    password.length >= minLengthPassword &&
    password.length <= maxLengthPassword &&
    !regexp_umlaute.test(password) &&
    !underscore_regexp.test(password) &&
    !star_regexp.test(password) &&
    !hashtag_regexp.test(password) &&
    !tilde_regexp.test(password) &&
    !highcomma_regexp.test(password) &&
    !accent_gue_regexp.test(password) &&
    !accent_grave_regexp.test(password) &&
    !plus_regexp.test(password) &&
    !lower_than_regexp.test(password) &&
    !greater_than_regexp.test(password) &&
    !pipe_regexp.test(password) &&
    !caret_regexp.test(password) &&
    !degree_regexp.test(password) &&
    !dollar_regexp.test(password);
}

export { validatePassword, validateUsername };
