<script setup lang="ts">
import type { CSSProperties } from 'vue';

export type MailTextCSSProperties = {
    tdStyle?: CSSProperties
}

const props = withDefaults(defineProps<{
    id?: string,
    align?: "left" | "center" | "right" | "justify" | "char",
    style?: MailTextCSSProperties
}>(), {
    align: "left",
})

const mailTextStyle: MailTextCSSProperties = {
    tdStyle: {
        padding: "10px 25px",
        wordBreak: "break-word"
    }
}

</script>
<template>
    <!-- start MailText -->
    <tr :id="props.id">
        <td :align="props.align" :style="{...mailTextStyle.tdStyle, ...props.style?.tdStyle}">
            <slot />
        </td>
    </tr>
    <!-- end MailText -->
</template>
