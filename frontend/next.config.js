module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/u/*/overwatch": { page: "/u/*/overwatch" },
      "/u/*": { page: "/u/*" }
    };
  }
};
