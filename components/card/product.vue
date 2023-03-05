<template>
    <div>
        <!-- POPULAR PRODUCTS START -->
        <section class="product-tabs section-padding position-relative ">
            <div class="container">
                <div class="section-title style-2">
                     <h3>Latest Products</h3>
                </div>
                <!--End nav-tabs-->
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4">
                                <SectionProductsList v-for="fp in products" 
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
                        
                        <!--End product-grid-4-->
                    </div>
                    <!--En tab one-->
                </div>
                <!--End tab-content-->
            </div>
        </section>
        <!-- POPULAR PRODUCTS END -->








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