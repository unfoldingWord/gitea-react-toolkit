"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _BlobObject = require("./BlobObject");

var _TreeObject = require("./TreeObject");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * A Listing Component to render an array of Git Tree objects.
 */
function TreeComponent(_ref) {
  var classes = _ref.classes,
      tree = _ref.tree,
      url = _ref.url,
      config = _ref.config,
      selected = _ref.selected,
      onBlob = _ref.onBlob,
      depth = _ref.depth,
      filepath = _ref.filepath;

  var _useState = (0, _react.useState)(tree || []),
      _useState2 = _slicedToArray(_useState, 2),
      _tree = _useState2[0],
      setTree = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedIndex = _useState4[0],
      setSelectedIndex = _useState4[1];

  var updateTree =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var __tree;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _helpers.fetchTree)({
                url: url,
                config: config
              });

            case 2:
              __tree = _context.sent;
              setTree(__tree);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateTree() {
      return _ref2.apply(this, arguments);
    };
  }();

  var emptyTree = !_tree || _tree.length === 0;

  if (selected && emptyTree) {
    updateTree();
  }

  var updateSelectedIndex = function updateSelectedIndex(index) {
    setSelectedIndex(index);
  };

  var components = [];

  if (_tree) {
    components = _tree.map(function (object, index) {
      var component;

      if (object.type === 'tree') {
        component = _react.default.createElement(_TreeObject.TreeObject, _extends({}, object, {
          selected: index === selectedIndex,
          depth: depth,
          onBlob: onBlob,
          filepath: filepath
        }));
      } else if (object.type === 'blob') {
        component = _react.default.createElement(_BlobObject.BlobObject, {
          blob: object,
          onBlob: onBlob,
          selected: index === selectedIndex,
          depth: depth,
          filepath: filepath
        });
      }

      return _react.default.createElement("div", {
        key: index,
        onClick: function onClick() {
          return updateSelectedIndex(index);
        }
      }, component);
    });
  }

  return _react.default.createElement(_core.Collapse, {
    in: selected,
    timeout: "auto",
    unmountOnExit: true
  }, _react.default.createElement(_core.List, {
    dense: true,
    className: classes.list
  }, components));
}

TreeComponent.propTypes = {
  /** @ignore */
  classes: _propTypes.default.object.isRequired,

  /** An array of paths from the Gitea file tree api. */
  tree: _propTypes.default.arrayOf(_propTypes.default.shape({
    path: _propTypes.default.string.isRequired,
    type: _propTypes.default.oneOf(['tree', 'blob']).isRequired
  })),

  /** The Url to fetch the listing if listing is not provided. */
  url: _propTypes.default.string,

  /** If url is relative, pass the server in the config object. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }),

  /** Set if the Listing is currently selected, which will expand the collapsed view. */
  selected: _propTypes.default.bool,

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** The depth of the path in the tree sets the inset of the component. */
  depth: _propTypes.default.number,

  /** The nested filepath that will concatenate. */
  filepath: _propTypes.default.string
};
TreeComponent.defaultProps = {
  selected: false,
  depth: 1
};

var styles = function styles(theme) {
  return {
    list: {
      paddingTop: 0,
      paddingBottom: 0
    }
  };
};

