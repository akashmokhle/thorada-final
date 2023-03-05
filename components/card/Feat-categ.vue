<template>
    <!-- <section class="popular-categories section-padding">
        <div class="container wow animate__animated animate__fadeIn">
            <div class="section-title">
                <div class="title">
                    <h3>Featured Categories</h3>
                </div>
                <div class="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                    id="carausel-10-columns-arrows"></div>
                    
                <div class="row">
                    <SectionFeaturedCategList class="col-sm-3" v-for="fp in products" :id="fp.p_id" :title="fp.p_name"
                        :slug="fp.p_slug" :normalImage="baseUrl + fp.product_medias[0].pm_image"
                        :hoverImage="baseUrl + fp.product_medias[0].pm_image" :isDiscount="fp.p_in_discount"
                        :isSale="fp.p_in_sale" :mainPrice="fp.p_price" :salePrice="fp.p_sale_price"
                        :discountPercent="fp.p_discount_percent" :category="fp.p_categories" :isNew="true" />
                </div>
            </div>
        </div>

    </section> -->
</template>
<script>

// import { baseurl } from '~~/config/url';

// export default {
//     props: {
//         products: {
//             default: []
//         }
//     },
//     data() {
//         return {
//             baseUrl: baseurl
//         }
//     },
//     async mounted() {

//     }
// }
</script>