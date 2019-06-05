"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileFromZip = exports.fetchRepositoryZipFile = void 0;

var _path = _interopRequireDefault(require("path"));

var _jszip = _interopRequireDefault(require("jszip"));

var _localforage = _interopRequireDefault(require("localforage"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var zipStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'zip-store'
}); // https://git.door43.org/unfoldingWord/en_ult/archive/master.zip


var fetchRepositoryZipFile =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var username, repository, branch, options, repoExists, uri, response, zipArrayBuffer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, repository = _ref.repository, branch = _ref.branch, options = _ref.options;
            _context.next = 3;
            return (0, _.repositoryExists)({
              username: username,
              repository: repository
            });

          case 3:
            repoExists = _context.sent;

            if (repoExists) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", null);

          case 6:
            uri = zipUri({
              username: username,
              repository: repository,
              branch: branch
            });
            _context.next = 9;
            return fetch(uri);

          case 9:
            response = _context.sent;

            if (!(response.status === 200 || response.status === 0)) {
              _context.next = 19;
              break;
            }

            _context.next = 13;
            return response.arrayBuffer();

          case 13:
            zipArrayBuffer = _context.sent;
            _context.next = 16;
            return zipStore.setItem(uri, zipArrayBuffer);

          case 16:
            return _context.abrupt("return", true);

          case 19:
            return _context.abrupt("return", false);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchRepositoryZipFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchRepositoryZipFile = fetchRepositoryZipFile;

