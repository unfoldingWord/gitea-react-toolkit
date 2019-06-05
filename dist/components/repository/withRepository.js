"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRepository = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _Repository = require("./Repository");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function withRepositoryComponent(Component) {
  return function RepositoryComponent(_ref) {
    var repository = _ref.repository,
        onRepository = _ref.onRepository,
        props = _objectWithoutProperties(_ref, ["repository", "onRepository"]);

    var _useState = (0, _react.useState)(repository),
        _useState2 = _slicedToArray(_useState, 2),
        repo = _useState2[0],
        setRepo = _useState2[1];

    var authentication = props.authentication;
    var repositoryConfig = {};

    if (props.repositoryConfig) {
      var _props$repositoryConf = props.repositoryConfig,
          _repositories = _props$repositoryConf.repositories,
          _urls = _props$repositoryConf.urls,
          _defaultOwner = _props$repositoryConf.defaultOwner,
          _defaultQuery = _props$repositoryConf.defaultQuery,
          _config = _objectWithoutProperties(_props$repositoryConf, ["repositories", "urls", "defaultOwner", "defaultQuery"]);

      repositoryConfig = {
        repositories: _repositories,
        urls: _urls,
        defaultOwner: _defaultOwner,
        defaultQuery: _defaultQuery,
        config: _config
      };
    }

    if (authentication && authentication.config) {
      repositoryConfig.config = _objectSpread({}, repositoryConfig.config, authentication.config);
    }

    var _repositoryConfig = repositoryConfig,
        repositories = _repositoryConfig.repositories,
        urls = _repositoryConfig.urls,
        defaultOwner = _repositoryConfig.defaultOwner,
        defaultQuery = _repositoryConfig.defaultQuery,
        config = _repositoryConfig.config;

    var hasRepository = function hasRepository() {
      return repo && repo.name && repo.owner && repo.permissions;
    };

    var updateRepository = function updateRepository(_repo) {
      var __repo;

      if (_repo) {
        __repo = _objectSpread({}, _repo);
        __repo = (0, _helpers.extendRepository)({
          repository: __repo,
          authentication: authentication,
          updateRepository: updateRepository,
          config: config
        });
      }

      if (onRepository) onRepository(__repo);else setRepo(__repo);
    };

    var component = _react.default.createElement("div", null);

    if (!hasRepository() && (urls || repositories)) {
      component = _react.default.createElement(_.Repositories, {
        urls: urls,
        repositories: repositories,
        onRepository: updateRepository,
        config: config
      });
    } else if (!hasRepository() && config) {
      var username;
      if (authentication) username = authentication.user.username;
      component = _react.default.createElement(_.Search, {
        defaultOwner: defaultOwner || username,
        defaultQuery: defaultQuery,
        onRepository: updateRepository,
        config: config
      });
    }

    if (hasRepository()) {
      component = _react.default.createElement(Component, _extends({}, props, {
        repository: repo,
        blobConfig: config
      }));
    }

    return component;
  };
}

