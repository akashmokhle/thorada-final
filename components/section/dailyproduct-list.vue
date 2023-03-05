<template>
        <!-- Daily Best Sells -->

    <div class="product-cart-wrap">
        <div class="product-img-action-wrap">
            <div class="product-img product-img-zoom">
                <nuxt-link :to="`/product/${slug}`">
                    <img class="default-img" :src="normalImage" alt="" />
                    <img class="hover-img" :src="hoverImage" alt="" />
                </nuxt-link>
            </div>
            <div class="product-action-1">
                <a aria-label="Quick view" class="action-btn small hover-up" data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"> <i class="fi-rs-eye"></i></a>
                <!-- <a aria-label="Add To Wishlist" class="action-btn small hover-up" href="/wishlist"><i
                        class="fi-rs-heart"></i></a> -->
                <a aria-label="Compare" class="action-btn small hover-up" href="/compare"><i class="fi-rs-shuffle"></i></a>
            </div>
            <div class="product-badges product-badges-position product-badges-mrg">
                <span v-if="isNew" class="hot">Save 15%</span>
            </div>
        </div>
        <div class="product-content-wrap">
            <div class="product-category">
                <a href="shop-grid-right.html">{{ brandName }}</a>
            </div>
            <h2><nuxt-link :to="`/product/${slug}`">{{ title }}</nuxt-link></h2>
            <div class="product-rate d-inline-block">
                <div class="product-rating" style="width: 80%"></div>
            </div>
            <div class="product-price mt-10">
                <span><i class="fa-solid fa-indian-rupee-sign"></i> {{ salePrice }}/-</span>
                <span class="old-price"><i class="fa-solid fa-indian-rupee-sign"></i> {{ mainPrice }}</span>
            </div>
            <div class="sold mt-15 mb-15">
                <div class="progress mb-5">
                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <span class="font-xs text-heading"> Sold: 90/120</span>
            </div>
            <a href="javascript:void(0)" @click="addToCart" class="btn w-100 hover-up"><i class="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
        </div>
    </div>
        <!-- Daily Best Sells -->

</template>

<script>

import { sliderSetup } from '~~/config/sliders';


export default {
    props: {
        id: {
            default: 0
        },
        title: {
            default: ""
        },
        slug: {
            default: ""
        },
        image: {
            default: ""
        },
        normalImage: {
            defalut: ""
        },
        hoverImage: {
            defaut: ""
        },
        isDiscount: {
            default: false
        },
        isSale: {
            default: false
        },
        mainPrice: {
            default: "0.00"
        },
        salePrice: {
            default: "0.00"
        },
        discountPercent: {
            default: "0"
        },
        isNew: {
            default: false
        }
    },

}
</script>