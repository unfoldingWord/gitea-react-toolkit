"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchResourceManifests = fetchResourceManifests;
exports.getLanguages = getLanguages;
exports.getLanguageIds = getLanguageIds;
exports.getLanguageIdsByResource = getLanguageIdsByResource;
exports.fetchManifest = fetchManifest;
exports.fetchRepositoriesZipFiles = fetchRepositoriesZipFiles;
exports.resourceRepositories = void 0;

var _path = _interopRequireDefault(require("path"));

var _jsYamlParser = _interopRequireDefault(require("js-yaml-parser"));

var _gitHttps = require("../git-https");

var _languages = require("../languages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resourceRepositories = function resourceRepositories(_ref) {
  var languageId = _ref.languageId;
  return {
    obs: languageId + '_obs',
    'obs-tn': languageId + '_obs-tn',
    'obs-tq': languageId + '_obs-tq',
    'obs-sn': languageId + '_obs-sn',
    'obs-sq': languageId + '_obs-sq',
    ult: languageId + '_ult',
    ust: languageId + '_ust',
    irv: languageId + '_irv',
    ulb: languageId + '_ulb',
    udb: languageId + '_udb',
    tn: languageId + '_tn',
    ta: languageId + '_ta',
    tw: languageId + '_tw',
    ugnt: 'UGNT',
    uhb: 'UHB',
    ugl: languageId + '_ugl',
    uhal: languageId + '_uhal'
  };
};

exports.resourceRepositories = resourceRepositories;

function fetchResourceManifests(_x) {
  return _fetchResourceManifests.apply(this, arguments);
}

function _fetchResourceManifests() {
  _fetchResourceManifests = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var username, languageId, manifests, _resourceRepositories, resourceIds, promises, manifestArray;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref2.username, languageId = _ref2.languageId;
            manifests = {};
            _resourceRepositories = resourceRepositories({
              languageId: languageId
            });
            resourceIds = Object.keys(_resourceRepositories);
            promises = resourceIds.map(function (resourceId) {
              var repository = _resourceRepositories[resourceId];

              var _username = ['ugnt', 'uhb'].includes(resourceId) ? 'unfoldingword' : username;

              return fetchManifest({
                username: _username,
                repository: repository
              });
            });
            _context.next = 7;
            return Promise.all(promises);

          case 7:
            manifestArray = _context.sent;
            resourceIds.forEach(function (resourceId, index) {
              manifests[resourceId] = manifestArray[index];
            });
            return _context.abrupt("return", manifests);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchResourceManifests.apply(this, arguments);
}

;

function getLanguages(_x2) {
  return _getLanguages.apply(this, arguments);
}

function _getLanguages() {
  _getLanguages = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, resourceIds, languageIds, languages;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, resourceIds = _ref3.resourceIds;
            _context2.next = 3;
            return getLanguageIds({
              username: username,
              resourceIds: resourceIds
            });

          case 3:
            languageIds = _context2.sent;
            languages = languageIds.map(function (languageId) {
              return (0, _languages.getLanguage)({
                languageId: languageId
              });
            }).filter(function (language) {
              return !!language;
            });
            languages.sort(function (a, b) {
              return a.languageId > b.languageId ? 1 : b.languageId > a.languageId ? -1 : 0;
            });
            return _context2.abrupt("return", languages);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLanguages.apply(this, arguments);
}

;

function getLanguageIds(_x3) {
  return _getLanguageIds.apply(this, arguments);
} // /repos/search?q=ulb&uid=4598&limit=50&exclusive=true


