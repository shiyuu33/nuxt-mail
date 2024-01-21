<script setup lang="ts">
import type { CSSProperties } from "vue";
import { media } from "@/utils/media"
import MailerComments from "@/components/partials/MailerComments.vue"


type TheBodyCssProperty = {
    divStyle: CSSProperties
}

const props = withDefaults(defineProps<{
    style?: TheBodyCssProperty,
    tableAttr?: {
        width?: number,
        bgColor?: string
    }
}>(), {
    tableAttr: () => (
        {
        width: media.default,
        bgColor: ""
    }
    )
});

const theBodyStyle: TheBodyCssProperty = {
    divStyle: {
        maxWidth: `${media.default}px`,
        margin: "0 auto",
        backgroundColor: "#fff"
    }
}

const startComment: string = `<table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:${props.tableAttr?.width}px;" width="${props.tableAttr?.width}" bgcolor="${props.tableAttr?.bgColor}"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">`
const endComment: string = `</td></tr></table>`

</script>
<template>
    <MailerComments
    :start-tag="startComment"
    :end-tag="endComment"
    >
        <div :style="{...theBodyStyle.divStyle, ...props.style?.divStyle}">
            <slot />
        </div>
    </MailerComments>
</template>