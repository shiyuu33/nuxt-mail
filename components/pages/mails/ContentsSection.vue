<script setup lang="ts">
import MailSection from "@/components/mails/MailSection.vue";
import MailBox from "@/components/mails/MailBox.vue";
import MailText from "@/components/mails/MailText.vue";

const descriptionMailSectionStyle: any = {
    tableStyle: {
        padding: "40px 0",
    },
    tdStyle: {
        backgroundColor: "#fff",
        display: "block",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
    }
}

const descriptionMailTextStyle: any = {
    tdStyle: {
        fontSize: "20px",
        color: "#00bd6f"
    }
}

</script>
<template>
    <MailSection :style="descriptionMailSectionStyle">
        <MailBox>
            <MailText align="center" :style="descriptionMailTextStyle">
                HELLO, WORLD
            </MailText>
            <MailText align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet tenetur praesentium a doloribus excepturi voluptatem consequatur alias autem sapiente? Sit corrupti cupiditate aperiam pariatur minus sunt ea, nemo molestiae.
            </MailText>
        </MailBox>
    </MailSection>
</template>