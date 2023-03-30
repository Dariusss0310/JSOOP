import { User } from "./modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
user.mananca(2000)
console.log(user);
user.nume = 'Dan';
// user.myage=-23;
user.varsta=-25
// user.email = 'dan@dan.ro'
console.log(user);