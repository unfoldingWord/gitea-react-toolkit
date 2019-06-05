"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.patch = exports.put = exports.post = exports.get = void 0;

var _localforage = _interopRequireDefault(require("localforage"));

var _axios = _interopRequireDefault(require("axios"));

var _axiosCacheAdapter = require("axios-cache-adapter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { repositoryExists } from './gitApi';
// import {
//   getFileFromZip,
// } from './gitZip';
var cacheStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'web-cache'
});

var api = (0, _axiosCacheAdapter.setup)({
  crossDomain: true,
  cache: {
    store: cacheStore,
    maxAge: 1 * 1 * 1 * 1 * 1000,
    exclude: {
      query: false
    },
    key: function key(req) {
      // if (req.params) debugger
      var serialized = req.params instanceof URLSearchParams ? req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    }
  }
}); // // https://git.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
// export const fetchFileFromServer = async ({username, repository, path, branch='master', config}) => {
//   const repoExists = await repositoryExists({username, repository});
//   if (repoExists) {
//     const url = Path.join(username, repository, 'raw/branch', branch, path);
//     try {
//       const data = await get({url, config});
//       return data;
//     }
//     catch(error) {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };
// export const getFile = async ({username, repository, path, branch, config}) => {
//   let file;
//   file = await getFileFromZip({username, repository, path, branch, config});
//   if (!file) {
//     file = await fetchFileFromServer({username, repository, path, branch, config});
//   }
//   return file;
// }

var get =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var url, params, _ref$config, config, noCache, response, _response, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, params = _ref.params, _ref$config = _ref.config, config = _ref$config === void 0 ? {} : _ref$config, noCache = _ref.noCache;
            if (config.server) config.baseURL = config.server;

            if (!noCache) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _axios.default.get(url, _objectSpread({}, config, {
              params: params
            }));

          case 5:
            response = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.next = 10;
            return api.get(url, _objectSpread({}, config, {
              params: params
            }));

          case 10:
            response = _context.sent;

          case 11:
            _response = response, data = _response.data;
            return _context.abrupt("return", data);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.get = get;

