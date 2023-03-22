<script setup lang="ts">
import TheBody from "@/components/layouts/TheBody.vue";

</script>
<template>
    <Head>
        <Html lang="ja" />
        <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <Meta name="x-apple-disable-message-reformatting" />
    </Head>
    <TheBody>
        <slot />
    </TheBody>
</template>