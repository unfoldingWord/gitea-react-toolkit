"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _authentication = require("../authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function UserMenuComponent(_ref) {
  var classes = _ref.classes,
      authentication = _ref.authentication,
      onAuthentication = _ref.onAuthentication,
      authenticationConfig = _ref.authenticationConfig;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var open = Boolean(anchorEl);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modal = _useState4[0],
      setModal = _useState4[1];

  var handleMenu = function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleLogout = function handleLogout() {
    handleClose();
    authentication.logout();
    setModal(false);
  };

  var handleLogin = function handleLogin() {
    handleClose();
    setModal(true);
  };

  var avatar;
  var menuItems = [];

  if (authentication && authentication.user) {
    avatar = _react.default.createElement(_core.Avatar, {
      className: classes.avatar,
      src: authentication.user.avatar_url
    });
    menuItems.push(_react.default.createElement(_core.MenuItem, {
      key: Math.random(),
      onClick: handleLogout
    }, "Logout"));
  } else {
    avatar = _react.default.createElement(_icons.AccountCircle, {
      fontSize: "large"
    });
    menuItems.push(_react.default.createElement(_core.MenuItem, {
      key: Math.random(),
      onClick: handleLogin
    }, "Login"));
  }

  var authenticationModal = _react.default.createElement("div", null);

  if (modal && !authentication) {
    var AuthenticationComponent = (0, _authentication.withAuthentication)(_react.default.createElement("div", null));
    authenticationModal = _react.default.createElement(_core.Modal, {
      open: true,
      onClose: function onClose() {
        return setModal(false);
      }
    }, _react.default.createElement(_core.Paper, {
      className: classes.modal
    }, _react.default.createElement(AuthenticationComponent, {
      authentication: authentication,
      onAuthentication: onAuthentication,
      authenticationConfig: authenticationConfig
    })));
  }

  return _react.default.createElement("div", null, _react.default.createElement(_core.IconButton, {
    "aria-owns": open ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit"
  }, avatar), _react.default.createElement(_core.Menu, {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: open,
    onClose: handleClose
  }, menuItems), authenticationModal);
}

UserMenuComponent.propTypes = _objectSpread({}, _authentication.withAuthentication.propTypes);

var styles = function styles(theme) {
  return {
    avatar: {
      width: '35px',
      height: '35px'
    },
    modal: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      right: '10%'
    }
  };
};

