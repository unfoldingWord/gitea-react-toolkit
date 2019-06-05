"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repositorySearch = exports.repositoryExists = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiPath = 'api/v1';

var repositoryExists =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var owner, repository, config, uid, params, url, _ref3, repos, repo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repository = _ref.repository, config = _ref.config;
            _context.next = 3;
            return (0, _.getUID)({
              username: owner,
              config: config
            });

          case 3:
            uid = _context.sent;
            params = {
              q: repository,
              uid: uid
            };
            url = _path.default.join(apiPath, 'repos', 'search');
            _context.next = 8;
            return (0, _.get)({
              url: url,
              params: params,
              config: config
            });

          case 8:
            _ref3 = _context.sent;
            repos = _ref3.data;
            repo = repos.filter(function (repo) {
              return repo.name === repository;
            })[0];
            return _context.abrupt("return", !!repo);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function repositoryExists(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // /repos/search?q=ulb&uid=4598&limit=50&exclusive=true


exports.repositoryExists = repositoryExists;

var repositorySearch =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref4) {
    var owner, query, config, _query, repositories, params, url, _ref6, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref4.owner, query = _ref4.query, config = _ref4.config;
            _query = query;

            if (_query) {
              _query = _query.replace(/_/g, '\\_');
              _query = _query.replace(/\s+/g, '%');
              _query = _query.replace(/\*/g, '_');
            }

            repositories = [];
            params = {
              q: _query,
              limit: 50
            };

            if (!owner) {
              _context2.next = 10;
              break;
            }

            _context2.next = 8;
            return (0, _.getUID)({
              username: owner,
              config: config
            });

          case 8:
            params.uid = _context2.sent;
            params.exclusive = true;

          case 10:
            url = _path.default.join(apiPath, 'repos', 'search');
            _context2.prev = 11;
            _context2.next = 14;
            return (0, _.get)({
              url: url,
              params: params,
              config: config
            });

          case 14:
            _ref6 = _context2.sent;
            data = _ref6.data;
            repositories = data;
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](11);
            repositories = [];

          case 22:
            return _context2.abrupt("return", repositories);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[11, 19]]);
  }));

  return function repositorySearch(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.repositorySearch = repositorySearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9zZWFyY2guanMiXSwibmFtZXMiOlsiYXBpUGF0aCIsInJlcG9zaXRvcnlFeGlzdHMiLCJvd25lciIsInJlcG9zaXRvcnkiLCJjb25maWciLCJ1c2VybmFtZSIsInVpZCIsInBhcmFtcyIsInEiLCJ1cmwiLCJQYXRoIiwiam9pbiIsInJlcG9zIiwiZGF0YSIsInJlcG8iLCJmaWx0ZXIiLCJuYW1lIiwicmVwb3NpdG9yeVNlYXJjaCIsInF1ZXJ5IiwiX3F1ZXJ5IiwicmVwbGFjZSIsInJlcG9zaXRvcmllcyIsImxpbWl0IiwiZXhjbHVzaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFFBQWhCOztBQUVPLElBQU1DLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxZQUFBQSxLQUFSLFFBQVFBLEtBQVIsRUFBZUMsVUFBZixRQUFlQSxVQUFmLEVBQTJCQyxNQUEzQixRQUEyQkEsTUFBM0I7QUFBQTtBQUFBLG1CQUNaLGNBQU87QUFBQ0MsY0FBQUEsUUFBUSxFQUFFSCxLQUFYO0FBQWtCRSxjQUFBQSxNQUFNLEVBQU5BO0FBQWxCLGFBQVAsQ0FEWTs7QUFBQTtBQUN4QkUsWUFBQUEsR0FEd0I7QUFFeEJDLFlBQUFBLE1BRndCLEdBRWY7QUFBRUMsY0FBQUEsQ0FBQyxFQUFFTCxVQUFMO0FBQWlCRyxjQUFBQSxHQUFHLEVBQUhBO0FBQWpCLGFBRmU7QUFHeEJHLFlBQUFBLEdBSHdCLEdBR2xCQyxjQUFLQyxJQUFMLENBQVVYLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsQ0FIa0I7QUFBQTtBQUFBLG1CQUlGLFdBQUk7QUFBQ1MsY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1GLGNBQUFBLE1BQU0sRUFBTkEsTUFBTjtBQUFjSCxjQUFBQSxNQUFNLEVBQU5BO0FBQWQsYUFBSixDQUpFOztBQUFBO0FBQUE7QUFJakJRLFlBQUFBLEtBSmlCLFNBSXZCQyxJQUp1QjtBQUt4QkMsWUFBQUEsSUFMd0IsR0FLakJGLEtBQUssQ0FBQ0csTUFBTixDQUFhLFVBQUFELElBQUk7QUFBQSxxQkFBSUEsSUFBSSxDQUFDRSxJQUFMLEtBQWNiLFVBQWxCO0FBQUEsYUFBakIsRUFBK0MsQ0FBL0MsQ0FMaUI7QUFBQSw2Q0FNdkIsQ0FBQyxDQUFDVyxJQU5xQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQmIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCLEMsQ0FTUDs7Ozs7QUFDTyxJQUFNZ0IsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFmLFlBQUFBLEtBQVIsU0FBUUEsS0FBUixFQUFlZ0IsS0FBZixTQUFlQSxLQUFmLEVBQXNCZCxNQUF0QixTQUFzQkEsTUFBdEI7QUFDMUJlLFlBQUFBLE1BRDBCLEdBQ2pCRCxLQURpQjs7QUFFOUIsZ0JBQUlDLE1BQUosRUFBWTtBQUNWQSxjQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLElBQWYsRUFBcUIsS0FBckIsQ0FBVDtBQUNBRCxjQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLE1BQWYsRUFBdUIsR0FBdkIsQ0FBVDtBQUNBRCxjQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLEtBQWYsRUFBc0IsR0FBdEIsQ0FBVDtBQUNEOztBQUNHQyxZQUFBQSxZQVAwQixHQU9YLEVBUFc7QUFRMUJkLFlBQUFBLE1BUjBCLEdBUWpCO0FBQUNDLGNBQUFBLENBQUMsRUFBRVcsTUFBSjtBQUFZRyxjQUFBQSxLQUFLLEVBQUU7QUFBbkIsYUFSaUI7O0FBQUEsaUJBUzFCcEIsS0FUMEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFVVCxjQUFPO0FBQUNHLGNBQUFBLFFBQVEsRUFBRUgsS0FBWDtBQUFrQkUsY0FBQUEsTUFBTSxFQUFOQTtBQUFsQixhQUFQLENBVlM7O0FBQUE7QUFVNUJHLFlBQUFBLE1BQU0sQ0FBQ0QsR0FWcUI7QUFXNUJDLFlBQUFBLE1BQU0sQ0FBQ2dCLFNBQVAsR0FBbUIsSUFBbkI7O0FBWDRCO0FBYXhCZCxZQUFBQSxHQWJ3QixHQWFsQkMsY0FBS0MsSUFBTCxDQUFVWCxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLFFBQTVCLENBYmtCO0FBQUE7QUFBQTtBQUFBLG1CQWVQLFdBQUk7QUFBQ1MsY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1GLGNBQUFBLE1BQU0sRUFBTkEsTUFBTjtBQUFjSCxjQUFBQSxNQUFNLEVBQU5BO0FBQWQsYUFBSixDQWZPOztBQUFBO0FBQUE7QUFlckJTLFlBQUFBLElBZnFCLFNBZXJCQSxJQWZxQjtBQWdCNUJRLFlBQUFBLFlBQVksR0FBR1IsSUFBZjtBQWhCNEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQjVCUSxZQUFBQSxZQUFZLEdBQUcsRUFBZjs7QUFsQjRCO0FBQUEsOENBb0J2QkEsWUFwQnVCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgZ2V0LCBnZXRVSUQgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBhcGlQYXRoID0gJ2FwaS92MSc7XG5cbmV4cG9ydCBjb25zdCByZXBvc2l0b3J5RXhpc3RzID0gYXN5bmMgKHtvd25lciwgcmVwb3NpdG9yeSwgY29uZmlnfSkgPT4ge1xuICBjb25zdCB1aWQgPSBhd2FpdCBnZXRVSUQoe3VzZXJuYW1lOiBvd25lciwgY29uZmlnfSk7XG4gIGNvbnN0IHBhcmFtcyA9IHsgcTogcmVwb3NpdG9yeSwgdWlkIH07XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCAnc2VhcmNoJyk7XG4gIGNvbnN0IHtkYXRhOiByZXBvc30gPSBhd2FpdCBnZXQoe3VybCwgcGFyYW1zLCBjb25maWd9KTtcbiAgY29uc3QgcmVwbyA9IHJlcG9zLmZpbHRlcihyZXBvID0+IHJlcG8ubmFtZSA9PT0gcmVwb3NpdG9yeSlbMF07XG4gIHJldHVybiAhIXJlcG87XG59O1xuXG4vLyAvcmVwb3Mvc2VhcmNoP3E9dWxiJnVpZD00NTk4JmxpbWl0PTUwJmV4Y2x1c2l2ZT10cnVlXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeVNlYXJjaCA9IGFzeW5jICh7b3duZXIsIHF1ZXJ5LCBjb25maWd9KSA9PiB7XG4gIGxldCBfcXVlcnkgPSBxdWVyeTtcbiAgaWYgKF9xdWVyeSkge1xuICAgIF9xdWVyeSA9IF9xdWVyeS5yZXBsYWNlKC9fL2csICdcXFxcXycpO1xuICAgIF9xdWVyeSA9IF9xdWVyeS5yZXBsYWNlKC9cXHMrL2csICclJyk7XG4gICAgX3F1ZXJ5ID0gX3F1ZXJ5LnJlcGxhY2UoL1xcKi9nLCAnXycpO1xuICB9XG4gIGxldCByZXBvc2l0b3JpZXMgPSBbXTtcbiAgbGV0IHBhcmFtcyA9IHtxOiBfcXVlcnksIGxpbWl0OiA1MH07XG4gIGlmIChvd25lcikge1xuICAgIHBhcmFtcy51aWQgPSBhd2FpdCBnZXRVSUQoe3VzZXJuYW1lOiBvd25lciwgY29uZmlnfSk7XG4gICAgcGFyYW1zLmV4Y2x1c2l2ZSA9IHRydWU7XG4gIH1cbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsICdzZWFyY2gnKTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBnZXQoe3VybCwgcGFyYW1zLCBjb25maWd9KTtcbiAgICByZXBvc2l0b3JpZXMgPSBkYXRhO1xuICB9IGNhdGNoIHtcbiAgICByZXBvc2l0b3JpZXMgPSBbXTtcbiAgfVxuICByZXR1cm4gcmVwb3NpdG9yaWVzO1xufTtcbiJdfQ==