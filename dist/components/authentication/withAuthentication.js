"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAuthentication = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Authentication = require("./Authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function withAuthenticationComponent(Component) {
  return function AuthenticatedComponent(_ref) {
    var authentication = _ref.authentication,
        onAuthentication = _ref.onAuthentication,
        _ref$authenticationCo = _ref.authenticationConfig,
        messages = _ref$authenticationCo.messages,
        config = _objectWithoutProperties(_ref$authenticationCo, ["messages"]),
        props = _objectWithoutProperties(_ref, ["authentication", "onAuthentication", "authenticationConfig"]);

    var _useState = (0, _react.useState)(authentication),
        _useState2 = _slicedToArray(_useState, 2),
        auth = _useState2[0],
        setAuth = _useState2[1];

    var isAuthenticated = function isAuthenticated() {
      return auth && auth.token && auth.token && auth.user;
    };

    var updateAuthentication = function updateAuthentication(_auth) {
      if (_auth) {
        _auth.logout = function () {
          updateAuthentication();
        };
      }

      if (onAuthentication) onAuthentication(_auth);else setAuth(_auth);
    };

    var component = _react.default.createElement("div", null);

    if (!isAuthenticated() && config) {
      component = _react.default.createElement(_Authentication.Authentication, {
        messages: messages,
        config: config,
        onAuthentication: updateAuthentication
      });
    }

    if (isAuthenticated()) {
      component = _react.default.createElement(Component, _extends({}, props, {
        authentication: auth
      }));
    }

    return component;
  };
}

