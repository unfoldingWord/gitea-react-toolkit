"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveContent = exports.payload = exports.getContent = exports.deleteFile = exports.ensureFile = void 0;

var _base = _interopRequireDefault(require("base-64"));

var _utf = _interopRequireDefault(require("utf8"));

var _core = require("../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ensureFile =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var filepath, defaultContent, message, authentication, repository, config, branch, _config, username, name, _payload, _message, file;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filepath = _ref.filepath, defaultContent = _ref.defaultContent, message = _ref.message, authentication = _ref.authentication, repository = _ref.repository, config = _ref.config, branch = _ref.branch;
            _config = config;
            if (authentication) _config = authentication.config;
            username = repository.owner.username, name = repository.name;

            if (authentication) {
              _message = message || "Created '".concat(filepath, "' using '").concat(authentication.token.name, "'");
              _payload = payload({
                content: defaultContent,
                message: _message,
                authentication: authentication,
                repository: repository,
                branch: branch
              });
            }

            _context.next = 7;
            return (0, _core.ensureFile)({
              owner: username,
              repo: name,
              filepath: filepath,
              payload: _payload,
              config: _config
            });

          case 7:
            file = _context.sent;
            return _context.abrupt("return", file);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ensureFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.ensureFile = ensureFile;

var deleteFile =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var file, message, authentication, repository, branch, config, username, name, filepath, _message, _payload, deleted;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            file = _ref3.file, message = _ref3.message, authentication = _ref3.authentication, repository = _ref3.repository, branch = _ref3.branch;
            config = authentication.config;
            username = repository.owner.username, name = repository.name;
            filepath = file.filepath;
            _message = message || "Deleted '".concat(filepath, "' using '").concat(authentication.token.name, "'");
            _payload = payload({
              message: _message,
              authentication: authentication,
              repository: repository,
              file: file,
              branch: branch
            });
            _context2.next = 8;
            return (0, _core.removeFile)({
              owner: username,
              repo: name,
              filepath: filepath,
              payload: _payload,
              config: config
            });

          case 8:
            deleted = _context2.sent;
            return _context2.abrupt("return", deleted);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteFile(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteFile = deleteFile;

var getContent =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref5) {
    var file, content;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            file = _ref5.file;
            _context3.next = 3;
            return (0, _core.get)({
              url: file.download_url,
              noCache: true
            });

          case 3:
            content = _context3.sent;
            return _context3.abrupt("return", content);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getContent(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getContent = getContent;

var payload = function payload(_ref7) {
  var content = _ref7.content,
      message = _ref7.message,
      authentication = _ref7.authentication,
      repository = _ref7.repository,
      file = _ref7.file,
      branch = _ref7.branch;
  return {
    author: {
      email: authentication.user.email,
      name: authentication.user.username
    },
    content: _base.default.encode(_utf.default.encode(content || '')),
    message: message || "Edit '".concat(file.path, "' using '").concat(authentication.token.name, "'"),
    sha: file ? file.sha : null,
    new_branch: branch || repository.default_branch
  };
};

exports.payload = payload;

var saveContent =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref8) {
    var content, message, authentication, repository, file, branch, config, username, name, path, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            content = _ref8.content, message = _ref8.message, authentication = _ref8.authentication, repository = _ref8.repository, file = _ref8.file, branch = _ref8.branch;
            config = authentication.config;
            username = repository.owner.username, name = repository.name;
            path = file.path;
            _context4.next = 6;
            return (0, _core.updateFile)({
              owner: username,
              repo: name,
              filepath: path,
              payload: payload({
                content: content,
                message: message,
                authentication: authentication,
                repository: repository,
                file: file,
                branch: branch
              }),
              config: config
            });

          case 6:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function saveContent(_x4) {
    return _ref9.apply(this, arguments);
  };
}();

exports.saveContent = saveContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJlbnN1cmVGaWxlIiwiZmlsZXBhdGgiLCJkZWZhdWx0Q29udGVudCIsIm1lc3NhZ2UiLCJhdXRoZW50aWNhdGlvbiIsInJlcG9zaXRvcnkiLCJjb25maWciLCJicmFuY2giLCJfY29uZmlnIiwidXNlcm5hbWUiLCJvd25lciIsIm5hbWUiLCJfbWVzc2FnZSIsInRva2VuIiwiX3BheWxvYWQiLCJwYXlsb2FkIiwiY29udGVudCIsInJlcG8iLCJmaWxlIiwiZGVsZXRlRmlsZSIsImRlbGV0ZWQiLCJnZXRDb250ZW50IiwidXJsIiwiZG93bmxvYWRfdXJsIiwibm9DYWNoZSIsImF1dGhvciIsImVtYWlsIiwidXNlciIsImJhc2U2NCIsImVuY29kZSIsInV0ZjgiLCJwYXRoIiwic2hhIiwibmV3X2JyYW5jaCIsImRlZmF1bHRfYnJhbmNoIiwic2F2ZUNvbnRlbnQiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJDLFlBQUFBLFFBRHdCLFFBQ3hCQSxRQUR3QixFQUNkQyxjQURjLFFBQ2RBLGNBRGMsRUFDRUMsT0FERixRQUNFQSxPQURGLEVBQ1dDLGNBRFgsUUFDV0EsY0FEWCxFQUMyQkMsVUFEM0IsUUFDMkJBLFVBRDNCLEVBQ3VDQyxNQUR2QyxRQUN1Q0EsTUFEdkMsRUFDK0NDLE1BRC9DLFFBQytDQSxNQUQvQztBQUdwQkMsWUFBQUEsT0FIb0IsR0FHVkYsTUFIVTtBQUl4QixnQkFBSUYsY0FBSixFQUFvQkksT0FBTyxHQUFHSixjQUFjLENBQUNFLE1BQXpCO0FBQ0pHLFlBQUFBLFFBTFEsR0FLWUosVUFMWixDQUtoQkssS0FMZ0IsQ0FLUkQsUUFMUSxFQUtHRSxJQUxILEdB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QUEsT0FBUixTQUFRQSxPQUFSLEVBQWlCYixPQUFqQixTQUFpQkEsT0FBakIsRUFBMEJDLGNBQTFCLFNBQTBCQSxjQUExQixFQUEwQ0MsVUFBMUMsU0FBMENBLFVBQTFDLEVBQXNEYSxJQUF0RCxTQUFzREEsSUFBdEQsRUFBNERYLE1BQTVELFNBQTREQSxNQUE1RDtBQUNqQkQsWUFBQUEsTUFEaUIsR0FDTkYsY0FETSxDQUNqQkUsTUFEaUI7QUFFVEcsWUFBQUEsUUFGUyxHQUVXSixVQUZYLENBRWpCSyxLQUZpQixDQUVURCxRQUZTLEVBRUVFLElBRkYsR0FFV04sVUFGWCxDQUVFTSxJQUZGO0FBR2pCb0IsWUFBQUEsSUFIaUIsR0FHUmIsSUFIUSxDQUdqQmEsSUFIaUI7QUFBQTtBQUFBLG1CQUlGLHNCQUFXO0FBQ2hDckIsY0FBQUEsS0FBSyxFQUFFRCxRQUR5QjtBQUVoQ1EsY0FBQUEsSUFBSSxFQUFFTixJQUYwQjtBQUdoQ1YsY0FBQUEsUUFBUSxFQUFFOEIsSUFIc0I7QUFJaENoQixjQUFBQSxPQUFPLEVBQUVBLE9BQU8sQ0FBQztBQUFDQyxnQkFBQUEsT0FBTyxFQUFQQSxPQUFEO0FBQVViLGdCQUFBQSxPQUFPLEVBQVBBLE9BQVY7QUFBbUJDLGdCQUFBQSxjQUFjLEVBQWRBLGNBQW5CO0FBQW1DQyxnQkFBQUEsVUFBVSxFQUFWQSxVQUFuQztBQUErQ2EsZ0JBQUFBLElBQUksRUFBSkEsSUFBL0M7QUFBcURYLGdCQUFBQSxNQUFNLEVBQU5BO0FBQXJELGVBQUQsQ0FKZ0I7QUFLaENELGNBQUFBLE1BQU0sRUFBTkE7QUFMZ0MsYUFBWCxDQUpFOztBQUFBO0FBSW5COEIsWUFBQUEsUUFKbUI7QUFBQSw4Q0FXbEJBLFFBWGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhELFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZTY0IGZyb20gJ2Jhc2UtNjQnO1xuaW1wb3J0IHV0ZjggZnJvbSAndXRmOCc7XG5pbXBvcnQgeyBnZXQsIHVwZGF0ZUZpbGUsIGVuc3VyZUZpbGUgYXMgX2Vuc3VyZUZpbGUsIHJlbW92ZUZpbGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGVuc3VyZUZpbGUgPSBhc3luYyAoe1xuICBmaWxlcGF0aCwgZGVmYXVsdENvbnRlbnQsIG1lc3NhZ2UsIGF1dGhlbnRpY2F0aW9uLCByZXBvc2l0b3J5LCBjb25maWcsIGJyYW5jaFxufSkgPT4ge1xuICBsZXQgX2NvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGF1dGhlbnRpY2F0aW9uKSBfY29uZmlnID0gYXV0aGVudGljYXRpb24uY29uZmlnO1xuICBjb25zdCB7IG93bmVyOiB7dXNlcm5hbWV9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBsZXQgX3BheWxvYWQ7XG4gIGlmIChhdXRoZW50aWNhdGlvbikge1xuICAgIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSB8fCBgQ3JlYXRlZCAnJHtmaWxlcGF0aH0nIHVzaW5nICcke2F1dGhlbnRpY2F0aW9uLnRva2VuLm5hbWV9J2A7XG4gICAgX3BheWxvYWQgPSBwYXlsb2FkKFxuICAgICAgeyBjb250ZW50OiBkZWZhdWx0Q29udGVudCwgbWVzc2FnZTogX21lc3NhZ2UsIGF1dGhlbnRpY2F0aW9uLCByZXBvc2l0b3J5LCBicmFuY2ggfVxuICAgICk7XG4gIH1cbiAgY29uc3QgZmlsZSA9IGF3YWl0IF9lbnN1cmVGaWxlKFxuICAgIHsgb3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBmaWxlcGF0aCwgcGF5bG9hZDogX3BheWxvYWQsIGNvbmZpZzogX2NvbmZpZyB9XG4gICk7XG4gIHJldHVybiBmaWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZpbGUgPSBhc3luYyAoXG4gIHsgZmlsZSwgbWVzc2FnZSwgYXV0aGVudGljYXRpb24sIHJlcG9zaXRvcnksIGJyYW5jaCB9XG4pID0+IHtcbiAgY29uc3QgeyBjb25maWcgfSA9IGF1dGhlbnRpY2F0aW9uO1xuICBjb25zdCB7IG93bmVyOiB7dXNlcm5hbWV9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCB7IGZpbGVwYXRoIH0gPSBmaWxlO1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UgfHwgYERlbGV0ZWQgJyR7ZmlsZXBhdGh9JyB1c2luZyAnJHthdXRoZW50aWNhdGlvbi50b2tlbi5uYW1lfSdgO1xuICBjb25zdCBfcGF5bG9hZCA9IHBheWxvYWQoe21lc3NhZ2U6IF9tZXNzYWdlLCBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgZmlsZSwgYnJhbmNofSk7XG4gIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCByZW1vdmVGaWxlKHtcbiAgICBvd25lcjogdXNlcm5hbWUsXG4gICAgcmVwbzogbmFtZSxcbiAgICBmaWxlcGF0aCxcbiAgICBwYXlsb2FkOiBfcGF5bG9hZCxcbiAgICBjb25maWcsXG4gIH0pO1xuICByZXR1cm4gZGVsZXRlZDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb250ZW50ID0gYXN5bmMgKHtmaWxlfSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0KHt1cmw6IGZpbGUuZG93bmxvYWRfdXJsLCBub0NhY2hlOiB0cnVlfSk7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHBheWxvYWQgPSAoe2NvbnRlbnQsIG1lc3NhZ2UsIGF1dGhlbnRpY2F0aW9uLCByZXBvc2l0b3J5LCBmaWxlLCBicmFuY2h9KSA9PiAoe1xuICBhdXRob3I6IHtcbiAgICBlbWFpbDogYXV0aGVudGljYXRpb24udXNlci5lbWFpbCxcbiAgICBuYW1lOiBhdXRoZW50aWNhdGlvbi51c2VyLnVzZXJuYW1lLFxuICB9LFxuICBjb250ZW50OiBiYXNlNjQuZW5jb2RlKHV0ZjguZW5jb2RlKGNvbnRlbnQgfHwgJycpKSxcbiAgbWVzc2FnZTogbWVzc2FnZSB8fCBgRWRpdCAnJHtmaWxlLnBhdGh9JyB1c2luZyAnJHthdXRoZW50aWNhdGlvbi50b2tlbi5uYW1lfSdgLFxuICBzaGE6IChmaWxlKSA/IGZpbGUuc2hhIDogbnVsbCxcbiAgbmV3X2JyYW5jaDogYnJhbmNoIHx8IHJlcG9zaXRvcnkuZGVmYXVsdF9icmFuY2gsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNhdmVDb250ZW50ID0gYXN5bmMgKHtjb250ZW50LCBtZXNzYWdlLCBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgZmlsZSwgYnJhbmNofSkgPT4ge1xuICBjb25zdCB7IGNvbmZpZyB9ID0gYXV0aGVudGljYXRpb247XG4gIGNvbnN0IHsgb3duZXI6IHt1c2VybmFtZX0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHsgcGF0aCB9ID0gZmlsZTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGRhdGVGaWxlKHtcbiAgICBvd25lcjogdXNlcm5hbWUsXG4gICAgcmVwbzogbmFtZSxcbiAgICBmaWxlcGF0aDogcGF0aCxcbiAgICBwYXlsb2FkOiBwYXlsb2FkKHtjb250ZW50LCBtZXNzYWdlLCBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgZmlsZSwgYnJhbmNofSksXG4gICAgY29uZmlnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==