<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { media } from "@/utils/media"
import MailerComments from "@/components/partials/MailerComments.vue"


export type MailSectionCSSProperties = {
    divStyle?: CSSProperties,
    tableStyle?: CSSProperties,
    tdStyle?: CSSProperties
}

const props = withDefaults(defineProps<{
    id?: string,
    class?: string,
    style?: MailSectionCSSProperties,
    tableAttr?: {
        width?: number,
        bgColor?: string
    }
}>(),{
    tableAttr: () => ({
        width: media.default,
        bgColor: ""
    })
})

const mailSectionStyle: MailSectionCSSProperties = {
    tdStyle: {
        textAlign: "center",
        direction: "ltr",
    }
}

// mso tag
const startComment: string = `<table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:${props.tableAttr?.width}px;" width="${props.tableAttr?.width}" bgcolor="${props.tableAttr?.bgColor ?? ''}"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">`
const endComment: string = `</td></tr></table>`


</script>

<template>
    <!-- start MailSection -->
    <MailerComments
    :start-tag="startComment"
    :end-tag="endComment"
    >
    <div :class="props.class" :style="{...mailSectionStyle.divStyle, ...props.style?.divStyle}">
        <table :id="props.id" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" :style="{...mailSectionStyle.tableStyle, ...props.style?.tableStyle}">
            <tbody>
                <tr>
                    <td :style="{...mailSectionStyle.tdStyle, ...props.style?.tdStyle}">
                        <slot />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </MailerComments>
    <!-- end MailSection -->
</template>