withAuthenticationComponent.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired
  }),

  /** Callback function to propogate the user/token used for API Authentication. */
  onAuthentication: _propTypes.default.func,

  /** Configuration to pass through to the Authentication component. */
  authenticationConfig: _propTypes.default.shape({
    /** Override the default text and errors. Must override all or none. */
    messages: _propTypes.default.shape({
      actionText: _propTypes.default.string.isRequired,
      genericError: _propTypes.default.string.isRequired,
      usernameError: _propTypes.default.string.isRequired,
      passwordError: _propTypes.default.string.isRequired
    }),

    /** The Gitea server to use when authenticating. */
    server: _propTypes.default.string.isRequired,

    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: _propTypes.default.string.isRequired
  }).isRequired
};
var withAuthentication = withAuthenticationComponent;
exports.withAuthentication = withAuthentication;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL3dpdGhBdXRoZW50aWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aXRoQXV0aGVudGljYXRpb25Db21wb25lbnQiLCJDb21wb25lbnQiLCJBdXRoZW50aWNhdGVkQ29tcG9uZW50IiwiYXV0aGVudGljYXRpb24iLCJvbkF1dGhlbnRpY2F0aW9uIiwiYXV0aGVudGljYXRpb25Db25maWciLCJtZXNzYWdlcyIsImNvbmZpZyIsInByb3BzIiwiYXV0aCIsInNldEF1dGgiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsInVzZXIiLCJ1cGRhdGVBdXRoZW50aWNhdGlvbiIsIl9hdXRoIiwibG9nb3V0IiwiY29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFjdGlvblRleHQiLCJzdHJpbmciLCJnZW5lcmljRXJyb3IiLCJ1c2VybmFtZUVycm9yIiwicGFzc3dvcmRFcnJvciIsInNlcnZlciIsInRva2VuaWQiLCJ3aXRoQXV0aGVudGljYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSwyQkFBVCxDQUFxQ0MsU0FBckMsRUFBZ0Q7QUFDOUMsU0FBTyxTQUFTQyxzQkFBVCxPQVFKO0FBQUEsUUFQREMsY0FPQyxRQVBEQSxjQU9DO0FBQUEsUUFOREMsZ0JBTUMsUUFOREEsZ0JBTUM7QUFBQSxxQ0FMREMsb0JBS0M7QUFBQSxRQUpDQyxRQUlELHlCQUpDQSxRQUlEO0FBQUEsUUFISUMsTUFHSjtBQUFBLFFBREVDLEtBQ0Y7O0FBQUEsb0JBQ3VCLHFCQUFTTCxjQUFULENBRHZCO0FBQUE7QUFBQSxRQUNNTSxJQUROO0FBQUEsUUFDWUMsT0FEWjs7QUFHRCxRQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsYUFBT0YsSUFBSSxJQUFJQSxJQUFJLENBQUNHLEtBQWIsSUFBc0JILElBQUksQ0FBQ0csS0FBM0IsSUFBb0NILElBQUksQ0FBQ0ksSUFBaEQ7QUFBQSxLQUF4Qjs7QUFFQSxRQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUN0QyxVQUFJQSxLQUFKLEVBQVc7QUFDVEEsUUFBQUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsWUFBTTtBQUFFRixVQUFBQSxvQkFBb0I7QUFBSyxTQUFoRDtBQUNEOztBQUNELFVBQUlWLGdCQUFKLEVBQXNCQSxnQkFBZ0IsQ0FBQ1csS0FBRCxDQUFoQixDQUF0QixLQUNLTCxPQUFPLENBQUNLLEtBQUQsQ0FBUDtBQUNOLEtBTkQ7O0FBUUEsUUFBSUUsU0FBUyxHQUFHLHlDQUFoQjs7QUFDQSxRQUFJLENBQUNOLGVBQWUsRUFBaEIsSUFBc0JKLE1BQTFCLEVBQWtDO0FBQ2hDVSxNQUFBQSxTQUFTLEdBQ1AsNkJBQUMsOEJBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBRVgsUUFEWjtBQUVFLFFBQUEsTUFBTSxFQUFFQyxNQUZWO0FBR0UsUUFBQSxnQkFBZ0IsRUFBRU87QUFIcEIsUUFERjtBQU9EOztBQUVELFFBQUlILGVBQWUsRUFBbkIsRUFBdUI7QUFDckJNLE1BQUFBLFNBQVMsR0FBRyw2QkFBQyxTQUFELGVBQWVULEtBQWY7QUFBc0IsUUFBQSxjQUFjLEVBQUVDO0FBQXRDLFNBQVo7QUFDRDs7QUFFRCxXQUFRUSxTQUFSO0FBQ0QsR0FyQ0Q7QUFzQ0Q7O0FBRURqQiwyQkFBMkIsQ0FBQ2tCLFNBQTVCLEdBQXdDO0FBQ3RDO0FBQ0FmLEVBQUFBLGNBQWMsRUFBRWdCLG1CQUFVQyxLQUFWLENBQWdCO0FBQzlCUCxJQUFBQSxJQUFJLEVBQUVNLG1CQUFVRSxNQUFWLENBQWlCQyxVQURPO0FBRTlCVixJQUFBQSxLQUFLLEVBQUVPLG1CQUFVRSxNQUFWLENBQWlCQyxVQUZNO0FBRzlCZixJQUFBQSxNQUFNLEVBQUVZLG1CQUFVRSxNQUFWLENBQWlCQztBQUhLLEdBQWhCLENBRnNCOztBQU90QztBQUNBbEIsRUFBQUEsZ0JBQWdCLEVBQUVlLG1CQUFVSSxJQVJVOztBQVN0QztBQUNBbEIsRUFBQUEsb0JBQW9CLEVBQUVjLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3BDO0FBQ0FkLElBQUFBLFFBQVEsRUFBRWEsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDeEJJLE1BQUFBLFVBQVUsRUFBRUwsbUJBQVVNLE1BQVYsQ0FBaUJILFVBREw7QUFFeEJJLE1BQUFBLFlBQVksRUFBRVAsbUJBQVVNLE1BQVYsQ0FBaUJILFVBRlA7QUFHeEJLLE1BQUFBLGFBQWEsRUFBRVIsbUJBQVVNLE1BQVYsQ0FBaUJILFVBSFI7QUFJeEJNLE1BQUFBLGFBQWEsRUFBRVQsbUJBQVVNLE1BQVYsQ0FBaUJIO0FBSlIsS0FBaEIsQ0FGMEI7O0FBUXBDO0FBQ0FPLElBQUFBLE1BQU0sRUFBRVYsbUJBQVVNLE1BQVYsQ0FBaUJILFVBVFc7O0FBVXBDO0FBQ0FRLElBQUFBLE9BQU8sRUFBRVgsbUJBQVVNLE1BQVYsQ0FBaUJIO0FBWFUsR0FBaEIsRUFZbkJBO0FBdEJtQyxDQUF4QztBQXlCTyxJQUFNUyxrQkFBa0IsR0FBRy9CLDJCQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuL0F1dGhlbnRpY2F0aW9uJztcblxuZnVuY3Rpb24gd2l0aEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50KENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gQXV0aGVudGljYXRlZENvbXBvbmVudCAoe1xuICAgIGF1dGhlbnRpY2F0aW9uLFxuICAgIG9uQXV0aGVudGljYXRpb24sXG4gICAgYXV0aGVudGljYXRpb25Db25maWc6IHtcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgLi4uY29uZmlnXG4gICAgfSxcbiAgICAuLi5wcm9wc1xuICB9KSB7XG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoYXV0aGVudGljYXRpb24pO1xuXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4gKGF1dGggJiYgYXV0aC50b2tlbiAmJiBhdXRoLnRva2VuICYmIGF1dGgudXNlcik7XG5cbiAgICBjb25zdCB1cGRhdGVBdXRoZW50aWNhdGlvbiA9IChfYXV0aCkgPT4ge1xuICAgICAgaWYgKF9hdXRoKSB7XG4gICAgICAgIF9hdXRoLmxvZ291dCA9ICgpID0+IHsgdXBkYXRlQXV0aGVudGljYXRpb24oKTsgfVxuICAgICAgfVxuICAgICAgaWYgKG9uQXV0aGVudGljYXRpb24pIG9uQXV0aGVudGljYXRpb24oX2F1dGgpO1xuICAgICAgZWxzZSBzZXRBdXRoKF9hdXRoKTtcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50ID0gPGRpdiAvPjtcbiAgICBpZiAoIWlzQXV0aGVudGljYXRlZCgpICYmIGNvbmZpZykge1xuICAgICAgY29tcG9uZW50ID0gKFxuICAgICAgICA8QXV0aGVudGljYXRpb25cbiAgICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgb25BdXRoZW50aWNhdGlvbj17dXBkYXRlQXV0aGVudGljYXRpb259XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgY29tcG9uZW50ID0gPENvbXBvbmVudCB7Li4ucHJvcHN9IGF1dGhlbnRpY2F0aW9uPXthdXRofSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gIGNvbXBvbmVudDtcbiAgfVxufVxuXG53aXRoQXV0aGVudGljYXRpb25Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogUGFzcyBhIHByZXZpb3VzbHkgcmV0dXJuZWQgYXV0aGVudGljYXRpb24gb2JqZWN0IHRvIGJ5cGFzcyBsb2dpbi4gKi9cbiAgYXV0aGVudGljYXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRva2VuOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH0pLFxuICAvKiogQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcHJvcG9nYXRlIHRoZSB1c2VyL3Rva2VuIHVzZWQgZm9yIEFQSSBBdXRoZW50aWNhdGlvbi4gKi9cbiAgb25BdXRoZW50aWNhdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBDb25maWd1cmF0aW9uIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgQXV0aGVudGljYXRpb24gY29tcG9uZW50LiAqL1xuICBhdXRoZW50aWNhdGlvbkNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBhbmQgZXJyb3JzLiBNdXN0IG92ZXJyaWRlIGFsbCBvciBub25lLiAqL1xuICAgIG1lc3NhZ2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWN0aW9uVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ2VuZXJpY0Vycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB1c2VybmFtZUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwYXNzd29yZEVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gICAgLyoqIFRoZSBHaXRlYSBzZXJ2ZXIgdG8gdXNlIHdoZW4gYXV0aGVudGljYXRpbmcuICovXG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgdG9rZW4gdG8gY3JlYXRlL3JldHJpZXZlIHRoYXQgaXMgdXNlZCBmb3IgdGhlIGFwcC4gKi9cbiAgICB0b2tlbmlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEF1dGhlbnRpY2F0aW9uID0gd2l0aEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50O1xuIl19