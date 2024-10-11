// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import BlogPostList from "./components/BlogPostList.vue";
import Pagination from "./components/Pagination.vue";

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component('BlogPostList', BlogPostList)
        app.component('Pagination', Pagination)
    }
}