function _getLanguageIds() {
  _getLanguageIds = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref4) {
    var username, resourceIds, languageIds, promises, languageIdsArray, _languageIds;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            username = _ref4.username, resourceIds = _ref4.resourceIds;
            languageIds = [];
            promises = resourceIds.map(function (resourceId) {
              return getLanguageIdsByResource({
                username: username,
                resourceId: resourceId
              });
            });
            _context3.next = 5;
            return Promise.all(promises);

          case 5:
            languageIdsArray = _context3.sent;
            _languageIds = languageIdsArray.flat();

            _languageIds.forEach(function (languageId) {
              var languageAdded = languageIds.includes(languageId);
              if (!languageAdded) languageIds.push(languageId);
            });

            return _context3.abrupt("return", languageIds);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getLanguageIds.apply(this, arguments);
}

function getLanguageIdsByResource(_x4) {
  return _getLanguageIdsByResource.apply(this, arguments);
}

function _getLanguageIdsByResource() {
  _getLanguageIdsByResource = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_ref5) {
    var username, resourceId, languageIds, uid, params, uri, repos;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            username = _ref5.username, resourceId = _ref5.resourceId;
            languageIds = [];
            _context4.next = 4;
            return (0, _gitHttps.getUID)({
              username: username
            });

          case 4:
            uid = _context4.sent;
            params = {
              q: resourceId,
              uid: uid,
              limit: 50,
              exclusive: true
            };
            uri = _path.default.join(apiPath, "repos/search");
            _context4.next = 9;
            return (0, _gitHttps.get)({
              uri: uri,
              params: params
            });

          case 9:
            repos = _context4.sent;

            if (repos && repos.data) {
              languageIds = repos.data.map(function (repo) {
                return repo.name.split('_')[0];
              });
            }

            return _context4.abrupt("return", languageIds);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getLanguageIdsByResource.apply(this, arguments);
}

;

function fetchManifest(_x5) {
  return _fetchManifest.apply(this, arguments);
}

function _fetchManifest() {
  _fetchManifest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_ref6) {
    var username, repository, yaml, json;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            username = _ref6.username, repository = _ref6.repository;
            _context5.next = 3;
            return (0, _gitHttps.getFile)({
              username: username,
              repository: repository,
              path: 'manifest.yaml'
            });

          case 3:
            yaml = _context5.sent;
            json = yaml ? _jsYamlParser.default.safeLoad(yaml) : null;
            return _context5.abrupt("return", json);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fetchManifest.apply(this, arguments);
}

;

function fetchRepositoriesZipFiles(_x6) {
  return _fetchRepositoriesZipFiles.apply(this, arguments);
}

