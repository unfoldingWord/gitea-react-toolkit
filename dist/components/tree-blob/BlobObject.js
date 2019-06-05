"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlobObject = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _path = _interopRequireDefault(require("path"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A Blob Component to render a Git Tree blob object.
 */
function BlobObjectComponent(_ref) {
  var classes = _ref.classes,
      selected = _ref.selected,
      blob = _ref.blob,
      _ref$blob = _ref.blob,
      path = _ref$blob.path,
      url = _ref$blob.url,
      size = _ref$blob.size,
      onBlob = _ref.onBlob,
      depth = _ref.depth,
      filepath = _ref.filepath;

  var _filepath = _path.default.join(filepath || '', path);

  var _blob = _objectSpread({}, blob, {
    filepath: _filepath
  });

  var icon = selected ? _react.default.createElement(_icons.Note, null) : _react.default.createElement(_icons.NoteOutlined, null);
  return _react.default.createElement(_core.ListItem, {
    button: true,
    selected: selected,
    className: classes.root,
    style: {
      paddingLeft: depth + 'em'
    },
    onClick: function onClick() {
      if (onBlob) onBlob(_blob);
    }
  }, _react.default.createElement(_core.ListItemIcon, {
    style: {
      marginRight: 0
    }
  }, icon), _react.default.createElement(_core.ListItemText, {
    className: classes.pathText,
    primary: path,
    secondary: (0, _helpers.humanFileSize)(size)
  }));
}

BlobObjectComponent.propTypes = {
  /** @ignore */
  classes: _propTypes.default.object.isRequired,

  /** Blob data to render, if url not provided. */
  blob: _propTypes.default.shape({
    /** The filepath in the Git Tree Blob Object */
    path: _propTypes.default.string.isRequired,

    /** The url in the Git Tree Blob Object */
    url: _propTypes.default.string,

    /** The content size of the Git Tree Blob Object */
    size: _propTypes.default.number
  }),

  /** Set whether or not the File object is currently selected. */
  selected: _propTypes.default.bool,

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** The depth of the path in the tree sets the inset of the component. */
  depth: _propTypes.default.number,

  /** The nested filepath that will concatenate. */
  filepath: _propTypes.default.string
};
BlobObjectComponent.defaultProps = {
  selected: false,
  depth: 1
};

var styles = function styles(theme) {
  return {
    root: {
      paddingRight: '0.7em'
    },
    pathText: {
      paddingLeft: '0.7em'
    }
  };
};

