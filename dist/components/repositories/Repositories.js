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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RepositoriesComponent(_ref) {
  var classes = _ref.classes,
      urls = _ref.urls,
      repositories = _ref.repositories,
      onRepository = _ref.onRepository,
      config = _ref.config;
  var components = [];

  if (repositories) {
    components = repositories.map(function (repository) {
      return _react.default.createElement(_.Repository, {
        key: JSON.stringify(repository),
        repository: repository,
        onRepository: onRepository,
        config: config
      });
    });
  } else if (urls) {
    components = urls.map(function (url, index) {
      return _react.default.createElement(_.Repository, {
        key: index,
        url: url,
        onRepository: onRepository,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvc2l0b3JpZXMuanMiXSwibmFtZXMiOlsiUmVwb3NpdG9yaWVzQ29tcG9uZW50IiwiY2xhc3NlcyIsInVybHMiLCJyZXBvc2l0b3JpZXMiLCJvblJlcG9zaXRvcnkiLCJjb25maWciLCJjb21wb25lbnRzIiwibWFwIiwicmVwb3NpdG9yeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJpbmRleCIsInJvb3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwic2hhcGUiLCJzZXJ2ZXIiLCJzdHJpbmciLCJzdHlsZXMiLCJSZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7OztBQUVBLFNBQVNBLHFCQUFULE9BTUc7QUFBQSxNQUxEQyxPQUtDLFFBTERBLE9BS0M7QUFBQSxNQUpEQyxJQUlDLFFBSkRBLElBSUM7QUFBQSxNQUhEQyxZQUdDLFFBSERBLFlBR0M7QUFBQSxNQUZEQyxZQUVDLFFBRkRBLFlBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7QUFDRCxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsTUFBSUgsWUFBSixFQUFrQjtBQUNoQkcsSUFBQUEsVUFBVSxHQUFHSCxZQUFZLENBQUNJLEdBQWIsQ0FBaUIsVUFBQ0MsVUFBRDtBQUFBLGFBQzVCLDZCQUFDLFlBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLFVBQWYsQ0FEUDtBQUVFLFFBQUEsVUFBVSxFQUFFQSxVQUZkO0FBR0UsUUFBQSxZQUFZLEVBQUVKLFlBSGhCO0FBSUUsUUFBQSxNQUFNLEVBQUVDO0FBSlYsUUFENEI7QUFBQSxLQUFqQixDQUFiO0FBUUQsR0FURCxNQVNPLElBQUlILElBQUosRUFBVTtBQUNmSSxJQUFBQSxVQUFVLEdBQUdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNJLEdBQUQsRUFBTUMsS0FBTjtBQUFBLGFBQ3BCLDZCQUFDLFlBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsS0FEUDtBQUVFLFFBQUEsR0FBRyxFQUFFRCxHQUZQO0FBR0UsUUFBQSxZQUFZLEVBQUVQLFlBSGhCO0FBSUUsUUFBQSxNQUFNLEVBQUVDO0FBSlYsUUFEb0I7QUFBQSxLQUFULENBQWI7QUFRRDs7QUFDRCxTQUNFLDZCQUFDLFVBQUQ7QUFBTSxJQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDWTtBQUF6QixLQUNHUCxVQURILENBREY7QUFLRDs7QUFFRE4scUJBQXFCLENBQUNjLFNBQXRCLEdBQWtDO0FBQ2hDYixFQUFBQSxPQUFPLEVBQUVjLG1CQUFVQyxNQUFWLENBQWlCQyxVQURNOztBQUVoQztBQUNBZixFQUFBQSxJQUFJLEVBQUVhLG1CQUFVRyxLQUhnQjs7QUFJaEM7QUFDQWYsRUFBQUEsWUFBWSxFQUFFWSxtQkFBVUcsS0FMUTs7QUFNaEM7QUFDQWQsRUFBQUEsWUFBWSxFQUFFVyxtQkFBVUksSUFBVixDQUFlRixVQVBHOztBQVFoQztBQUNBWixFQUFBQSxNQUFNLEVBQUVVLG1CQUFVSyxLQUFWLENBQWdCO0FBQ3RCQyxJQUFBQSxNQUFNLEVBQUVOLG1CQUFVTyxNQUFWLENBQWlCTDtBQURILEdBQWhCO0FBVHdCLENBQWxDO0FBY0EsSUFBTU0sTUFBTSxHQUFHO0FBQ2JWLEVBQUFBLElBQUksRUFBRTtBQURPLENBQWY7QUFLTyxJQUFNVyxZQUFZLEdBQUcsd0JBQVdELE1BQVgsRUFBbUJ2QixxQkFBbkIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgTGlzdCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vJztcblxuZnVuY3Rpb24gUmVwb3NpdG9yaWVzQ29tcG9uZW50KHtcbiAgY2xhc3NlcyxcbiAgdXJscyxcbiAgcmVwb3NpdG9yaWVzLFxuICBvblJlcG9zaXRvcnksXG4gIGNvbmZpZyxcbn0pIHtcbiAgbGV0IGNvbXBvbmVudHMgPSBbXTtcbiAgaWYgKHJlcG9zaXRvcmllcykge1xuICAgIGNvbXBvbmVudHMgPSByZXBvc2l0b3JpZXMubWFwKChyZXBvc2l0b3J5KSA9PlxuICAgICAgPFJlcG9zaXRvcnlcbiAgICAgICAga2V5PXtKU09OLnN0cmluZ2lmeShyZXBvc2l0b3J5KX1cbiAgICAgICAgcmVwb3NpdG9yeT17cmVwb3NpdG9yeX1cbiAgICAgICAgb25SZXBvc2l0b3J5PXtvblJlcG9zaXRvcnl9XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKHVybHMpIHtcbiAgICBjb21wb25lbnRzID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+XG4gICAgICA8UmVwb3NpdG9yeVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgb25SZXBvc2l0b3J5PXtvblJlcG9zaXRvcnl9XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAge2NvbXBvbmVudHN9XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5SZXBvc2l0b3JpZXNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBVcmxzIGFycmF5IHRvIGdldCByZXBvc2l0b3J5IGRhdGEsIGlmIHJlcG9zaXRvcnkgZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybHM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIFJlcG9zaXRvcmllcyBkYXRhIGFycmF5IHRvIHJlbmRlciwgaWYgdXJscyBub3QgcHJvdmlkZWQuICovXG4gIHJlcG9zaXRvcmllczogUHJvcFR5cGVzLmFycmF5LFxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcG9zaXRvcnkgaXMgc2VsZWN0ZWQuICovXG4gIG9uUmVwb3NpdG9yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIENvbmZpZ3VyYXRpb24gcmVxdWlyZWQgaWYgcGF0aHMgYXJlIHByb3ZpZGVkIGFzIFVSTC4gKi9cbiAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFJlcG9zaXRvcmllcyA9IHdpdGhTdHlsZXMoc3R5bGVzKShSZXBvc2l0b3JpZXNDb21wb25lbnQpO1xuIl19