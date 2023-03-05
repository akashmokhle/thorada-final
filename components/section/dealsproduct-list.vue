<template>
    <div>
        <!-- DEAL OF THE DAY END -->
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="product-cart-wrap style-2">
                <div class="product-img-action-wrap">
                    <div class="product-img">
                        <nuxt-link :to="`/product/${slug}`">
                            <img :src="normalImage" alt="" />
                        </nuxt-link>
                    </div>
                </div>
                <div class="product-content-wrap">
                    <div class="deals-countdown-wrap">
                        <div class="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                    </div>
                    <div class="deals-content">
                        <h2><nuxt-link :to="`/product/${slug}`">{{ title }}</nuxt-link></h2>
                        <div class="product-rate-cover">
                            <div class="product-rate d-inline-block">
                                <div class="product-rating" style="width: 90%"></div>
                            </div>
                            <span class="font-small ml-5 text-muted"> (4.0)</span>
                        </div>
                        <div>
                            <span class="font-small text-muted">By <a href="vendor-details-1.html"></a></span>
                        </div>
                        <div class="product-card-bottom" style="margin-top: -2px;">
                            <div class="product-price">
                                <span><i class="fa-solid fa-indian-rupee-sign"></i> {{ salePrice }}/-</span>
                                <span class="old-price"><i class="fa-solid fa-indian-rupee-sign"></i> {{ mainPrice }}</span>
                            </div>
                        </div>
                        <div class="px-0 pt-3 d-flex cart">
                            <div class="px-2 emi">
                                <a href="" class="btn px-4 hover-up"><i class="fa-solid fa-indian-rupee-sign"></i> EMI</a>
                            </div>
                            <div class="px-2 add ">
                                <a href="javascript:void(0)" @click="addToCart" class="btn px-4 hover-up"><i
                                        class="fa-solid fa-cart-shopping"></i> Add</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- DEAL OF THE DAY END -->

    </div>
</template>

<script>

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

<style>
.product-cart-wrap:hover {
    box-shadow: inset;
}

.cart .emi a {
    padding: 4px;
    background-color: #ffc107;
}

.cart .emi a:hover {
    padding: 4px;
    background-color: #3BB77E;
}

.cart .add a {
    padding: 4px;
}
</style>