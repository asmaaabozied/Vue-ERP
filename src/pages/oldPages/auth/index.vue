<template>
    <!-- begin:: Page -->

    <div class="d-flex flex-column flex-root">
        <!--begin::Login-->
        <div class="login login-2 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white" id="kt_login">






            <div class="login-aside order-2 order-lg-1 d-flex flex-column-fluid flex-lg-row-auto bgi-size-cover bgi-no-repeat p-7 p-lg-10">
                <!--begin: Aside Container-->
                <div class="d-flex flex-row-fluid flex-column justify-content-between">
                    <!--begin::Aside body-->
                    <div class="d-flex flex-column-fluid flex-column flex-center mt-5 mt-lg-0">
                        <a href="#" class="mb-5 text-center">
                            <img src="assets/media/logos/goldlogo.png" class="max-h-75px" alt="" />
                        </a>
                        <!--begin::Signin-->
                        <div class="login-form login-signin">
                            <div class="text-center mb-10 mb-lg-20">
                                <h2 class="font-weight-bold">Sign In</h2>
                                <p class="text-muted font-weight-bold">Enter your username and password</p>
                            </div>


                            <form class="kt-form from" action=""  @submit.prevent="login" ref="formContainer" id="currentForm" >
                                <div class="alert alert-danger" role="alert" v-if="errors">
                                    <p>{{ errors }}</p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off" required />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" placeholder="Password" name="password" required />
                                </div>

                                <!--begin::Action-->
                                <div class="kt-login__actions">
                                    <a class="kt-link kt-login__link-forgot"> </a>
                                    <button class="btn btn-primary btn-elevate kt-login__btn-primary" type="submit">
                                        Sign In
                                    </button>
                                </div>

                                <!--end::Action-->
                            </form>
                            <!--end::Form-->
                        </div>
                        <!--end::Signin-->

                        <!--end::Forgot-->
                    </div>
                    <!--end::Aside body-->
                    <!--begin: Aside footer for desktop-->
                    <div class="d-flex flex-column-auto justify-content-between mt-15">
                        <div class="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">© 2020 Metronic</div>
                        <div class="d-flex order-1 order-sm-2 my-2">
                            <a href="#" class="text-muted text-hover-primary">Privacy</a>
                            <a href="#" class="text-muted text-hover-primary ml-4">Legal</a>
                            <a href="#" class="text-muted text-hover-primary ml-4">Contact</a>
                        </div>
                    </div>
                    <!--end: Aside footer for desktop-->
                </div>
                <!--end: Aside Container-->
            </div>







            <!--begin::Content-->
            <div class="order-1 order-lg-2 flex-column-auto flex-lg-row-fluid d-flex flex-column" style="background-image: url(assets/media/bg/bg-5.jpg);background-position: center;background-size: cover;background-repeat: no-repeat">
                <!--begin::Content body-->
                <!--begin::Main-->
                <div class="d-flex flex-column flex-root">



                    <!--begin::-->
                    <div class=" d-flex flex-column flex-lg-row flex-row-fluid bg-white" id="">

                        <!--begin::Content-->
                        <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap p-0" style="background:linear-gradient(270deg, hsl(210deg 96% 29%), #5c8fbce8);padding: 3% 4% !important;">
                            
                            <!--begin::Content body-->
                            <div class="d-flex flex-column-fluid flex-lg-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <h1 class=" font-weight-bolder my-7 text-white display-1">ERP</h1>
                                    <p class="font-weight-bold font-size-lg text-white opacity-70">The ultimate Bootstrap, Angular 8, React &amp; VueJS admin theme
                                        <br />framework for next generation web apps.
                                        <br><br>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
                                        Dolor mollitia facere fugit animi labore iure quis vero.
                                        <br> Iure voluptate, libero, earum, quasi explicabo dolores.
                                    </p>
                                    <br>
                                    <a href="#" class="btn btn-light  font-weight-bold mr-2">More</a>



                                </div>

                            </div>

                            <div class="d-flex ">
                                <img src="assets/media/bg/web1.png" class="img-web-intro">
                            </div>

                            <!--end::Content body-->
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::-->
                </div>
                <!--end::Content body-->
            </div>
        </div>
    </div>




    <!-- end:: Page -->
</template>

<script>
    import {
        store
    } from "../../../../Store/store";
    export default {
        name: "login",
        data() {
            return {
                loginForm: {},
                errors: null,
            };
        },
        methods: {
            async login() {
                try {
                    var form = document.getElementById("currentForm");
                    var formData = new FormData(form);
                    await this.$store.dispatch("login", formData);

                    this.$router.push({
                        name: "home"
                    });
                } catch (error) {
                    
                    this.errors = error.message;
                }
            },
        },
        beforeRouteEnter(to, from, next) {
            if (!store.getters.loggedin) {
                next();
            } else {
                next({
                    name: "home"
                });
            }
        },
    };
</script>

<style>
</style>