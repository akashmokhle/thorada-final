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
        <div class="page-content pt-150 pb-150">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 col-md-12 m-auto">
                        <div class="row">
                            <div class="col-lg-6 col-md-8">
                                <div class="login_wrap widget-taber-content background-white">
                                    <div class="padding_eight_all bg-white">
                                        <div class="heading_s1">
                                            <h1 class="mb-5">Create an Account</h1>
                                            <p class="mb-30">Already have an account? <a href="/login">Login</a></p>
                                        </div>
                                        <form @submit="doRegister()" action="javaScript:void(0)" method="post">
                                            <div class="form-group">
                                                <input v-model="firstName" type="text"  name="First Name" placeholder="First Name" />
                                            </div>
                                            <div class="form-group">
                                                <input v-model="lastName" type="text"  name="lastname" placeholder="Last Name" />
                                            </div>
                                            <div class="form-group">
                                                <input v-model="email" type="text"  name="email" placeholder="Email" />
                                            </div>
                                            <div class="form-group">
                                                <input v-model="mobileNumber" type="tel" name="Mobile Number" placeholder="Mobile Number" id="input-telephone" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <input v-model="password" type="password" name="password" placeholder="Password" id="input-password" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <input v-model="confirmPassword" type="password" name="confirm" placeholder="Password Confirm" id="input-confirm" class="form-control">
                                            </div>
                                            <!-- <div class="login_footer form-group">
                                                <div class="chek-form">
                                                    <input type="text"  name="email" placeholder="Security code *" />
                                                </div>
                                                <span class="security-code">
                                                    <b class="text-new">8</b>
                                                    <b class="text-hot">6</b>
                                                    <b class="text-sale">7</b>
                                                    <b class="text-best">5</b>
                                                </span>
                                            </div> -->
                                            <div class="payment_option mb-50">
                                                <div class="custome-radio">
                                                    <input class="form-check-input"  type="radio" name="payment_option" id="exampleRadios3"  />
                                                    <label class="form-check-label" for="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                                                </div>
                                                <div class="custome-radio">
                                                    <input class="form-check-input"  type="radio" name="payment_option" id="exampleRadios4"  />
                                                    <label class="form-check-label" for="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                                                </div>
                                            </div>
                                            <div class="login_footer form-group mb-50">
                                                <div class="chek-form">
                                                    <div class="custome-checkbox">
                                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value="" />
                                                        <label class="form-check-label" for="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                                                    </div>
                                                </div>
                                                <a href="page-privacy-policy.html"><i class="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a>
                                            </div>
                                            <div class="form-group mb-30">
                                                <NuxtLink to=""><button :disabled="isRegistered" class="btn btn-success">{{ isRegistered ? 'Loading...': 'Continue'}}</button></NuxtLink>
                                            </div>
                                            <p class="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 pr-30 d-none d-lg-block">
                                <div class="card-login mt-115">
                                    <a href="#" class="social-login facebook-login">
                                        <img src="assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                                        <span>Continue with Facebook</span>
                                    </a>
                                    <a href="#" class="social-login google-login">
                                        <img src="assets/imgs/theme/icons/logo-google.svg" alt="" />
                                        <span>Continue with Google</span>
                                    </a>
                                    <a href="#" class="social-login apple-login">
                                        <img src="assets/imgs/theme/icons/logo-apple.svg" alt="" />
                                        <span>Continue with Apple</span>
                                    </a>
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
		data(){
			return{
				firstName:'',
				lastName:'',
				email:'',
				mobileNumber:'',
				password:'',
				confirmPassword:'',
				isRegistered: false
			}
		},
		methods:{
			async doRegister(){

				if(this.firstName == ''){
					alert('First Name Is Empty');
					return false;
				}

				if(this.lastName == ''){
					alert('Last Name Is Empty');
					return false;
				}

				if(this.email == ''){
					alert('Email Is Empty');
					return false;
				}

				if(this.mobileNumber == ''){
					alert('Mobile Number Is Empty');
					return false;
				}

				if(this.password == ''){
					alert('Password Is Empty');
					return false;
				}

				if(this.confirmPassword == ''){
					alert('Confirm Password Is Empty');
					return false;
				}

				console.log(this.firstName);
				var formData = new FormData();

				formData.append('first_name', this.firstName);
				formData.append('last_name', this.lastName);
				formData.append('email', this.email);
				formData.append('mobile_number', this.mobileNumber);
				formData.append('password', this.password);
				formData.append('confirm_password', this.confirmPassword);

					const response = await axios.post(apiUrl.customerRegister, formData);
					console.log(response);

					var	user = response.data.user_data;
				
					if(response.status == 200){

						if(response.data.status) {

							await localStorage.setItem('isLogged', true);
							await localStorage.setItem('userID', user.u_id);	
							await localStorage.setItem('userFullName', user.u_first_name + ' ' + user.u_last_name );
							await localStorage.setItem('userMobile', user.u_mobile_number);
							await localStorage.setItem('userRole', user.u_role);
							await localStorage.setItem('userEmail', user.u_email_address);

							location.href = '/'
							
							alert('Registred successfully')
						}else{
							alert('Already Registred')
						}
					}else{

						alert('Already Registred');
					}


			}
		}
	}
</script>