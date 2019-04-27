export default function validate(values){
  const validateEmail = (email) => {
    var checkUp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return checkUp.test(email);
  } 
  const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
  const errors = {}

  errors.name = !values.name
    ? 'Name is required'
    : undefined;
  errors.surname = !values.surname
    ? 'Surname is required'
    : undefined;
  errors.username = !values.username
    ? 'Username is required'
    : values.username.length < 8
    ? 'Minimum of 8 characters'
    : undefined;
  errors.email = !values.email
    ? 'E-mail is required'
    : !validateEmail(values.email)
    ? 'E-mail format is invalid'
    : undefined;
  errors.password = !values.password
    ? 'Password is required'
    : !checkPassword.test(values.password)
    ? 'Must contains one digit from 0-9 \nMust contains one lowercase characters \nMust contains one uppercase characters'
    : undefined;
  errors.repassword = !values.repassword 
  ? 'Please enter re-password'
  : !(values.password === values.repassword)
  ? 'Password do not match'
  : undefined;
  return errors
}