import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'tofu-gatsby-boilerplate',
    siteUrl: 'https://www.yourdomain.tld',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/assets/tofu.png',
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/assets/tofu.png',
        appName: 'TofuApp',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};

export default config;