var Tree = (0, _styles.withStyles)(styles)(TreeComponent);
exports.Tree = Tree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9UcmVlLmpzIl0sIm5hbWVzIjpbIlRyZWVDb21wb25lbnQiLCJjbGFzc2VzIiwidHJlZSIsInVybCIsImNvbmZpZyIsInNlbGVjdGVkIiwib25CbG9iIiwiZGVwdGgiLCJmaWxlcGF0aCIsIl90cmVlIiwic2V0VHJlZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwidXBkYXRlVHJlZSIsIl9fdHJlZSIsImVtcHR5VHJlZSIsImxlbmd0aCIsInVwZGF0ZVNlbGVjdGVkSW5kZXgiLCJpbmRleCIsImNvbXBvbmVudHMiLCJtYXAiLCJvYmplY3QiLCJjb21wb25lbnQiLCJ0eXBlIiwibGlzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiLCJwYXRoIiwic3RyaW5nIiwib25lT2YiLCJzZXJ2ZXIiLCJib29sIiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsInRoZW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJUcmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUdBLFNBQVNBLGFBQVQsT0FTRztBQUFBLE1BUkRDLE9BUUMsUUFSREEsT0FRQztBQUFBLE1BUERDLElBT0MsUUFQREEsSUFPQztBQUFBLE1BTkRDLEdBTUMsUUFOREEsR0FNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLFFBSUMsUUFKREEsUUFJQztBQUFBLE1BSERDLE1BR0MsUUFIREEsTUFHQztBQUFBLE1BRkRDLEtBRUMsUUFGREEsS0FFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQzs7QUFBQSxrQkFDd0IscUJBQVNOLElBQUksSUFBSSxFQUFqQixDQUR4QjtBQUFBO0FBQUEs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QUFELEVBQVEsTUFBUixDQUFoQixFQUFpQ0w7QUFGRCxHQUFoQixDQUFsQixDQUprQjs7QUFReEI7QUFDQXhCLEVBQUFBLEdBQUcsRUFBRXVCLG1CQUFVSyxNQVRTOztBQVV4QjtBQUNBM0IsRUFBQUEsTUFBTSxFQUFFc0IsbUJBQVVHLEtBQVYsQ0FBZ0I7QUFDdEJJLElBQUFBLE1BQU0sRUFBRVAsbUJBQVVLLE1BQVYsQ0FBaUJKO0FBREgsR0FBaEIsQ0FYZ0I7O0FBY3hCO0FBQ0F0QixFQUFBQSxRQUFRLEVBQUVxQixtQkFBVVEsSUFmSTs7QUFnQnhCO0FBQ0E1QixFQUFBQSxNQUFNLEVBQUVvQixtQkFBVVMsSUFqQk07O0FBa0J4QjtBQUNBNUIsRUFBQUEsS0FBSyxFQUFFbUIsbUJBQVVVLE1BbkJPOztBQW9CeEI7QUFDQTVCLEVBQUFBLFFBQVEsRUFBRWtCLG1CQUFVSztBQXJCSSxDQUExQjtBQXdCQS9CLGFBQWEsQ0FBQ3FDLFlBQWQsR0FBNkI7QUFDM0JoQyxFQUFBQSxRQUFRLEVBQUUsS0FEaUI7QUFFM0JFLEVBQUFBLEtBQUssRUFBRTtBQUZvQixDQUE3Qjs7QUFLQSxJQUFNK0IsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDdkJmLElBQUFBLElBQUksRUFBRTtBQUNKZ0IsTUFBQUEsVUFBVSxFQUFFLENBRFI7QUFFSkMsTUFBQUEsYUFBYSxFQUFFO0FBRlg7QUFEaUIsR0FBTDtBQUFBLENBQXBCOztBQU9PLElBQU1DLElBQUksR0FBRyx3QkFBV0osTUFBWCxFQUFtQnRDLGFBQW5CLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBMaXN0LFxuICBDb2xsYXBzZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBCbG9iT2JqZWN0IH0gZnJvbSAnLi9CbG9iT2JqZWN0JztcbmltcG9ydCB7IFRyZWVPYmplY3QgfSBmcm9tICcuL1RyZWVPYmplY3QnO1xuXG5pbXBvcnQgeyBmZXRjaFRyZWUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4vKipcbiAqIEEgTGlzdGluZyBDb21wb25lbnQgdG8gcmVuZGVyIGFuIGFycmF5IG9mIEdpdCBUcmVlIG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIFRyZWVDb21wb25lbnQgKHtcbiAgY2xhc3NlcyxcbiAgdHJlZSxcbiAgdXJsLFxuICBjb25maWcsXG4gIHNlbGVjdGVkLFxuICBvbkJsb2IsXG4gIGRlcHRoLFxuICBmaWxlcGF0aCxcbn0pIHtcbiAgY29uc3QgW190cmVlLCBzZXRUcmVlXSA9IHVzZVN0YXRlKHRyZWUgfHwgW10pO1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHVwZGF0ZVRyZWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgX190cmVlID0gYXdhaXQgZmV0Y2hUcmVlKHt1cmwsIGNvbmZpZ30pO1xuICAgIHNldFRyZWUoX190cmVlKTtcbiAgfTtcblxuICBjb25zdCBlbXB0eVRyZWUgPSAoIV90cmVlIHx8IF90cmVlLmxlbmd0aCA9PT0gMCk7XG4gIGlmIChzZWxlY3RlZCAmJiBlbXB0eVRyZWUpIHtcbiAgICB1cGRhdGVUcmVlKCk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVTZWxlY3RlZEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gIH1cblxuICBsZXQgY29tcG9uZW50cyA9IFtdO1xuICBpZiAoX3RyZWUpIHtcbiAgICBjb21wb25lbnRzID0gX3RyZWUubWFwKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50O1xuICAgICAgaWYgKG9iamVjdC50eXBlID09PSAndHJlZScpIHtcbiAgICAgICAgY29tcG9uZW50ID0gKFxuICAgICAgICAgIDxUcmVlT2JqZWN0XG4gICAgICAgICAgICB7Li4ub2JqZWN0fVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2luZGV4ID09PSBzZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgZGVwdGg9e2RlcHRofVxuICAgICAgICAgICAgb25CbG9iPXtvbkJsb2J9XG4gICAgICAgICAgICBmaWxlcGF0aD17ZmlsZXBhdGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09ICdibG9iJykge1xuICAgICAgICBjb21wb25lbnQgPSAoXG4gICAgICAgICAgPEJsb2JPYmplY3RcbiAgICAgICAgICAgIGJsb2I9e29iamVjdH1cbiAgICAgICAgICAgIG9uQmxvYj17b25CbG9ifVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2luZGV4ID09PSBzZWxlY3RlZEluZGV4fVxuICAgICAgICAgICAgZGVwdGg9e2RlcHRofVxuICAgICAgICAgICAgZmlsZXBhdGg9e2ZpbGVwYXRofVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBvbkNsaWNrPXsoKT0+IHVwZGF0ZVNlbGVjdGVkSW5kZXgoaW5kZXgpfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbXBvbmVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2UgaW49e3NlbGVjdGVkfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICA8TGlzdCBkZW5zZSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIHtjb21wb25lbnRzfVxuICAgICAgPC9MaXN0PlxuICAgIDwvQ29sbGFwc2U+XG4gICk7XG59XG5cblRyZWVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBBbiBhcnJheSBvZiBwYXRocyBmcm9tIHRoZSBHaXRlYSBmaWxlIHRyZWUgYXBpLiAqL1xuICB0cmVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0cmVlJywnYmxvYiddKS5pc1JlcXVpcmVkLFxuICB9KSksXG4gIC8qKiBUaGUgVXJsIHRvIGZldGNoIHRoZSBsaXN0aW5nIGlmIGxpc3RpbmcgaXMgbm90IHByb3ZpZGVkLiAqL1xuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBJZiB1cmwgaXMgcmVsYXRpdmUsIHBhc3MgdGhlIHNlcnZlciBpbiB0aGUgY29uZmlnIG9iamVjdC4gKi9cbiAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbiAgLyoqIFNldCBpZiB0aGUgTGlzdGluZyBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIHdoaWNoIHdpbGwgZXhwYW5kIHRoZSBjb2xsYXBzZWQgdmlldy4gKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKiogRnVuY3Rpb24gdG8gcHJvcG9nYXRlIHdoZW4gdGhlIEJsb2IgaXMgc2VsZWN0ZWQuICovXG4gIG9uQmxvYjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBUaGUgZGVwdGggb2YgdGhlIHBhdGggaW4gdGhlIHRyZWUgc2V0cyB0aGUgaW5zZXQgb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgZGVwdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiBUaGUgbmVzdGVkIGZpbGVwYXRoIHRoYXQgd2lsbCBjb25jYXRlbmF0ZS4gKi9cbiAgZmlsZXBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cblRyZWVDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZDogZmFsc2UsXG4gIGRlcHRoOiAxLFxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBsaXN0OiB7XG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBUcmVlID0gd2l0aFN0eWxlcyhzdHlsZXMpKFRyZWVDb21wb25lbnQpO1xuIl19