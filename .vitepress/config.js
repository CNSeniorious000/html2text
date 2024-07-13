export default {
  title: "html2text2",
  description: "Turn HTML into equivalent Markdown-structured text.",
  metaChunk: true,
  srcExclude: ["test"],
  base: "/html2text/",
  themeConfig: {
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Alir3z4/html2text" },
    ],
    sidebar: [
      {
        text: "Guides",
        items: [
          { text: "Introduction", link: "/" },
          {
            text: "Docs",
            link: "/docs",
            items: [
              { text: "About", link: "/docs/about" },
              { text: "How it works", link: "/docs/how_it_works" },
              { text: "Usage", link: "/docs/usage" },
              { text: "Tests", link: "/docs/test" },
              { text: "Authors", link: "docs/authors" },
            ],
          },
        ],
      },
    ],
  },
};
