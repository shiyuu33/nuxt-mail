<script setup lang="ts">
import {useComment} from "@/composables/useComment"

const props = defineProps<{
    startTag: string,
    endTag: string
}>()

const StartTag = useComment(props.startTag)
const EndTag = useComment(props.endTag)

</script>
<template>
    <StartTag/> 
        <slot />
    <EndTag />
</template>