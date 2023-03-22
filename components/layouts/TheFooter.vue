<script setup lang="ts">
import MailSection, { MailSectionCSSProperties } from "@/components/mails/MailSection.vue";
import MailBox, { MailBoxCSSProperties } from "@/components/mails/MailBox.vue";
import MailText, { MailTextCSSProperties } from "@/components/mails/MailText.vue";

const mailSectionStyle: MailSectionCSSProperties = {
    tableStyle: {
        backgroundColor: "#00bd6f",
        padding: "20px"
    }
}

const mailBoxStyle: MailBoxCSSProperties = {
    tableStyle: {
        display: "inline",
        textAlign: "center"
    }
}

const mailTextStyle: MailTextCSSProperties = {
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