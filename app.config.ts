export default defineAppConfig({
  ui: {
    primary: "orange",
    gray: "slate",
    footer: {
      bottom: {
        left: "text-sm text-gray-500 dark:text-gray-400",
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
  },
  seo: {
    siteName: "Postal - the open source mail delivery platform",
  },
  header: {
    logo: {
      alt: "Postal",
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    search: true,
    links: [
      {
        label: "Docs",
        to: "/docs",
        icon: "i-heroicons-book-open-solid",
        "aria-label": "Docs",
      },
      {
        label: "Code",
        icon: "i-simple-icons-github",
        to: "https://github.com/postalserver",
        target: "_blank",
        "aria-label": "Postal on GitHub",
      },
      

    ],
  },
  footer: {
    credits: {
      label: "Built with Nuxt UI Pro",
      to: "https://ui.nuxt.com/pro",
    },
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-discord",
        to: "https://discord.postalserrver.io",
        target: "_blank",
        "aria-label": "Postal on Discord",
      },
      {
        icon: "i-simple-icons-x",
        to: "https://x.com/postalserverio",
        target: "_blank",
        "aria-label": "Postal on X",
      }, 
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/postalserver/postal",
        target: "_blank",
        "aria-label": "Postal on GitHub",
      },
    ],
  },
  toc: {
    title: "Table of Contents",

    bottom: {
      title: "Community",
      edit: "https://github.com/postalserver/docs/tree/main/content",
      links: [
        {
          icon: "i-heroicons-star",
          label: "Star on GitHub",
          to: "https://github.com/postalserver",
          target: "_blank",
        },
        {
          icon: "i-heroicons-chat-bubble-left-right",
          label: "Ask a question",
          to: "https://github.com/postalserver/postal/discussions",
          target: "_blank",
        }
      ],
    },
  },
});
