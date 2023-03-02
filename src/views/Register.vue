<template id="login-form">
    <body>
        <h1>Create an account</h1>
        <div class="login-container">
            
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
                <button 
                    href="/home" >
                    <!-- @click="register()" -->
                    <!-- disabled="password !== confirmPassword"> -->
                    Sign Up    
                </button>
            </form>
            <a href="/login">Already have an account?</a>
        </div>
    </body>
  </template>

<!-- <script>
    export default {
        name: "Register",
        data() {
            return {
                username: "",
                email: "",
                password: "",
                rememberMe: false,
            };
        },
        methods: {
            register() {
                this.$router.push({ name: "Home" });
            },
        },
    }

</script> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap');
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'M PLUS 1p', sans-serif;
    }
    h1 {
        font-size: 350%;
        margin: 10vh 10vh;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #f1f1f1;
    }

    .login-container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    label {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }

    input[type="text"], input[type="password"], input[type="email"] {
       width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: none;
        background-color: #f1f1f1;
    }

    input[type="checkbox"] {
    /* Double-sized Checkboxes */
        -ms-transform: scale(1.8); /* IE */
        -moz-transform: scale(1.8); /* FF */
        -webkit-transform: scale(1.8); /* Safari and Chrome */
        -o-transform: scale(1.8); /* Opera */
        transform: scale(1.8);
        padding: 10px;
        margin-left: 6px;
        margin-bottom: 20px;
    }

    button {
        margin-bottom: 10px;
        padding: 10px;
        background-color: #4CAF50;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 5px;
        cursor: pointer;
        max-width: 500px;
        width: 100%;
    }

    button:hover {
        background-color: #38a93c;
    }

</style>