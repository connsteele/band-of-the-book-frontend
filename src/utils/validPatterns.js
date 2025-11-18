const validPatterns = {
    email: v => (/\S+@\S+\.\S/.test(v) ? true : {
        message: `Email is invalid, use proper form like:
            user@example.com`
    }),
    password: v => (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
        .test(v) ? true : {
            message: `Password is invalid, it must satisfy the following:
        8 to 16 characters in length
        >= 1 Uppercase Letter
        >= 1 Lowercase Letter
        >= 1 Number
        >= 1 Non Alphanumeric Character`}
    ),
    username: v => (/^[a-z]{4,}$/i.test(v) ? true : {
        message: `Username is invalid, it must satisfy the following:
        >= 4 characters in length`
    }),
};

/* Password
password must contain 1 number (0-9)
password must contain 1 uppercase letters
password must contain 1 lowercase letters
password must contain 1 non-alpha numeric character
password is 8-16 characters with no space
*/

export default validPatterns;