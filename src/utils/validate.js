export const checkValidData = (email , password ) => {

const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordVlid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
// const isNameValid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordVlid) return "Password is incorrect";
// if (!isNameValid) return "Invalid name";

return null;
};