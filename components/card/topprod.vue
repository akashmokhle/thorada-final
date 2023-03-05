<template>
    <div>
        <section class="section-padding mb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                            <h4 class="section-title style-1 mb-30 animated animated">Top Selling</h4>

                        <div>
                            <SectionTopproductList v-for="fp in products" 
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
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                            <h4 class="section-title style-1 mb-30 animated animated">Recently added</h4>

                        <div>
                            <SectionTopproductList v-for="fp in products" 
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
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                            <h4 class="section-title style-1 mb-30 animated animated">Trending Products</h4>

                        <div>
                            <SectionTopproductList v-for="fp in products" 
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
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                            <h4 class="section-title style-1 mb-30 animated animated">Top Selling</h4>

                        <div>
                            <SectionTopproductList v-for="fp in products" 
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

                    </div>
                </div>
            </section>
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