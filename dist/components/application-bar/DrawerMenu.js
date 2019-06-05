"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _styles2 = _interopRequireDefault(require("./styles"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DrawerMenuComponent(_ref) {
  var classes = _ref.classes,
      drawerMenu = _ref.drawerMenu,
      blob = _ref.blob,
      onBlob = _ref.onBlob,
      repository = _ref.repository,
      config = _ref.config;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openDrawer = _useState2[0],
      setOpenDrawer = _useState2[1];

  var toggleDrawer = function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  };

  var fileTree = _react.default.createElement("div", null);

  if (repository) {
    fileTree = _react.default.createElement(_.Tree, {
      url: repository.tree_url,
      blob: blob,
      onBlob: onBlob,
      config: config,
      selected: true
    });
  }

  return _react.default.createElement("div", null, _react.default.createElement(_core.IconButton, {
    color: "inherit",
    "aria-label": "Menu",
    onClick: toggleDrawer
  }, _react.default.createElement(_icons.Menu, null)), _react.default.createElement(_core.Drawer, {
    className: classes.drawer,
    variant: "temporary",
    anchor: "left",
    open: openDrawer,
    onClose: toggleDrawer,
    classes: {
      paper: classes.drawerPaper
    }
  }, _react.default.createElement("div", {
    className: classes.drawerHeader
  }, _react.default.createElement(_core.IconButton, {
    onClick: toggleDrawer
  }, _react.default.createElement(_icons.ChevronLeft, null))), _react.default.createElement(_core.Divider, null), drawerMenu, _react.default.createElement(_core.Divider, null), fileTree, _react.default.createElement(_core.Divider, null)));
}

