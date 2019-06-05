"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.setAuth = exports.getAuth = void 0;

var _localforage = _interopRequireDefault(require("localforage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authenticationStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'git-authentication-store'
});

var getAuth =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var authentication;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _localforage.default.getItem('authentication');

          case 3:
            authentication = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            authentication = null;

          case 9:
            return _context.abrupt("return", authentication);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function getAuth() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAuth = getAuth;

var setAuth =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(authentication) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _localforage.default.setItem('authentication', authentication);

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setAuth(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.setAuth = setAuth;

var logout =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return setAuth();

          case 2:
            return _context3.abrupt("return", true);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function logout() {
    return _ref3.apply(this, arguments);
  };
}();

exports.logout = logout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL2hlbHBlcnMuanMiXSwibmFtZXMiOlsiYXV0aGVudGljYXRpb25TdG9yZSIsImxvY2FsZm9yYWdlIiwiY3JlYXRlSW5zdGFuY2UiLCJkcml2ZXIiLCJJTkRFWEVEREIiLCJuYW1lIiwiZ2V0QXV0aCIsImdldEl0ZW0iLCJhdXRoZW50aWNhdGlvbiIsInNldEF1dGgiLCJzZXRJdGVtIiwicmVzcG9uc2UiLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MscUJBQVlDLGNBQVosQ0FBMkI7QUFDckRDLEVBQUFBLE1BQU0sRUFBRSxDQUFDRixxQkFBWUcsU0FBYixDQUQ2QztBQUVyREMsRUFBQUEsSUFBSSxFQUFFO0FBRitDLENBQTNCLENBQTVCOztBQUtPLElBQU1DLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHSUwscUJBQVlNLE9BQVosQ0FBb0IsZ0JBQXBCLENBSEo7O0FBQUE7QUFHbkJDLFlBQUFBLGNBSG1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLbkJBLFlBQUFBLGNBQWMsR0FBRyxJQUFqQjs7QUFMbUI7QUFBQSw2Q0FPZEEsY0FQYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQRixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7Ozs7QUFVQSxJQUFNRyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxrQkFBT0QsY0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBUCxxQkFBWVMsT0FBWixDQUFvQixnQkFBcEIsRUFBc0NGLGNBQXRDLENBREE7O0FBQUE7QUFDakJHLFlBQUFBLFFBRGlCO0FBQUEsOENBRWRBLFFBRmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEYsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOzs7O0FBS0EsSUFBTUcsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2RILE9BQU8sRUFETzs7QUFBQTtBQUFBLDhDQUViLElBRmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBTkcsTUFBTTtBQUFBO0FBQUE7QUFBQSxHQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcblxuY29uc3QgYXV0aGVudGljYXRpb25TdG9yZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKHtcbiAgZHJpdmVyOiBbbG9jYWxmb3JhZ2UuSU5ERVhFRERCXSxcbiAgbmFtZTogJ2dpdC1hdXRoZW50aWNhdGlvbi1zdG9yZScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEF1dGggPSBhc3luYyAoKSA9PiB7XG4gIGxldCBhdXRoZW50aWNhdGlvbjtcbiAgdHJ5IHtcbiAgICBhdXRoZW50aWNhdGlvbiA9IGF3YWl0IGxvY2FsZm9yYWdlLmdldEl0ZW0oJ2F1dGhlbnRpY2F0aW9uJyk7XG4gIH0gY2F0Y2gge1xuICAgIGF1dGhlbnRpY2F0aW9uID0gbnVsbDtcbiAgfVxuICByZXR1cm4gYXV0aGVudGljYXRpb247XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QXV0aCA9IGFzeW5jIChhdXRoZW50aWNhdGlvbikgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBsb2NhbGZvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGlvbicsIGF1dGhlbnRpY2F0aW9uKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QXV0aCgpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iXX0=