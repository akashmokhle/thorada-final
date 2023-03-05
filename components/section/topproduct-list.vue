<template>
    <div class="product-list-small animated animated">
        <article class="row align-items-center hover-up py-1">
            <figure class="col-md-4 mb-0">
                <nuxt-link :to="`/product/${slug}`"><img :src="normalImage" alt="" /></nuxt-link>
            </figure>
            <div class="col-md-8 mb-0">
                <h6>
                    <nuxt-link :to="`/product/${slug}`">{{ title }}</nuxt-link>
                </h6>
                <div class="product-rate-cover">
                    <div class="product-rate d-inline-block">
                        <div class="product-rating" style="width: 90%"></div>
                    </div>
                    <span class="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div class="product-price">
                    <span><i class="fa-solid fa-indian-rupee-sign"></i> {{ salePrice }}/-</span>
                    <span class="old-price"><i class="fa-solid fa-indian-rupee-sign"></i> {{ mainPrice }}</span>
                </div>
            </div>
        </article>
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