"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repositories = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _ = require("../");

var _helpers = require("../repository/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function RepositoriesComponent(_ref) {
  var classes = _ref.classes,
      urls = _ref.urls,
      repositories = _ref.repositories,
      onRepository = _ref.onRepository,
      config = _ref.config;

  var updateRepository = function updateRepository(_repo) {
    var __repo;

    if (_repo) {
      __repo = _objectSpread({}, _repo);
      __repo = (0, _helpers.extendRepository)({
        repository: __repo,
        updateRepository: updateRepository,
        config: config
      });
    }

    onRepository(__repo);
  };

  var components = [];

  if (repositories) {
    components = repositories.map(function (repository) {
      return _react.default.createElement(_.Repository, {
        key: JSON.stringify(repository),
        repository: repository,
        onRepository: updateRepository,
        config: config
      });
    });
  } else if (urls) {
    components = urls.map(function (url, index) {
      return _react.default.createElement(_.Repository, {
        key: index,
        url: url,
        onRepository: updateRepository,
        config: config
      });
    });
  }

  return _react.default.createElement(_core.List, {
    className: classes.root
  }, components);
}

RepositoriesComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** Urls array to get repository data, if repository data is not provided. */
  urls: _propTypes.default.array,

  /** Repositories data array to render, if urls not provided. */
  repositories: _propTypes.default.array,

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  })
};
var styles = {
  root: {}
};
var Repositories = (0, _styles.withStyles)(styles)(RepositoriesComponent);
exports.Repositories = Repositories;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvc2l0b3JpZXMuanMiXSwibmFtZXMiOlsiUmVwb3NpdG9yaWVzQ29tcG9uZW50IiwiY2xhc3NlcyIsInVybHMiLCJyZXBvc2l0b3JpZXMiLCJvblJlcG9zaXRvcnkiLCJjb25maWciLCJ1cGRhdGVSZXBvc2l0b3J5IiwiX3JlcG8iLCJfX3JlcG8iLCJyZXBvc2l0b3J5IiwiY29tcG9uZW50cyIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJpbmRleCIsInJvb3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwic2hhcGUiLCJzZXJ2ZXIiLCJzdHJpbmciLCJzdHlsZXMiLCJSZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxxQkFBVCxPQU1HO0FBQUEsTUFMREMsT0FLQyxRQUxEQSxPQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQUEsTUFIREMsWUFHQyxRQUhEQSxZQUdDO0FBQUEsTUFGREMsWUFFQyxRQUZEQSxZQUVDO0FBQUEsTUFEREMsTUFDQyxRQUREQSxNQUNDOztBQUNELE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQUlDLE1BQUo7O0FBQ0EsUUFBSUQsS0FBSixFQUFXO0FBQ1RDLE1BQUFBLE1BQU0scUJBQU9ELEtBQVAsQ0FBTjtBQUNBQyxNQUFBQSxNQUFNLEdBQUcsK0JBQWlCO0FBQUNDLFFBQUFBLFVBQVUsRUFBRUQsTUFBYjtBQUFxQkYsUUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFBckI7QUFBdUNELFFBQUFBLE1BQU0sRUFBTkE7QUFBdkMsT0FBakIsQ0FBVDtBQUNEOztBQUNERCxJQUFBQSxZQUFZLENBQUNJLE1BQUQsQ0FBWjtBQUNELEdBUEQ7O0FBU0EsTUFBSUUsVUFBVSxHQUFHLEVBQWpCOztBQUNBLE1BQUlQLFlBQUosRUFBa0I7QUFDaEJPLElBQUFBLFVBQVUsR0FBR1AsWUFBWSxDQUFDUSxHQUFiLENBQWlCLFVBQUNGLFVBQUQ7QUFBQSxhQUM1Qiw2QkFBQyxZQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVHLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixVQUFmLENBRFA7QUFFRSxRQUFBLFVBQVUsRUFBRUEsVUFGZDtBQUdFLFFBQUEsWUFBWSxFQUFFSCxnQkFIaEI7QUFJRSxRQUFBLE1BQU0sRUFBRUQ7QUFKVixRQUQ0QjtBQUFBLEtBQWpCLENBQWI7QUFRRCxHQVRELE1BU08sSUFBSUgsSUFBSixFQUFVO0FBQ2ZRLElBQUFBLFVBQVUsR0FBR1IsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ0csR0FBRCxFQUFNQyxLQUFOO0FBQUEsYUFDcEIsNkJBQUMsWUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxLQURQO0FBRUUsUUFBQSxHQUFHLEVBQUVELEdBRlA7QUFHRSxRQUFBLFlBQVksRUFBRVIsZ0JBSGhCO0FBSUUsUUFBQSxNQUFNLEVBQUVEO0FBSlYsUUFEb0I7QUFBQSxLQUFULENBQWI7QUFRRDs7QUFDRCxTQUNFLDZCQUFDLFVBQUQ7QUFBTSxJQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDZTtBQUF6QixLQUNHTixVQURILENBREY7QUFLRDs7QUFFRFYscUJBQXFCLENBQUNpQixTQUF0QixHQUFrQztBQUNoQ2hCLEVBQUFBLE9BQU8sRUFBRWlCLG1CQUFVQyxNQUFWLENBQWlCQyxVQURNOztBQUVoQztBQUNBbEIsRUFBQUEsSUFBSSxFQUFFZ0IsbUJBQVVHLEtBSGdCOztBQUloQztBQUNBbEIsRUFBQUEsWUFBWSxFQUFFZSxtQkFBVUcsS0FMUTs7QUFNaEM7QUFDQWpCLEVBQUFBLFlBQVksRUFBRWMsbUJBQVVJLElBQVYsQ0FBZUYsVUFQRzs7QUFRaEM7QUFDQWYsRUFBQUEsTUFBTSxFQUFFYSxtQkFBVUssS0FBVixDQUFnQjtBQUN0QkMsSUFBQUEsTUFBTSxFQUFFTixtQkFBVU8sTUFBVixDQUFpQkw7QUFESCxHQUFoQjtBQVR3QixDQUFsQztBQWNBLElBQU1NLE1BQU0sR0FBRztBQUNiVixFQUFBQSxJQUFJLEVBQUU7QUFETyxDQUFmO0FBS08sSUFBTVcsWUFBWSxHQUFHLHdCQUFXRCxNQUFYLEVBQW1CMUIscUJBQW5CLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3QsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBleHRlbmRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9oZWxwZXJzJztcblxuZnVuY3Rpb24gUmVwb3NpdG9yaWVzQ29tcG9uZW50KHtcbiAgY2xhc3NlcyxcbiAgdXJscyxcbiAgcmVwb3NpdG9yaWVzLFxuICBvblJlcG9zaXRvcnksXG4gIGNvbmZpZyxcbn0pIHtcbiAgY29uc3QgdXBkYXRlUmVwb3NpdG9yeSA9IChfcmVwbykgPT4ge1xuICAgIGxldCBfX3JlcG87XG4gICAgaWYgKF9yZXBvKSB7XG4gICAgICBfX3JlcG8gPSB7Li4uX3JlcG99O1xuICAgICAgX19yZXBvID0gZXh0ZW5kUmVwb3NpdG9yeSh7cmVwb3NpdG9yeTogX19yZXBvLCB1cGRhdGVSZXBvc2l0b3J5LCBjb25maWd9KTtcbiAgICB9XG4gICAgb25SZXBvc2l0b3J5KF9fcmVwbyk7XG4gIH07XG5cbiAgbGV0IGNvbXBvbmVudHMgPSBbXTtcbiAgaWYgKHJlcG9zaXRvcmllcykge1xuICAgIGNvbXBvbmVudHMgPSByZXBvc2l0b3JpZXMubWFwKChyZXBvc2l0b3J5KSA9PlxuICAgICAgPFJlcG9zaXRvcnlcbiAgICAgICAga2V5PXtKU09OLnN0cmluZ2lmeShyZXBvc2l0b3J5KX1cbiAgICAgICAgcmVwb3NpdG9yeT17cmVwb3NpdG9yeX1cbiAgICAgICAgb25SZXBvc2l0b3J5PXt1cGRhdGVSZXBvc2l0b3J5fVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmICh1cmxzKSB7XG4gICAgY29tcG9uZW50cyA9IHVybHMubWFwKCh1cmwsIGluZGV4KSA9PlxuICAgICAgPFJlcG9zaXRvcnlcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgIG9uUmVwb3NpdG9yeT17dXBkYXRlUmVwb3NpdG9yeX1cbiAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICB7Y29tcG9uZW50c31cbiAgICA8L0xpc3Q+XG4gICk7XG59XG5cblJlcG9zaXRvcmllc0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqIFVybHMgYXJyYXkgdG8gZ2V0IHJlcG9zaXRvcnkgZGF0YSwgaWYgcmVwb3NpdG9yeSBkYXRhIGlzIG5vdCBwcm92aWRlZC4gKi9cbiAgdXJsczogUHJvcFR5cGVzLmFycmF5LFxuICAvKiogUmVwb3NpdG9yaWVzIGRhdGEgYXJyYXkgdG8gcmVuZGVyLCBpZiB1cmxzIG5vdCBwcm92aWRlZC4gKi9cbiAgcmVwb3NpdG9yaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVwb3NpdG9yeSBpcyBzZWxlY3RlZC4gKi9cbiAgb25SZXBvc2l0b3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogQ29uZmlndXJhdGlvbiByZXF1aXJlZCBpZiBwYXRocyBhcmUgcHJvdmlkZWQgYXMgVVJMLiAqL1xuICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgUmVwb3NpdG9yaWVzID0gd2l0aFN0eWxlcyhzdHlsZXMpKFJlcG9zaXRvcmllc0NvbXBvbmVudCk7XG4iXX0=