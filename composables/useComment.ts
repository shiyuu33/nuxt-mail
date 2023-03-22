import { h, Comment } from 'vue'
export const useComment = (tag: string) => {
    return () => h(Comment, "<!--[if mso | IE]>"+tag+"<![endif]-->");
}