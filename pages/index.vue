<template>
    <div class="px-5 ">
        <!-- MAIN CONTAINER START-->
        <main class="main">
            <!-- HERO SECTION START -->
            <section class="home-slider position-relative mb-30">
                <div class="container">
                    <div class="home-slide-cover mt-30">
                        <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <div class="single-hero-slider single-animation-wrap" style="background-image: cover; background-image: url('https://images.unsplash.com/photo-1572797258546-a7c7170eddc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80')">
                                <div class="slider-content">
                                    <h1 class="display-2 mb-40">
                                        Don’t miss amazing<br />
                                        grocery deals
                                    </h1>
                                    <p class="mb-65">Sign up for the daily newsletter</p>
                                    <form class="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button class="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div class="single-hero-slider single-animation-wrap" style="background-image: url('https://images.unsplash.com/photo-1529346720291-0c190cc4c804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80')">
                                <div class="slider-content">
                                    <h1 class="display-2 mb-40">
                                        Fresh Vegetables<br />
                                        Big discount
                                    </h1>
                                    <p class="mb-65">Save up to 50% off on your first order</p>
                                    <form class="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button class="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                </div>
            </section>
            <!-- HERO SECTION START -->

            <!-- FEATURED CATEGORIES START -->
            <!-- <CardFeatCateg title="Featured Categories" :products="featCategProduct"/> -->

            <section class="popular-categories section-padding">
            <div class="container wow animate__animated animate__fadeIn">
                <div class="section-title">
                    <div class="title">
                        <h3>Featured Categories</h3>
                    </div>
                    <div class="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows"></div>
                </div>
                <div class="carausel-10-columns-cover position-relative">
                    <div class="carausel-10-columns" id="carausel-10-columns">
                        <div class="card-2 bg-9 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-13.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Cake & Milk</a></h6>
                            <span>26 items</span>
                        </div>
                        <div class="card-2 bg-10 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-12.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Oganic Kiwi</a></h6>
                            <span>28 items</span>
                        </div>
                        <div class="card-2 bg-11 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-11.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Peach</a></h6>
                            <span>14 items</span>
                        </div>
                        <div class="card-2 bg-12 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-9.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Red Apple</a></h6>
                            <span>54 items</span>
                        </div>
                        <div class="card-2 bg-13 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-3.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Snack</a></h6>
                            <span>56 items</span>
                        </div>
                        <div class="card-2 bg-14 wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-1.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Vegetables</a></h6>
                            <span>72 items</span>
                        </div>
                        <div class="card-2 bg-15 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-2.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Strawberry</a></h6>
                            <span>36 items</span>
                        </div>
                        <div class="card-2 bg-12 wow animate__animated animate__fadeInUp" data-wow-delay=".8s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-4.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Black plum</a></h6>
                            <span>123 items</span>
                        </div>
                        <div class="card-2 bg-10 wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-5.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Custard apple</a></h6>
                            <span>34 items</span>
                        </div>
                        <div class="card-2 bg-12 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-14.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Coffe & Tea</a></h6>
                            <span>89 items</span>
                        </div>
                        <div class="card-2 bg-11 wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                            <figure class="img-hover-scale overflow-hidden">
                                <a href="shop-grid-right.html"><img src="assets/imgs/shop/cat-15.png" alt="" /></a>
                            </figure>
                            <h6><a href="shop-grid-right.html">Headphone</a></h6>
                            <span>87 items</span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        
            <!-- FEATURED CATEGORIES START -->

            <!-- START BANNERS  -->
            <section class="banners mb-25">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6" v-for="ben in benners">
                            <div class="banner-img">
                                <img width="450" class="shadow" :src="ben.image" alt="" />
                                <div class="banner-text"> 
                                    <h4>
                                        {{ben.title}} <br /> {{ ben.addtitle }} 
                                     </h4> 
                                    <a :href="ben.link" class="btn btn-xs">{{ ben.textbtn }}<i class="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END BANNERS  -->

            <!-- POPULAR PRODUCTS START -->
            <CardProduct title="Popular Product " :products="pProducts" />
            <!-- POPULAR PRODUCTS END -->

            <!-- DAILY BEST SELLS START-->
            <CardDailyprod title="Daily Best Sells " :products="dailyProducts" />
            <!-- DAILY BEST SELLS END-->

            <!-- DEAL OF THE DAY START -->
            <CardDealsprod title="Daily Best Sells " :products="dealProducts" />

            <!-- DEAL OF THE DAY END -->

            <!-- TOP SELLING SECTION -->
            <CardTopprod title="Top Selling" :products="topProduct" />

            <!-- <section class="section-padding mb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                            <h4 class="section-title style-1 mb-30 animated animated">Top Selling</h4>
                            <div class="product-list-small animated animated">
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-1.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-2.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-3.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Nestle Original Coffee-Mate Coffee Creamer</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-md-0">
                            <h4 class="section-title style-1 mb-30 animated animated">Trending Products</h4>
                            <div class="product-list-small animated animated">
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-4.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Organic Cage-Free Grade A Large Brown Eggs</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-5.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown, & Red Rice</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-6.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Naturally Flavored Cinnamon Vanilla Light Roast Coffee</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block">
                            <h4 class="section-title style-1 mb-30 animated animated">Recently added</h4>
                            <div class="product-list-small animated animated">
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-7.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Pepperidge Farm Farmhouse Hearty White Bread</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-8.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Organic Frozen Triple Berry Blend</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-9.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Oroweat Country Buttermilk Bread</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block">
                            <h4 class="section-title style-1 mb-30 animated animated">Top Rated</h4>
                            <div class="product-list-small animated animated">
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-10.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Foster Farms Takeout Crispy Classic Buffalo Wings</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-11.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                                <article class="row align-items-center hover-up">
                                    <figure class="col-md-4 mb-0">
                                        <a href="shop-product-right.html"><img src="assets/imgs/shop/thumbnail-12.jpg" alt="" /></a>
                                    </figure>
                                    <div class="col-md-8 mb-0">
                                        <h6>
                                            <a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a>
                                        </h6>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width: 90%"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div class="product-price">
                                            <span>$32.85</span>
                                            <span class="old-price">$33.8</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
            
            <!-- TOP SELLING SECTION -->

        </main>
        <!-- MAIN CONTAINER END-->

    <!-- Preloader Start -->
    <!-- <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="text-center">
                    <img src="assets/imgs/theme/loading.gif" alt="" />
                </div>
            </div>
        </div>
    </div> -->

    </div>
