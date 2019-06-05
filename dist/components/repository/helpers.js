"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRepository = exports.updateRepositorySettings = exports.readRepository = exports.createRepository = exports.repositoryForks = exports.forkRepository = exports.extendRepository = void 0;

var _core = require("../../core");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var extendRepository = function extendRepository(_ref) {
  var repository = _ref.repository,
      authentication = _ref.authentication,
      updateRepository = _ref.updateRepository,
      config = _ref.config;
  var user = authentication && authentication.user ? authentication.user : undefined;

  if (user && user.username === repository.owner.username) {
    repository.dangerouslyDelete = function () {
      deleteRepository({
        repository: repository,
        config: config
      });
      window.setTimeout(updateRepository, 500);
    };
  } else {
    repository.fork = function () {
      forkRepository({
        repository: repository,
        config: config
      });
      updateRepository();
    };
  }

  if (repository.permissions.admin) {
    repository.update =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(settings) {
        var _repository;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return updateRepositorySettings({
                  repository: repository,
                  settings: settings,
                  config: config
                });

              case 2:
                _repository = _context.sent;
                updateRepository(_repository);
                return _context.abrupt("return", _repository);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  repository.forks = function () {
    repositoryForks({
      repository: repository,
      config: config
    });
  };

  repository.close = function () {
    updateRepository();
  };

  return repository;
};

exports.extendRepository = extendRepository;

var forkRepository =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            repository = _ref3.repository, config = _ref3.config;
            username = repository.owner.username, name = repository.name;
            _context2.next = 4;
            return (0, _core.createFork)({
              owner: username,
              repo: name,
              config: config
            });

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function forkRepository(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.forkRepository = forkRepository;

var repositoryForks =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref5) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            repository = _ref5.repository, config = _ref5.config;
            username = repository.owner.username, name = repository.name;
            _context3.next = 4;
            return (0, _core.readForks)({
              owner: username,
              repo: name,
              config: config
            });

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function repositoryForks(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.repositoryForks = repositoryForks;

var createRepository =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref7) {
    var repo, settings, config, _settings, response;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            repo = _ref7.repo, settings = _ref7.settings, config = _ref7.config;
            _settings = _objectSpread({
              name: repo,
              description: "".concat(repo, " created via API."),
              private: false
            }, settings);
            _context4.next = 4;
            return (0, _core.createRepo)({
              repo: repo,
              settings: _settings,
              config: config
            });

          case 4:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function createRepository(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.createRepository = createRepository;

var readRepository =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref9) {
    var owner, repo, config, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            owner = _ref9.owner, repo = _ref9.repo, config = _ref9.config;
            _context5.next = 3;
            return (0, _core.readRepo)({
              owner: owner,
              repo: repo,
              config: config
            });

          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function readRepository(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

exports.readRepository = readRepository;

var updateRepositorySettings =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(_ref11) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            repository = _ref11.repository, settings = _ref11.settings, config = _ref11.config;
            username = repository.owner.username, name = repository.name;
            _context6.next = 4;
            return (0, _core.updateRepo)({
              owner: username,
              repo: name,
              settings: settings,
              config: config
            });

          case 4:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateRepositorySettings(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

exports.updateRepositorySettings = updateRepositorySettings;

var deleteRepository =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(_ref13) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            repository = _ref13.repository, settings = _ref13.settings, config = _ref13.config;
            username = repository.owner.username, name = repository.name;
            _context7.next = 4;
            return (0, _core.deleteRepo)({
              owner: username,
              repo: name,
              settings: settings,
              config: config
            });

          case 4:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteRepository(_x7) {
    return _ref14.apply(this, arguments);
  };
}();

exports.deleteRepository = deleteRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJleHRlbmRSZXBvc2l0b3J5IiwicmVwb3NpdG9yeSIsImF1dGhlbnRpY2F0aW9uIiwidXBkYXRlUmVwb3NpdG9yeSIsImNvbmZpZyIsInVzZXIiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIm93bmVyIiwiZGFuZ2Vyb3VzbHlEZWxldGUiLCJkZWxldGVSZXBvc2l0b3J5Iiwid2luZG93Iiwic2V0VGltZW91dCIsImZvcmsiLCJmb3JrUmVwb3NpdG9yeSIsInBlcm1pc3Npb25zIiwiYWRtaW4iLCJ1cGRhdGUiLCJzZXR0aW5ncyIsInVwZGF0ZVJlcG9zaXRvcnlTZXR0aW5ncyIsIl9yZXBvc2l0b3J5IiwiZm9ya3MiLCJyZXBvc2l0b3J5Rm9ya3MiLCJjbG9zZSIsIm5hbWUiLCJyZXBvIiwicmVzcG9uc2UiLCJjcmVhdGVSZXBvc2l0b3J5IiwiX3NldHRpbmdzIiwiZGVzY3JpcHRpb24iLCJwcml2YXRlIiwicmVhZFJlcG9zaXRvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQVNPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBNEQ7QUFBQSxNQUExREMsVUFBMEQsUUFBMURBLFVBQTBEO0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxnQkFBOEIsUUFBOUJBLGdCQUE4QjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUMxRixNQUFNQyxJQUFJLEdBQUlILGNBQWMsSUFBSUEsY0FBYyxDQUFDRyxJQUFsQyxHQUEwQ0gsY0FBYyxDQUFDRyxJQUF6RCxHQUFnRUMsU0FBN0U7O0FBQ0EsTUFBSUQsSUFBSSxJQUFJQSxJQUFJLENBQUNFLFFBQUwsS0FBa0JOLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsUUFBL0MsRUFBeUQ7QUFDdkROLElBQUFBLFVBQVUsQ0FBQ1EsaUJBQVgsR0FBK0Is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LENBQ2JELFFBRGEsRUFDRGlCLElBREMsR0FDUXZCLFVBRFIsQ0FDRHVCLElBREM7QUFBQTtBQUFBLG1CQUVQLHNCQUFXO0FBQUNoQixjQUFBQSxLQUFLLEVBQUVELFFBQVI7QUFBa0JrQixjQUFBQSxJQUFJLEVBQUVELElBQXhCO0FBQThCTixjQUFBQSxRQUFRLEVBQVJBLFFBQTlCO0FBQXdDZCxjQUFBQSxNQUFNLEVBQU5BO0FBQXhDLGFBQVgsQ0FGTzs7QUFBQTtBQUV4QnNCLFlBQUFBLFFBRndCO0FBQUEsOENBR3ZCQSxRQUh1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQmhCLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgY3JlYXRlRm9yayxcbiAgcmVhZEZvcmtzLFxuICBjcmVhdGVSZXBvLFxuICByZWFkUmVwbyxcbiAgdXBkYXRlUmVwbyxcbiAgZGVsZXRlUmVwbyxcbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZXBvc2l0b3J5ID0gKHtyZXBvc2l0b3J5LCBhdXRoZW50aWNhdGlvbiwgdXBkYXRlUmVwb3NpdG9yeSwgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF1dGhlbnRpY2F0aW9uICYmIGF1dGhlbnRpY2F0aW9uLnVzZXIpID8gYXV0aGVudGljYXRpb24udXNlciA6IHVuZGVmaW5lZDtcbiAgaWYgKHVzZXIgJiYgdXNlci51c2VybmFtZSA9PT0gcmVwb3NpdG9yeS5vd25lci51c2VybmFtZSkge1xuICAgIHJlcG9zaXRvcnkuZGFuZ2Vyb3VzbHlEZWxldGUgPSAoKSA9PiB7XG4gICAgICBkZWxldGVSZXBvc2l0b3J5KHtyZXBvc2l0b3J5LCBjb25maWd9KTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHVwZGF0ZVJlcG9zaXRvcnksIDUwMCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXBvc2l0b3J5LmZvcmsgPSAoKSA9PiB7XG4gICAgICBmb3JrUmVwb3NpdG9yeSh7cmVwb3NpdG9yeSwgY29uZmlnfSk7XG4gICAgICB1cGRhdGVSZXBvc2l0b3J5KCk7XG4gICAgfTtcbiAgfVxuICBpZiAocmVwb3NpdG9yeS5wZXJtaXNzaW9ucy5hZG1pbikge1xuICAgIHJlcG9zaXRvcnkudXBkYXRlID0gYXN5bmMgKHNldHRpbmdzKSA9PiB7XG4gICAgICBjb25zdCBfcmVwb3NpdG9yeSA9IGF3YWl0IHVwZGF0ZVJlcG9zaXRvcnlTZXR0aW5ncyh7cmVwb3NpdG9yeSwgc2V0dGluZ3MsIGNvbmZpZ30pO1xuICAgICAgdXBkYXRlUmVwb3NpdG9yeShfcmVwb3NpdG9yeSk7XG4gICAgICByZXR1cm4gX3JlcG9zaXRvcnk7XG4gICAgfTtcbiAgfVxuICByZXBvc2l0b3J5LmZvcmtzID0gKCkgPT4ge1xuICAgIHJlcG9zaXRvcnlGb3Jrcyh7cmVwb3NpdG9yeSwgY29uZmlnfSk7XG4gIH07XG4gIHJlcG9zaXRvcnkuY2xvc2UgPSAoKSA9PiB7XG4gICAgdXBkYXRlUmVwb3NpdG9yeSgpO1xuICB9O1xuICByZXR1cm4gcmVwb3NpdG9yeTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JrUmVwb3NpdG9yeSA9IGFzeW5jICh7cmVwb3NpdG9yeSwgY29uZmlnfSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY3JlYXRlRm9yayh7b3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcG9zaXRvcnlGb3JrcyA9IGFzeW5jICh7cmVwb3NpdG9yeSwgY29uZmlnfSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVhZEZvcmtzKHtvd25lcjogdXNlcm5hbWUsIHJlcG86IG5hbWUsIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVwb3NpdG9yeSA9IGFzeW5jICh7cmVwbywgc2V0dGluZ3MsIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgX3NldHRpbmdzID0ge1xuICAgIG5hbWU6IHJlcG8sXG4gICAgZGVzY3JpcHRpb246IGAke3JlcG99IGNyZWF0ZWQgdmlhIEFQSS5gLFxuICAgIHByaXZhdGU6IGZhbHNlLFxuICAgIC4uLnNldHRpbmdzLFxuICB9XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY3JlYXRlUmVwbyh7cmVwbywgc2V0dGluZ3M6IF9zZXR0aW5ncywgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkUmVwb3NpdG9yeSA9IGFzeW5jICh7b3duZXIsIHJlcG8sIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWFkUmVwbyh7b3duZXIsIHJlcG8sIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVwb3NpdG9yeVNldHRpbmdzID0gYXN5bmMgKHtyZXBvc2l0b3J5LCBzZXR0aW5ncywgY29uZmlnfSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBkYXRlUmVwbyh7b3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBzZXR0aW5ncywgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVSZXBvc2l0b3J5ID0gYXN5bmMgKHtyZXBvc2l0b3J5LCBzZXR0aW5ncywgY29uZmlnfSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGVsZXRlUmVwbyh7b3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBzZXR0aW5ncywgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG4iXX0=