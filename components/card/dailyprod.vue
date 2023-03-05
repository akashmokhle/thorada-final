<template>
    <div>
        <!-- Daily Best Sells -->
        <section class="section-padding pb-5">
            <div class="container">
                <div class="section-title">
                    <h3 class="">Daily Best Sells</h3>
                </div>
                <div class="row">
                    <div class="col-lg-3 d-none d-lg-flex">
                        <div class="banner-img style-2" style="background-image: url('https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');">
                            <div class="banner-text">
                                <img src="" alt="">
                                <h2 class="mb-100">Bring nature into your home</h2>
                                <a href="shop-grid-right.html" class="btn btn-xs">Shop Now <i
                                        class="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-12">
                        <div class="tab-content" id="myTabContent-1">
                            <div class="tab-pane fade show active" id="tab-one-1" role="tabpanel"
                                aria-labelledby="tab-one-1">
                                <div class="carausel-4-columns-cover arrow-center position-relative">
                                    <div class="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                        id="carausel-4-columns-arrows"></div>
                                    <div class="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
                                        <SectionDailyproductList v-for="fp in products" :id="fp.p_id" :title="fp.p_name"
                                            :slug="fp.p_slug" :normalImage="baseUrl + fp.product_medias[0].pm_image"
                                            :hoverImage="baseUrl + fp.product_medias[0].pm_image"
                                            :isDiscount="fp.p_in_discount" :isSale="fp.p_in_sale" :mainPrice="fp.p_price"
                                            :salePrice="fp.p_sale_price" :discountPercent="fp.p_discount_percent"
                                            :category="fp.p_categories" :isNew="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- Daily Best Sells -->
    </div>
</template>

<script>

import { baseurl } from '~~/config/url';
import { sliderSetup } from '~~/config/sliders';

export default {
    props: {
        products: {
            default: []
        }
    },
    data() {
        return {
            baseUrl: baseurl
        }
    },
    async mounted() {
        await this.init();
    },
    methods: {
        
        async init() {
            if(this.products.length > 0) {
                await sliderSetup.initAfterPage();
            }
        }
    }
}
</script>