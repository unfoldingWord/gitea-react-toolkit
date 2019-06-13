"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBlob = withBlob;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tree = require("./Tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function withBlob(Component) {
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
      var fileConfig = _objectSpread({}, config, props.fileConfig);

      component = _react.default.createElement(Component, _extends({}, props, {
        blob: _blob,
        fileConfig: fileConfig
      }));
    }

    return component;
  };
}

withBlob.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi93aXRoQmxvYi5qcyJdLCJuYW1lcyI6WyJ3aXRoQmxvYiIsIkNvbXBvbmVudCIsIkJsb2JDb21wb25lbnQiLCJibG9iIiwib25CbG9iIiwicHJvcHMiLCJfYmxvYiIsInNldEJsb2IiLCJoYXNCbG9iIiwiYmxvYkNvbmZpZyIsInVybCIsInRyZWUiLCJjb25maWciLCJyZXBvc2l0b3J5IiwidHJlZV91cmwiLCJhdXRoZW50aWNhdGlvbiIsInVwZGF0ZUJsb2IiLCJfX2Jsb2IiLCJjbG9zZSIsImNvbXBvbmVudCIsImZpbGVDb25maWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInBhdGgiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2l6ZSIsIm51bWJlciIsImZ1bmMiLCJhcnJheU9mIiwidHlwZSIsIm9uZU9mIiwiZGVwdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDbEMsU0FBTyxTQUFTQyxhQUFULE9BSUo7QUFBQSxRQUhEQyxJQUdDLFFBSERBLElBR0M7QUFBQSxRQUZEQyxNQUVDLFFBRkRBLE1BRUM7QUFBQSxRQURFQyxLQUNGOztBQUFBLG9CQUN3QixxQkFBU0YsSUFBVCxDQUR4QjtBQUFBO0FBQUEsUUFDTUcsS0FETjtBQUFBLFFBQ2FDLE9BRGI7O0FBR0QsUUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxhQUFPLENBQUMsQ0FBQ0YsS0FBVDtBQUFBLEtBQWhCOztBQUVBLFFBQUlHLFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxRQUFJSixLQUFLLENBQUNJLFVBQVYsRUFBc0I7QUFBQSw4QkFDU0osS0FBSyxDQUFDSSxVQURmO0FBQUEsVUFDZkMsSUFEZSxxQkFDZkEsR0FEZTtBQUFBLFVBQ1ZDLEtBRFUscUJBQ1ZBLElBRFU7QUFB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aUNOO0FBRkQsS0FBaEIsQ0FBbEIsQ0FGb0I7O0FBTTFCO0FBQ0FoQixJQUFBQSxHQUFHLEVBQUVZLG1CQUFVRyxNQVBXOztBQVExQjtBQUNBUSxJQUFBQSxLQUFLLEVBQUVYLG1CQUFVTTtBQVRTLEdBQWhCLEVBVVRGLFVBdkJnQjs7QUF3Qm5CO0FBQ0FiLEVBQUFBLFVBQVUsRUFBRVMsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJULElBQUFBLFFBQVEsRUFBRVEsbUJBQVVHLE1BQVYsQ0FBaUJDO0FBREQsR0FBaEI7QUF6Qk8sQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFRyZWUgfSBmcm9tICcuL1RyZWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEJsb2IoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBCbG9iQ29tcG9uZW50ICh7XG4gICAgYmxvYixcbiAgICBvbkJsb2IsXG4gICAgLi4ucHJvcHNcbiAgfSkge1xuICAgIGNvbnN0IFtfYmxvYiwgc2V0QmxvYl0gPSB1c2VTdGF0ZShibG9iKTtcblxuICAgIGNvbnN0IGhhc0Jsb2IgPSAoKSA9PiAoISFfYmxvYik7XG5cbiAgICBsZXQgYmxvYkNvbmZpZyA9IHt9O1xuICAgIGlmIChwcm9wcy5ibG9iQ29uZmlnKSB7XG4gICAgICBsZXQge3VybCwgdHJlZSwgLi4uY29uZmlnfSA9IHByb3BzLmJsb2JDb25maWc7XG4gICAgICBibG9iQ29uZmlnID0ge3VybCwgdHJlZSwgY29uZmlnfTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnJlcG9zaXRvcnkgJiYgIWJsb2JDb25maWcudXJsKSB7XG4gICAgICBibG9iQ29uZmlnLnVybCA9IHByb3BzLnJlcG9zaXRvcnkudHJlZV91cmw7XG4gICAgfVxuICAgIGlmIChwcm9wcy5hdXRoZW50aWNhdGlvbikge1xuICAgICAgYmxvYkNvbmZpZy5jb25maWcgPSBwcm9wcy5hdXRoZW50aWNhdGlvbi5jb25maWc7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHVybCxcbiAgICAgIHRyZWUsXG4gICAgICBjb25maWcsXG4gICAgfSA9IGJsb2JDb25maWc7XG5cbiAgICBjb25zdCB1cGRhdGVCbG9iID0gKF9fYmxvYikgPT4ge1xuICAgICAgaWYgKF9fYmxvYikgX19ibG9iLmNsb3NlID0gKCkgPT4geyB1cGRhdGVCbG9iKCk7IH07XG4gICAgICBpZiAob25CbG9iKSBvbkJsb2IoX19ibG9iKTtcbiAgICAgIGVsc2Ugc2V0QmxvYihfX2Jsb2IpO1xuICAgIH07XG4gICAgY29uZmlnLnVwZGF0ZUJsb2IgPSAoX19ibG9iKSA9PiB7IHVwZGF0ZUJsb2IoX19ibG9iKSB9O1xuXG4gICAgbGV0IGNvbXBvbmVudCA9IDxkaXYgLz47XG4gICAgaWYgKCFoYXNCbG9iKCkgJiYgKHRyZWUgfHwgdXJsKSkge1xuICAgICAgY29tcG9uZW50ID0gKFxuICAgICAgICA8VHJlZVxuICAgICAgICAgIHRyZWU9e3RyZWV9XG4gICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RydWV9XG4gICAgICAgICAgb25CbG9iPXt1cGRhdGVCbG9ifVxuICAgICAgICAgIHsuLi5ibG9iQ29uZmlnfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQmxvYigpKSB7XG4gICAgICBjb25zdCBmaWxlQ29uZmlnID0gey4uLmNvbmZpZywgLi4ucHJvcHMuZmlsZUNvbmZpZ307XG4gICAgICBjb21wb25lbnQgPSA8Q29tcG9uZW50IHsuLi5wcm9wc30gYmxvYj17X2Jsb2J9IGZpbGVDb25maWc9e2ZpbGVDb25maWd9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn1cblxud2l0aEJsb2IucHJvcFR5cGVzID0ge1xuICAvKiogUGFzcyBhIHByZXZpb3VzbHkgcmV0dXJuZWQgYmxvYiBvYmplY3QgdG8gYnlwYXNzIHRoZSBzZWxlY3Rpb24uICovXG4gIGJsb2I6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLyoqIFRoZSBmaWxlcGF0aCBpbiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgLyoqIFRoZSB1cmwgaW4gdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBUaGUgY29udGVudCBzaXplIG9mIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICAvKiogRnVuY3Rpb24gdG8gcHJvcG9nYXRlIHdoZW4gdGhlIEJsb2IgaXMgc2VsZWN0ZWQuICovXG4gIG9uQmxvYjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBDb25maWd1cmF0aW9uIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgU2VhcmNoL1JlcG9zaXRvcmllcyBjb21wb25lbnQuICovXG4gIGJsb2JDb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLyoqIEFuIGFycmF5IG9mIHBhdGhzIGZyb20gdGhlIEdpdGVhIGZpbGUgdHJlZSBhcGkuICovXG4gICAgdHJlZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3RyZWUnLCdibG9iJ10pLmlzUmVxdWlyZWQsXG4gICAgfSkpLFxuICAgIC8qKiBUaGUgVXJsIHRvIGZldGNoIHRoZSBsaXN0aW5nIGlmIGxpc3RpbmcgaXMgbm90IHByb3ZpZGVkLiAqL1xuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlIGRlcHRoIG9mIHRoZSBwYXRoIGluIHRoZSB0cmVlIHNldHMgdGhlIGluc2V0IG9mIHRoZSBjb21wb25lbnQuICovXG4gICAgZGVwdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIC8qKiBSZXBvc2l0b3J5IHRyZWVfdXJsIGNhbiBiZSB1c2VkIGluIHBsYWNlIG9mIGJsb2JDb25maWcgKi9cbiAgcmVwb3NpdG9yeTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0cmVlX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbn07XG4iXX0=