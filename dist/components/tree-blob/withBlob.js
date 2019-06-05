"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBlob = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tree = require("./Tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function withBlobComponent(Component) {
  return function BlobComponent(_ref) {
    var blob = _ref.blob,
        onBlob = _ref.onBlob,
        props = _objectWithoutProperties(_ref, ["blob", "onBlob"]);

    var _useState = (0, _react.useState)(blob),
        _useState2 = _slicedToArray(_useState, 2),
        _blob = _useState2[0],
        setBlob = _useState2[1];

    var hasBlob = function hasBlob() {
      return !!_blob;
    };

    var blobConfig = {};

    if (props.blobConfig) {
      var _props$blobConfig = props.blobConfig,
          _url = _props$blobConfig.url,
          _tree = _props$blobConfig.tree,
          _config = _objectWithoutProperties(_props$blobConfig, ["url", "tree"]);

      blobConfig = {
        url: _url,
        tree: _tree,
        config: _config
      };
    }

    if (props.repository && !blobConfig.url) {
      blobConfig.url = props.repository.tree_url;
    }

    if (props.authentication) {
      blobConfig.config = props.authentication.config;
    }

    var _blobConfig = blobConfig,
        url = _blobConfig.url,
        tree = _blobConfig.tree,
        config = _blobConfig.config;

    var updateBlob = function updateBlob(__blob) {
      if (__blob) __blob.close = function () {
        updateBlob();
      };
      if (onBlob) onBlob(__blob);else setBlob(__blob);
    };

    config.updateBlob = function (__blob) {
      updateBlob(__blob);
    };

    var component = _react.default.createElement("div", null);

    if (!hasBlob() && (tree || url)) {
      component = _react.default.createElement(_Tree.Tree, _extends({
        tree: tree,
        url: url,
        config: config,
        selected: true,
        onBlob: updateBlob
      }, blobConfig));
    }

    if (hasBlob()) {
      component = _react.default.createElement(Component, _extends({}, props, {
        blob: _blob,
        fileConfig: config
      }));
    }

    return component;
  };
}

