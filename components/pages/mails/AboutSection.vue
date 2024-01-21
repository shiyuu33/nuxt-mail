<script setup lang="ts">
import MailSection from "@/components/mails/MailSection.vue";
import MailImage from "@/components/mails/MailImage.vue";
import MailText from "@/components/mails/MailText.vue";
import MailBox from "@/components/mails/MailBox.vue";

const runtimeConfig = useRuntimeConfig();
const imagePath = runtimeConfig.public.IMG_PATH

const aboutMailSectionStyle: any = {
    tableStyle: {
        backgroundRepeat: "repeat",
        textAlign: "center",
        verticalAlign: "top",
        padding: "40px 0"
    }
}

const aboutMailBoxStyle: any = {
    tableStyle: {
        verticalAlign: "top",
    }
}

const aboutList = [
    {
        title: "aaa",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        imageSrc: `${imagePath}/150x150.png`
    },
    {
        title: "bbb",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        imageSrc: `${imagePath}/150x150.png`
    },
    {
        title: "ccc",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        imageSrc: `${imagePath}/150x150.png`
    },
]

</script>
<template>
    <Head>
        <Style type="text/css">
            .p-aboutMail__mailBox {
                    max-width: 32%
                }
        </Style>
    </Head>
    <MailSection :style="aboutMailSectionStyle">
        <MailBox
        v-for="(item, index) in aboutList"
        :key="index"
        :style="aboutMailBoxStyle"
        :table-attr="{
            width: 192
        }"
        class="p-aboutMail__mailBox"
        >
            <MailImage align="center" width="100px" :src="item.imageSrc"/>
            <MailText align="center">
                <span>{{ item.title }}</span><br />
                <p>{{ item.description }}</p>
            </MailText>
        </MailBox>
    </MailSection>
</template>