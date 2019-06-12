"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

require("@material-ui/icons");

var _ = require("./");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ApplicationBarComponent(_ref) {
  var classes = _ref.classes,
      title = _ref.title,
      buttons = _ref.buttons,
      drawerMenu = _ref.drawerMenu,
      authentication = _ref.authentication,
      onAuthentication = _ref.onAuthentication,
      authenticationConfig = _ref.authenticationConfig,
      repository = _ref.repository,
      onRepository = _ref.onRepository,
      repositoryConfig = _ref.repositoryConfig,
      blob = _ref.blob,
      onBlob = _ref.onBlob;

  var _authenticationConfig = _objectSpread({}, authenticationConfig);

  var _repositoryConfig = _objectSpread({}, repositoryConfig);

  if (authentication && authentication.config) {
    _authenticationConfig = authentication.config;
    _repositoryConfig.defaultOwner = authentication.user.username;
  }

  if (!repository && blob) onBlob();

  var drawerMenuComponent = _react.default.createElement(_.DrawerMenu, {
    drawerMenu: drawerMenu,
    repository: repository,
    config: _repositoryConfig,
    blob: blob,
    onBlob: onBlob
  });

  var repositoryMenuComponent = _react.default.createElement(_.RepositoryMenu, {
    authentication: authentication,
    repository: repository,
    onRepository: onRepository,
    repositoryConfig: _repositoryConfig
  });

  var userMenuComponent = _react.default.createElement(_.UserMenu, {
    authentication: authentication,
    onAuthentication: onAuthentication,
    authenticationConfig: _authenticationConfig
  });

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_core.AppBar, {
    position: "static",
    className: classes.appBar
  }, _react.default.createElement(_core.Toolbar, null, _react.default.createElement("div", {
    className: classes.menuButton
  }, drawerMenuComponent), _react.default.createElement(_core.Typography, {
    variant: "h6",
    color: "inherit",
    className: classes.grow,
    noWrap: true
  }, title), _react.default.createElement(_core.Typography, {
    variant: "subtitle2",
    color: "inherit",
    className: classes.grow,
    noWrap: true
  }, blob ? blob.filepath : ''), _react.default.createElement("div", {
    className: classes.grow
  }), buttons, repositoryMenuComponent, userMenuComponent)));
}