withBlobComponent.propTypes = {
  /** Pass a previously returned blob object to bypass the selection. */
  blob: _propTypes.default.shape({
    /** The filepath in the Git Tree Blob Object */
    path: _propTypes.default.string.isRequired,

    /** The url in the Git Tree Blob Object */
    url: _propTypes.default.string,

    /** The content size of the Git Tree Blob Object */
    size: _propTypes.default.number
  }),

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** Configuration to pass through to the Search/Repositories component. */
  blobConfig: _propTypes.default.shape({
    /** An array of paths from the Gitea file tree api. */
    tree: _propTypes.default.arrayOf(_propTypes.default.shape({
      path: _propTypes.default.string.isRequired,
      type: _propTypes.default.oneOf(['tree', 'blob']).isRequired
    })),

    /** The Url to fetch the listing if listing is not provided. */
    url: _propTypes.default.string,

    /** The depth of the path in the tree sets the inset of the component. */
    depth: _propTypes.default.number
  }).isRequired,

  /** Repository tree_url can be used in place of blobConfig */
  repository: _propTypes.default.shape({
    tree_url: _propTypes.default.string.isRequired
  })
};
var withBlob = withBlobComponent;
exports.withBlob = withBlob;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi93aXRoQmxvYi5qcyJdLCJuYW1lcyI6WyJ3aXRoQmxvYkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIkJsb2JDb21wb25lbnQiLCJibG9iIiwib25CbG9iIiwicHJvcHMiLCJfYmxvYiIsInNldEJsb2IiLCJoYXNCbG9iIiwiYmxvYkNvbmZpZyIsInVybCIsInRyZWUiLCJjb25maWciLCJyZXBvc2l0b3J5IiwidHJlZV91cmwiLCJhdXRoZW50aWNhdGlvbiIsInVwZGF0ZUJsb2IiLCJfX2Jsb2IiLCJjbG9zZSIsImNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwicGF0aCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaXplIiwibnVtYmVyIiwiZnVuYyIsImFycmF5T2YiLCJ0eXBlIiwib25lT2YiLCJkZXB0aCIsIndpdGhCbG9iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMkJDLFNBQTNCLEVBQXNDO0FBQ3BDLFNBQU8sU0FBU0MsYUFBVCxPQUlKO0FBQUEsUUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsUUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsUUFERUMsS0FDRjs7QUFBQSxvQkFDd0IscUJBQVNGLElBQVQsQ0FEeEI7QUFBQTtBQUFBLFFBQ01HLEtBRE47QUFBQSxRQUNhQyxPQURiOztBQUdELFFBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsYUFBTyxDQUFDLENBQUNGLEtBQVQ7QUFBQSxLQUFoQjs7QUFFQSxRQUFJRyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsUUFBSUosS0FBSyxDQUFDSSxVQUFWLEVBQXNCO0FBQUEsOEJBQ1NKLEtBQUssQ0FBQ0ksVUFEZjtBQUFBLFVBQ2ZDLElBRGUscUJBQ2ZBLEdBRGU7QUFBQSxVQUNWQyxLQURVLHFCQUNWQSxJQURV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QUFFVyxtQkFBVUcsTUFQVzs7QUFRMUI7QUFDQVEsSUFBQUEsS0FBSyxFQUFFWCxtQkFBVU07QUFUUyxHQUFoQixFQVVURixVQXZCeUI7O0FBd0I1QjtBQUNBWixFQUFBQSxVQUFVLEVBQUVRLG1CQUFVQyxLQUFWLENBQWdCO0FBQzFCUixJQUFBQSxRQUFRLEVBQUVPLG1CQUFVRyxNQUFWLENBQWlCQztBQURELEdBQWhCO0FBekJnQixDQUE5QjtBQThCTyxJQUFNUSxRQUFRLEdBQUdqQyxpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFRyZWUgfSBmcm9tICcuL1RyZWUnO1xuXG5mdW5jdGlvbiB3aXRoQmxvYkNvbXBvbmVudChDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEJsb2JDb21wb25lbnQgKHtcbiAgICBibG9iLFxuICAgIG9uQmxvYixcbiAgICAuLi5wcm9wc1xuICB9KSB7XG4gICAgY29uc3QgW19ibG9iLCBzZXRCbG9iXSA9IHVzZVN0YXRlKGJsb2IpO1xuXG4gICAgY29uc3QgaGFzQmxvYiA9ICgpID0+ICghIV9ibG9iKTtcblxuICAgIGxldCBibG9iQ29uZmlnID0ge307XG4gICAgaWYgKHByb3BzLmJsb2JDb25maWcpIHtcbiAgICAgIGxldCB7dXJsLCB0cmVlLCAuLi5jb25maWd9ID0gcHJvcHMuYmxvYkNvbmZpZztcbiAgICAgIGJsb2JDb25maWcgPSB7dXJsLCB0cmVlLCBjb25maWd9O1xuICAgIH1cbiAgICBpZiAocHJvcHMucmVwb3NpdG9yeSAmJiAhYmxvYkNvbmZpZy51cmwpIHtcbiAgICAgIGJsb2JDb25maWcudXJsID0gcHJvcHMucmVwb3NpdG9yeS50cmVlX3VybDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICBibG9iQ29uZmlnLmNvbmZpZyA9IHByb3BzLmF1dGhlbnRpY2F0aW9uLmNvbmZpZztcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgdXJsLFxuICAgICAgdHJlZSxcbiAgICAgIGNvbmZpZyxcbiAgICB9ID0gYmxvYkNvbmZpZztcblxuICAgIGNvbnN0IHVwZGF0ZUJsb2IgPSAoX19ibG9iKSA9PiB7XG4gICAgICBpZiAoX19ibG9iKSBfX2Jsb2IuY2xvc2UgPSAoKSA9PiB7IHVwZGF0ZUJsb2IoKTsgfTtcbiAgICAgIGlmIChvbkJsb2IpIG9uQmxvYihfX2Jsb2IpO1xuICAgICAgZWxzZSBzZXRCbG9iKF9fYmxvYik7XG4gICAgfTtcbiAgICBjb25maWcudXBkYXRlQmxvYiA9IChfX2Jsb2IpID0+IHsgdXBkYXRlQmxvYihfX2Jsb2IpIH07XG5cbiAgICBsZXQgY29tcG9uZW50ID0gPGRpdiAvPjtcbiAgICBpZiAoIWhhc0Jsb2IoKSAmJiAodHJlZSB8fCB1cmwpKSB7XG4gICAgICBjb21wb25lbnQgPSAoXG4gICAgICAgIDxUcmVlXG4gICAgICAgICAgdHJlZT17dHJlZX1cbiAgICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICBzZWxlY3RlZD17dHJ1ZX1cbiAgICAgICAgICBvbkJsb2I9e3VwZGF0ZUJsb2J9XG4gICAgICAgICAgey4uLmJsb2JDb25maWd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChoYXNCbG9iKCkpIHtcbiAgICAgIGNvbXBvbmVudCA9IDxDb21wb25lbnQgey4uLnByb3BzfSBibG9iPXtfYmxvYn0gZmlsZUNvbmZpZz17Y29uZmlnfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG59XG5cbndpdGhCbG9iQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqIFBhc3MgYSBwcmV2aW91c2x5IHJldHVybmVkIGJsb2Igb2JqZWN0IHRvIGJ5cGFzcyB0aGUgc2VsZWN0aW9uLiAqL1xuICBibG9iOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBUaGUgZmlsZXBhdGggaW4gdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIC8qKiBUaGUgdXJsIGluIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlIGNvbnRlbnQgc2l6ZSBvZiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgLyoqIEZ1bmN0aW9uIHRvIHByb3BvZ2F0ZSB3aGVuIHRoZSBCbG9iIGlzIHNlbGVjdGVkLiAqL1xuICBvbkJsb2I6IFByb3BUeXBlcy5mdW5jLFxuICAvKiogQ29uZmlndXJhdGlvbiB0byBwYXNzIHRocm91Z2ggdG8gdGhlIFNlYXJjaC9SZXBvc2l0b3JpZXMgY29tcG9uZW50LiAqL1xuICBibG9iQ29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBBbiBhcnJheSBvZiBwYXRocyBmcm9tIHRoZSBHaXRlYSBmaWxlIHRyZWUgYXBpLiAqL1xuICAgIHRyZWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0cmVlJywnYmxvYiddKS5pc1JlcXVpcmVkLFxuICAgIH0pKSxcbiAgICAvKiogVGhlIFVybCB0byBmZXRjaCB0aGUgbGlzdGluZyBpZiBsaXN0aW5nIGlzIG5vdCBwcm92aWRlZC4gKi9cbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqIFRoZSBkZXB0aCBvZiB0aGUgcGF0aCBpbiB0aGUgdHJlZSBzZXRzIHRoZSBpbnNldCBvZiB0aGUgY29tcG9uZW50LiAqL1xuICAgIGRlcHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KS5pc1JlcXVpcmVkLFxuICAvKiogUmVwb3NpdG9yeSB0cmVlX3VybCBjYW4gYmUgdXNlZCBpbiBwbGFjZSBvZiBibG9iQ29uZmlnICovXG4gIHJlcG9zaXRvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdHJlZV91cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aEJsb2IgPSB3aXRoQmxvYkNvbXBvbmVudDtcbiJdfQ==