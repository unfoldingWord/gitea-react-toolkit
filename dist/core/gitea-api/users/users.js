"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUID = exports.getUser = void 0;

var _path = _interopRequireDefault(require("path"));

var _core = require("../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1';

var getUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var username, config, user, url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, config = _ref.config;
            url = _path.default.join(apiPath, 'users', username);
            _context.prev = 2;
            _context.next = 5;
            return (0, _core.get)({
              url: url,
              config: config
            });

          case 5:
            user = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            user = null;

          case 11:
            return _context.abrupt("return", user);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function getUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var getUID =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, config, uid, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, config = _ref3.config;
            _context2.prev = 1;
            _context2.next = 4;
            return getUser({
              username: username,
              config: config
            });

          case 4:
            user = _context2.sent;
            uid = user.id;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            uid = null;

          case 11:
            return _context2.abrupt("return", uid);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getUID(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUID = getUID;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy91c2Vycy5qcyJdLCJuYW1lcyI6WyJhcGlQYXRoIiwiZ2V0VXNlciIsInVzZXJuYW1lIiwiY29uZmlnIiwidXJsIiwiUGF0aCIsImpvaW4iLCJ1c2VyIiwiZ2V0VUlEIiwidWlkIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsUUFBaEI7O0FBRU8sSUFBTUMsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFlBQUFBLFFBQVIsUUFBUUEsUUFBUixFQUFrQkMsTUFBbEIsUUFBa0JBLE1BQWxCO0FBRWZDLFlBQUFBLEdBRmUsR0FFVEMsY0FBS0MsSUFBTCxDQUFVTixPQUFWLEVBQW1CLE9BQW5CLEVBQTRCRSxRQUE1QixDQUZTO0FBQUE7QUFBQTtBQUFBLG1CQUlOLGVBQUk7QUFBQ0UsY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1ELGNBQUFBLE1BQU0sRUFBTkE7QUFBTixhQUFKLENBSk07O0FBQUE7QUFJbkJJLFlBQUFBLElBSm1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLWEEsWUFBQUEsSUFBSSxHQUFHLElBQVA7O0FBTFc7QUFBQSw2Q0FNZEEsSUFOYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQTixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7Ozs7QUFTQSxJQUFNTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUU4sWUFBQUEsUUFBUixTQUFRQSxRQUFSLEVBQWtCQyxNQUFsQixTQUFrQkEsTUFBbEI7QUFBQTtBQUFBO0FBQUEsbUJBR0NGLE9BQU8sQ0FBQztBQUFDQyxjQUFBQSxRQUFRLEVBQVJBLFFBQUQ7QUFBV0MsY0FBQUEsTUFBTSxFQUFOQTtBQUFYLGFBQUQsQ0FIUjs7QUFBQTtBQUdaSSxZQUFBQSxJQUhZO0FBSWxCRSxZQUFBQSxHQUFHLEdBQUdGLElBQUksQ0FBQ0csRUFBWDtBQUprQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtWRCxZQUFBQSxHQUFHLEdBQUcsSUFBTjs7QUFMVTtBQUFBLDhDQU1iQSxHQU5hOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQU5ELE1BQU07QUFBQTtBQUFBO0FBQUEsR0FBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9jb3JlJztcblxuY29uc3QgYXBpUGF0aCA9ICdhcGkvdjEnO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jICh7dXNlcm5hbWUsIGNvbmZpZ30pID0+IHtcbiAgbGV0IHVzZXI7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAndXNlcnMnLCB1c2VybmFtZSk7XG4gIHRyeSB7XG4gICAgdXNlciA9IGF3YWl0IGdldCh7dXJsLCBjb25maWd9KTtcbiAgfSBjYXRjaCB7IHVzZXIgPSBudWxsOyB9XG4gIHJldHVybiB1c2VyO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVJRCA9IGFzeW5jICh7dXNlcm5hbWUsIGNvbmZpZ30pID0+IHtcbiAgbGV0IHVpZDtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcih7dXNlcm5hbWUsIGNvbmZpZ30pO1xuICAgIHVpZCA9IHVzZXIuaWQ7XG4gIH0gY2F0Y2ggeyB1aWQgPSBudWxsOyB9XG4gIHJldHVybiB1aWQ7XG59O1xuIl19