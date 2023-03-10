<template>
    <div>
        <main class="main pages">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="/" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Pages <span></span> My Account
                </div>
            </div>
        </div>
        <div class="page-content pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 col-md-12 m-auto shadow p-5">
                        <div class="row">
                            <div class="col-lg-6 pr-30 d-none d-lg-block">
                                <img class="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                            </div>
                            <div class="col-lg-6 col-md-8">
                                <div class="login_wrap widget-taber-content background-white ">
                                    <div class="padding_eight_all bg-white">
                                        <div class="heading_s1">
                                            <h1 class="mb-5">Login</h1>
                                            <p class="mb-30">Don't have an account? <a href="/register">Create here</a></p>
                                        </div>
                                        <form action="javaScript:void(0)" @submit="doLogin" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <label class="control-label " for="input-email"> Email</label>

                                                <input v-model="email" type="text" required="" name="email" placeholder="Enter Your Email *" />
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label " for="input-password">Password</label>

                                                <input v-model="password" required="" type="password" name="password" placeholder="Enter Your password *" />
                                            </div>
                                            <!-- <div class="login_footer form-group">
                                                <div class="chek-form">
                                                    <input  type="text" required="" name="email" placeholder="Security code *" />
                                                </div>
                                                <span class="security-code">
                                                    <b class="text-new">8</b>
                                                    <b class="text-hot">6</b>
                                                    <b class="text-sale">7</b>
                                                    <b class="text-best">5</b>
                                                </span>
                                            </div> -->
                                            <div class="login_footer form-group mb-50">
                                                <div class="chek-form">
                                                    <div class="custome-checkbox">
                                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                        <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                                                    </div>
                                                </div>
                                                <a class="text-muted" href="forgot-password">Forgot password?</a>
                                            </div>
                                            <div class="form-group">
                                                <nuxt-link to=""><button :disable="isLogin" class="btn btn-default pull-right">{{isLogin ? 'Loading...': 'Login'}}</button></nuxt-link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '~~/config/url';

	export default{
			data() {
				return{
					email:'',
					password:'',
					isLogin: false
				}
		},
		methods:{
			async doLogin() {

				if(this.email == ''){
					alert('Email Is Empty');
					return false;
				}

				if(this.password == ''){
					alert('Password Is Empty');
					return false;
				}
				
				console.log(this.email);
				var formData = new FormData();

				formData.append('email', this.email);
				formData.append('password', this.password);	

					const response = await axios.post(apiUrl.customerLogin, formData);
					console.log(response);

					var user = response.data.user;

					

				if(response.status == 200){

					if(response.data.status) {

						await localStorage.setItem('isLogged', true);
						await localStorage.setItem('userID', user.u_id);
						await localStorage.setItem('userFullName', user.u_first_name + ' ' + user.u_last_name );
						await localStorage.setItem('userMobile', user.u_mobile_number);
						await localStorage.setItem('userRole', user.u_role);
						await localStorage.setItem('userEmail', user.u_email_address);

						location.href = '/';

						alert('login successfully');

					}else{
						alert('Incorrect Id')
					}
					
				}else{
						alert('Error');
					
				}


			}
				


			}
		}
	
</script>