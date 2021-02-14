const settings = {
  name: "tibortoth",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "British Chamber of Commerce Macao",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About us", "/about-us/about-the-chamber/"],
            ["Membership", "/membership/why-join/"],
            ["Commitees", "/committes/the-britcham-committees/"],
            ["CSR", "/corporate-social-responsibility-csr/"],
            ["Join", "/membership/why-join/"],
          ],

          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://britchammacao.org/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
