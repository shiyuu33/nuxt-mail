<script setup lang="ts">
import MailSection from "@/components/mails/MailSection.vue";
import MailBox from "@/components/mails/MailBox.vue";
import MailText from "@/components/mails/MailText.vue";
definePageMeta({
    layout: "dev"
})
const router = useRouter();
const targetRoutes = router.options.routes.filter(route => route.path !== '/')

</script>
<template>
    <Head>
        <Title>Top</Title>
    </Head>
    <MailSection>
        <MailBox>
            <MailText v-for="route in targetRoutes" :key="route.path">
                <a :href="`.${route.path}`">
                    {{ route.path }}
                </a>
            </MailText>
        </MailBox>
    </MailSection>
</template>