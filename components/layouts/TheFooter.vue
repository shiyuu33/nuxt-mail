<script setup lang="ts">
import MailSection from "@/components/mails/MailSection.vue";
import MailBox from "@/components/mails/MailBox.vue";
import MailText from "@/components/mails/MailText.vue";

const mailSectionStyle: any = {
    tableStyle: {
        backgroundColor: "#00bd6f",
        padding: "20px"
    }
}

const mailBoxStyle: any = {
    tableStyle: {
        display: "inline",
        textAlign: "center"
    }
}

const mailTextStyle: any = {
    tdStyle: {
        color: "#fff"
    }
}

</script>
<template>
    <MailSection :style="mailSectionStyle">
        <MailBox :style="mailBoxStyle">
            <MailText align="center" :style="mailTextStyle">
                footer
            </MailText>
        </MailBox>
    </MailSection>
</template>