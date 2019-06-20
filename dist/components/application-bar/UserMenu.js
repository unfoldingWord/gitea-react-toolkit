"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _authentication = require("../authentication");

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

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var closeModal = function closeModal() {
    return setModal(false);
  };

  var openModal = function openModal() {
    return setModal(true);
  };

  var avatar;
  if (authentication && authentication.user) avatar = _react.default.createElement(_core.Avatar, {
    className: classes.avatar,
    src: authentication.user.avatar_url
  });else avatar = _react.default.createElement(_icons.AccountCircle, {
    fontSize: "large"
  });

  var authenticationModal = _react.default.createElement("div", null);

  if (modal) {
    authenticationModal = _react.default.createElement(_core.Modal, {
      open: true,
      onClose: closeModal
    }, _react.default.createElement(_core.Paper, {
      className: classes.modal
    }, _react.default.createElement(_authentication.Authentication, {
      authentication: authentication,
      onAuthentication: onAuthentication,
      config: authenticationConfig
    })));
  }

  return _react.default.createElement("div", null, _react.default.createElement(_core.IconButton, {
    onClick: openModal,
    color: "inherit"
  }, avatar), authenticationModal);
}

UserMenuComponent.propTypes = _objectSpread({}, _authentication.Authentication.propTypes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9Vc2VyTWVudS5qcyJdLCJuYW1lcyI6WyJVc2VyTWVudUNvbXBvbmVudCIsImNsYXNzZXMiLCJhdXRoZW50aWNhdGlvbiIsIm9uQXV0aGVudGljYXRpb24iLCJhdXRoZW50aWNhdGlvbkNvbmZpZyIsIm1vZGFsIiwic2V0TW9kYWwiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwiYXZhdGFyIiwidXNlciIsImF2YXRhcl91cmwiLCJhdXRoZW50aWNhdGlvbk1vZGFsIiwicHJvcFR5cGVzIiwiQXV0aGVudGljYXRpb24iLCJzdHlsZXMiLCJ0aGVtZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJVc2VyTWVudSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQU1BOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsaUJBQVQsT0FLRztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLGNBR0MsUUFIREEsY0FHQztBQUFBLE1BRkRDLGdCQUVDLFFBRkRBLGdCQUVDO0FBQUEsTUFEREMsb0JBQ0MsUUFEREEsb0JBQ0M7O0FBQUEsa0JBQ3lCLHFCQUFTLEtBQVQsQ0FEekI7QUFBQTtBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUVELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTUQsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBLEdBQW5COztBQUNBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUYsUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLEdBQWxCOztBQUVBLE1BQUlHLE1BQUo7QUFDQSxNQUFJUCxjQUFjLElBQUlBLGNBQWMsQ0FBQ1EsSUFBckMsRUFDRUQsTUFBTSxHQUFHLDZCQUFDLFlBQUQ7QUFBUSxJQUFBLFNBQVMsRUFBRVIsT0FBTyxDQUFDUSxNQUEzQjtBQUFtQyxJQUFBLEdBQUcsRUFBRVAsY0FBYyxDQUFDUSxJQUFmLENBQW9CQztBQUE1RCxJQUFULENBREYsS0FHRUYsTUFBTSxHQUFHLDZCQUFDLG9CQUFEO0FBQWUsSUFBQSxRQUFRLEVBQUM7QUFBeEIsSUFBVDs7QUFFRixNQUFJRyxtQkFBbUIsR0FBRyx5Q0FBMUI7O0FBQ0EsTUFBSVAsS0FBSixFQUFXO0FBQ1RPLElBQUFBLG1CQUFtQixHQUNqQiw2QkFBQyxXQUFEO0FBQU8sTUFBQSxJQUFJLEVBQUUsSUFBYjtBQUFtQixNQUFBLE9BQU8sRUFBRUw7QUFBNUIsT0FDRSw2QkFBQyxXQUFEO0FBQU8sTUFBQSxTQUFTLEVBQUVOLE9BQU8sQ0FBQ0k7QUFBMUIsT0FDRSw2QkFBQyw4QkFBRDtBQUNFLE1BQUEsY0FBYyxFQUFFSCxjQURsQjtBQUVFLE1BQUEsZ0JBQWdCLEVBQUVDLGdCQUZwQjtBQUdFLE1BQUEsTUFBTSxFQUFFQztBQUhWLE1BREYsQ0FERixDQURGO0FBV0Q7O0FBRUQsU0FDRSwwQ0FDRSw2QkFBQyxnQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFSSxTQURYO0FBRUUsSUFBQSxLQUFLLEVBQUM7QUFGUixLQUlHQyxNQUpILENBREYsRUFPR0csbUJBUEgsQ0FERjtBQVdEOztBQUVEWixpQkFBaUIsQ0FBQ2EsU0FBbEIscUJBQ0tDLCtCQUFlRCxTQURwQjs7QUFJQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QlAsSUFBQUEsTUFBTSxFQUFFO0FBQ05RLE1BQUFBLEtBQUssRUFBRSxNQUREO0FBRU5DLE1BQUFBLE1BQU0sRUFBRTtBQUZGLEtBRGlCO0FBS3pCYixJQUFBQSxLQUFLLEVBQUU7QUFDTGMsTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLEtBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLEtBSEQ7QUFJTEMsTUFBQUEsS0FBSyxFQUFFO0FBSkY7QUFMa0IsR0FBWjtBQUFBLENBQWY7O0FBYU8sSUFBTUMsUUFBUSxHQUFHLHdCQUFXUixNQUFYLEVBQW1CO0FBQUVTLEVBQUFBLFNBQVMsRUFBRTtBQUFiLENBQW5CLEVBQXdDeEIsaUJBQXhDLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgSWNvbkJ1dHRvbixcbiAgQXZhdGFyLFxuICBNb2RhbCxcbiAgUGFwZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIEFjY291bnRDaXJjbGUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24nO1xuXG5mdW5jdGlvbiBVc2VyTWVudUNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIGF1dGhlbnRpY2F0aW9uLFxuICBvbkF1dGhlbnRpY2F0aW9uLFxuICBhdXRoZW50aWNhdGlvbkNvbmZpZyxcbn0pIHtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbChmYWxzZSk7XG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHNldE1vZGFsKHRydWUpO1xuXG4gIGxldCBhdmF0YXI7XG4gIGlmIChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi51c2VyKVxuICAgIGF2YXRhciA9IDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPXthdXRoZW50aWNhdGlvbi51c2VyLmF2YXRhcl91cmx9IC8+O1xuICBlbHNlXG4gICAgYXZhdGFyID0gPEFjY291bnRDaXJjbGUgZm9udFNpemU9XCJsYXJnZVwiIC8+O1xuXG4gIGxldCBhdXRoZW50aWNhdGlvbk1vZGFsID0gPGRpdiAvPjtcbiAgaWYgKG1vZGFsKSB7XG4gICAgYXV0aGVudGljYXRpb25Nb2RhbCA9IChcbiAgICAgIDxNb2RhbCBvcGVuPXt0cnVlfSBvbkNsb3NlPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XG4gICAgICAgICAgPEF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbj17YXV0aGVudGljYXRpb259XG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0aW9uPXtvbkF1dGhlbnRpY2F0aW9ufVxuICAgICAgICAgICAgY29uZmlnPXthdXRoZW50aWNhdGlvbkNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgPlxuICAgICAgICB7YXZhdGFyfVxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAge2F1dGhlbnRpY2F0aW9uTW9kYWx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblVzZXJNZW51Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgLi4uQXV0aGVudGljYXRpb24ucHJvcFR5cGVzXG59O1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGF2YXRhcjoge1xuICAgIHdpZHRoOiAnMzVweCcsXG4gICAgaGVpZ2h0OiAnMzVweCcsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTAlJyxcbiAgICBsZWZ0OiAnMTAlJyxcbiAgICByaWdodDogJzEwJScsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlck1lbnUgPSB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoVXNlck1lbnVDb21wb25lbnQpO1xuIl19