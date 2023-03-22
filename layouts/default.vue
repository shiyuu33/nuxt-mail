<script setup lang="ts">
import TheBody, { TheBodyCssProperty } from "@/components/layouts/TheBody.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

const bodyStyle: TheBodyCssProperty = {
    divStyle: {
        backgroundColor: "#f5f5f5"
    }
}

</script>
<template>
    <Head>
        <Html lang="ja" />
        <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <Meta name="x-apple-disable-message-reformatting" />
        <Style type="text/css">
            body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            p {
                margin: 0;
            }
        </Style>
    </Head>
    <TheBody :style="bodyStyle">
        <TheHeader />
        <slot />
        <TheFooter />
    </TheBody>
</template>