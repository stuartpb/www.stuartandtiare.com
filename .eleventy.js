"use strict";

module.exports = config => {
  config.addDataExtension("yaml", require("yaml").parse);

  // dynamic permalinks do not play well with Pug
  config.setDynamicPermalinks(false);

  return {
    dir: {
      output: '.'
    },
    templateFormats: ['md','pug'],
    markdownTemplateEngine: false,
    htmlTemplateEngine: false,
    dataTemplateEngine: false
  };
};
