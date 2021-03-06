module.exports = {
  validateEmail: (email) => /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,10})$/.test(email),
  validateMobile: (mobile) => /^\+[1-9]{1}[0-9]{3,14}$/g.test(mobile),
  validateName: (name) => !(!name || name.length < 3 || name.length > 20),
  validateDescription: (description) => description.split(" ").length < 1024,
  validateSubject: (subject) =>
    !(!subject || subject.length < 7 || subject.length > 200),
}
