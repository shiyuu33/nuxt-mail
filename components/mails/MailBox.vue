<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { media } from "@/utils/media"
import MailerComments from "@/components/partials/MailerComments.vue"

export type MailBoxCSSProperties = {
    divStyle?: CSSProperties,
    tableStyle: CSSProperties,
}

const props = withDefaults(defineProps<{
    id?: string,
    style?: MailBoxCSSProperties,
    class?: string,
    tableAttr?: {
        width?: number,
        bgColor?: string
    }
}>(), {
    tableAttr: () => ({
        width: media.default,
        bgColor: ""
    })
})

const mailBoxStyle: MailBoxCSSProperties = {
    divStyle: {
        width: "100%",
        display: "inline-block",
        direction: "ltr",
        verticalAlign: "top",
    },
    tableStyle: {
        verticalAlign: "top",
    }
} 

const startComment: string = `<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:${props.tableAttr?.width}px;" bgcolor="${props.tableAttr?.bgColor ?? ''}">`
const endComment: string = `</td></tr></table>`

</script>
<template>
    <!-- start MailBox -->
    <MailerComments
    :start-tag="startComment"
    :end-tag="endComment"
    >
    <div :class="props.class" :style="{...mailBoxStyle.divStyle, ...props.style?.divStyle}">
        <table :id="props.id" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" :style="{...mailBoxStyle.tableStyle, ...props.style?.tableStyle}">
            <tbody>
                <slot />
            </tbody>
        </table>
    </div>
    </MailerComments>
    <!-- end MailBox -->
</template>