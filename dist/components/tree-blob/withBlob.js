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
      component = _react.default.createElement(Component, _extends({}, props, {
        blob: _blob,
        fileConfig: config
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi93aXRoQmxvYi5qcyJdLCJuYW1lcyI6WyJ3aXRoQmxvYiIsIkNvbXBvbmVudCIsIkJsb2JDb21wb25lbnQiLCJibG9iIiwib25CbG9iIiwicHJvcHMiLCJfYmxvYiIsInNldEJsb2IiLCJoYXNCbG9iIiwiYmxvYkNvbmZpZyIsInVybCIsInRyZWUiLCJjb25maWciLCJyZXBvc2l0b3J5IiwidHJlZV91cmwiLCJhdXRoZW50aWNhdGlvbiIsInVwZGF0ZUJsb2IiLCJfX2Jsb2IiLCJjbG9zZSIsImNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwicGF0aCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaXplIiwibnVtYmVyIiwiZnVuYyIsImFycmF5T2YiLCJ0eXBlIiwib25lT2YiLCJkZXB0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNBLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCO0FBQ2xDLFNBQU8sU0FBU0MsYUFBVCxPQUlKO0FBQUEsUUFIREMsSUFHQyxRQUhEQSxJQUdDO0FBQUEsUUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsUUFERUMsS0FDRjs7QUFBQSxvQkFDd0IscUJBQVNGLElBQVQsQ0FEeEI7QUFBQTtBQUFBLFFBQ01HLEtBRE47QUFBQSxRQUNhQyxPQURiOztBQUdELFFBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsYUFBTyxDQUFDLENBQUNGLEtBQVQ7QUFBQSxLQUFoQjs7QUFFQSxRQUFJRyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsUUFBSUosS0FBSyxDQUFDSSxVQUFWLEVBQXNCO0FBQUEsOEJBQ1NKLEtBQUssQ0FBQ0ksVUFEZjtBQUFBLFVBQ2ZDLElBRGUscUJBQ2ZBLEdBRGU7QUFBQSxVQUNWQyxLQURVLHFCQUNWQSxJQURVO0FBQUEsVUFDREMsT0FEQzs7QUFFcEJILE1BQUFBLFVBQVUsR0FBRztBQUFDQyxRQUFBQSxHQUFHLEVBQUhBLElBQUQ7QUFBTUMsUUFBQUEsSUFBSSxFQUFKQSxLQUFOO0FBQVlDLFFBQUFBLE1BQU0sRUFBTkE7QUFBWixPQUFiO0FBQ0Q7O0FBQ0QsUUFBSVAsS0FBSyxDQUFDUSxVQUFOLElBQW9CLENBQUNKLFVBQVUsQ0FBQ0MsR0FBcEMsRUFBeUM7QUFDdkNELE1BQUFBLFVBQVUsQ0FBQ0MsR0FBWCxHQUFpQkwsS0FBSyxDQUFDUSxVQUFOLENBQWlCQyxRQUFsQztBQUNEOztBQUNELFFBQUlULEtBQUssQ0FBQ1UsY0FBVixFQUEwQjtBQUN4Qk4sTUFBQUEsVUFBVSxDQUFDRyxNQUFYLEdBQW9CUCxLQUFLLENBQUNVLGNBQU4sQ0FBcUJILE1BQXpDO0FBQ0Q7O0FBZkEsc0JBb0JHSCxVQXBCSDtBQUFBLFFBaUJDQyxHQWpCRCxlQWlCQ0EsR0FqQkQ7QUFBQSxRQWtCQ0MsSUFsQkQsZUFrQkNBLElBbEJEO0FBQUEsUUFtQkNDLE1BbkJELGVBbUJDQSxNQW5CRDs7QUFzQkQsUUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFVBQUlBLE1BQUosRUFBWUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsWUFBTTtBQUFFRixRQUFBQSxVQUFVO0FBQUssT0FBdEM7QUFDWixVQUFJWixNQUFKLEVBQVlBLE1BQU0sQ0FBQ2EsTUFBRCxDQUFOLENBQVosS0FDS1YsT0FBTyxDQUFDVSxNQUFELENBQVA7QUFDTixLQUpEOztBQUtBTCxJQUFBQSxNQUFNLENBQUNJLFVBQVAsR0FBb0IsVUFBQ0MsTUFBRCxFQUFZO0FBQUVELE1BQUFBLFVBQVUsQ0FBQ0MsTUFBRCxDQUFWO0FBQW9CLEtBQXREOztBQUVBLFFBQUlFLFNBQVMsR0FBRyx5Q0FBaEI7O0FBQ0EsUUFBSSxDQUFDWCxPQUFPLEVBQVIsS0FBZUcsSUFBSSxJQUFJRCxHQUF2QixDQUFKLEVBQWlDO0FBQy9CUyxNQUFBQSxTQUFTLEdBQ1AsNkJBQUMsVUFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFUixJQURSO0FBRUUsUUFBQSxHQUFHLEVBQUVELEdBRlA7QUFHRSxRQUFBLE1BQU0sRUFBRUUsTUFIVjtBQUlFLFFBQUEsUUFBUSxFQUFFLElBSlo7QUFLRSxRQUFBLE1BQU0sRUFBRUk7QUFMVixTQU1NUCxVQU5OLEVBREY7QUFVRDs7QUFFRCxRQUFJRCxPQUFPLEVBQVgsRUFBZTtBQUNiVyxNQUFBQSxTQUFTLEdBQUcsNkJBQUMsU0FBRCxlQUFlZCxLQUFmO0FBQXNCLFFBQUEsSUFBSSxFQUFFQyxLQUE1QjtBQUFtQyxRQUFBLFVBQVUsRUFBRU07QUFBL0MsU0FBWjtBQUNEOztBQUVELFdBQU9PLFNBQVA7QUFDRCxHQXBERDtBQXFERDs7QUFFRG5CLFFBQVEsQ0FBQ29CLFNBQVQsR0FBcUI7QUFDbkI7QUFDQWpCLEVBQUFBLElBQUksRUFBRWtCLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3BCO0FBQ0FDLElBQUFBLElBQUksRUFBRUYsbUJBQVVHLE1BQVYsQ0FBaUJDLFVBRkg7O0FBR3BCO0FBQ0FmLElBQUFBLEdBQUcsRUFBRVcsbUJBQVVHLE1BSks7O0FBS3BCO0FBQ0FFLElBQUFBLElBQUksRUFBRUwsbUJBQVVNO0FBTkksR0FBaEIsQ0FGYTs7QUFVbkI7QUFDQXZCLEVBQUFBLE1BQU0sRUFBRWlCLG1CQUFVTyxJQVhDOztBQVluQjtBQUNBbkIsRUFBQUEsVUFBVSxFQUFFWSxtQkFBVUMsS0FBVixDQUFnQjtBQUMxQjtBQUNBWCxJQUFBQSxJQUFJLEVBQUVVLG1CQUFVUSxPQUFWLENBQWtCUixtQkFBVUMsS0FBVixDQUFnQjtBQUN0Q0MsTUFBQUEsSUFBSSxFQUFFRixtQkFBVUcsTUFBVixDQUFpQkMsVUFEZTtBQUV0Q0ssTUFBQUEsSUFBSSxFQUFFVCxtQkFBVVUsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUSxNQUFSLENBQWhCLEVBQWlDTjtBQUZELEtBQWhCLENBQWxCLENBRm9COztBQU0xQjtBQUNBZixJQUFBQSxHQUFHLEVBQUVXLG1CQUFVRyxNQVBXOztBQVExQjtBQUNBUSxJQUFBQSxLQUFLLEVBQUVYLG1CQUFVTTtBQVRTLEdBQWhCLEVBVVRGLFVBdkJnQjs7QUF3Qm5CO0FBQ0FaLEVBQUFBLFVBQVUsRUFBRVEsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJSLElBQUFBLFFBQVEsRUFBRU8sbUJBQVVHLE1BQVYsQ0FBaUJDO0FBREQsR0FBaEI7QUF6Qk8sQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFRyZWUgfSBmcm9tICcuL1RyZWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEJsb2IoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBCbG9iQ29tcG9uZW50ICh7XG4gICAgYmxvYixcbiAgICBvbkJsb2IsXG4gICAgLi4ucHJvcHNcbiAgfSkge1xuICAgIGNvbnN0IFtfYmxvYiwgc2V0QmxvYl0gPSB1c2VTdGF0ZShibG9iKTtcblxuICAgIGNvbnN0IGhhc0Jsb2IgPSAoKSA9PiAoISFfYmxvYik7XG5cbiAgICBsZXQgYmxvYkNvbmZpZyA9IHt9O1xuICAgIGlmIChwcm9wcy5ibG9iQ29uZmlnKSB7XG4gICAgICBsZXQge3VybCwgdHJlZSwgLi4uY29uZmlnfSA9IHByb3BzLmJsb2JDb25maWc7XG4gICAgICBibG9iQ29uZmlnID0ge3VybCwgdHJlZSwgY29uZmlnfTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnJlcG9zaXRvcnkgJiYgIWJsb2JDb25maWcudXJsKSB7XG4gICAgICBibG9iQ29uZmlnLnVybCA9IHByb3BzLnJlcG9zaXRvcnkudHJlZV91cmw7XG4gICAgfVxuICAgIGlmIChwcm9wcy5hdXRoZW50aWNhdGlvbikge1xuICAgICAgYmxvYkNvbmZpZy5jb25maWcgPSBwcm9wcy5hdXRoZW50aWNhdGlvbi5jb25maWc7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHVybCxcbiAgICAgIHRyZWUsXG4gICAgICBjb25maWcsXG4gICAgfSA9IGJsb2JDb25maWc7XG5cbiAgICBjb25zdCB1cGRhdGVCbG9iID0gKF9fYmxvYikgPT4ge1xuICAgICAgaWYgKF9fYmxvYikgX19ibG9iLmNsb3NlID0gKCkgPT4geyB1cGRhdGVCbG9iKCk7IH07XG4gICAgICBpZiAob25CbG9iKSBvbkJsb2IoX19ibG9iKTtcbiAgICAgIGVsc2Ugc2V0QmxvYihfX2Jsb2IpO1xuICAgIH07XG4gICAgY29uZmlnLnVwZGF0ZUJsb2IgPSAoX19ibG9iKSA9PiB7IHVwZGF0ZUJsb2IoX19ibG9iKSB9O1xuXG4gICAgbGV0IGNvbXBvbmVudCA9IDxkaXYgLz47XG4gICAgaWYgKCFoYXNCbG9iKCkgJiYgKHRyZWUgfHwgdXJsKSkge1xuICAgICAgY29tcG9uZW50ID0gKFxuICAgICAgICA8VHJlZVxuICAgICAgICAgIHRyZWU9e3RyZWV9XG4gICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RydWV9XG4gICAgICAgICAgb25CbG9iPXt1cGRhdGVCbG9ifVxuICAgICAgICAgIHsuLi5ibG9iQ29uZmlnfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQmxvYigpKSB7XG4gICAgICBjb21wb25lbnQgPSA8Q29tcG9uZW50IHsuLi5wcm9wc30gYmxvYj17X2Jsb2J9IGZpbGVDb25maWc9e2NvbmZpZ30gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuXG53aXRoQmxvYi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBQYXNzIGEgcHJldmlvdXNseSByZXR1cm5lZCBibG9iIG9iamVjdCB0byBieXBhc3MgdGhlIHNlbGVjdGlvbi4gKi9cbiAgYmxvYjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogVGhlIGZpbGVwYXRoIGluIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAvKiogVGhlIHVybCBpbiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqIFRoZSBjb250ZW50IHNpemUgb2YgdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIC8qKiBGdW5jdGlvbiB0byBwcm9wb2dhdGUgd2hlbiB0aGUgQmxvYiBpcyBzZWxlY3RlZC4gKi9cbiAgb25CbG9iOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIENvbmZpZ3VyYXRpb24gdG8gcGFzcyB0aHJvdWdoIHRvIHRoZSBTZWFyY2gvUmVwb3NpdG9yaWVzIGNvbXBvbmVudC4gKi9cbiAgYmxvYkNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogQW4gYXJyYXkgb2YgcGF0aHMgZnJvbSB0aGUgR2l0ZWEgZmlsZSB0cmVlIGFwaS4gKi9cbiAgICB0cmVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndHJlZScsJ2Jsb2InXSkuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgLyoqIFRoZSBVcmwgdG8gZmV0Y2ggdGhlIGxpc3RpbmcgaWYgbGlzdGluZyBpcyBub3QgcHJvdmlkZWQuICovXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBUaGUgZGVwdGggb2YgdGhlIHBhdGggaW4gdGhlIHRyZWUgc2V0cyB0aGUgaW5zZXQgb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgICBkZXB0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSkuaXNSZXF1aXJlZCxcbiAgLyoqIFJlcG9zaXRvcnkgdHJlZV91cmwgY2FuIGJlIHVzZWQgaW4gcGxhY2Ugb2YgYmxvYkNvbmZpZyAqL1xuICByZXBvc2l0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRyZWVfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcbiJdfQ==