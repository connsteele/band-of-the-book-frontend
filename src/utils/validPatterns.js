const validPatterns = {
    email: v => (/\S+@\S+\.\S/.test(v) ? true : false),
    password: v => (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
        .test(v) ? true : false),
    username: v => (/^[a-z]{4,}$/i.test(v) ? true : false),
};

/* Password
password must contain 1 number (0-9)
password must contain 1 uppercase letters
password must contain 1 lowercase letters
password must contain 1 non-alpha numeric character
password is 8-16 characters with no space
*/

export default validPatterns;