var BlobObject = (0, _styles.withStyles)(styles)(BlobObjectComponent);
exports.BlobObject = BlobObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9CbG9iT2JqZWN0LmpzIl0sIm5hbWVzIjpbIkJsb2JPYmplY3RDb21wb25lbnQiLCJjbGFzc2VzIiwic2VsZWN0ZWQiLCJibG9iIiwicGF0aCIsInVybCIsInNpemUiLCJvbkJsb2IiLCJkZXB0aCIsImZpbGVwYXRoIiwiX2ZpbGVwYXRoIiwiUGF0aCIsImpvaW4iLCJfYmxvYiIsImljb24iLCJyb290IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhdGhUZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJ0aGVtZSIsInBhZGRpbmdSaWdodCIsIkJsb2JPYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFLQTs7Ozs7Ozs7QUFFQTs7O0FBR0EsU0FBU0EsbUJBQVQsT0FZRztBQUFBLE1BWERDLE9BV0MsUUFYREEsT0FXQztBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLElBU0MsUUFUREEsSUFTQztBQUFBLHVCQVJEQSxJQVFDO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsR0FNRCxhQU5DQSxHQU1EO0FBQUEsTUFMQ0MsSUFLRCxhQUxDQSxJQUtEO0FBQUEsTUFIREMsTUFHQyxRQUhEQSxNQUdDO0FBQUEsTUFGREMsS0FFQyxRQUZEQSxLQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDOztBQUNELE1BQU1DLFNBQVMsR0FBR0MsY0FBS0MsSUFBTCxDQUFVSCxRQUFRLElBQUksRUFBdEIsRUFBMEJMLElBQTFCLENBQWxCOztBQUNBLE1BQU1TLEtBQUsscUJBQU9WLElBQVA7QUFBYU0sSUFBQUEsUUFBUSxFQUFFQztBQUF2QixJQUFYOztBQUVBLE1BQU1JLElBQUksR0FBR1osUUFBUSxHQUNuQiw2QkFBQyxXQUFELE9BRG1CLEdBRW5CLDZCQUFDLG1CQUFELE9BRkY7QUFJQSxTQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLE1BQU0sTUFEUjtBQUVFLElBQUEsUUFBUSxFQUFFQSxRQUZaO0FBR0UsSUFBQSxTQUFTLEVBQUVELE9BQU8sQ0FBQ2MsSUFIckI7QUFJRSxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxXQUFXLEVBQUVSLEtBQUssR0FBRztBQUF0QixLQUpUO0FBS0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFBQyxVQUFJRCxNQUFKLEVBQVlBLE1BQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQWM7QUFMNUMsS0FPRSw2QkFBQyxrQkFBRDtBQUFjLElBQUEsS0FBSyxFQUFFO0FBQUVJLE1BQUFBLFdBQVcsRUFBRTtBQUFmO0FBQXJCLEtBQ0dILElBREgsQ0FQRixFQVVFLDZCQUFDLGtCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUViLE9BQU8sQ0FBQ2lCLFFBRHJCO0FBRUUsSUFBQSxPQUFPLEVBQUVkLElBRlg7QUFHRSxJQUFBLFNBQVMsRUFBRSw0QkFBY0UsSUFBZDtBQUhiLElBVkYsQ0FERjtBQWtCRDs7QUFFRE4sbUJBQW1CLENBQUNtQixTQUFwQixHQUFnQztBQUM5QjtBQUNBbEIsRUFBQUEsT0FBTyxFQUFFbUIsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkk7O0FBRzlCO0FBQ0FuQixFQUFBQSxJQUFJLEVBQUVpQixtQkFBVUcsS0FBVixDQUFnQjtBQUNwQjtBQUNBbkIsSUFBQUEsSUFBSSxFQUFFZ0IsbUJBQVVJLE1BQVYsQ0FBaUJGLFVBRkg7O0FBR3BCO0FBQ0FqQixJQUFBQSxHQUFHLEVBQUVlLG1CQUFVSSxNQUpLOztBQUtwQjtBQUNBbEIsSUFBQUEsSUFBSSxFQUFFYyxtQkFBVUs7QUFOSSxHQUFoQixDQUp3Qjs7QUFZOUI7QUFDQXZCLEVBQUFBLFFBQVEsRUFBRWtCLG1CQUFVTSxJQWJVOztBQWM5QjtBQUNBbkIsRUFBQUEsTUFBTSxFQUFFYSxtQkFBVU8sSUFmWTs7QUFnQjlCO0FBQ0FuQixFQUFBQSxLQUFLLEVBQUVZLG1CQUFVSyxNQWpCYTs7QUFrQjlCO0FBQ0FoQixFQUFBQSxRQUFRLEVBQUVXLG1CQUFVSTtBQW5CVSxDQUFoQztBQXNCQXhCLG1CQUFtQixDQUFDNEIsWUFBcEIsR0FBbUM7QUFDakMxQixFQUFBQSxRQUFRLEVBQUUsS0FEdUI7QUFFakNNLEVBQUFBLEtBQUssRUFBRTtBQUYwQixDQUFuQzs7QUFLQSxJQUFNcUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDdkJmLElBQUFBLElBQUksRUFBRTtBQUNKZ0IsTUFBQUEsWUFBWSxFQUFFO0FBRFYsS0FEaUI7QUFJdkJiLElBQUFBLFFBQVEsRUFBRTtBQUNSRixNQUFBQSxXQUFXLEVBQUU7QUFETDtBQUphLEdBQUw7QUFBQSxDQUFwQjs7QUFTTyxJQUFNZ0IsVUFBVSxHQUFHLHdCQUFXSCxNQUFYLEVBQW1CN0IsbUJBQW5CLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBOb3RlLFxuICBOb3RlT3V0bGluZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IGh1bWFuRmlsZVNpemUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4vKipcbiAqIEEgQmxvYiBDb21wb25lbnQgdG8gcmVuZGVyIGEgR2l0IFRyZWUgYmxvYiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIEJsb2JPYmplY3RDb21wb25lbnQgKHtcbiAgY2xhc3NlcyxcbiAgc2VsZWN0ZWQsXG4gIGJsb2IsXG4gIGJsb2I6IHtcbiAgICBwYXRoLFxuICAgIHVybCxcbiAgICBzaXplLFxuICB9LFxuICBvbkJsb2IsXG4gIGRlcHRoLFxuICBmaWxlcGF0aCxcbn0pIHtcbiAgY29uc3QgX2ZpbGVwYXRoID0gUGF0aC5qb2luKGZpbGVwYXRoIHx8ICcnLCBwYXRoKTtcbiAgY29uc3QgX2Jsb2IgPSB7Li4uYmxvYiwgZmlsZXBhdGg6IF9maWxlcGF0aH07XG5cbiAgY29uc3QgaWNvbiA9IHNlbGVjdGVkID9cbiAgICA8Tm90ZSAvPiA6XG4gICAgPE5vdGVPdXRsaW5lZCAvPjtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbVxuICAgICAgYnV0dG9uXG4gICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IGRlcHRoICsgJ2VtJ319XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7aWYgKG9uQmxvYikgb25CbG9iKF9ibG9iKX19XG4gICAgPlxuICAgICAgPExpc3RJdGVtSWNvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fT5cbiAgICAgICAge2ljb259XG4gICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhdGhUZXh0fVxuICAgICAgICBwcmltYXJ5PXtwYXRofVxuICAgICAgICBzZWNvbmRhcnk9e2h1bWFuRmlsZVNpemUoc2l6ZSl9XG4gICAgICAvPlxuICAgIDwvTGlzdEl0ZW0+XG4gICk7XG59XG5cbkJsb2JPYmplY3RDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBCbG9iIGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICBibG9iOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBUaGUgZmlsZXBhdGggaW4gdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIC8qKiBUaGUgdXJsIGluIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlIGNvbnRlbnQgc2l6ZSBvZiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgLyoqIFNldCB3aGV0aGVyIG9yIG5vdCB0aGUgRmlsZSBvYmplY3QgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBGdW5jdGlvbiB0byBwcm9wb2dhdGUgd2hlbiB0aGUgQmxvYiBpcyBzZWxlY3RlZC4gKi9cbiAgb25CbG9iOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIFRoZSBkZXB0aCBvZiB0aGUgcGF0aCBpbiB0aGUgdHJlZSBzZXRzIHRoZSBpbnNldCBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBkZXB0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIFRoZSBuZXN0ZWQgZmlsZXBhdGggdGhhdCB3aWxsIGNvbmNhdGVuYXRlLiAqL1xuICBmaWxlcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkJsb2JPYmplY3RDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZDogZmFsc2UsXG4gIGRlcHRoOiAxLFxufTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmdSaWdodDogJzAuN2VtJyxcbiAgfSxcbiAgcGF0aFRleHQ6IHtcbiAgICBwYWRkaW5nTGVmdDogJzAuN2VtJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBCbG9iT2JqZWN0ID0gd2l0aFN0eWxlcyhzdHlsZXMpKEJsb2JPYmplY3RDb21wb25lbnQpO1xuIl19