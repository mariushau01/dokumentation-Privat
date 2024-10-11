import { defineConfig } from 'vitepress'
import path from 'path';
import generateSidebar from "./generateSidebar";
import markdownItFootnote from 'markdown-it-footnote'
import markdownItSup from 'markdown-it-sup'
import markdownItSub from 'markdown-it-sub'
import markdownItMark from 'markdown-it-mark'
import markdownItDeflist from 'markdown-it-deflist'
import { withMermaid } from "vitepress-plugin-mermaid";



export default withMermaid({
  // your existing vitepress config...
  title: "Digitale Mappe",
  description: "Mitschrift im Unterricht",
  srcDir: 'docs',
  lastUpdated: true,
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(markdownItFootnote)
      md.use(markdownItSup)
      md.use(markdownItSub)
      md.use(markdownItMark)
      md.use(markdownItDeflist)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Mitschrift', link: '/notes/allgemeines' },
      { text: 'Blog', link: '/blog' }
    ],

    footer: {
      message: 'Digitale Mappe - Mitschrift im Unterricht',
      copyright: 'Copyright &copy; 2024-jetzt Max Muster'
    },

    externalLinkIcon: true,

    search: {
      provider: 'local'
    },

    // sidebar: generateSidebar(path.resolve('docs/notes')),
    sidebar: {
      '/notes/': generateSidebar(path.resolve('docs/notes'))
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});

// https://vitepress.dev/reference/site-config
