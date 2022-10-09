<template>
    <div class="container mx-auto flex justify-center items-center gap-20 mt-20">
        <div class="main w-full">
            <p class="welcome">{{ labels.welcome }}</p>
            <h1 class="sign-in-to mt-7">{{ labels.sign_in_to }}</h1>
            <p class="text-left">{{ labels.welcome_to_my_website }}</p>
            <div class="content">
                <form class="pt-12" @submit.prevent="submit">
                    <div class="text-left pt-1">
                        <label class="input-label" for="uname">{{ labels.user_name }}</label>
                        <input
                            v-model="enteredUserName"
                            class="input"
                            type="text"
                            id="uname"
                            name="uname"
                            placeholder="Enter your user name"
                        >
                    </div>
                    <div class="text-left pt-1">
                        <label class="input-label" for="password">{{ labels.password }}</label>
                        <input
                            v-model="enteredPassword"
                            class="input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        >
                    </div>
                    <div class="flex justify-between mt-6 mb-10">
                        <div>
                            <input class="mr-2.5" type="checkbox" id="remember-me" name="remember-me">
                            <label for="remember-me">{{ labels.remember_me }}</label>
                        </div>
                        <p>{{ labels.forgot_password }}</p>
                    </div>
                    <input class="login" type="submit" value="Login">
                </form>
            </div>
            <p class="mt-10 text-center">{{ labels.dont_have_an_account }} <strong>{{ labels.register }}</strong></p>
        </div>
        <div class="img">
            <img src="@/assets/small-team-discussing-ideas-2194220-0.png"/>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'LoginPage',
    data() {
        return {
            enteredUserName: '',
            enteredPassword: '',
            labels: {
                welcome: 'Welcome!',
                welcome_to_my_website: 'Welcome to my website',
                sign_in_to: 'Sign in to',
                user_name: 'User name',
                password: 'Password',
                remember_me: 'Remember me',
                forgot_password: 'Forgot password?',
                register: 'Register',
                dont_have_an_account: 'Don\'t have an account?',
                username_or_password_entered_incorrect: 'The username or password you entered is incorrect'
            }
        }
    },
    computed: {
        ...mapState(['userName', 'password'])
    },
    methods: {
        ...mapActions(['addAlert']),
        submit() {
            if (this.enteredUserName === this.userName &&
                this.enteredPassword === this.password
            ) {
                localStorage.setItem('authorized', true);
                this.$router.push({name: 'profile'});
            }
            else {
                this.addAlert({
                    color: 'red',
                    message: labels.username_or_password_entered_incorrect
                })
            }
        }
    }
}
</script>

<style lang="scss">
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .main {
        padding: 35px;
        box-sizing: border-box;
        max-width: 505px;
        background: #FFFFFF;
        border: 0.5px solid #878787;
        box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
        border-radius: 10px;

        .welcome {
            text-align: left;
            width: 132px;
            height: 38px;
            font-weight: 300;
            font-size: 25px;
            line-height: 38px;
            color: #000000;
        }

        .sign-in-to {
            width: 142px;
            height: 47px;
            text-align: left;
            font-weight: 500;
            font-size: 31px;
            line-height: 46px;
        }

        .content {
            .input {
                box-sizing: border-box;
                background: #FFFFFF;
                border: 0.6px solid #282828;
                border-radius: 6px;
                width: 100%;
                height: 59px;
            }

            .input-label {
                display: block;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
            }

            .login {
                cursor: pointer;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                width: 100%;
                height: 57px;
                color: #FFFFFF;
                background: #000000;
                border-radius: 6px;
            }
        }
    }
@media only screen and (max-width: 1024px){
    .img {
        display: none;
    }
}
</style>