<script setup lang="ts">
import MailSection from "@/components/mails/MailSection.vue";
import MailImage from "@/components/mails/MailImage.vue";
import MailBox from "@/components/mails/MailBox.vue";

type MailSectionCSSProperties = {
    divStyle?: any,
    tableStyle?: any,
    tdStyle?: any
}


const runtimeConfig = useRuntimeConfig();
const imagePath = runtimeConfig.public.IMG_PATH

const heroMailSectionStyle: MailSectionCSSProperties = {
    tableStyle: {
        backgroundRepeat: "repeat",
        textAlign: "center",
        verticalAlign: "top"
    }
}

</script>
<template>
    <MailSection :style="heroMailSectionStyle">
        <MailBox>
            <MailImage align="center" width="600px" :src="`${imagePath}/600x600.png`"/>
        </MailBox>
    </MailSection>
</template>