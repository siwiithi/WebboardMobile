export default function validate(values){
  const validateEmail = (email) => {
    var checkUp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return checkUp.test(email);
  } 
  const errors = {}

  errors.author = !values.author
  ? 'Author is required'
  : undefined;
  errors.title = !values.title
    ? 'Title is required'
    : undefined;
  errors.email = !values.email
    ? 'E-mail is required'
    : !validateEmail(values.email)
    ? 'E-mail format is invalid'
    : undefined;
  errors.detail = !values.detail
    ? 'Detail is required'
    : undefined;
  return errors
}