var getFileFromZip =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, repository, path, branch, file, uri, zipBlob, zip, zipPath;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, repository = _ref3.repository, path = _ref3.path, branch = _ref3.branch;
            uri = zipUri({
              username: username,
              repository: repository,
              branch: branch
            });
            _context2.next = 4;
            return zipStore.getItem(uri);

          case 4:
            zipBlob = _context2.sent;
            _context2.prev = 5;

            if (!zipBlob) {
              _context2.next = 14;
              break;
            }

            _context2.next = 9;
            return _jszip.default.loadAsync(zipBlob);

          case 9:
            zip = _context2.sent;
            zipPath = _path.default.join(repository.toLowerCase(), path);
            _context2.next = 13;
            return zip.file(zipPath).async("string");

          case 13:
            file = _context2.sent;

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](5);
            file = null;

          case 19:
            return _context2.abrupt("return", file);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 16]]);
  }));

  return function getFileFromZip(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFileFromZip = getFileFromZip;

var zipUri = function zipUri(_ref5) {
  var username = _ref5.username,
      repository = _ref5.repository,
      _ref5$branch = _ref5.branch,
      branch = _ref5$branch === void 0 ? 'master' : _ref5$branch;

  var zipPath = _path.default.join(username, repository, 'archive', "".concat(branch, ".zip"));

  var zipUri = baseURL + zipPath;
  return zipUri;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy96aXAuanMiXSwibmFtZXMiOlsiemlwU3RvcmUiLCJsb2NhbGZvcmFnZSIsImNyZWF0ZUluc3RhbmNlIiwiZHJpdmVyIiwiSU5ERVhFRERCIiwibmFtZSIsImZldGNoUmVwb3NpdG9yeVppcEZpbGUiLCJ1c2VybmFtZSIsInJlcG9zaXRvcnkiLCJicmFuY2giLCJvcHRpb25zIiwicmVwb0V4aXN0cyIsInVyaSIsInppcFVyaSIsImZldGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJhcnJheUJ1ZmZlciIsInppcEFycmF5QnVmZmVyIiwic2V0SXRlbSIsImdldEZpbGVGcm9tWmlwIiwicGF0aCIsImdldEl0ZW0iLCJ6aXBCbG9iIiwiSlNaaXAiLCJsb2FkQXN5bmMiLCJ6aXAiLCJ6aXBQYXRoIiwiUGF0aCIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsImZpbGUiLCJhc3luYyIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFJQSxJQUFNQSxRQUFRLEdBQUdDLHFCQUFZQyxjQUFaLENBQTJCO0FBQzFDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0YscUJBQVlHLFNBQWIsQ0FEa0M7QUFFMUNDLEVBQUFBLElBQUksRUFBRTtBQUZvQyxDQUEzQixDQUFqQixDLENBS0E7OztBQUNPLElBQU1DLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFlBQUFBLFFBQVIsUUFBUUEsUUFBUixFQUFrQkMsVUFBbEIsUUFBa0JBLFVBQWxCLEVBQThCQyxNQUE5QixRQUE4QkEsTUFBOUIsRUFBc0NDLE9BQXRDLFFBQXNDQSxPQUF0QztBQUFBO0FBQUEsbUJBQ1gsd0JBQWlCO0FBQUNILGNBQUFBLFFBQVEsRUFBUkEsUUFBRDtBQUFXQyxjQUFBQSxVQUFVLEVBQVZBO0FBQVgsYUFBakIs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c0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcblxuaW1wb3J0IHtcbiAgcmVwb3NpdG9yeUV4aXN0cyxcbn0gZnJvbSAnLi8nO1xuXG5jb25zdCB6aXBTdG9yZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKHtcbiAgZHJpdmVyOiBbbG9jYWxmb3JhZ2UuSU5ERVhFRERCXSxcbiAgbmFtZTogJ3ppcC1zdG9yZScsXG59KTtcblxuLy8gaHR0cHM6Ly9naXQuZG9vcjQzLm9yZy91bmZvbGRpbmdXb3JkL2VuX3VsdC9hcmNoaXZlL21hc3Rlci56aXBcbmV4cG9ydCBjb25zdCBmZXRjaFJlcG9zaXRvcnlaaXBGaWxlID0gYXN5bmMgKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgYnJhbmNoLCBvcHRpb25zfSkgPT4ge1xuICBjb25zdCByZXBvRXhpc3RzID0gYXdhaXQgcmVwb3NpdG9yeUV4aXN0cyh7dXNlcm5hbWUsIHJlcG9zaXRvcnl9KTtcbiAgaWYgKCFyZXBvRXhpc3RzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdXJpID0gemlwVXJpKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgYnJhbmNofSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpKTtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xuICAgIGNvbnN0IHppcEFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTsgLy8gYmxvYiBzdG9yYWdlIG5vdCBzdXBwb3J0ZWQgb24gbW9iaWxlXG4gICAgYXdhaXQgemlwU3RvcmUuc2V0SXRlbSh1cmksIHppcEFycmF5QnVmZmVyKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlRnJvbVppcCA9IGFzeW5jICh7dXNlcm5hbWUsIHJlcG9zaXRvcnksIHBhdGgsIGJyYW5jaH0pID0+IHtcbiAgbGV0IGZpbGU7XG4gIGNvbnN0IHVyaSA9IHppcFVyaSh7dXNlcm5hbWUsIHJlcG9zaXRvcnksIGJyYW5jaH0pO1xuICBjb25zdCB6aXBCbG9iID0gYXdhaXQgemlwU3RvcmUuZ2V0SXRlbSh1cmkpO1xuICB0cnkge1xuICAgIGlmICh6aXBCbG9iKSB7XG4gICAgICBjb25zdCB6aXAgPSBhd2FpdCBKU1ppcC5sb2FkQXN5bmMoemlwQmxvYik7XG4gICAgICBjb25zdCB6aXBQYXRoID0gUGF0aC5qb2luKHJlcG9zaXRvcnkudG9Mb3dlckNhc2UoKSwgcGF0aCk7XG4gICAgICBmaWxlID0gYXdhaXQgemlwLmZpbGUoemlwUGF0aCkuYXN5bmMoXCJzdHJpbmdcIik7XG4gICAgfVxuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgZmlsZSA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIGZpbGU7XG59O1xuXG5jb25zdCB6aXBVcmkgPSAoe3VzZXJuYW1lLCByZXBvc2l0b3J5LCBicmFuY2g9J21hc3Rlcid9KSA9PiB7XG4gIGNvbnN0IHppcFBhdGggPSBQYXRoLmpvaW4odXNlcm5hbWUsIHJlcG9zaXRvcnksICdhcmNoaXZlJywgYCR7YnJhbmNofS56aXBgKTtcbiAgY29uc3QgemlwVXJpID0gYmFzZVVSTCArIHppcFBhdGg7XG4gIHJldHVybiB6aXBVcmk7XG59O1xuIl19