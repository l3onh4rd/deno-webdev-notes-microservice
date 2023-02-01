import { t } from "../deps.ts";
import {
  validatePassword,
  validateUsername,
} from "../utils/login/loginValidation.ts";

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("Username");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("123Username123");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("User123name");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("0123456789");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("abcdefghijklmn");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("opqrstuvwxyz");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (too short)", (): void => {
  const actual: boolean = validateUsername("Usernam");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (too long)", (): void => {
  const actual: boolean = validateUsername("UsernameUsernameUsernameUsernam");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return true for valid username (exactly 30 characters)", (): void => {
  const actual: boolean = validateUsername("UsernameUsernameUsernameUserna");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (ä)", (): void => {
  const actual: boolean = validateUsername("Usernameä");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (ö)", (): void => {
  const actual: boolean = validateUsername("Usernameö");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (ü)", (): void => {
  const actual: boolean = validateUsername("Usernameü");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (Ä)", (): void => {
  const actual: boolean = validateUsername("UsernameÄ");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (Ö)", (): void => {
  const actual: boolean = validateUsername("UsernameÖ");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (Ü)", (): void => {
  const actual: boolean = validateUsername("UsernameÜ");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (!)", (): void => {
  const actual: boolean = validateUsername("!Username!");
  t.assertEquals(actual, false);
});