function _fetchRepositoriesZipFiles() {
  _fetchRepositoriesZipFiles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(_ref7) {
    var username, languageId, branch, repositories, promises, zipArray;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            username = _ref7.username, languageId = _ref7.languageId, branch = _ref7.branch;
            repositories = resourceRepositories({
              languageId: languageId
            });
            promises = Object.values(repositories).map(function (repository) {
              return (0, _gitHttps.fetchRepositoryZipFile)({
                username: username,
                repository: repository,
                branch: branch
              });
            });
            _context6.next = 5;
            return Promise.all(promises);

          case 5:
            zipArray = _context6.sent;
            return _context6.abrupt("return", zipArray);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _fetchRepositoriesZipFiles.apply(this, arguments);
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3Jlc291cmNlUmVwb3NpdG9yaWVzL3JlcG9zaXRvcmllcy5qcyJdLCJuYW1lcyI6WyJyZXNvdXJjZVJlcG9zaXRvcmllcyIsImxhbmd1YWdlSWQiLCJvYnMiLCJ1bHQiLCJ1c3QiLCJpcnYiLCJ1bGIiLCJ1ZGIiLCJ0biIsInRhIiwidHciLCJ1Z250IiwidWhiIiwidWdsIiwidWhhbCIsImZldGNoUmVzb3VyY2VNYW5pZmVzdHMiLCJ1c2VybmFtZSIsIm1hbmlmZXN0cyIsIl9yZXNvdXJjZVJlcG9zaXRvcmllcyIsInJlc291cmNlSWRzIiwiT2JqZWN0Iiwia2V5cyIsInByb21pc2VzIiwibWFwIiwicmVzb3VyY2VJZCIsInJlcG9zaXRvcnkiLCJfdXNlcm5hbWUiLCJpbmNsdWRlcyIsImZldGNoTWFuaWZlc3QiLCJQcm9taXNlIiwiYWxsIiwibWFuaWZlc3RBcnJheSIsImZvckVhY2giLCJpbmRleCIsImdldExhbmd1YWdlcyIsImdldExhbmd1YWdlSWRzIiwibGFuZ3VhZ2VJZHMiLCJsYW5ndWFnZXMiLCJmaWx0ZXIiLCJsYW5ndWFnZSIsInNvcnQiLCJhIiwiYiIsImdldExhbmd1YWdlSWRzQnlSZXNvdXJjZSIsImxhbmd1YWdlSWRzQXJyYXkiLCJfbGFuZ3VhZ2VJZHMiLCJmbGF0IiwibGFuZ3VhZ2VBZGRlZCIsInB1c2giLCJ1aWQiLCJwYXJhbXMiLCJxIiwibGltaXQiLCJleGNsdXNpdmUiLCJ1cmkiLCJQYXRoIiwiam9pbiIsImFwaVBhdGgiLCJyZXBvcyIsImRhdGEiLCJyZXBvIiwibmFtZSIsInNwbGl0IiwicGF0aCIsInlhbWwiLCJqc29uIiwiWUFNTCIsInNhZmVMb2FkIiwiZmV0Y2hSZXBvc2l0b3JpZXNaaXBGaWxlcyIsImJyYW5jaCIsInJlcG9zaXRvcmllcyIsInZhbHVlcyIsInppcEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBTUE7Ozs7Ozs7O0FBRU8s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QUFBdkIsZUFBdkIsQ0FBUDtBQUNELGFBRmdCLENBRlo7QUFBQTtBQUFBLG1CQUtrQnhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaLENBTGxCOztBQUFBO0FBS0NrRCxZQUFBQSxRQUxEO0FBQUEsOENBTUVBLFFBTkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9OIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgWUFNTCBmcm9tICdqcy15YW1sLXBhcnNlcic7XG5cbmltcG9ydCB7XG4gIGdldCxcbiAgZ2V0RmlsZSxcbiAgZ2V0VUlELFxuICBmZXRjaFJlcG9zaXRvcnlaaXBGaWxlLFxufSBmcm9tICcuLi9naXQtaHR0cHMnO1xuaW1wb3J0IHsgZ2V0TGFuZ3VhZ2UgfSBmcm9tICcuLi9sYW5ndWFnZXMnO1xuXG5leHBvcnQgY29uc3QgcmVzb3VyY2VSZXBvc2l0b3JpZXMgPSAoe2xhbmd1YWdlSWR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgb2JzOiBsYW5ndWFnZUlkICsgJ19vYnMnLFxuICAgICdvYnMtdG4nOiBsYW5ndWFnZUlkICsgJ19vYnMtdG4nLFxuICAgICdvYnMtdHEnOiBsYW5ndWFnZUlkICsgJ19vYnMtdHEnLFxuICAgICdvYnMtc24nOiBsYW5ndWFnZUlkICsgJ19vYnMtc24nLFxuICAgICdvYnMtc3EnOiBsYW5ndWFnZUlkICsgJ19vYnMtc3EnLFxuICAgIHVsdDogbGFuZ3VhZ2VJZCArICdfdWx0JyxcbiAgICB1c3Q6IGxhbmd1YWdlSWQgKyAnX3VzdCcsXG4gICAgaXJ2OiBsYW5ndWFnZUlkICsgJ19pcnYnLFxuICAgIHVsYjogbGFuZ3VhZ2VJZCArICdfdWxiJyxcbiAgICB1ZGI6IGxhbmd1YWdlSWQgKyAnX3VkYicsXG4gICAgdG46IGxhbmd1YWdlSWQgKyAnX3RuJyxcbiAgICB0YTogbGFuZ3VhZ2VJZCArICdfdGEnLFxuICAgIHR3OiBsYW5ndWFnZUlkICsgJ190dycsXG4gICAgdWdudDogJ1VHTlQnLFxuICAgIHVoYjogJ1VIQicsXG4gICAgdWdsOiBsYW5ndWFnZUlkICsgJ191Z2wnLFxuICAgIHVoYWw6IGxhbmd1YWdlSWQgKyAnX3VoYWwnLFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzb3VyY2VNYW5pZmVzdHMoe3VzZXJuYW1lLCBsYW5ndWFnZUlkfSkge1xuICBsZXQgbWFuaWZlc3RzID0ge307XG4gIGNvbnN0IF9yZXNvdXJjZVJlcG9zaXRvcmllcyA9IHJlc291cmNlUmVwb3NpdG9yaWVzKHtsYW5ndWFnZUlkfSk7XG4gIGNvbnN0IHJlc291cmNlSWRzID0gT2JqZWN0LmtleXMoX3Jlc291cmNlUmVwb3NpdG9yaWVzKTtcbiAgY29uc3QgcHJvbWlzZXMgPSByZXNvdXJjZUlkcy5tYXAocmVzb3VyY2VJZCA9PiB7XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IF9yZXNvdXJjZVJlcG9zaXRvcmllc1tyZXNvdXJjZUlkXTtcbiAgICBjb25zdCBfdXNlcm5hbWUgPSBbJ3VnbnQnLCd1aGInXS5pbmNsdWRlcyhyZXNvdXJjZUlkKSA/ICd1bmZvbGRpbmd3b3JkJyA6IHVzZXJuYW1lO1xuICAgIHJldHVybiBmZXRjaE1hbmlmZXN0KHt1c2VybmFtZTogX3VzZXJuYW1lLCByZXBvc2l0b3J5fSlcbiAgfSk7XG4gIGNvbnN0IG1hbmlmZXN0QXJyYXkgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIHJlc291cmNlSWRzLmZvckVhY2goKHJlc291cmNlSWQsIGluZGV4KSA9PiB7XG4gICAgbWFuaWZlc3RzW3Jlc291cmNlSWRdID0gbWFuaWZlc3RBcnJheVtpbmRleF07XG4gIH0pO1xuICByZXR1cm4gbWFuaWZlc3RzO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhbmd1YWdlcyh7dXNlcm5hbWUsIHJlc291cmNlSWRzfSkge1xuICBjb25zdCBsYW5ndWFnZUlkcyA9IGF3YWl0IGdldExhbmd1YWdlSWRzKHt1c2VybmFtZSwgcmVzb3VyY2VJZHN9KTtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2VJZHMubWFwKGxhbmd1YWdlSWQgPT5cbiAgICBnZXRMYW5ndWFnZSh7bGFuZ3VhZ2VJZH0pXG4gICkuZmlsdGVyKGxhbmd1YWdlID0+ICEhbGFuZ3VhZ2UpO1xuICBsYW5ndWFnZXMuc29ydCgoYSxiKSA9PlxuICAgIChhLmxhbmd1YWdlSWQgPiBiLmxhbmd1YWdlSWQpID8gMSA6ICgoYi5sYW5ndWFnZUlkID4gYS5sYW5ndWFnZUlkKSA/IC0xIDogMClcbiAgKTtcbiAgcmV0dXJuIGxhbmd1YWdlcztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYW5ndWFnZUlkcyh7dXNlcm5hbWUsIHJlc291cmNlSWRzfSkge1xuICBsZXQgbGFuZ3VhZ2VJZHMgPSBbXTtcbiAgY29uc3QgcHJvbWlzZXMgPSByZXNvdXJjZUlkcy5tYXAocmVzb3VyY2VJZCA9PiB7XG4gICAgcmV0dXJuIGdldExhbmd1YWdlSWRzQnlSZXNvdXJjZSh7dXNlcm5hbWUsIHJlc291cmNlSWR9KTtcbiAgfSk7XG4gIGNvbnN0IGxhbmd1YWdlSWRzQXJyYXkgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIGNvbnN0IF9sYW5ndWFnZUlkcyA9IGxhbmd1YWdlSWRzQXJyYXkuZmxhdCgpO1xuICBfbGFuZ3VhZ2VJZHMuZm9yRWFjaChsYW5ndWFnZUlkID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZUFkZGVkID0gbGFuZ3VhZ2VJZHMuaW5jbHVkZXMobGFuZ3VhZ2VJZCk7XG4gICAgaWYgKCFsYW5ndWFnZUFkZGVkKSBsYW5ndWFnZUlkcy5wdXNoKGxhbmd1YWdlSWQpO1xuICB9KTtcbiAgcmV0dXJuIGxhbmd1YWdlSWRzO1xufVxuXG4vLyAvcmVwb3Mvc2VhcmNoP3E9dWxiJnVpZD00NTk4JmxpbWl0PTUwJmV4Y2x1c2l2ZT10cnVlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VJZHNCeVJlc291cmNlKHt1c2VybmFtZSwgcmVzb3VyY2VJZH0pIHtcbiAgbGV0IGxhbmd1YWdlSWRzID0gW107XG4gIGNvbnN0IHVpZCA9IGF3YWl0IGdldFVJRCh7dXNlcm5hbWV9KTtcbiAgY29uc3QgcGFyYW1zID0ge3E6IHJlc291cmNlSWQsIHVpZCwgbGltaXQ6IDUwLCBleGNsdXNpdmU6IHRydWV9O1xuICBjb25zdCB1cmkgPSBQYXRoLmpvaW4oYXBpUGF0aCwgYHJlcG9zL3NlYXJjaGApO1xuICBjb25zdCByZXBvcyA9IGF3YWl0IGdldCh7dXJpLCBwYXJhbXN9KTtcbiAgaWYgKHJlcG9zICYmIHJlcG9zLmRhdGEpIHtcbiAgICBsYW5ndWFnZUlkcyA9IHJlcG9zLmRhdGEubWFwKHJlcG8gPT4gcmVwby5uYW1lLnNwbGl0KCdfJylbMF0pO1xuICB9XG4gIHJldHVybiBsYW5ndWFnZUlkcztcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1hbmlmZXN0KHt1c2VybmFtZSwgcmVwb3NpdG9yeX0pIHtcbiAgY29uc3QgeWFtbCA9IGF3YWl0IGdldEZpbGUoe3VzZXJuYW1lLCByZXBvc2l0b3J5LCBwYXRoOiAnbWFuaWZlc3QueWFtbCd9KTtcbiAgY29uc3QganNvbiA9ICh5YW1sKSA/IFlBTUwuc2FmZUxvYWQoeWFtbCkgOiBudWxsO1xuICByZXR1cm4ganNvbjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlcG9zaXRvcmllc1ppcEZpbGVzKHt1c2VybmFtZSwgbGFuZ3VhZ2VJZCwgYnJhbmNofSkge1xuICBjb25zdCByZXBvc2l0b3JpZXMgPSByZXNvdXJjZVJlcG9zaXRvcmllcyh7bGFuZ3VhZ2VJZH0pO1xuICBjb25zdCBwcm9taXNlcyA9IE9iamVjdC52YWx1ZXMocmVwb3NpdG9yaWVzKS5tYXAocmVwb3NpdG9yeSA9PiB7XG4gICAgcmV0dXJuIGZldGNoUmVwb3NpdG9yeVppcEZpbGUoe3VzZXJuYW1lLCByZXBvc2l0b3J5LCBicmFuY2h9KTtcbiAgfSk7XG4gIGNvbnN0IHppcEFycmF5ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICByZXR1cm4gemlwQXJyYXk7XG59O1xuIl19