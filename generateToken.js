const jwt = require('jsonwebtoken');

const API_KEY = "e1e570cf-5571-4ff5-a0e4-d31a7b031bf6";
const SECRET = "e3e8b6152098ea63a527e3313e46005daf2a4d9d8a47a7a6278f88c2a3795a0f";

const options = { 
 expiresIn: '120m', 
 algorithm: 'HS256' 
};
const payload = {
 apikey: API_KEY,
 permissions: [`allow_join`], // `ask_join` || `allow_mod` 
//  version: 2, //OPTIONAL
//  roomId: `2kyv-gzay-64pg`, //OPTIONAL
//  participantId: `lxvdplwt`, //OPTIONAL 
//  roles: ['crawler', 'rtc'], //OPTIONAL
};

const token = jwt.sign(payload, SECRET, options);
console.log(token);