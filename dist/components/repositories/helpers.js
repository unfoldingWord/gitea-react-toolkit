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
    repository.update = function (settings) {
      updateRepositorySettings({
        repository: repository,
        settings: settings,
        config: config
      });
    };
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
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            repository = _ref2.repository, config = _ref2.config;
            username = repository.owner.username, name = repository.name;
            _context.next = 4;
            return (0, _core.createFork)({
              owner: username,
              repo: name,
              config: config
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function forkRepository(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.forkRepository = forkRepository;

var repositoryForks =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref4) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            repository = _ref4.repository, config = _ref4.config;
            username = repository.owner.username, name = repository.name;
            _context2.next = 4;
            return (0, _core.readForks)({
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

  return function repositoryForks(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.repositoryForks = repositoryForks;

var createRepository =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref6) {
    var repo, settings, config, _settings, response;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            repo = _ref6.repo, settings = _ref6.settings, config = _ref6.config;
            _settings = _objectSpread({
              name: repo,
              description: "".concat(repo, " created via API."),
              private: false
            }, settings);
            _context3.next = 4;
            return (0, _core.createRepo)({
              repo: repo,
              settings: _settings,
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

  return function createRepository(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

exports.createRepository = createRepository;

var readRepository =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref8) {
    var owner, repo, config, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref8.owner, repo = _ref8.repo, config = _ref8.config;
            _context4.next = 3;
            return (0, _core.readRepo)({
              owner: owner,
              repo: repo,
              config: config
            });

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function readRepository(_x4) {
    return _ref9.apply(this, arguments);
  };
}();

exports.readRepository = readRepository;

var updateRepositorySettings =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref10) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            repository = _ref10.repository, settings = _ref10.settings, config = _ref10.config;
            username = repository.owner.username, name = repository.name;
            _context5.next = 4;
            return (0, _core.updateRepo)({
              owner: username,
              repo: name,
              settings: settings,
              config: config
            });

          case 4:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateRepositorySettings(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

exports.updateRepositorySettings = updateRepositorySettings;

var deleteRepository =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(_ref12) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            repository = _ref12.repository, settings = _ref12.settings, config = _ref12.config;
            username = repository.owner.username, name = repository.name;
            _context6.next = 4;
            return (0, _core.deleteRepo)({
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

  return function deleteRepository(_x6) {
    return _ref13.apply(this, arguments);
  };
}();

exports.deleteRepository = deleteRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImV4dGVuZFJlcG9zaXRvcnkiLCJyZXBvc2l0b3J5IiwiYXV0aGVudGljYXRpb24iLCJ1cGRhdGVSZXBvc2l0b3J5IiwiY29uZmlnIiwidXNlciIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwib3duZXIiLCJkYW5nZXJvdXNseURlbGV0ZSIsImRlbGV0ZVJlcG9zaXRvcnkiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZm9yayIsImZvcmtSZXBvc2l0b3J5IiwicGVybWlzc2lvbnMiLCJhZG1pbiIsInVwZGF0ZSIsInNldHRpbmdzIiwidXBkYXRlUmVwb3NpdG9yeVNldHRpbmdzIiwiZm9ya3MiLCJyZXBvc2l0b3J5Rm9ya3MiLCJjbG9zZSIsIm5hbWUiLCJyZXBvIiwicmVzcG9uc2UiLCJjcmVhdGVSZXBvc2l0b3J5IiwiX3NldHRpbmdzIiwiZGVzY3JpcHRpb24iLCJwcml2YXRlIiwicmVhZFJlcG9zaXRvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQVNPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBNEQ7QUFBQSxNQUExREMsVUFBMEQsUUFBMURBLFVBQTBEO0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxnQkFBOEIsUUFBOUJBLGdCQUE4QjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUMxRixNQUFNQyxJQUFJLEdBQUlILGNBQWMsSUFBSUEsY0FBYyxDQUFDRyxJQUFsQyxHQUEwQ0gsY0FBYyxDQUFDRyxJQUF6RCxHQUFnRUMsU0FBN0U7O0FBQ0EsTUFBSUQsSUFBSSxJQUFJQSxJQUFJLENBQUNFLFFBQUwsS0FBa0JOLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsUUFBL0MsRUFBeUQ7QUFDdkROLElBQUFBLFVBQVUsQ0FBQ1EsaUJBQVgsR0FBK0IsWUFBTTtBQUNuQ0Ms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eEJxQixZQUFBQSxRQUZ3QjtBQUFBLDhDQUd2QkEsUUFIdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJmLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgY3JlYXRlRm9yayxcbiAgcmVhZEZvcmtzLFxuICBjcmVhdGVSZXBvLFxuICByZWFkUmVwbyxcbiAgdXBkYXRlUmVwbyxcbiAgZGVsZXRlUmVwbyxcbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZXBvc2l0b3J5ID0gKHtyZXBvc2l0b3J5LCBhdXRoZW50aWNhdGlvbiwgdXBkYXRlUmVwb3NpdG9yeSwgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1c2VyID0gKGF1dGhlbnRpY2F0aW9uICYmIGF1dGhlbnRpY2F0aW9uLnVzZXIpID8gYXV0aGVudGljYXRpb24udXNlciA6IHVuZGVmaW5lZDtcbiAgaWYgKHVzZXIgJiYgdXNlci51c2VybmFtZSA9PT0gcmVwb3NpdG9yeS5vd25lci51c2VybmFtZSkge1xuICAgIHJlcG9zaXRvcnkuZGFuZ2Vyb3VzbHlEZWxldGUgPSAoKSA9PiB7XG4gICAgICBkZWxldGVSZXBvc2l0b3J5KHtyZXBvc2l0b3J5LCBjb25maWd9KTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHVwZGF0ZVJlcG9zaXRvcnksIDUwMCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXBvc2l0b3J5LmZvcmsgPSAoKSA9PiB7XG4gICAgICBmb3JrUmVwb3NpdG9yeSh7cmVwb3NpdG9yeSwgY29uZmlnfSk7XG4gICAgICB1cGRhdGVSZXBvc2l0b3J5KCk7XG4gICAgfTtcbiAgfVxuICBpZiAocmVwb3NpdG9yeS5wZXJtaXNzaW9ucy5hZG1pbikge1xuICAgIHJlcG9zaXRvcnkudXBkYXRlID0gKHNldHRpbmdzKSA9PiB7XG4gICAgICB1cGRhdGVSZXBvc2l0b3J5U2V0dGluZ3Moe3JlcG9zaXRvcnksIHNldHRpbmdzLCBjb25maWd9KTtcbiAgICB9O1xuICB9XG4gIHJlcG9zaXRvcnkuZm9ya3MgPSAoKSA9PiB7XG4gICAgcmVwb3NpdG9yeUZvcmtzKHtyZXBvc2l0b3J5LCBjb25maWd9KTtcbiAgfTtcbiAgcmVwb3NpdG9yeS5jbG9zZSA9ICgpID0+IHtcbiAgICB1cGRhdGVSZXBvc2l0b3J5KCk7XG4gIH07XG4gIHJldHVybiByZXBvc2l0b3J5O1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcmtSZXBvc2l0b3J5ID0gYXN5bmMgKHtyZXBvc2l0b3J5LCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXI6IHsgdXNlcm5hbWUgfSwgbmFtZSB9ID0gcmVwb3NpdG9yeTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjcmVhdGVGb3JrKHtvd25lcjogdXNlcm5hbWUsIHJlcG86IG5hbWUsIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeUZvcmtzID0gYXN5bmMgKHtyZXBvc2l0b3J5LCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXI6IHsgdXNlcm5hbWUgfSwgbmFtZSB9ID0gcmVwb3NpdG9yeTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWFkRm9ya3Moe293bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXBvc2l0b3J5ID0gYXN5bmMgKHtyZXBvLCBzZXR0aW5ncywgY29uZmlnfSkgPT4ge1xuICBjb25zdCBfc2V0dGluZ3MgPSB7XG4gICAgbmFtZTogcmVwbyxcbiAgICBkZXNjcmlwdGlvbjogYCR7cmVwb30gY3JlYXRlZCB2aWEgQVBJLmAsXG4gICAgcHJpdmF0ZTogZmFsc2UsXG4gICAgLi4uc2V0dGluZ3MsXG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjcmVhdGVSZXBvKHtyZXBvLCBzZXR0aW5nczogX3NldHRpbmdzLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlYWRSZXBvc2l0b3J5ID0gYXN5bmMgKHtvd25lciwgcmVwbywgY29uZmlnfSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlYWRSZXBvKHtvd25lciwgcmVwbywgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXBvc2l0b3J5U2V0dGluZ3MgPSBhc3luYyAoe3JlcG9zaXRvcnksIHNldHRpbmdzLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXI6IHsgdXNlcm5hbWUgfSwgbmFtZSB9ID0gcmVwb3NpdG9yeTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGRhdGVSZXBvKHtvd25lcjogdXNlcm5hbWUsIHJlcG86IG5hbWUsIHNldHRpbmdzLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlcG9zaXRvcnkgPSBhc3luYyAoe3JlcG9zaXRvcnksIHNldHRpbmdzLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXI6IHsgdXNlcm5hbWUgfSwgbmFtZSB9ID0gcmVwb3NpdG9yeTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkZWxldGVSZXBvKHtvd25lcjogdXNlcm5hbWUsIHJlcG86IG5hbWUsIHNldHRpbmdzLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==