DrawerMenuComponent.propTypes = {
  /** Component to render inside of the drawer menu. */
  drawerMenu: _propTypes.default.element
};
var DrawerMenu = (0, _styles.withStyles)(_styles2.default)(DrawerMenuComponent);
exports.DrawerMenu = DrawerMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9EcmF3ZXJNZW51LmpzIl0sIm5hbWVzIjpbIkRyYXdlck1lbnVDb21wb25lbnQiLCJjbGFzc2VzIiwiZHJhd2VyTWVudSIsImJsb2IiLCJvbkJsb2IiLCJyZXBvc2l0b3J5IiwiY29uZmlnIiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJ0b2dnbGVEcmF3ZXIiLCJmaWxlVHJlZSIsInRyZWVfdXJsIiwiZHJhd2VyIiwicGFwZXIiLCJkcmF3ZXJQYXBlciIsImRyYXdlckhlYWRlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJEcmF3ZXJNZW51Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBS0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsbUJBQVQsT0FPRztBQUFBLE1BTkRDLE9BTUMsUUFOREEsT0FNQztBQUFBLE1BTERDLFVBS0MsUUFMREEsVUFLQztBQUFBLE1BSkRDLElBSUMsUUFKREEsSUFJQztBQUFBLE1BSERDLE1BR0MsUUFIREEsTUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQzs7QUFBQSxrQkFDbUMscUJBQVMsS0FBVCxDQURuQztBQUFBO0FBQUEsTUFDTUMsVUFETjtBQUFBLE1BQ2tCQyxhQURsQjs7QUFHRCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCRCxJQUFBQSxhQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFJRyxRQUFRLEdBQUcseUNBQWY7O0FBQ0EsTUFBSUwsVUFBSixFQUFnQjtBQUNkSyxJQUFBQSxRQUFRLEdBQ04sNkJBQUMsTUFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFTCxVQUFVLENBQUNNLFFBRGxCO0FBRUUsTUFBQSxJQUFJLEVBQUVSLElBRlI7QUFHRSxNQUFBLE1BQU0sRUFBRUMsTUFIVjtBQUlFLE1BQUEsTUFBTSxFQUFFRSxNQUpWO0FBS0UsTUFBQSxRQUFRLEVBQUU7QUFMWixNQURGO0FBU0Q7O0FBRUQsU0FDRSwwQ0FDRSw2QkFBQyxnQkFBRDtBQUFZLElBQUEsS0FBSyxFQUFDLFNBQWxCO0FBQTRCLGtCQUFXLE1BQXZDO0FBQ0UsSUFBQSxPQUFPLEVBQUVHO0FBRFgsS0FHRSw2QkFBQyxXQUFELE9BSEYsQ0FERixFQU1FLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRVIsT0FBTyxDQUFDVyxNQURyQjtBQUVFLElBQUEsT0FBTyxFQUFDLFdBRlY7QUFFc0IsSUFBQSxNQUFNLEVBQUMsTUFGN0I7QUFHRSxJQUFBLElBQUksRUFBRUwsVUFIUjtBQUlFLElBQUEsT0FBTyxFQUFFRSxZQUpYO0FBS0UsSUFBQSxPQUFPLEVBQUU7QUFDUEksTUFBQUEsS0FBSyxFQUFFWixPQUFPLENBQUNhO0FBRFI7QUFMWCxLQVNFO0FBQUssSUFBQSxTQUFTLEVBQUViLE9BQU8sQ0FBQ2M7QUFBeEIsS0FDRSw2QkFBQyxnQkFBRDtBQUFZLElBQUEsT0FBTyxFQUFFTjtBQUFyQixLQUNFLDZCQUFDLGtCQUFELE9BREYsQ0FERixDQVRGLEVBY0UsNkJBQUMsYUFBRCxPQWRGLEVBZUdQLFVBZkgsRUFnQkUsNkJBQUMsYUFBRCxPQWhCRixFQWlCR1EsUUFqQkgsRUFrQkUsNkJBQUMsYUFBRCxPQWxCRixDQU5GLENBREY7QUE2QkQ7O0FBRURWLG1CQUFtQixDQUFDZ0IsU0FBcEIsR0FBZ0M7QUFDOUI7QUFDQWQsRUFBQUEsVUFBVSxFQUFFZSxtQkFBVUM7QUFGUSxDQUFoQztBQUtPLElBQU1DLFVBQVUsR0FBRyx3QkFBV0MsZ0JBQVgsRUFBbUJwQixtQkFBbkIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBEcmF3ZXIsXG4gIERpdmlkZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIE1lbnUsXG4gIENoZXZyb25MZWZ0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuaW1wb3J0IHsgVHJlZSB9IGZyb20gJy4uLyc7XG5cbmZ1bmN0aW9uIERyYXdlck1lbnVDb21wb25lbnQoe1xuICBjbGFzc2VzLFxuICBkcmF3ZXJNZW51LFxuICBibG9iLFxuICBvbkJsb2IsXG4gIHJlcG9zaXRvcnksXG4gIGNvbmZpZyxcbn0pIHtcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKTtcbiAgfVxuXG4gIGxldCBmaWxlVHJlZSA9IDxkaXYgLz47XG4gIGlmIChyZXBvc2l0b3J5KSB7XG4gICAgZmlsZVRyZWUgPSAoXG4gICAgICA8VHJlZVxuICAgICAgICB1cmw9e3JlcG9zaXRvcnkudHJlZV91cmx9XG4gICAgICAgIGJsb2I9e2Jsb2J9XG4gICAgICAgIG9uQmxvYj17b25CbG9ifVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgc2VsZWN0ZWQ9e3RydWV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiTWVudVwiXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cbiAgICAgID5cbiAgICAgICAgPE1lbnUgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cbiAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICBvcGVuPXtvcGVuRHJhd2VyfVxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXJ9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAge2RyYXdlck1lbnV9XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIHtmaWxlVHJlZX1cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDwvRHJhd2VyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5EcmF3ZXJNZW51Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqIENvbXBvbmVudCB0byByZW5kZXIgaW5zaWRlIG9mIHRoZSBkcmF3ZXIgbWVudS4gKi9cbiAgZHJhd2VyTWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgRHJhd2VyTWVudSA9IHdpdGhTdHlsZXMoc3R5bGVzKShEcmF3ZXJNZW51Q29tcG9uZW50KTtcbiJdfQ==