withRepositoryComponent.propTypes = _objectSpread({
  /** Configuration to pass through to the Search/Repositories component. */
  repositoryConfig: _propTypes.default.shape({
    /** Urls array to get repository data, if repository data is not provided. */
    urls: _propTypes.default.array,

    /** Repositories data array to render, if urls not provided. */
    repositories: _propTypes.default.array,

    /** Prefill the owner search field. */
    defaultOwner: _propTypes.default.string,

    /** Prefill the query search field. */
    defaultQuery: _propTypes.default.string,

    /** Configuration required for Search or Repositories if paths are provided as URL. */
    server: _propTypes.default.string
  }).isRequired
}, _Repository.Repository.propTypes);
var withRepository = withRepositoryComponent;
exports.withRepository = withRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvd2l0aFJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsid2l0aFJlcG9zaXRvcnlDb21wb25lbnQiLCJDb21wb25lbnQiLCJSZXBvc2l0b3J5Q29tcG9uZW50IiwicmVwb3NpdG9yeSIsIm9uUmVwb3NpdG9yeSIsInByb3BzIiwicmVwbyIsInNldFJlcG8iLCJhdXRoZW50aWNhdGlvbiIsInJlcG9zaXRvcnlDb25maWciLCJyZXBvc2l0b3JpZXMiLCJ1cmxzIiwiZGVmYXVsdE93bmVyIiwiZGVmYXVsdFF1ZXJ5IiwiY29uZmlnIiwiaGFzUmVwb3NpdG9yeSIsIm5hbWUiLCJvd25lciIsInBlcm1pc3Npb25zIiwidXBkYXRlUmVwb3NpdG9yeSIsIl9yZXBvIiwiX19yZXBvIiwiY29tcG9uZW50IiwidXNlcm5hbWUiLCJ1c2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJhcnJheSIsInN0cmluZyIsInNlcnZlciIsImlzUmVxdWlyZWQiLCJSZXBvc2l0b3J5Iiwid2l0aFJlcG9zaXRvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsdUJBQVQsQ0FBaUNDLFNBQWpDLEVBQTRDO0FBQzFDLFNBQU8sU0FBU0MsbUJBQVQsT0FJSjtBQUFBLFFBSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLFFBRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLFFBREVDLEtBQ0Y7O0FBQUEsb0JBQ3VCLHFCQUFTRixVQUFULENBRHZCO0FBQUE7QUFBQSxRQUNNRyxJQUROO0FBQUEsUUFDWUMsT0FEWjs7QUFBQSxRQUdNQyxjQUhOLEdBR3dCSCxLQUh4QixDQUdNRyxjQUhOO0FBSUQsUUFBSUMsZ0JBQWdCLEdBQUcsRUFBdkI7O0FBQ0EsUUFBSUosS0FBSyxDQUFDSSxnQkFBVixFQUE0QjtBQUFBLGtDQUMw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QXdDLFFBQUEsVUFBVSxFQUFFUTtBQUFwRCxTQUFaO0FBQ0Q7O0FBRUQsV0FBT1EsU0FBUDtBQUNELEdBaEVEO0FBaUVEOztBQUVEdEIsdUJBQXVCLENBQUN5QixTQUF4QjtBQUNFO0FBQ0FoQixFQUFBQSxnQkFBZ0IsRUFBRWlCLG1CQUFVQyxLQUFWLENBQWdCO0FBQ2hDO0FBQ0FoQixJQUFBQSxJQUFJLEVBQUVlLG1CQUFVRSxLQUZnQjs7QUFHaEM7QUFDQWxCLElBQUFBLFlBQVksRUFBRWdCLG1CQUFVRSxLQUpROztBQUtoQztBQUNBaEIsSUFBQUEsWUFBWSxFQUFFYyxtQkFBVUcsTUFOUTs7QUFPaEM7QUFDQWhCLElBQUFBLFlBQVksRUFBRWEsbUJBQVVHLE1BUlE7O0FBU2hDO0FBQ0FDLElBQUFBLE1BQU0sRUFBRUosbUJBQVVHO0FBVmMsR0FBaEIsRUFXZkU7QUFiTCxHQWNLQyx1QkFBV1AsU0FkaEI7QUFpQk8sSUFBTVEsY0FBYyxHQUFHakMsdUJBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBSZXBvc2l0b3JpZXMsIFNlYXJjaCB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgZXh0ZW5kUmVwb3NpdG9yeSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmZ1bmN0aW9uIHdpdGhSZXBvc2l0b3J5Q29tcG9uZW50KENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gUmVwb3NpdG9yeUNvbXBvbmVudCAoe1xuICAgIHJlcG9zaXRvcnksXG4gICAgb25SZXBvc2l0b3J5LFxuICAgIC4uLnByb3BzXG4gIH0pIHtcbiAgICBjb25zdCBbcmVwbywgc2V0UmVwb10gPSB1c2VTdGF0ZShyZXBvc2l0b3J5KTtcblxuICAgIGNvbnN0IHthdXRoZW50aWNhdGlvbn0gPSBwcm9wcztcbiAgICBsZXQgcmVwb3NpdG9yeUNvbmZpZyA9IHt9O1xuICAgIGlmIChwcm9wcy5yZXBvc2l0b3J5Q29uZmlnKSB7XG4gICAgICBjb25zdCB7cmVwb3NpdG9yaWVzLCB1cmxzLCBkZWZhdWx0T3duZXIsIGRlZmF1bHRRdWVyeSwgLi4uY29uZmlnfSA9IHByb3BzLnJlcG9zaXRvcnlDb25maWc7XG4gICAgICByZXBvc2l0b3J5Q29uZmlnID0ge3JlcG9zaXRvcmllcywgdXJscywgZGVmYXVsdE93bmVyLCBkZWZhdWx0UXVlcnksIGNvbmZpZ307XG4gICAgfVxuICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi5jb25maWcpIHtcbiAgICAgIHJlcG9zaXRvcnlDb25maWcuY29uZmlnID0gey4uLnJlcG9zaXRvcnlDb25maWcuY29uZmlnLCAuLi5hdXRoZW50aWNhdGlvbi5jb25maWd9O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICByZXBvc2l0b3JpZXMsXG4gICAgICB1cmxzLFxuICAgICAgZGVmYXVsdE93bmVyLFxuICAgICAgZGVmYXVsdFF1ZXJ5LFxuICAgICAgY29uZmlnXG4gICAgfSA9IHJlcG9zaXRvcnlDb25maWc7XG5cbiAgICBjb25zdCBoYXNSZXBvc2l0b3J5ID0gKCkgPT4gKHJlcG8gJiYgcmVwby5uYW1lICYmIHJlcG8ub3duZXIgJiYgcmVwby5wZXJtaXNzaW9ucyApO1xuXG4gICAgY29uc3QgdXBkYXRlUmVwb3NpdG9yeSAgPSAoX3JlcG8pID0+IHtcbiAgICAgIGxldCBfX3JlcG87XG4gICAgICBpZiAoX3JlcG8pIHtcbiAgICAgICAgX19yZXBvID0gey4uLl9yZXBvfTtcbiAgICAgICAgX19yZXBvID0gZXh0ZW5kUmVwb3NpdG9yeSh7cmVwb3NpdG9yeTogX19yZXBvLCBhdXRoZW50aWNhdGlvbiwgdXBkYXRlUmVwb3NpdG9yeSwgY29uZmlnfSk7XG4gICAgICB9XG4gICAgICBpZiAob25SZXBvc2l0b3J5KSBvblJlcG9zaXRvcnkoX19yZXBvKTtcbiAgICAgIGVsc2Ugc2V0UmVwbyhfX3JlcG8pO1xuICAgIH07XG5cbiAgICBsZXQgY29tcG9uZW50ID0gPGRpdiAvPjtcbiAgICBpZiAoIWhhc1JlcG9zaXRvcnkoKSAmJiAodXJscyB8fCByZXBvc2l0b3JpZXMpKSB7XG4gICAgICBjb21wb25lbnQgPSAoXG4gICAgICAgIDxSZXBvc2l0b3JpZXNcbiAgICAgICAgICB1cmxzPXt1cmxzfVxuICAgICAgICAgIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfVxuICAgICAgICAgIG9uUmVwb3NpdG9yeT17dXBkYXRlUmVwb3NpdG9yeX1cbiAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaGFzUmVwb3NpdG9yeSgpICYmIGNvbmZpZykge1xuICAgICAgbGV0IHVzZXJuYW1lO1xuICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uKSB1c2VybmFtZSA9IGF1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWU7XG4gICAgICBjb21wb25lbnQgPSAoXG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBkZWZhdWx0T3duZXI9e2RlZmF1bHRPd25lciB8fCB1c2VybmFtZX1cbiAgICAgICAgICBkZWZhdWx0UXVlcnk9e2RlZmF1bHRRdWVyeX1cbiAgICAgICAgICBvblJlcG9zaXRvcnk9e3VwZGF0ZVJlcG9zaXRvcnl9XG4gICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChoYXNSZXBvc2l0b3J5KCkpIHtcbiAgICAgIGNvbXBvbmVudCA9IDxDb21wb25lbnQgey4uLnByb3BzfSByZXBvc2l0b3J5PXtyZXBvfSBibG9iQ29uZmlnPXtjb25maWd9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn1cblxud2l0aFJlcG9zaXRvcnlDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogQ29uZmlndXJhdGlvbiB0byBwYXNzIHRocm91Z2ggdG8gdGhlIFNlYXJjaC9SZXBvc2l0b3JpZXMgY29tcG9uZW50LiAqL1xuICByZXBvc2l0b3J5Q29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBVcmxzIGFycmF5IHRvIGdldCByZXBvc2l0b3J5IGRhdGEsIGlmIHJlcG9zaXRvcnkgZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gICAgdXJsczogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKiBSZXBvc2l0b3JpZXMgZGF0YSBhcnJheSB0byByZW5kZXIsIGlmIHVybHMgbm90IHByb3ZpZGVkLiAqL1xuICAgIHJlcG9zaXRvcmllczogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKiBQcmVmaWxsIHRoZSBvd25lciBzZWFyY2ggZmllbGQuICovXG4gICAgZGVmYXVsdE93bmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBQcmVmaWxsIHRoZSBxdWVyeSBzZWFyY2ggZmllbGQuICovXG4gICAgZGVmYXVsdFF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGZvciBTZWFyY2ggb3IgUmVwb3NpdG9yaWVzIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KS5pc1JlcXVpcmVkLFxuICAuLi5SZXBvc2l0b3J5LnByb3BUeXBlcyxcbn07XG5cbmV4cG9ydCBjb25zdCB3aXRoUmVwb3NpdG9yeSA9IHdpdGhSZXBvc2l0b3J5Q29tcG9uZW50O1xuIl19