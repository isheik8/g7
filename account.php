<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Windows 10 Shortcuts</title>
        <link rel="stylesheet" type="text/css" href="style/base.css">
        <link rel="stylesheet" type="text/css" href="style/account.css">
        <script src="script/warn-functions.js"></script>
    </head>

    <body>

<?php require_once("./php_include/site_header.php") ?>

        <main class="page_row">
            <div id="content_wrapper" class="centered">
                <article id="account">
                    <div  class="account_table">
                        <h2>Login</h2>
                        <form method="post" action="http://webdevbasics.net/scripts/demo.php">
                            <table id="account_login_table">
                                <tr>
                                    <th><label for="login_username">Username:</label></th>
                                    <td><input type="text" id="login_username"
                                    name="login_username" placeholder="Cannot be blank"
                                    oninput="warnUsername('login_username','login_username_feedback')">
                                    </td>
                                    <td><label class="FBFBFB" id="login_username_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="login_password">Password:</label></th>
                                    <td><input type="password" id="login_password"
                                    name="login_password" placeholder="Cannot be blank"
                                    oninput="warnPassword('login_password','login_password_feedback')"></td>
                                    <td><label class="FBFBFB" id="login_password_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <div id="account_login_button" class="account_button">
                                        <button type="submit" name="login">Login</button></div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div  class="account_table">
                        <h2>Sign up</h2>
                        <form method="post" action="http://webdevbasics.net/scripts/demo.php">
                            <table id="sign_up">
                                <tr>
                                    <th><label for="signup_firstname">First Name:</label></th>
                                    <td><input type="text" id="signup_firstname" name="signup_firstname" oninput="warnRealName('signup_firstname','signup_firstname_feedback')"></td>
                                    <td><label class="FBFBFB" id="signup_firstname_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="signup_lastname">Last Name:</label></th>
                                    <td><input type="text" id="signup_lastname" name="signup_lastname" oninput="warnRealName('signup_lastname','signup_lastname_feedback')"></td></td>
                                    <td><label class="FBFBFB" id="signup_lastname_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="signup_username">User Name:</label></th>
                                    <td><input type="text" id="signup_username"
                                    name="signup_username" placeholder="Cannot be blank"
                                    oninput="warnUsername('signup_username','signup_username_feedback')"></td>
                                    <td><label class="FBFBFB" id="signup_username_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="signup_email">Email:</label></th>
                                    <td><input type="email" id="signup_email"
                                    name="signup_email" placeholder="Cannot be blank"
                                    oninput="warnEmail('signup_email','signup_email_feedback')"></td>
                                    <td><label class="FBFBFB" id="signup_email_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="signup_remail">Retype Email:</label></th>
                                    <td><input type="email" id="signup_remail"
                                    name="signup_remail" placeholder="Cannot be blank"
                                    oninput="warnREmail('signup_email','signup_remail','signup_remail_feedback')"></td>
                                    <td><label class="FBFBFB" id="signup_remail_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="signup_password">Password:</label></th>
                                    <td><input type="password" id="signup_password"
                                    name="signup_password" placeholder="Cannot be blank"
                                    oninput="warnPassword('signup_password','signup_password_feedback')"></td>
                                    <td><label class="FBFBFB" id="signup_password_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="signup_repassword">Retype Password:</label></th>
                                    <td><input type="password" id="signup_repassword"
                                    name="signup_repassword" placeholder="Cannot be blank"
                                    oninput="warnRePassword('signup_password','signup_repassword','signup_repassword_feedback')"></td>
                                    <td><label class="FBFBFB" id="signup_repassword_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <div id="account_sing_up_button" class="account_button">
                                        <button type="submit" name="sign_up">Sign up</button></div>
                                    </td>
                                </tr>
                            </table>
                       </form>
                    </div>
                    <div  class="account_table">
                        <h2>Deregister</h2>
                        <form method="post" action="http://webdevbasics.net/scripts/demo.php">
                            <table id="deregister">
                                <tr>
                                    <th><label for="dereg_username">Username:</label></th>
                                    <td><input type="text" id="dereg_username"
                                    name="dereg_username" placeholder="Cannot be blank"
                                    oninput="warnUsername('dereg_username','dereg_username_feedback')"></td>
                                    <td><label class="FBFBFB" id="dereg_username_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th><label for="dereg_password">Password:</label></th>
                                    <td><input type="password" id="dereg_password"
                                    name="dereg_password" placeholder="Cannot be blank"
                                    oninput="warnPassword('dereg_password','dereg_password_feedback')"></td>
                                    <td><label class="FBFBFB" id="dereg_password_feedback"></label></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <div id="account_deregister_button" class="account_button">
                                        <button type="submit" name="deregister">deregister</button></div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </article>
            </div>
        </main>

<?php require_once("./php_include/site_footer.php") ?>

    </body>
</html>