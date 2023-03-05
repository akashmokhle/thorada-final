<template>
    <div>
        <Header/>
        <slot/>
        <Footer/>
    </div>
</template>

<script>

export default {
    async mounted() {
        $.scrollUp({
        scrollText: '<i class="fi-rs-arrow-small-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });
    }
}

</script>