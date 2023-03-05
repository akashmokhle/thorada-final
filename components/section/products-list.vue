<template>
        <!-- POPULAR PRODUCTS START -->
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div class="product-cart-wrap mb-30 ">
                    <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                            <nuxt-link :to="`/product/${slug}`">
                                <img class="default-img" :src="normalImage" alt="" />                                                    
                                <img class="hover-img" :src="hoverImage" alt="" />
                            </nuxt-link>
                        </div>
                        <div class="product-action-1">
                            <!-- <a aria-label="Add To Wishlist" class="action-btn" href="/wishlist"><i class="fi-rs-heart"></i></a> -->
                            <a aria-label="Compare" class="action-btn" href="/compare"><i class="fi-rs-shuffle"></i></a>
                            <a aria-label="Quick view" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i class="fi-rs-eye"></i></a>
                        </div>
                        <div class="product-badges product-badges-position product-badges-mrg">
                            <span v-if="isNew"  class="hot">Hot</span>
                        </div>
                    </div>
                    <div class="product-content-wrap">
                        <div class="prouct-category">
                            <a href="shop-grid-right.html">{{brandName}}</a>
                        </div>
                            <h2><nuxt-link :to="`/product/${slug}`">{{title}}</nuxt-link></h2>
                        <div class="product-rate-cover">
                            <div class="product-rate d-inline-block">
                                <div class="product-rating" style="width: 90%"></div>
                            </div>
                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                        <div>
                            <span class="font-small text-muted">By <a href="vendor-details-1.html">{{ productBy }}</a></span>
                        </div>
                        <div class="product-card-bottom" style="margin-top: -2px;">
                            <div class="product-price">
                                <span><i class="fa-solid fa-indian-rupee-sign"></i> {{salePrice}}/-</span>
                                <span class="old-price"><i class="fa-solid fa-indian-rupee-sign"></i> {{ mainPrice }}</span>
                            </div>
                        </div>
                        <div class="py-0 d-flex cart" style="margin: 5%; height: 30px; width: 100%;"  >
                            <div class="px-2 emi" >
                                <nuxt-link class="btn px-3 hover-up " :to="`/product/${slug}/emi`"><i class="fa-solid fa-indian-rupee-sign"></i> EMI</nuxt-link>
                            </div>
                            <div class="px-2 add">
                                <a href="javascript:void(0)" @click="addToCart"  class="px-4 btn hover-up "><i class="fa-solid fa-cart-shopping"></i> Add</a>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!--end product card-->

        <!-- POPULAR PRODUCTS END -->
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

<style>
    .product-cart-wrap:hover{
        box-shadow: inset;
    }

    .cart .emi a{
        padding: 4px;
        background-color: #ffc107;
    }
    .cart .emi a:hover{
        padding: 4px;
        background-color: #3BB77E;
    }
    .cart .add a{
        padding: 4px;
    }
</style>