"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LoginPage =
/*#__PURE__*/
function () {
  function LoginPage() {
    _classCallCheck(this, LoginPage);
  }

  _createClass(LoginPage, [{
    key: "selectorsList",
    value: function selectorsList() {
      var selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']"
      };
      return selectors;
    }
  }, {
    key: "accessLoginPage",
    value: function accessLoginPage() {
      cy.visit('/auth/login');
    }
  }, {
    key: "loginWithAnyUser",
    value: function loginWithAnyUser(username, password) {
      cy.get(this.selectorsList().usernameField).type(username);
      cy.get(this.selectorsList().passwordField).type(password);
      cy.get(this.selectorsList().loginButton).click();
    }
  }, {
    key: "checkAccessInvalid",
    value: function checkAccessInvalid() {
      cy.get(this.selectorsList().wrongCredentialAlert);
    }
  }]);

  return LoginPage;
}();

var _default = LoginPage;
exports["default"] = _default;