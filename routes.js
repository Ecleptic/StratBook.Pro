const UrlPrettifier = require("next-url-prettifier").default;

const routes = [
  {
    page: "index",
    prettyUrl: "/"
  },
  {
    page: "index"
    // prettyUrl: ({ game = '', user = '', map = '', stratNumber = '' }) =>
    //     `/${game}/${user}/${map}/${stratNumber}`,
    // prettyUrl: ({ game = '', map = '', stratNumber = '' }) =>
    //     `/${game}/${map}/${stratNumber}`,
    // prettyUrlPatterns: [
    //     { pattern: '/:game/:user/:map/:stratNumber' },
    //     { pattern: '/:game/:map/:stratNumber' }
    // ]
  },
  {
    page: "userPage",
    prettyUrl: ({ user = "" }) => `${user}`,
    prettyUrlPatterns: [{ pattern: "/u/:user" }]
  },
  {
    page: "overwatch",
    prettyUrl: ({ game = "", user = "", map = "", stratNumber = "" }) =>
      `${user}/overwatch/${map}/${stratNumber}`,
    prettyUrl: ({ game = "", user = "", map = "", stratNumber = "" }) =>
      `/overwatch/${map}/${stratNumber}`,
    prettyUrlPatterns: [
      //   { pattern: "/:user" },
      { pattern: "/u/:user/overwatch" },
      { pattern: "/u/:user/overwatch/:map" },
      { pattern: "/u/:user/overwatch/:map/:stratNumber" },
      { pattern: "/overwatch/:map" },
      { pattern: "/overwatch" },
      { pattern: "/u/:user/ow" },
      { pattern: "/u/:user/ow/:map" },
      { pattern: "/u/:user/ow/:map/:stratNumber" },
      { pattern: "/u/:user/ow/:map" },
      { pattern: "/ow/:map" },
      { pattern: "/ow" }
    ]
  }

  // {
  //     page: 'Overwatch',
  //     prettyUrl: '/OW',
  //     prettyUrlPatterns: [
  //         { pattern: '/Overwatch/:user/:map/:stratNumber' },
  //         { pattern: '/OW/:map/:stratNumber' }
  //     ]
  // }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
