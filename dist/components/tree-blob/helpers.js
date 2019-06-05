"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanFileSize = exports.fetchTree = void 0;

var _core = require("../../core");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchTree =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var url, config, _config, response, tree;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, config = _ref.config;
            _config = _objectSpread({
              cache: {
                maxAge: 1 * 2 * 1000 // 2 sec cache override

              }
            }, config);
            _context.next = 4;
            return (0, _core.get)({
              url: url,
              config: _config
            });

          case 4:
            response = _context.sent;
            tree = response.tree;
            return _context.abrupt("return", tree);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchTree(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchTree = fetchTree;

var humanFileSize = function humanFileSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (size === 0) return '0 B';
  var units = ['B', 'KB', 'MB', 'GB', 'TB'];
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + units[i];
};

exports.humanFileSize = humanFileSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImZldGNoVHJlZSIsInVybCIsImNvbmZpZyIsIl9jb25maWciLCJjYWNoZSIsIm1heEFnZSIsInJlc3BvbnNlIiwidHJlZSIsImh1bWFuRmlsZVNpemUiLCJzaXplIiwidW5pdHMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicG93IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxZQUFBQSxHQUFSLFFBQVFBLEdBQVIsRUFBYUMsTUFBYixRQUFhQSxNQUFiO0FBQ2pCQyxZQUFBQSxPQURpQjtBQUVyQkMsY0FBQUEsS0FBSyxFQUFFO0FBQ0xDLGdCQUFBQSxNQUFNLEVBQUUsSUFBSSxDQUFKLEdBQVEsSUFEWCxDQUNnQjs7QUFEaEI7QUFGYyxlQUtsQkgsTUFMa0I7QUFBQTtBQUFBLG1CQU9BLGVBQUk7QUFBQ0QsY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1DLGNBQUFBLE1BQU0sRUFBRUM7QUFBZCxhQUFKLENBUEE7O0FBQUE7QUFPakJHLFlBQUFBLFFBUGlCO0FBUWhCQyxZQUFBQSxJQVJnQixHQVFSRCxRQVJRLENBUWhCQyxJQVJnQjtBQUFBLDZDQVNoQkEsSUFUZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFAsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOzs7O0FBWUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFZO0FBQUEsTUFBWEMsSUFBVyx1RUFBTixDQUFNO0FBQ3ZDLE1BQUlBLElBQUksS0FBSyxDQUFiLEVBQWdCLE9BQU8sS0FBUDtBQUNoQixNQUFNQyxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsQ0FBZDtBQUNBLE1BQU1DLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVlELElBQUksQ0FBQ0UsR0FBTCxDQUFTTCxJQUFULElBQWlCRyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxJQUFULENBQTdCLENBQVY7QUFDQSxTQUFPLENBQUVMLElBQUksR0FBR0csSUFBSSxDQUFDRyxHQUFMLENBQVMsSUFBVCxFQUFlSixDQUFmLENBQVQsRUFBNkJLLE9BQTdCLENBQXFDLENBQXJDLElBQTBDLENBQTFDLEdBQThDLEdBQTlDLEdBQW9ETixLQUFLLENBQUNDLENBQUQsQ0FBaEU7QUFDRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRyZWUgPSBhc3luYyAoe3VybCwgY29uZmlnfSkgPT4ge1xuICBjb25zdCBfY29uZmlnID0ge1xuICAgIGNhY2hlOiB7XG4gICAgICBtYXhBZ2U6IDEgKiAyICogMTAwMCAvLyAyIHNlYyBjYWNoZSBvdmVycmlkZVxuICAgIH0sXG4gICAgLi4uY29uZmlnXG4gIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KHt1cmwsIGNvbmZpZzogX2NvbmZpZ30pO1xuICBjb25zdCB7dHJlZX0gPSByZXNwb25zZTtcbiAgcmV0dXJuIHRyZWU7XG59O1xuXG5leHBvcnQgY29uc3QgaHVtYW5GaWxlU2l6ZSA9IChzaXplPTApID0+IHtcbiAgaWYgKHNpemUgPT09IDApIHJldHVybiAnMCBCJ1xuICBjb25zdCB1bml0cyA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQiddO1xuICBjb25zdCBpID0gTWF0aC5mbG9vciggTWF0aC5sb2coc2l6ZSkgLyBNYXRoLmxvZygxMDI0KSApO1xuICByZXR1cm4gKCBzaXplIC8gTWF0aC5wb3coMTAyNCwgaSkgKS50b0ZpeGVkKDIpICogMSArICcgJyArIHVuaXRzW2ldO1xufTtcbiJdfQ==