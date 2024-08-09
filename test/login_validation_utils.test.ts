import { assertEquals } from "../src/deps.ts";
import { validatePassword, validateUsername } from "../src/utils/index.ts";

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("Username");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("123Username123");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("User123name");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("0123456789");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("abcdefghijklmn");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return true for valid username", (): void => {
  const actual: boolean = validateUsername("opqrstuvwxyz");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (too short)", (): void => {
  const actual: boolean = validateUsername("Usernam");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (too long)", (): void => {
  const actual: boolean = validateUsername("UsernameUsernameUsernameUsernam");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return true for valid username (exactly 30 characters)", (): void => {
  const actual: boolean = validateUsername("UsernameUsernameUsernameUserna");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (ä)", (): void => {
  const actual: boolean = validateUsername("Usernameä");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (ö)", (): void => {
  const actual: boolean = validateUsername("Usernameö");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (ü)", (): void => {
  const actual: boolean = validateUsername("Usernameü");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (Ä)", (): void => {
  const actual: boolean = validateUsername("UsernameÄ");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (Ö)", (): void => {
  const actual: boolean = validateUsername("UsernameÖ");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (Ü)", (): void => {
  const actual: boolean = validateUsername("UsernameÜ");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (!)", (): void => {
  const actual: boolean = validateUsername("!Username!");
  assertEquals(actual, false);
});

