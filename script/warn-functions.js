// HELPER FUNCTIONS

function $(id){
    var element = document.getElementById(id);
    return element;
}


// ATOMIC VALIDATION FUNCTIONS

function isASCII(str){
    for(var i = 0; i < str.length; i++)
        // change 127 to 255 for extended ASCII
        if(str.charCodeAt(i) > 127)
            return false;
    return true;
}

function isLengthInRange(str, min, max) {
    // range is inclusive
    return min <= str.length && str.length <= max;
}

function isNotBlank(str){
    return str != null && str.length != 0;
}

function isValidUsername(str) {
    // only allow alphanumeric characters, '-' and '_'
    return /^[a-zA-Z\-_0-9]+$/.test(str);
}

function isValidEmail(str) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/.test(str);
}


// NAMES
/**
 * @param field   the element of first/last name text field
 * @param output  the element of error message output field
 */
function warnRealName(field,output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateRealname($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param username  the String of first/last name to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateRealname(username) {
    var minLength = 0;
    var maxLength = 128;
    var message = null;

    if (!isLengthInRange(username, minLength, maxLength))
        message = "Name has to be equal to or less than 128 characters";

    return message;
}

/**
 * @param field   the element of username text field
 * @param output  the element of error message output field
 */
function warnUsername(field,output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateUsername($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param username  the String of username to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateUsername(username) {
    var minLength = 1;
    var maxLength = 128;
    var message = null;

    if (!isNotBlank(username))
        message = "Please enter your username";
    else if (!isValidUsername(username))
        message = "Only alphanumeric characters, - and _ are allowed";
    else if (!isLengthInRange(username, minLength, maxLength))
        message = "Username has to be equal to or less than 128 characters";

    return message;
}


// EMAIL
/**
 * @param field   the element of email text field
 * @param output  the element of error message output field
 */
function warnEmail(field,output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateEmail($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param email     the String of email to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateEmail(email) {
    var minLength = 1;
    var maxLength = 128;
    var message = null;

    if (!isNotBlank(email))
        message = "Please enter your email address";
    else if (!isASCII(email))
        message = "Only alphanumeric characters, $, #, -, _, . and @ are allowed";
    else if (!isValidEmail(email))
        message = "Need to take email format (e.g. abcde@gmail.com)";
    else if (!isLengthInRange(email, minLength, maxLength))
        message = "Email address has to be equal to or less than 128 characters";

    return message;
}

/**
 * @param field1  the element of original email text field
 * @param field2  the element of confirmation email text field
 * @param output  the element of error message output field
 */
function warnREmail(field1,field2,output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateREmail($(field1).value, $(field2).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param original      the String of original email to be validated
 * @param confirmation  the String of confirmation email to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateREmail(original,confirmation) {
    var message = null;

    if (!isNotBlank(confirmation))
        message = "Please enter confirmation email address";
    else if (original != confirmation)
        message = "E-mail addresses do not match";

    return message;
}


// PASSWORD
/**
 * @param field   the element of password text field
 * @param output  the element of error message output field
 */
function warnPassword(field,output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validatePassword($(field).value);

    // If the error message is defined, put it to HTML
    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param password  the String of password to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validatePassword(password) {
    var minLength = 5;
    var maxLength = 128;
    var message = null;

    if (!isNotBlank(password))
        message = "Please enter your password";
    else if (!isASCII(password))
        message = "Only alphanumeric characters, $, #, - and _ are allowed";
    else if (!isLengthInRange(password, minLength, maxLength))
        message = "password has to be between 5 and 128 characters";

    return message;
}

/**
 * @param field1  the element of original password text field
 * @param field2  the element of confirmation password text field
 * @param output  the element of error message output field
 */
function warnRePassword(field1,field2,output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateRePassword($(field1).value, $(field2).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param original      the String of original password to be validated
 * @param confirmation  the String of confirmation password to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateRePassword(original,confirmation) {
    var message = null;

    if (!isNotBlank(confirmation))
        message = "Please enter confirmation password";
    else if (original != confirmation)
        message = "Password do not match";

    return message;
}

// Response
/**
 * @param field   the element of response text field
 * @param output  the element of error message output field
 */
function warnResponse(field, output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateResponse($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param response  the String of response to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateResponse(response) {
    var minLength = 1;
    var maxLength = 5000;
    var message = null;

    if (!isNotBlank(response))
        message = "Please enter your response";
    else if (!isLengthInRange(response, minLength, maxLength))
        message = "Response text has to be equal to or less than 5000 characters";

    return message;
}

// Post
/**
 * @param field   the element of title text field
 * @param output  the element of error message output field
 */
function warnTitle(field, output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateTitle($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param response  the String of title to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateTitle(title) {
    var minLength = 1;
    var maxLength = 256;
    var message = null;

    if (!isNotBlank(title))
        message = "Please enter your title";
    else if (!isLengthInRange(title, minLength, maxLength))
        message = "Title has to be equal to or less than 256 characters";

    return message;
}

/**
 * @param field   the element of content text field
 * @param output  the element of error message output field
 */
function warnContent(field, output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateContent($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param response  the String of conent to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateContent(content) {
    var minLength = 1;
    var maxLength = 5000;
    var message = null;

    if (!isNotBlank(content))
        message = "Please enter your text";
    else if (!isLengthInRange(content, minLength, maxLength))
        message = "Content has to be equal to or less than 5000 characters";

    return message;
}

/**
 * @param field   the element of message text field
 * @param output  the element of error message output field
 */
function warnMessage(field, output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateMessage($(field).value);

    if (message != undefined)
        $(output).innerHTML = message;
}

/**
 * @param response  the String of message to be validated
 *
 * @return message  the String of error message if invalid, or null if valid
 */
function validateMessage(content) {
    var minLength = 1;
    var maxLength = 100000;
    var message = null;

    if (!isNotBlank(content))
        message = "Please enter your text";
    else if (!isLengthInRange(content, minLength, maxLength))
        message = "Content has to be equal to or less than 100000 character";

    return message;
}

/**
 * @param field1   the element of title text field
 * @param field2   the element of content text field
 * @param output1  the element of error message for title
 * @param output2  the element of error message for content
 *
 * @return result  the boolean of the validation result
 */
function warnPost(field1, field2, output1, output2) {
    // Clear the current error text in HTML;
    $(output1).innerHTML = "";
    $(output2).innerHTML = "";

    // If username is invalid, get an error message
    var message1 = validateTitle($(field1).value);
    var message2 = validateContent($(field2).value);

    if (message1 != undefined || message2 != undefined) {
        if (message1 != undefined)
            $(output1).innerHTML = message1;

        if (message2 != undefined)
            $(output2).innerHTML = message2;
        return false;
    }
    return true;
}


/**
 * @param field1   the element of firstname text field
 * @param field2   the element of lastname text field
 * @param field3   the element of username field
 * @param field4   the element of email text field
 * @param field5   the element of remail text field
 * @param field6   the element of password text field
 * @param field7   the element of rpassword text field
 * @param output1  the element of error message for firstname
 * @param output2  the element of error message for lastname
 * @param output3  the element of error message for username
 * @param output4  the element of error message for email
 * @param output5  the element of error message for remail
 * @param output6  the element of error message for password
 * @param output7  the element of error message for rpassword
 *
 * @return result  the boolean of the validation result
 */
function warnRegistration(field1, field2, field3, field4, field5, field6, field7,
     output1, output2, output3, output4, output5, output6, output7) {

    // Clear the current error text in HTML;
    $(output1).innerHTML = "";
    $(output2).innerHTML = "";
    $(output3).innerHTML = "";
    $(output4).innerHTML = "";
    $(output5).innerHTML = "";
    $(output6).innerHTML = "";
    $(output7).innerHTML = "";

    // If username is invalid, get an error message
    var message1 = validateRealname($(field1).value);
    var message2 = validateRealname($(field2).value);
    var message3 = validateUsername($(field3).value);
    var message4 = validateEmail($(field4).value);
    var message5 = validateREmail($(field4).value, $(field5).value);
    var message6 = validatePassword($(field6).value);
    var message7 = validateRePassword($(field6).value, $(field7).value);

    if (message1 != undefined || message2 != undefined || message3 != undefined
         || message4 != undefined || message5 != undefined || message6 != undefined
          || message7 != undefined) {
        if (message1 != undefined)
            $(output1).innerHTML = message1;

        if (message2 != undefined)
            $(output2).innerHTML = message2;

        if (message3 != undefined)
            $(output3).innerHTML = message3;

        if (message4 != undefined)
            $(output4).innerHTML = message4;

        if (message5 != undefined)
            $(output5).innerHTML = message5;

        if (message6 != undefined)
            $(output6).innerHTML = message6;

        if (message7 != undefined)
            $(output7).innerHTML = message7;

        return false;
    }
    return true;
}

/**
 * @param field1   the element of username text field
 * @param field2   the element of password text field
 * @param output1  the element of error message for username
 * @param output2  the element of error message for password
 *
 * @return result  the boolean of the validation result
 */
function warnLogin(field1, field2, output1, output2) {
    // Clear the current error text in HTML;
    $(output1).innerHTML = "";
    $(output2).innerHTML = "";

    // If username is invalid, get an error message
    var message1 = validateUsername($(field1).value);
    var message2 = validatePassword($(field2).value);

    if (message1 != undefined || message2 != undefined) {
        if (message1 != undefined)
            $(output1).innerHTML = message1;

        if (message2 != undefined)
            $(output2).innerHTML = message2;
        return false;
    }
    return true;
}

/**
 * @param field    the element of response text field
 * @param output   the element of error message for response
 *
 * @return result  the boolean of the validation result
 */
function warnViewTopic(field, output) {
    // Clear the current error text in HTML;
    $(output).innerHTML = "";

    // If username is invalid, get an error message
    var message = validateResponse($(field).value);

    if (message != undefined) {
        $(output).innerHTML = message;
        return false;
    }
    return true;
}

function warnContact(field1, field2, field3, field4, field5,
    output1, output2, output3, output4, output5) {
    // Clear the current error text in HTML;
    $(output1).innerHTML = "";
    $(output2).innerHTML = "";
    $(output3).innerHTML = "";
    $(output4).innerHTML = "";
    $(output5).innerHTML = "";

    // If username is invalid, get an error message
    var message1 = validateRealname($(field1).value);
    var message2 = validateRealname($(field2).value);
    var message3 = validateEmail($(field3).value);
    var message4 = validateREmail($(field3).value, $(field4).value);
    var message5 = validateMessage($(field5).value);

    if (message1 != undefined || message2 != undefined || message3 != undefined
         || message4 != undefined || message5 != undefined) {
        if (message1 != undefined)
            $(output1).innerHTML = message1;

        if (message2 != undefined)
            $(output2).innerHTML = message2;

        if (message3 != undefined)
            $(output3).innerHTML = message3;

        if (message4 != undefined)
            $(output4).innerHTML = message4;

        if (message5 != undefined)
            $(output5).innerHTML = message5;

        return false;
    }
    return true;
}
