<template>
    <div class="py-2">
        <main class="main pages">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href="index.html" rel="nofollow"><i class="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Pages <span></span> Contact us
                </div>
            </div>
        </div>
        <div class="page-content py-1" style="background-size: cover; background-image: url('https://images.unsplash.com/photo-1618004652321-13a63e576b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');">
            <h1 class="text-center py-2 shadow">Contact Us</h1>
            <!-- <div class="container">
                <div class="row">
                    <div class="col-xl-10 col-lg-12 m-auto">
                        <section class="row align-items-end mb-50">
                            <div class="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                                <h4 class="mb-20 text-brand">How can help you ?</h4>
                                <h1 class="mb-30">Let us know how we can help you</h1>
                                <p class="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-lg-6 mb-4">
                                        <h5 class="mb-20">01. Visit Feedback</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <h5 class="mb-20">02. Employer Services</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div class="col-lg-6 mb-lg-0 mb-4">
                                        <h5 class="mb-20 text-brand">03. Billing Inquiries</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h5 class="mb-20">04.General Inquiries</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div> -->
            <br />
            <!-- <section class="container mb-50 d-none d-md-block">
                <div class="border-radius-15 overflow-hidden">
                    <div id="map-panes" class="leaflet-map"></div>
                </div>
            </section> -->
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 col-lg-12 m-auto">
                        <section class="mb-50">
                            <div class="row">
                                <div class="col-xl-8">
                                    <div class="contact-from-area padding-20-row-col">
                                        <h5 class="text-brand mb-10">Contact form</h5>
                                        <h2 class="mb-10">Drop Us a Line</h2>
                                        <h2 class=" mb-30 font-sm">Your email address will not be published. Required fields are marked *</h2>
                                        <form @submit="messegeSend()" class="contact-form-style mt-30" id="contact-form" action="javaScript:void(0)" method="post">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="input-style mb-20">
                                                        <input v-model="firstName" name="name" placeholder="First Name" type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="input-style mb-20">
                                                        <input v-model="emailId" name="email" placeholder="Your Email" type="email" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="input-style mb-20">
                                                        <input v-model="phoneNo" name="telephone" placeholder="Your Phone" type="tel" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="input-style mb-20">
                                                        <input v-model="Subject" name="subject" placeholder="Subject" type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="textarea-style mb-30">
                                                        <textarea v-model="discriptionMsg" name="message" placeholder="Message"></textarea>
                                                    </div>
                                                    <button class="submit submit-auto-width" type="submit">Send message</button>
                                                </div>
                                            </div>
                                        </form>
                                        <p class="form-messege"></p>
                                    </div>
                                </div>
                                <div class="col-lg-4 pl-50 d-lg-block d-none">
                                    <img class="border-radius-15 mt-50 shadow " src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                                </div>
                            </div>

                            <div class="row mt-60">
                                <!-- <div class="col-md-4 mb-4 mb-md-0">
                                    <h4 class="mb-15 text-brand">Office</h4>
                                    1 Amed Road Kunwariya. <br />
                                    Rajasthan, 313327 India<br />
                                    <span title="Phone">Phone:</span> +91 8233292863<br />
                                    <span title="Email">Email: </span> luckylelctronic2017@gmail.com<br />
                                    <a class="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i class="fi-rs-marker mr-5"></i>View map</a>
                                </div>
                                <div class="col-md-4 mb-4 mb-md-0">
                                    <h4 class="mb-15 text-brand">Studio</h4>
                                    1 Amed Road Kunwariya.<br />
                                    Rajasthan, 313327 India<br />
                                    <span title="Phone">Phone:</span> +91 8233292863<br />
                                    <span title="Email">Email: </span> luckylelctronic2017@gmail.com<br />
                                    <a class="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i class="fi-rs-marker mr-5"></i>View map</a>
                                </div> -->
                                <div class="col-md-4 p-4 rounded shadow-lg" style="background-color: #fed764; color: black;">
                                    <h4 class="mb-15 text-brand">Shop</h4>
                                    1 Amed Road Kunwariya.<br />
                                    Rajasthan, 313327 India<br />
                                    <span title="Phone">Phone:</span> +91 8233292863<br />
                                    <span title="Email">Email: </span> luckylelctronic2017@gmail.com<br />
                                        <p>
                                        <button class="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            <i class="fa-solid fa-location-dot"></i> View map
                                        </button>
                                        </p>
                                        <div class="collapse" id="collapseExample">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1446674549584!2d75.88234101488503!3d22.722863685105736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd391d708021%3A0x77a9376b5b03e8cb!2sApollo%20Tower%2C%20Mahatma%20Gandhi%20Rd%2C%20South%20Tukoganj%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1678196485815!5m2!1sen!2sin"
                                            class="rounded"  width="1220" height="450" style="border:0; duration: 800ms;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>                        
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return {

                firstName: '',
                emailId: '',
                phoneNo: '',
                Subject: '',
                discriptionMsg: '',

            }
        },
        methods: {

           async messegeSend() {
                if(this.firstName == ''){
                    alert('first name is empty');
                    return false;
                }
                if(this.emailId == ''){
                    alert('first name is empty');
                    return false;
                }
                if(this.phoneNo == ''){
                    alert('first name is empty');
                    return false;
                }
                if(this.Subject == ''){
                    alert('first name is empty');
                    return false;
                }
                if(this.discriptionMsg == ''){
                    alert('first name is empty');
                    return false;
                }

                 console.log(this.data)
                 var formData = new FormData();

                 formData.append('first name', this.firstName);
                 formData.append("email", this.emailId);
                 formData.append('phone', this.contact);
                 formData.append('subject', this.Subject);
                 formData.append('messege', this.discriptionMsg);

                    const response = await axios.get('');
                    console.log(response);



            }
        }
    }
</script>