Deno.test('test usernameValidation utils function, should return false for invalid username (")', (): void => {
  const actual: boolean = validateUsername('Username"');
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (§)", (): void => {
  const actual: boolean = validateUsername("User§name");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ($)", (): void => {
  const actual: boolean = validateUsername("$Username");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (%)", (): void => {
  const actual: boolean = validateUsername("Username%");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (&)", (): void => {
  const actual: boolean = validateUsername("Usern&ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username (/)", (): void => {
  const actual: boolean = validateUsername("/Username");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ( )", (): void => {
  const actual: boolean = validateUsername("Usern(ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ) )", (): void => {
  const actual: boolean = validateUsername("Userna)me");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( = )", (): void => {
  const actual: boolean = validateUsername("User=name");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ? )", (): void => {
  const actual: boolean = validateUsername("User?name");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( { )", (): void => {
  const actual: boolean = validateUsername("Us{ername");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( } )", (): void => {
  const actual: boolean = validateUsername("Usern}ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( [ )", (): void => {
  const actual: boolean = validateUsername("Username[");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ] )", (): void => {
  const actual: boolean = validateUsername("Us]ername");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( , )", (): void => {
  const actual: boolean = validateUsername("U,sername");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ; )", (): void => {
  const actual: boolean = validateUsername("Userna;me");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( . )", (): void => {
  const actual: boolean = validateUsername("Usern.ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( : )", (): void => {
  const actual: boolean = validateUsername(":Username");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( - )", (): void => {
  const actual: boolean = validateUsername("Usern-ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( * )", (): void => {
  const actual: boolean = validateUsername("Use*rname");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ~ )", (): void => {
  const actual: boolean = validateUsername("Userna~me");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( # )", (): void => {
  const actual: boolean = validateUsername("Use#rname");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ' )", (): void => {
  const actual: boolean = validateUsername("Usern'ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ` )", (): void => {
  const actual: boolean = validateUsername("Use`rname");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ´ )", (): void => {
  const actual: boolean = validateUsername("Usern´ame");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( + )", (): void => {
  const actual: boolean = validateUsername("Userna+me");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( < )", (): void => {
  const actual: boolean = validateUsername("U<sername");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( > )", (): void => {
  const actual: boolean = validateUsername("Use>rname");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( | )", (): void => {
  const actual: boolean = validateUsername("Usernam|e");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ^ )", (): void => {
  const actual: boolean = validateUsername("User^name");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ° )", (): void => {
  const actual: boolean = validateUsername("Username°");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( fdsa;§fasdas$%%) )", (): void => {
  const actual: boolean = validateUsername("fdsa;§fasdas$%%)");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return false for valid username ( ElProfessor )", (): void => {
  const actual: boolean = validateUsername("ElProfessor");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( ;:_'*?=)(/&%$§! )", (): void => {
  const actual: boolean = validateUsername(";:_'*?=)(/&%$§!");
  assertEquals(actual, false);
});

Deno.test("test usernameValidation utils function, should return true for valid username ( 123456789 )", (): void => {
  const actual: boolean = validateUsername("123456789");
  assertEquals(actual, true);
});

Deno.test("test usernameValidation utils function, should return false for invalid username ( abcdefghijklmNOPQRSTUVWXYZ )", (): void => {
  const actual: boolean = validateUsername("abcdefghijklmNOPQRSTUVWXYZ");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("Password1234");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("123Password§name123");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("User1234name");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("01234567pass89");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("abcdefgh5478(!:ijklmn");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return true for valid password", (): void => {
  const actual: boolean = validatePassword("12gfjliuzwqe587");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (too short)", (): void => {
  const actual: boolean = validatePassword("password123");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (too long)", (): void => {
  const actual: boolean = validatePassword(
    'Username123456789Username12345!"§%&/(6789Username123456789Userna123456',
  );
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return true for valid password (exactly 64 characters)", (): void => {
  const actual: boolean = validatePassword(
    'Username123456789Username12345!"§%&/(6789Username123456789Userna',
  );
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (ä)", (): void => {
  const actual: boolean = validatePassword("6329874Usernameädadaw");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (ö)", (): void => {
  const actual: boolean = validatePassword("dw3127987Usernameö4913");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (ü)", (): void => {
  const actual: boolean = validatePassword("Udadw2456645sernameü");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (Ä)", (): void => {
  const actual: boolean = validatePassword("UsernameÄ");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (Ö)", (): void => {
  const actual: boolean = validatePassword("zhnrfvUsernameÖ147");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (Ü)", (): void => {
  const actual: boolean = validatePassword("xswqayUsernameÜ1342");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for valid password (!)", (): void => {
  const actual: boolean = validatePassword("!User258vfrmjzname!");
  assertEquals(actual, true);
});

Deno.test('test passwordValidation utils function, should return false for valid password (")', (): void => {
  const actual: boolean = validatePassword('1568468dawwrgUsername"');
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (§)", (): void => {
  const actual: boolean = validatePassword("U14733969dasdaser§namelkjh");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ($)", (): void => {
  const actual: boolean = validatePassword("$Userna12444daseq231me");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (%)", (): void => {
  const actual: boolean = validatePassword("User148passwe5498746name%");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (&)", (): void => {
  const actual: boolean = validatePassword("U124598sern&amepworda");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password (/)", (): void => {
  const actual: boolean = validatePassword("547989/Usernamewordpass");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ( )", (): void => {
  const actual: boolean = validatePassword("Upoiuztsern(ame6478652w");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ) )", (): void => {
  const actual: boolean = validatePassword("da14passUserna)meword987");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( = )", (): void => {
  const actual: boolean = validatePassword("256cyxUser=nameword");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ? )", (): void => {
  const actual: boolean = validatePassword("365daUser?name54734");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( { )", (): void => {
  const actual: boolean = validatePassword("1254dasUs{ernamezrt987");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( } )", (): void => {
  const actual: boolean = validatePassword("pa12345Usern}wordame");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( [ )", (): void => {
  const actual: boolean = validatePassword("125dasUsername[987");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ] )", (): void => {
  const actual: boolean = validatePassword("word12Us]ernamepass");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( , )", (): void => {
  const actual: boolean = validatePassword("1234passU,sernameklkh");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ; )", (): void => {
  const actual: boolean = validatePassword("pass1234Userna;meword");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( . )", (): void => {
  const actual: boolean = validatePassword("passUsern.ameword");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( : )", (): void => {
  const actual: boolean = validatePassword(":Username123478");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( - )", (): void => {
  const actual: boolean = validatePassword("468489Usern-ameword4668");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( * )", (): void => {
  const actual: boolean = validatePassword("pass6543Use*rname164869");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ~ )", (): void => {
  const actual: boolean = validatePassword("pojmhj1358Userna~me1234");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( # )", (): void => {
  const actual: boolean = validatePassword("7654pas34565Use#rname321903pasw");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ' )", (): void => {
  const actual: boolean = validatePassword("Usern'ame");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ` )", (): void => {
  const actual: boolean = validatePassword("0987passUse`rnameword");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ´ )", (): void => {
  const actual: boolean = validatePassword("pass1234Usern´ameword");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( + )", (): void => {
  const actual: boolean = validatePassword("Userna+mepassword");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( < )", (): void => {
  const actual: boolean = validatePassword("U<password1234");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( > )", (): void => {
  const actual: boolean = validatePassword("passwor>dnameword3456");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( | )", (): void => {
  const actual: boolean = validatePassword("123passswo|rdword");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ^ )", (): void => {
  const actual: boolean = validatePassword("Passwor^d12345");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( ° )", (): void => {
  const actual: boolean = validatePassword("Password°1234567");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( fdsa;§fasd^as$%%) )", (): void => {
  const actual: boolean = validatePassword("fdsa;§fasd^as$%%)");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return false for valid pasword ( 1234pwA-:poiu567 )", (): void => {
  const actual: boolean = validatePassword("1234pwA-:poiu567");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid username ( ;:_'*?=)(/&%$§!!!! )", (): void => {
  const actual: boolean = validatePassword(";:_'*?=)(/&%$§!!!!");
  assertEquals(actual, false);
});

Deno.test("test passwordValidation utils function, should return true for valid username ( 1234567891234 )", (): void => {
  const actual: boolean = validatePassword("1234567891234");
  assertEquals(actual, true);
});

Deno.test("test passwordValidation utils function, should return false for invalid password ( abcdefghijklmN$OPQRSTUVW_XYZ )", (): void => {
  const actual: boolean = validatePassword("abcdefghijklmN$OPQRSTUVW_XYZ");
  assertEquals(actual, false);
});