var UserMenu = (0, _styles.withStyles)(styles, {
  withTheme: true
})(UserMenuComponent);
exports.UserMenu = UserMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9Vc2VyTWVudS5qcyJdLCJuYW1lcyI6WyJVc2VyTWVudUNvbXBvbmVudCIsImNsYXNzZXMiLCJhdXRoZW50aWNhdGlvbiIsIm9uQXV0aGVudGljYXRpb24iLCJhdXRoZW50aWNhdGlvbkNvbmZpZyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuIiwiQm9vbGVhbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVMb2dvdXQiLCJsb2dvdXQiLCJoYW5kbGVMb2dpbiIsImF2YXRhciIsIm1lbnVJdGVtcyIsInVzZXIiLCJhdmF0YXJfdXJsIiwicHVzaCIsIk1hdGgiLCJyYW5kb20iLCJhdXRoZW50aWNhdGlvbk1vZGFsIiwiQXV0aGVudGljYXRpb25Db21wb25lbnQiLCJ1bmRlZmluZWQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJwcm9wVHlwZXMiLCJ3aXRoQXV0aGVudGljYXRpb24iLCJzdHlsZXMiLCJ0aGVtZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJVc2VyTWVudSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQVFBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxPQUtHO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsTUFIREMsY0FHQyxRQUhEQSxjQUdDO0FBQUEsTUFGREMsZ0JBRUMsUUFGREEsZ0JBRUM7QUFBQSxNQUREQyxvQkFDQyxRQUREQSxvQkFDQzs7QUFBQSxrQkFDK0IscUJBQVMsSUFBVCxDQUQvQjtBQUFBO0FBQUEsTUFDTUMsUUFETjtBQUFBLE1BQ2dCQyxXQURoQjs7QUFFRCxNQUFNQyxJQUFJLEdBQUdDLE9BQU8s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QUUsS0FESztBQUVmQyxNQUFBQSxVQUFVLEVBQUU7QUFGRyxLQVBuQjtBQVdFLElBQUEsSUFBSSxFQUFFdEIsSUFYUjtBQVlFLElBQUEsT0FBTyxFQUFFTztBQVpYLEtBY0dLLFNBZEgsQ0FURixFQXlCR00sbUJBekJILENBREY7QUE2QkQ7O0FBRUR6QixpQkFBaUIsQ0FBQzhCLFNBQWxCLHFCQUNLQyxtQ0FBbUJELFNBRHhCOztBQUlBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCZixJQUFBQSxNQUFNLEVBQUU7QUFDTmdCLE1BQUFBLEtBQUssRUFBRSxNQUREO0FBRU5DLE1BQUFBLE1BQU0sRUFBRTtBQUZGLEtBRGlCO0FBS3pCMUIsSUFBQUEsS0FBSyxFQUFFO0FBQ0wyQixNQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUsS0FGQTtBQUdMQyxNQUFBQSxJQUFJLEVBQUUsS0FIRDtBQUlMQyxNQUFBQSxLQUFLLEVBQUU7QUFKRjtBQUxrQixHQUFaO0FBQUEsQ0FBZjs7QUFhTyxJQUFNQyxRQUFRLEdBQUcsd0JBQVdSLE1BQVgsRUFBbUI7QUFBRVMsRUFBQUEsU0FBUyxFQUFFO0FBQWIsQ0FBbkIsRUFBd0N6QyxpQkFBeEMsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBNZW51SXRlbSxcbiAgTWVudSxcbiAgQXZhdGFyLFxuICBNb2RhbCxcbiAgUGFwZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIEFjY291bnRDaXJjbGUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IHdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uJztcblxuZnVuY3Rpb24gVXNlck1lbnVDb21wb25lbnQoe1xuICBjbGFzc2VzLFxuICBhdXRoZW50aWNhdGlvbixcbiAgb25BdXRoZW50aWNhdGlvbixcbiAgYXV0aGVudGljYXRpb25Db25maWcsXG59KSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTWVudSA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICBhdXRoZW50aWNhdGlvbi5sb2dvdXQoKTtcbiAgICBzZXRNb2RhbChmYWxzZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHNldE1vZGFsKHRydWUpO1xuICB9XG5cbiAgbGV0IGF2YXRhcjtcbiAgbGV0IG1lbnVJdGVtcyA9IFtdO1xuICBpZiAoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24udXNlcikge1xuICAgIGF2YXRhciA9IChcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPXthdXRoZW50aWNhdGlvbi51c2VyLmF2YXRhcl91cmx9IC8+XG4gICAgKTtcbiAgICBtZW51SXRlbXMucHVzaChcbiAgICAgIDxNZW51SXRlbSBrZXk9e01hdGgucmFuZG9tKCl9IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGF2YXRhciA9IDxBY2NvdW50Q2lyY2xlIGZvbnRTaXplPVwibGFyZ2VcIiAvPjtcbiAgICBtZW51SXRlbXMucHVzaChcbiAgICAgIDxNZW51SXRlbSBrZXk9e01hdGgucmFuZG9tKCl9IG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5Mb2dpbjwvTWVudUl0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIGxldCBhdXRoZW50aWNhdGlvbk1vZGFsID0gPGRpdiAvPjtcbiAgaWYgKG1vZGFsICYmICFhdXRoZW50aWNhdGlvbikge1xuICAgIGNvbnN0IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50ID0gd2l0aEF1dGhlbnRpY2F0aW9uKDxkaXYgLz4pO1xuICAgIGF1dGhlbnRpY2F0aW9uTW9kYWwgPSAoXG4gICAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17KCkgPT4gc2V0TW9kYWwoZmFsc2UpfT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XG4gICAgICAgICAgPEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbj17YXV0aGVudGljYXRpb259XG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0aW9uPXtvbkF1dGhlbnRpY2F0aW9ufVxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25Db25maWc9e2F1dGhlbnRpY2F0aW9uQ29uZmlnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLW93bnM9e29wZW4gPyAnbWVudS1hcHBiYXInIDogdW5kZWZpbmVkfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnV9XG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICA+XG4gICAgICAgIHthdmF0YXJ9XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8TWVudVxuICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgIH19XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICB7bWVudUl0ZW1zfVxuICAgICAgPC9NZW51PlxuICAgICAge2F1dGhlbnRpY2F0aW9uTW9kYWx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblVzZXJNZW51Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgLi4ud2l0aEF1dGhlbnRpY2F0aW9uLnByb3BUeXBlc1xufTtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBhdmF0YXI6IHtcbiAgICB3aWR0aDogJzM1cHgnLFxuICAgIGhlaWdodDogJzM1cHgnLFxuICB9LFxuICBtb2RhbDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwJScsXG4gICAgbGVmdDogJzEwJScsXG4gICAgcmlnaHQ6ICcxMCUnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFVzZXJNZW51ID0gd2l0aFN0eWxlcyhzdHlsZXMsIHsgd2l0aFRoZW1lOiB0cnVlIH0pKFVzZXJNZW51Q29tcG9uZW50KTtcbiJdfQ==