ApplicationBarComponent.propTypes = {
  /** The title string to be displayed. */
  title: _propTypes.default.string,

  /** Additional buttons to be displayed. */
  buttons: _propTypes.default.element,

  /** Component to render inside of the drawer menu. */
  drawerMenu: _propTypes.default.element // ...withAuthentication.propTypes,
  // ...withRepository.propTypes,

};
var ApplicationBar = (0, _styles.withStyles)(_styles2.default, {
  withTheme: true
})(ApplicationBarComponent);
exports.ApplicationBar = ApplicationBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9BcHBsaWNhdGlvbkJhci5qcyJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbkJhckNvbXBvbmVudCIsImNsYXNzZXMiLCJ0aXRsZSIsImJ1dHRvbnMiLCJkcmF3ZXJNZW51IiwiYXV0aGVudGljYXRpb24iLCJvbkF1dGhlbnRpY2F0aW9uIiwiYXV0aGVudGljYXRpb25Db25maWciLCJyZXBvc2l0b3J5Iiwib25SZXBvc2l0b3J5IiwicmVwb3NpdG9yeUNvbmZpZyIsImJsb2IiLCJvbkJsb2IiLCJfYXV0aGVudGljYXRpb25Db25maWciLCJfcmVwb3NpdG9yeUNvbmZpZyIsImNvbmZpZyIsImRlZmF1bHRPd25lciIsInVzZXIiLCJ1c2VybmFtZSIsImRyYXdlck1lbnVDb21wb25lbnQiLCJyZXBvc2l0b3J5TWVudUNvbXBvbmVudCIsInVzZXJNZW51Q29tcG9uZW50Iiwicm9vdCIsImFwcEJhciIsIm1lbnVCdXR0b24iLCJncm93IiwiZmlsZXBhdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJlbGVtZW50IiwiQXBwbGljYXRpb25CYXIiLCJzdHlsZXMiLCJ3aXRoVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFJQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLHVCQUFULE9BYUc7QUFBQSxNQVpEQyxPQVlDLFFBWkRBLE9BWUM7QUFBQSxNQVhEQyxLQVdDLFFBWERBLEtBV0M7QUFBQSxNQVZEQyxPQVVDLFFBVkRBLE9BVUM7QUFBQSxNQVREQyxVQVNDLFFBVERBLFVBU0M7QUFBQSxNQVJEQyxjQVFDLFFBUkRBLGNBUUM7QUFBQSxNQVBEQyxnQkFPQyxRQVBEQSxnQkFPQztBQUFBLE1BTkRDLG9CQU1DLFFBTkRBLG9CQU1DO0FBQUEsTUFMREMsVUFLQyxRQUxEQSxVQUtDO0FBQUEsTUFKREMsWUFJQyxRQUpEQSxZQUlDO0FBQUEsTUFIREMsZ0JBR0MsUUFIREEsZ0JBR0M7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7O0FBQ0QsTUFBSUMscUJBQXFCLHFCQUFPTixvQkFBUCxDQUF6Qjs7QUFDQSxNQUFJTyxpQkFBaUIscUJBQU9KLGdCQUFQLENBQXJCOztBQUNBLE1BQUlMLGNBQWMsSUFBSUEsY0FBYyxDQUFDVSxNQUFyQyxFQUE2QztBQUMzQ0YsSUFBQUEscUJBQXFCLEdBQUdSLGNBQWMsQ0FBQ1UsTUFBdkM7QUFDQUQsSUFBQUEsaUJBQWlCLENBQUNFLFlBQWxCLEdBQWlDWCxjQUFjLENBQUNZLElBQWYsQ0FBb0JDLFFBQXJEO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDVixVQUFELElBQWVHLElBQW5CLEVBQXlCQyxNQUFNOztBQUUvQixNQUFNTyxtQkFBbUIsR0FDdkIsNkJBQUMsWUFBRDtBQUNFLElBQUEsVUFBVSxFQUFFZixVQURkO0FBRUUsSUFBQSxVQUFVLEVBQUVJLFVBRmQ7QUFHRSxJQUFBLE1BQU0sRUFBRU0saUJBSFY7QUFJRSxJQUFBLElBQUksRUFBRUgsSUFKUjtBQUtFLElBQUEsTUFBTSxFQUFFQztBQUxWLElBREY7O0FBU0EsTUFBTVEsdUJBQXVCLEdBQzNCLDZCQUFDLGdCQUFEO0FBQ0UsSUFBQSxjQUFjLEVBQUVmLGNBRGxCO0FBRUUsSUFBQSxVQUFVLEVBQUVHLFVBRmQ7QUFHRSxJQUFBLFlBQVksRUFBRUMsWUFIaEI7QUFJRSxJQUFBLGdCQUFnQixFQUFFSztBQUpwQixJQURGOztBQVFBLE1BQU1PLGlCQUFpQixHQUNyQiw2QkFBQyxVQUFEO0FBQ0UsSUFBQSxjQUFjLEVBQUVoQixjQURsQjtBQUVFLElBQUEsZ0JBQWdCLEVBQUVDLGdCQUZwQjtBQUdFLElBQUEsb0JBQW9CLEVBQUVPO0FBSHhCLElBREY7O0FBUUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFWixPQUFPLENBQUNxQjtBQUF4QixLQUNFLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBQyxRQURYO0FBRUUsSUFBQSxTQUFTLEVBQUVyQixPQUFPLENBQUNzQjtBQUZyQixLQUlFLDZCQUFDLGFBQUQsUUFDRTtBQUFLLElBQUEsU0FBUyxFQUFFdEIsT0FBTyxDQUFDdUI7QUFBeEIsS0FDR0wsbUJBREgsQ0FERixFQUlFLDZCQUFDLGdCQUFEO0FBQVksSUFBQSxPQUFPLEVBQUMsSUFBcEI7QUFBeUIsSUFBQSxLQUFLLEVBQUMsU0FBL0I7QUFBeUMsSUFBQSxTQUFTLEVBQUVsQixPQUFPLENBQUN3QixJQUE1RDtBQUFrRSxJQUFBLE1BQU07QUFBeEUsS0FDR3ZCLEtBREgsQ0FKRixFQU9FLDZCQUFDLGdCQUFEO0FBQVksSUFBQSxPQUFPLEVBQUMsV0FBcEI7QUFBZ0MsSUFBQSxLQUFLLEVBQUMsU0FBdEM7QUFBZ0QsSUFBQSxTQUFTLEVBQUVELE9BQU8sQ0FBQ3dCLElBQW5FO0FBQXlFLElBQUEsTUFBTTtBQUEvRSxLQUNHZCxJQUFJLEdBQUdBLElBQUksQ0FBQ2UsUUFBUixHQUFtQixFQUQxQixDQVBGLEVBVUU7QUFBSyxJQUFBLFNBQVMsRUFBRXpCLE9BQU8sQ0FBQ3dCO0FBQXhCLElBVkYsRUFXR3RCLE9BWEgsRUFZR2lCLHVCQVpILEVBYUdDLGlCQWJILENBSkYsQ0FERixDQURGO0FBd0JEOztBQUVEckIsdUJBQXVCLENBQUMyQixTQUF4QixHQUFvQztBQUNsQztBQUNBekIsRUFBQUEsS0FBSyxFQUFFMEIsbUJBQVVDLE1BRmlCOztBQUdsQztBQUNBMUIsRUFBQUEsT0FBTyxFQUFFeUIsbUJBQVVFLE9BSmU7O0FBS2xDO0FBQ0ExQixFQUFBQSxVQUFVLEVBQUV3QixtQkFBVUUsT0FOWSxDQU9sQztBQUNBOztBQVJrQyxDQUFwQztBQVdPLElBQU1DLGNBQWMsR0FBRyx3QkFBV0MsZ0JBQVgsRUFBbUI7QUFBRUMsRUFBQUEsU0FBUyxFQUFFO0FBQWIsQ0FBbkIsRUFBd0NqQyx1QkFBeEMsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBBcHBCYXIsXG4gIFRvb2xiYXIsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbi8vIGltcG9ydCB7IHdpdGhBdXRoZW50aWNhdGlvbiwgd2l0aFJlcG9zaXRvcnksIHdpdGhGaWxlIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IFVzZXJNZW51LCBEcmF3ZXJNZW51LCBSZXBvc2l0b3J5TWVudSB9IGZyb20gJy4vJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5mdW5jdGlvbiBBcHBsaWNhdGlvbkJhckNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIHRpdGxlLFxuICBidXR0b25zLFxuICBkcmF3ZXJNZW51LFxuICBhdXRoZW50aWNhdGlvbixcbiAgb25BdXRoZW50aWNhdGlvbixcbiAgYXV0aGVudGljYXRpb25Db25maWcsXG4gIHJlcG9zaXRvcnksXG4gIG9uUmVwb3NpdG9yeSxcbiAgcmVwb3NpdG9yeUNvbmZpZyxcbiAgYmxvYixcbiAgb25CbG9iLFxufSkge1xuICBsZXQgX2F1dGhlbnRpY2F0aW9uQ29uZmlnID0gey4uLmF1dGhlbnRpY2F0aW9uQ29uZmlnfTtcbiAgbGV0IF9yZXBvc2l0b3J5Q29uZmlnID0gey4uLnJlcG9zaXRvcnlDb25maWd9O1xuICBpZiAoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24uY29uZmlnKSB7XG4gICAgX2F1dGhlbnRpY2F0aW9uQ29uZmlnID0gYXV0aGVudGljYXRpb24uY29uZmlnO1xuICAgIF9yZXBvc2l0b3J5Q29uZmlnLmRlZmF1bHRPd25lciA9IGF1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWU7XG4gIH1cblxuICBpZiAoIXJlcG9zaXRvcnkgJiYgYmxvYikgb25CbG9iKCk7XG5cbiAgY29uc3QgZHJhd2VyTWVudUNvbXBvbmVudCA9IChcbiAgICA8RHJhd2VyTWVudVxuICAgICAgZHJhd2VyTWVudT17ZHJhd2VyTWVudX1cbiAgICAgIHJlcG9zaXRvcnk9e3JlcG9zaXRvcnl9XG4gICAgICBjb25maWc9e19yZXBvc2l0b3J5Q29uZmlnfVxuICAgICAgYmxvYj17YmxvYn1cbiAgICAgIG9uQmxvYj17b25CbG9ifVxuICAgIC8+XG4gICk7XG4gIGNvbnN0IHJlcG9zaXRvcnlNZW51Q29tcG9uZW50ID0gKFxuICAgIDxSZXBvc2l0b3J5TWVudVxuICAgICAgYXV0aGVudGljYXRpb249e2F1dGhlbnRpY2F0aW9ufVxuICAgICAgcmVwb3NpdG9yeT17cmVwb3NpdG9yeX1cbiAgICAgIG9uUmVwb3NpdG9yeT17b25SZXBvc2l0b3J5fVxuICAgICAgcmVwb3NpdG9yeUNvbmZpZz17X3JlcG9zaXRvcnlDb25maWd9XG4gICAgLz5cbiAgKTtcbiAgY29uc3QgdXNlck1lbnVDb21wb25lbnQgPSAoXG4gICAgPFVzZXJNZW51XG4gICAgICBhdXRoZW50aWNhdGlvbj17YXV0aGVudGljYXRpb259XG4gICAgICBvbkF1dGhlbnRpY2F0aW9uPXtvbkF1dGhlbnRpY2F0aW9ufVxuICAgICAgYXV0aGVudGljYXRpb25Db25maWc9e19hdXRoZW50aWNhdGlvbkNvbmZpZ31cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyXG4gICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn1cbiAgICAgID5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0+XG4gICAgICAgICAgICB7ZHJhd2VyTWVudUNvbXBvbmVudH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gbm9XcmFwPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IG5vV3JhcD5cbiAgICAgICAgICAgIHtibG9iID8gYmxvYi5maWxlcGF0aCA6ICcnfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxuICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgIHtyZXBvc2l0b3J5TWVudUNvbXBvbmVudH1cbiAgICAgICAgICB7dXNlck1lbnVDb21wb25lbnR9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5BcHBsaWNhdGlvbkJhckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBUaGUgdGl0bGUgc3RyaW5nIHRvIGJlIGRpc3BsYXllZC4gKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBBZGRpdGlvbmFsIGJ1dHRvbnMgdG8gYmUgZGlzcGxheWVkLiAqL1xuICBidXR0b25zOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgLyoqIENvbXBvbmVudCB0byByZW5kZXIgaW5zaWRlIG9mIHRoZSBkcmF3ZXIgbWVudS4gKi9cbiAgZHJhd2VyTWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8vIC4uLndpdGhBdXRoZW50aWNhdGlvbi5wcm9wVHlwZXMsXG4gIC8vIC4uLndpdGhSZXBvc2l0b3J5LnByb3BUeXBlcyxcbn07XG5cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbkJhciA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShBcHBsaWNhdGlvbkJhckNvbXBvbmVudCk7XG4iXX0=