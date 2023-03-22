import { filterHtmlTag } from "@/utils/filterTag"
const mailerComment: string = `
<!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
<![endif]-->
`;
export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        const runtimeConfig = useRuntimeConfig();
        if(runtimeConfig.public.NODE_ENV === "production") {
            console.log("render:html", html)
            html.bodyAppend = []
            const headAttrs = html.head.filter((inputText: string) => !filterHtmlTag(inputText, "<link"))
            html.head = [...headAttrs, mailerComment]
        } else {
            html.head = [...html.head, mailerComment]   
        }
    });
});