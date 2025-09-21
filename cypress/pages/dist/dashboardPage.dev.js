"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DashboardPage =
/*#__PURE__*/
function () {
  function DashboardPage() {
    _classCallCheck(this, DashboardPage);
  }

  _createClass(DashboardPage, [{
    key: "selectorsList",
    value: function selectorsList() {
      var selector = {
        dashboardGrid: ".orangehrm-dashboard-grid"
      };
      return selectors;
    }
  }, {
    key: "checkDashboardPage",
    value: function checkDashboardPage() {
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
      cy.get(this.selectorsList().dashboardGrid).should('be.visible');
    }
  }]);

  return DashboardPage;
}();

var _default = DashboardPage;
exports["default"] = _default;