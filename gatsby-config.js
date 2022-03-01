

module.exports = {
  siteMetadata: {
    siteUrl: `https://sonic1981.github.io/Spendesk`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-5CY03B1JJX"],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-csp",
      options: {
        mergeStyleHashes: false,
        directives: {
          "style-src": "'self' 'unsafe-inline' fonts.googleapis.com www.facebook.com",
          "font-src": "'self' fonts.gstatic.com www.facebook.com",
          "default-src": "'self' www.google.com www.facebook.com",
          "script-src": "'self' www.google-analytics.com www.googletagmanager.com connect.facebook.net",
          "connect-src": "'self' www.google-analytics.com www.googletagmanager.com",
          "img-src": "'self' data: www.facebook.com",
          "frame-src": "'self' www.google.com www.facebook.com web.facebook.com"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-json`
  ],
  pathPrefix: `/spendesk`,
};