</template>

<script>
import axios from 'axios';
import { sliderSetup } from '~~/config/sliders';
import {apiUrl, baseurl} from '~~/config/url';


    export default {
        data(){
            return{
                featCategProduct:[],
                pProducts:[],
                dealProducts:[],
                dailyProducts:[],
                topProduct:[],

                // DEAL OF THE DAY
                // dPNormalImage: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                // dPHoverImage: 'https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                // dPTitleCard: 'HeadPhone',
                // dPBrandName: 'Sony',
                // dPProductBy: 'rocky Production',
                // dPSalePrice: '3510',
                // dPMainPrice: '5200',
                // DEAL OF THE DAY

                // POPULAR PRODUCTS
                // pNormalImage: 'https://images.unsplash.com/photo-1624814448264-f2273a961d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                // pHoverImage: 'https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                // pTitleCard: 'HeadPhone',
                // pBrandName: 'Sony',
                // PProductBy: 'rocky Production',
                // PSalePrice: '3510',
                // PMainPrice: '5200',
                // POPULAR PRODUCTS

                // BENNER
                benners:[
                    {
                        title:'The best Organic',
                        addtitle:'Products Online',
                        image:'https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        textbtn:'Shop Now',
                        link:'',

                    },
                    {
                        title:'Make your Breakfast',
                        addtitle:'Healthy and Easy',
                        image:'https://images.unsplash.com/photo-1464380573004-8ca85a08751a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        textbtn:'Shop Now',
                        link:'',

                    },
                    {
                        title:'Everyday Fresh &',
                        addtitle:'Clean with Our',
                        image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        textbtn:'Shop Now',
                        link:'',

                    },
                ],
                // BENNER

            }
        },
        methods:{
            async init() {
                await sliderSetup.init();
            },
            async fetchFeaturedProducts() {
            const response = await axios.get(apiUrl.fetchFeaturedProducts);
            console.log(response);
            if (response.status == 200) {
                if (response.data.status) {
                    this.dealProducts = response.data.products;

                }
            }
        },
        async fetchNewArrivalProducts() {
            const response = await axios.get(apiUrl.fetchNewArrivalProducts);
            console.log(response);
            if (response.status == 200) {
                if (response.data.status) {
                    this.featCategProduct =response.data.products
                    this.pProducts = response.data.products;
                    this.dailyProducts = response.data.products;
                    this.topProduct = response.data.products
                }
            }
        },
    },
    async mounted(){
        await this.init();

        await this.fetchFeaturedProducts().then(() => {
        });

        await this.fetchNewArrivalProducts().then(() => {

        });

        await sliderSetup.initAfterPage();

        await $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $(this).html(event.strftime("" + '<span class="countdown-section"><span class="countdown-amount hover-up">%D</span><span class="countdown-period"> days </span></span>' + '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> hours </span></span>' + '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> mins </span></span>' + '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period text-dark"> sec </span></span>'));
        });
    });

    }

    }
</script>