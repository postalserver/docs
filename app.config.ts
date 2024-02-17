export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "slate",
    footer: {
      bottom: {
        left: "text-sm text-gray-500 dark:text-gray-400",
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
  },
  seo: {
    siteName: "Postal - The Mail Delivery Service",
  },
  header: {
    logo: {
      alt: "postak logo",
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/nuxt-ui-pro/docs",
        target: "_blank",
        "aria-label": "Docs template on GitHub",
      },
    ],
  },
  footer: {
    credits: {
      label: "Built with Nuxt UI",
      to: "https://ui.nuxt.com",
    },
    colorMode: false,
    links: [
/*       {
        icon: "i-simple-icons-nuxtdotjs",
        to: "https://nuxt.com",
        target: "_blank",
        "aria-label": "Nuxt Website",
      },
      {
        icon: "i-simple-icons-discord",
        to: "https://discord.com/invite/ps2h6QT",
        target: "_blank",
        "aria-label": "Nuxt UI on Discord",
      },
      {
        icon: "i-simple-icons-x",
        to: "https://x.com/nuxt_js",
        target: "_blank",
        "aria-label": "Nuxt on X",
      }, */
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