Deno.test('test usernameValidation utils function, should return false for invalid username (")', (): void => {
  const actual: boolean = validateUsername('Username"');
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (§)", (): void => {
  const actual: boolean = validateUsername("User§name");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ($)", (): void => {
  const actual: boolean = validateUsername("$Username");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (%)", (): void => {
  const actual: boolean = validateUsername("Username%");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (&)", (): void => {
  const actual: boolean = validateUsername("Usern&ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (/)", (): void => {
  const actual: boolean = validateUsername("/Username");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ( )", (): void => {
  const actual: boolean = validateUsername("Usern(ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ) )", (): void => {
  const actual: boolean = validateUsername("Userna)me");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( = )", (): void => {
  const actual: boolean = validateUsername("User=name");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ? )", (): void => {
  const actual: boolean = validateUsername("User?name");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( { )", (): void => {
  const actual: boolean = validateUsername("Us{ername");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( } )", (): void => {
  const actual: boolean = validateUsername("Usern}ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( [ )", (): void => {
  const actual: boolean = validateUsername("Username[");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ] )", (): void => {
  const actual: boolean = validateUsername("Us]ername");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( , )", (): void => {
  const actual: boolean = validateUsername("U,sername");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ; )", (): void => {
  const actual: boolean = validateUsername("Userna;me");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( . )", (): void => {
  const actual: boolean = validateUsername("Usern.ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( : )", (): void => {
  const actual: boolean = validateUsername(":Username");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( - )", (): void => {
  const actual: boolean = validateUsername("Usern-ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( * )", (): void => {
  const actual: boolean = validateUsername("Use*rname");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ~ )", (): void => {
  const actual: boolean = validateUsername("Userna~me");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( # )", (): void => {
  const actual: boolean = validateUsername("Use#rname");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ' )", (): void => {
  const actual: boolean = validateUsername("Usern'ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ` )", (): void => {
  const actual: boolean = validateUsername("Use`rname");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ´ )", (): void => {
  const actual: boolean = validateUsername("Usern´ame");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( + )", (): void => {
  const actual: boolean = validateUsername("Userna+me");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( < )", (): void => {
  const actual: boolean = validateUsername("U<sername");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( > )", (): void => {
  const actual: boolean = validateUsername("Use>rname");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( | )", (): void => {
  const actual: boolean = validateUsername("Usernam|e");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ^ )", (): void => {
  const actual: boolean = validateUsername("User^name");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ° )", (): void => {
  const actual: boolean = validateUsername("Username°");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( fdsa;§fasdas$%%) )", (): void => {
  const actual: boolean = validateUsername("fdsa;§fasdas$%%)");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for valid username ( ElProfessor )", (): void => {
  const actual: boolean = validateUsername("ElProfessor");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ;:_'*?=)(/&%$§! )", (): void => {
  const actual: boolean = validateUsername(";:_'*?=)(/&%$§!");
  t.assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return true for valid username ( 123456789 )", (): void => {
  const actual: boolean = validateUsername("123456789");
  t.assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( abcdefghijklmNOPQRSTUVWXYZ )", (): void => {
  const actual: boolean = validateUsername("abcdefghijklmNOPQRSTUVWXYZ");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("Password1234");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("123Password§name123");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("User1234name");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("01234567pass89");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("abcdefgh5478(!:ijklmn");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("12gfjliuzwqe587");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (too short)", (): void => {
  const actual: boolean = validatePassword("password123");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (too long)", (): void => {
  const actual: boolean = validatePassword(
    'Username123456789Username12345!"§%&/(6789Username123456789Userna123456',
  );
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return true for valid password (exactly 64 characters)", (): void => {
  const actual: boolean = validatePassword(
    'Username123456789Username12345!"§%&/(6789Username123456789Userna',
  );
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (ä)", (): void => {
  const actual: boolean = validatePassword("6329874Usernameädadaw");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (ö)", (): void => {
  const actual: boolean = validatePassword("dw3127987Usernameö4913");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (ü)", (): void => {
  const actual: boolean = validatePassword("Udadw2456645sernameü");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (Ä)", (): void => {
  const actual: boolean = validatePassword("UsernameÄ");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (Ö)", (): void => {
  const actual: boolean = validatePassword("zhnrfvUsernameÖ147");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (Ü)", (): void => {
  const actual: boolean = validatePassword("xswqayUsernameÜ1342");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for valid password (!)", (): void => {
  const actual: boolean = validatePassword("!User258vfrmjzname!");
  t.assertEquals(actual, true);
});

Deno.test('test passwordValidation utils function, should return false for valid password (")', (): void => {
  const actual: boolean = validatePassword('1568468dawwrgUsername"');
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (§)", (): void => {
  const actual: boolean = validatePassword("U14733969dasdaser§namelkjh");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ($)", (): void => {
  const actual: boolean = validatePassword("$Userna12444daseq231me");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (%)", (): void => {
  const actual: boolean = validatePassword("User148passwe5498746name%");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (&)", (): void => {
  const actual: boolean = validatePassword("U124598sern&amepworda");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (/)", (): void => {
  const actual: boolean = validatePassword("547989/Usernamewordpass");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ( )", (): void => {
  const actual: boolean = validatePassword("Upoiuztsern(ame6478652w");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ) )", (): void => {
  const actual: boolean = validatePassword("da14passUserna)meword987");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( = )", (): void => {
  const actual: boolean = validatePassword("256cyxUser=nameword");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ? )", (): void => {
  const actual: boolean = validatePassword("365daUser?name54734");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( { )", (): void => {
  const actual: boolean = validatePassword("1254dasUs{ernamezrt987");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( } )", (): void => {
  const actual: boolean = validatePassword("pa12345Usern}wordame");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( [ )", (): void => {
  const actual: boolean = validatePassword("125dasUsername[987");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ] )", (): void => {
  const actual: boolean = validatePassword("word12Us]ernamepass");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( , )", (): void => {
  const actual: boolean = validatePassword("1234passU,sernameklkh");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ; )", (): void => {
  const actual: boolean = validatePassword("pass1234Userna;meword");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( . )", (): void => {
  const actual: boolean = validatePassword("passUsern.ameword");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( : )", (): void => {
  const actual: boolean = validatePassword(":Username123478");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( - )", (): void => {
  const actual: boolean = validatePassword("468489Usern-ameword4668");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( * )", (): void => {
  const actual: boolean = validatePassword("pass6543Use*rname164869");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ~ )", (): void => {
  const actual: boolean = validatePassword("pojmhj1358Userna~me1234");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( # )", (): void => {
  const actual: boolean = validatePassword("7654pas34565Use#rname321903pasw");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ' )", (): void => {
  const actual: boolean = validatePassword("Usern'ame");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ` )", (): void => {
  const actual: boolean = validatePassword("0987passUse`rnameword");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ´ )", (): void => {
  const actual: boolean = validatePassword("pass1234Usern´ameword");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( + )", (): void => {
  const actual: boolean = validatePassword("Userna+mepassword");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( < )", (): void => {
  const actual: boolean = validatePassword("U<password1234");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( > )", (): void => {
  const actual: boolean = validatePassword("passwor>dnameword3456");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( | )", (): void => {
  const actual: boolean = validatePassword("123passswo|rdword");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ^ )", (): void => {
  const actual: boolean = validatePassword("Passwor^d12345");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ° )", (): void => {
  const actual: boolean = validatePassword("Password°1234567");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( fdsa;§fasd^as$%%) )", (): void => {
  const actual: boolean = validatePassword("fdsa;§fasd^as$%%)");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for valid pasword ( 1234pwA-:poiu567 )", (): void => {
  const actual: boolean = validatePassword("1234pwA-:poiu567");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid username ( ;:_'*?=)(/&%$§!!!! )", (): void => {
  const actual: boolean = validatePassword(";:_'*?=)(/&%$§!!!!");
  t.assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return true for valid username ( 1234567891234 )", (): void => {
  const actual: boolean = validatePassword("1234567891234");
  t.assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( abcdefghijklmN$OPQRSTUVW_XYZ )", (): void => {
  const actual: boolean = validatePassword("abcdefghijklmN$OPQRSTUVW_XYZ");
  t.assertEquals(actual, false);
});
