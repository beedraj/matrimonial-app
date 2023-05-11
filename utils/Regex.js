// export const validateEmail = (email) => {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

export const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };

export const validateText = (text) => {
    return (!text || /^\s*$/.test(text));
}
export const validateAlphabateWithSpaces = (text) => {
  return (!text || /^[a-zA-Z ]+$/.test(text));
}
export const validatePassword = text => {
  return (
    !text ||
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{8,}$/.test(
      text,
    )
  )
}
export const validateMobileNo = phonenumber => {
  var cleaned = ('' + phonenumber).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{1,3}|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = match[1] ? `+${match[1]} ` : ''
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}
export const onlyAlphabetsCodeRegex = /^[A-Za-z]+$/

  