<template id="login-form">
    <body>
        <h1>Welcome Back!</h1>
        <div class="login-container">
            
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" v-model="input.username">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" v-model="input.password">
                <label for="rememberMe">Remember Me:</label> 
                <input type="checkbox" id="rememberMe" name="rememberMe" v-model="input.rememberMe">
                <button @click="login()"><router-view></router-view>Login</button>
            </form>
            <a @click="moveToRegister()">Need an account?</a>
        </div>
    </body>
  </template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                input:{
                    username: "",
                    password: "",
                    rememberMe: false,
                }
            };
        },
        methods: {
            isRememberMe() {
                return this.rememberMe === true;
            },
            login() {
                if (this.input.username === "admin" && this.input.password === "admin") {
                    this.$router.go({path: '/home'});
                } else {
                    alert("Invalid username or password");
                }
            },
            moveToRegister() {
                this.$router.go('/register');
            },
        },
    }
</script>

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

    input[type="text"], input[type="password"] {
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