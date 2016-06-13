'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/cumulative_line_sg/cumulative_line_sg']
    }

  });
};
