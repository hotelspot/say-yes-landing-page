import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'tofu-gatsby-boilerplate',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',

  ],
};

export default config;
