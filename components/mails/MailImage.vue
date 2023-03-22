<script setup lang="ts">
import type { CSSProperties } from 'vue';

export type MailImageCssProperties = {
    tdStyle?: CSSProperties,
    tableStyle?: CSSProperties,
    imageStyle?: CSSProperties
}

const props = withDefaults(defineProps<{
    id?: string,
    align?: "left" | "center" | "right" | "justify" | "char",
    width: string,
    src: string,
    style?: MailImageCssProperties
    }>(), {
    align: "left",
})

const mailImageStyle: MailImageCssProperties = {
    tdStyle: {
        fontSize: "0px",
        wordBreak: "break-word",
    },
    tableStyle: {
        borderCollapse:"collapse",
        borderSpacing:"0px",     
    },
    imageStyle: {
        border: 0,
        height: "auto",
        lineHeight: "100%",
        width: "100%",
        outline: "none",
        textDecoration: "none",
    }
}

</script>
<template>
    <!-- start MailImage -->
    <tr :id="props.id">
        <td :align="props.align" :style="{...mailImageStyle.tdStyle, ...props.style?.tdStyle}">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" :style="{...mailImageStyle.tableStyle, ...props.style?.tableStyle}">
                <tbody>
                    <tr>
                        <td :style="{width: props.width}">
                            <img :src="props.src" width="100" height="auto" :style="{...mailImageStyle.imageStyle, ...props.style?.imageStyle}" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <!-- end MailImage -->
</template>