// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const docsRepo = 'https://github.com/ngrok/ngrok-docs'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ngrok documentation',
  tagline: 'online in one line',
  url: 'https://docs-test.sudobinbash.com',
  baseUrl: '/docs2/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ngrok', // Usually your GitHub org/user name.
  projectName: 'ngrok-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'pt-br'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: `${docsRepo}/edit/master`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // [
    //   'redocusaurus',
    //   {
    //     // Plugin Options for loading OpenAPI files
    //     specs: [
    //       {
    //         spec: 'openapi/ngrok_openapi.yml',
    //         route: '/docs/api/',
    //       },
    //     ],
    //     // Theme Options for modifying how redoc renders them
    //     theme: {
    //       // Change with your site colors
    //       primaryColor: '#1890ff',
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ngrok docs',
        logo: {
          alt: 'ngrok',
          src: 'img/ngrok-black.svg',
          srcDark: 'img/ngrok-white.svg',
        },
        items: [
          // {to: '/', label: 'Docs', position: 'left'},
          // {to: '/docs/api/', label: 'API', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Index',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: docsRepo,
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'SPPRT3GDNI',
        apiKey: 'e02fb8e0c4d8c7968396981d7ecb9fa8',
        indexName: 'dev_ngrok',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Get Started',
                to: '/guides/getting-started',
              },
              {
                label: 'Sign up',
                to: 'https://dashboard.ngrok.com/signup',
              },
              {
                label: 'Login',
                to: 'https://dashboard.ngrok.com/login',
              },
              {
                label: 'Download',
                to: 'https://ngrok.com/download',
              },
            ],
          },
          {
            title: 'Service',
            items: [
              {
                label: 'Product',
                to: 'https://ngrok.com/product',
              },
              {
                label: 'Pricing',
                to: 'https://ngrok.com/pricing',
              },
              {
                label: 'Docs',
                to: 'https://ngrok.com/docs',
              },
              {
                label: 'Trust Portal',
                to: 'https://trust.ngrok.com',
              },
              {
                label: 'Service Status',
                to: 'https://status.ngrok.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://ngrok.com/slack',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ngrok',
              },
              {
                label: 'File Doc Issues',
                href: `${docsRepo}/issues`,
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Abuse',
                to: 'https://ngrok.com/abuse',
              },
              {
                label: 'DPA',
                to: 'https://ngrok.com/dpa',
              },
              {
                label: 'Privacy',
                to: 'https://ngrok.com/privacy',
              },
              {
                label: 'Security',
                to: 'https://ngrok.com/security',
              },
              {
                label: 'Terms of service',
                to: 'https://ngrok.com/tos',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Careers',
                to: 'https://ngrok.com/careers',
              },
              {
                label: 'Blog',
                to: 'https://blog.ngrok.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ngrokHQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/ngrok',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ngrok',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ngrok. <a href="https://blog.ngrok.com/why-we-use-docusaurus">Built with Docusaurus</a> ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
