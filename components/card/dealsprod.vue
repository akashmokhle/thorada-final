<template>
    <div>
        <!-- DEAL OF THE DAY END -->
        <section class="section-padding pb-5">
                <div class="container">
                    <div class="section-title">
                        <h3 class="">Deals Of The Day</h3>
                        <a class="show-all" href="shop-grid-right.html">
                            All Deals
                            <i class="fi-rs-angle-right"></i>
                        </a>
                    </div>
                    <div class="row">
                        <SectionDealsproductList class="col-sm-3" v-for="fp in products" 
                                :id="fp.p_id"
                                :title="fp.p_name" 
                                :slug="fp.p_slug"
                                :normalImage="baseUrl+fp.product_medias[0].pm_image" 
                                :hoverImage="baseUrl+fp.product_medias[0].pm_image" 
                                :isDiscount="fp.p_in_discount"
                                :isSale="fp.p_in_sale"
                                :mainPrice="fp.p_price" 
                                :salePrice="fp.p_sale_price" 
                                :discountPercent="fp.p_discount_percent" 
                                :category="fp.p_categories"
                                :isNew="true" />

                    </div>
                </div>
            </section>
            <!-- DEAL OF THE DAY END -->
    </div>
</template>

<script>

import { baseurl } from '~~/config/url';

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

        }
    }
</script>