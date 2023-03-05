<template>
    <!-- Related Products Start-->
    <div class="col-lg-3 col-md-4 col-12 col-sm-6">
        <div class="product-cart-wrap hover-up">
            <div class="product-img-action-wrap">
                <div class="product-img product-img-zoom">
                    <nuxt-link :to="`/product/${slug}`" tabindex="0">
                        <img class="default-img" :src="normalImage" alt="" />
                        <img class="hover-img" :src="hoverImage" alt="" />
                    </nuxt-link>
                </div>
                <div class="product-action-1">
                    <a aria-label="Quick view" class="action-btn small hover-up" data-bs-toggle="modal"
                        data-bs-target="#quickViewModal"><i class="fi-rs-search"></i></a>
                    <!-- <a aria-label="Add To Wishlist" class="action-btn small hover-up" href="shop-wishlist.html" tabindex="0"><i class="fi-rs-heart"></i></a> -->
                    <nuxt-link aria-label="/Compare" class="action-btn small hover-up" :to="`/product/${slug}`"
                        tabindex="0"><i class="fi-rs-shuffle"></i></nuxt-link>
                </div>
                <div class="product-badges product-badges-position product-badges-mrg">
                    <span class="hot">Hot</span>
                </div>
            </div>
            <div class="product-content-wrap">
                <h2><nuxt-link :to="`/product/${slug}`" tabindex="0">{{ title }}</nuxt-link></h2>
                <div class="rating-result" title="90%">
                    <span> </span>
                </div>
                <div class="product-price">
                    <span><i class="fa-solid fa-indian-rupee-sign"></i> {{ salePrice }}/-</span>
                    <span class="old-price"><i class="fa-solid fa-indian-rupee-sign"></i> {{ mainPrice }}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Related Products End-->

</template>

<script>
import { useCartStore } from '~~/stores/cart'

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
    methods: {
        addToCart() {
            const cartStore = useCartStore();
            var productData = {
                id: this.id,
                image: this.normalImage,
                title: this.title,
                qty: 1,
                price: this.salePrice,
            };
            cartStore.addProductToCart(productData);
            console.log(cartStore.cartList);
        }
    }
}
</script>