var post =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var url, payload, config, _ref5, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _ref3.url, payload = _ref3.payload, config = _ref3.config;
            if (config.server) config.baseURL = config.server;
            _context2.next = 4;
            return _axios.default.post(url, payload, config);

          case 4:
            _ref5 = _context2.sent;
            data = _ref5.data;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function post(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.post = post;

var put =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref6) {
    var url, payload, config, _ref8, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _ref6.url, payload = _ref6.payload, config = _ref6.config;
            if (config.server) config.baseURL = config.server;
            _context3.next = 4;
            return _axios.default.put(url, payload, config);

          case 4:
            _ref8 = _context3.sent;
            data = _ref8.data;
            return _context3.abrupt("return", data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function put(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

exports.put = put;

var patch =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref9) {
    var url, payload, config, _ref11, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = _ref9.url, payload = _ref9.payload, config = _ref9.config;
            if (config.server) config.baseURL = config.server;
            _context4.next = 4;
            return _axios.default.patch(url, payload, config);

          case 4:
            _ref11 = _context4.sent;
            data = _ref11.data;
            return _context4.abrupt("return", data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function patch(_x4) {
    return _ref10.apply(this, arguments);
  };
}();

exports.patch = patch;

var del =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref12) {
    var url, payload, config, _ref14, data;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = _ref12.url, payload = _ref12.payload, config = _ref12.config;
            if (config.server) config.baseURL = config.server;
            config.data = payload;
            _context5.next = 5;
            return _axios.default.delete(url, config);

          case 5:
            _ref14 = _context5.sent;
            data = _ref14.data;
            return _context5.abrupt("return", data);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function del(_x5) {
    return _ref13.apply(this, arguments);
  };
}();

exports.del = del;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9jb3JlLmpzIl0sIm5hbWVzIjpbImNhY2hlU3RvcmUiLCJsb2NhbGZvcmFnZSIsImNyZWF0ZUluc3RhbmNlIiwiZHJpdmVyIiwiSU5ERVhFRERCIiwibmFtZSIsImFwaSIsImNyb3NzRG9tYWluIiwiY2FjaGUiLCJzdG9yZSIsIm1heEFnZSIsImV4Y2x1ZGUiLCJxdWVyeSIsImtleSIsInJlcSIsInNlcmlhbGl6ZWQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJnZXQiLCJjb25maWciLCJub0NhY2hlIiwic2VydmVyIiwiYmFzZVVSTCIsImF4aW9zIiwicmVzcG9uc2UiLCJkYXRhIiwicG9zdCIsInBheWxvYWQiLCJwdXQiLCJwYXRjaCIsImRlbCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MscUJBQVlDLGNBQVosQ0FBMkI7QUFDNUNDLEVBQUFBLE1BQU0sRUFBRSxDQUFDRixxQkFBWUcsU0FBYixDQURvQztBQUU1Q0MsRUFBQUEsSUFBSSxFQUFFO0FBRnNDLENBQTNCLENBQW5COztBQUtBLElBQU1DLEdBQUcsR0FBRyw4QkFBTTtBQUNoQkMsRUFBQUEsV0FBVyxFQUFFLElBREc7QUFFaEJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxLQUFLLEVBQUVULFVBREY7QUFFTFUsSUFBQUEsTUFBTSxFQUFFLElBQUksQ0FBSixHQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCLElBRm5CO0FBR0xDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUhKO0FBSUxDLElBQUFBLEdBQUcsRUFBRSxhQUFBQyxHQUFHLEVBQUk7QUFDVjtBQUNBLFVBQUlDLFVBQVUsR0FBR0QsR0FB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O0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFISyxHQUFHO0FBQUE7QUFBQTtBQUFBLEdBQVQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc2V0dXAgfSBmcm9tICdheGlvcy1jYWNoZS1hZGFwdGVyJztcblxuLy8gaW1wb3J0IHsgcmVwb3NpdG9yeUV4aXN0cyB9IGZyb20gJy4vZ2l0QXBpJztcblxuLy8gaW1wb3J0IHtcbi8vICAgZ2V0RmlsZUZyb21aaXAsXG4vLyB9IGZyb20gJy4vZ2l0WmlwJztcblxuY29uc3QgY2FjaGVTdG9yZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKHtcbiAgZHJpdmVyOiBbbG9jYWxmb3JhZ2UuSU5ERVhFRERCXSxcbiAgbmFtZTogJ3dlYi1jYWNoZScsXG59KTtcblxuY29uc3QgYXBpID0gc2V0dXAoe1xuICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgY2FjaGU6IHtcbiAgICBzdG9yZTogY2FjaGVTdG9yZSxcbiAgICBtYXhBZ2U6IDEgKiAxICogMSAqIDEgKiAxMDAwLFxuICAgIGV4Y2x1ZGU6IHsgcXVlcnk6IGZhbHNlIH0sXG4gICAga2V5OiByZXEgPT4ge1xuICAgICAgLy8gaWYgKHJlcS5wYXJhbXMpIGRlYnVnZ2VyXG4gICAgICBsZXQgc2VyaWFsaXplZCA9IHJlcS5wYXJhbXMgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgP1xuICAgICAgcmVxLnBhcmFtcy50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkocmVxLnBhcmFtcykgfHwgJyc7XG4gICAgICByZXR1cm4gcmVxLnVybCArIHNlcmlhbGl6ZWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyAvLyBodHRwczovL2dpdC5kb29yNDMub3JnL3VuZm9sZGluZ3dvcmQvZW5fdWx0L3Jhdy9icmFuY2gvbWFzdGVyL21hbmlmZXN0LnlhbWxcbi8vIGV4cG9ydCBjb25zdCBmZXRjaEZpbGVGcm9tU2VydmVyID0gYXN5bmMgKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgcGF0aCwgYnJhbmNoPSdtYXN0ZXInLCBjb25maWd9KSA9PiB7XG4vLyAgIGNvbnN0IHJlcG9FeGlzdHMgPSBhd2FpdCByZXBvc2l0b3J5RXhpc3RzKHt1c2VybmFtZSwgcmVwb3NpdG9yeX0pO1xuLy8gICBpZiAocmVwb0V4aXN0cykge1xuLy8gICAgIGNvbnN0IHVybCA9IFBhdGguam9pbih1c2VybmFtZSwgcmVwb3NpdG9yeSwgJ3Jhdy9icmFuY2gnLCBicmFuY2gsIHBhdGgpO1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0KHt1cmwsIGNvbmZpZ30pO1xuLy8gICAgICAgcmV0dXJuIGRhdGE7XG4vLyAgICAgfVxuLy8gICAgIGNhdGNoKGVycm9yKSB7XG4vLyAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICB9XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuIG51bGw7XG4vLyAgIH1cbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRGaWxlID0gYXN5bmMgKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgcGF0aCwgYnJhbmNoLCBjb25maWd9KSA9PiB7XG4vLyAgIGxldCBmaWxlO1xuLy8gICBmaWxlID0gYXdhaXQgZ2V0RmlsZUZyb21aaXAoe3VzZXJuYW1lLCByZXBvc2l0b3J5LCBwYXRoLCBicmFuY2gsIGNvbmZpZ30pO1xuLy8gICBpZiAoIWZpbGUpIHtcbi8vICAgICBmaWxlID0gYXdhaXQgZmV0Y2hGaWxlRnJvbVNlcnZlcih7dXNlcm5hbWUsIHJlcG9zaXRvcnksIHBhdGgsIGJyYW5jaCwgY29uZmlnfSk7XG4vLyAgIH1cbi8vICAgcmV0dXJuIGZpbGU7XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAoe3VybCwgcGFyYW1zLCBjb25maWc9e30sIG5vQ2FjaGV9KSA9PiB7XG4gIGlmIChjb25maWcuc2VydmVyKSBjb25maWcuYmFzZVVSTCA9IGNvbmZpZy5zZXJ2ZXI7XG4gIGxldCByZXNwb25zZTtcbiAgaWYgKG5vQ2FjaGUpIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgey4uLmNvbmZpZywgcGFyYW1zfSk7XG4gIGVsc2UgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHVybCwgey4uLmNvbmZpZywgcGFyYW1zfSk7XG4gIGNvbnN0IHtkYXRhfSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0ID0gYXN5bmMgKHt1cmwsIHBheWxvYWQsIGNvbmZpZ30pID0+IHtcbiAgaWYgKGNvbmZpZy5zZXJ2ZXIpIGNvbmZpZy5iYXNlVVJMID0gY29uZmlnLnNlcnZlcjtcbiAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBheWxvYWQsIGNvbmZpZyk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1dCA9IGFzeW5jICh7dXJsLCBwYXlsb2FkLCBjb25maWd9KSA9PiB7XG4gIGlmIChjb25maWcuc2VydmVyKSBjb25maWcuYmFzZVVSTCA9IGNvbmZpZy5zZXJ2ZXI7XG4gIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnB1dCh1cmwsIHBheWxvYWQsIGNvbmZpZyk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhdGNoID0gYXN5bmMgKHt1cmwsIHBheWxvYWQsIGNvbmZpZ30pID0+IHtcbiAgaWYgKGNvbmZpZy5zZXJ2ZXIpIGNvbmZpZy5iYXNlVVJMID0gY29uZmlnLnNlcnZlcjtcbiAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucGF0Y2godXJsLCBwYXlsb2FkLCBjb25maWcpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWwgPSBhc3luYyAoe3VybCwgcGF5bG9hZCwgY29uZmlnfSkgPT4ge1xuICBpZiAoY29uZmlnLnNlcnZlcikgY29uZmlnLmJhc2VVUkwgPSBjb25maWcuc2VydmVyO1xuICBjb25maWcuZGF0YSA9IHBheWxvYWQ7XG4gIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwsIGNvbmZpZyk7XG4gIHJldHVybiBkYXRhO1xufTtcbiJdfQ==