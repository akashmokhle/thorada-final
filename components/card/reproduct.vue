<template>
        <!-- Related Products Start-->
    <div>
        <div class="row mt-60">
            <div class="col-12">
                <h2 class="section-title style-1 mb-30">Related products</h2>
            </div>
            <div class="col-12">
                <div class="row related-products">
                    <SectionReproductList v-for="fp in products" :id="fp.p_id" :title="fp.p_name" :slug="fp.p_slug"
                        :normalImage="baseUrl + fp.product_medias[0].pm_image"
                        :hoverImage="baseUrl + fp.product_medias[0].pm_image" :isDiscount="fp.p_in_discount"
                        :isSale="fp.p_in_sale" :mainPrice="fp.p_price" :salePrice="fp.p_sale_price"
                        :discountPercent="fp.p_discount_percent" :category="fp.p_categories" :isNew="true" />
                </div>

            </div>
        </div>
    </div>
        <!-- Related Products End-->

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