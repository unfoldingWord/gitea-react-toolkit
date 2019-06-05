"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

require("@material-ui/icons");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SearchComponent(_ref) {
  var classes = _ref.classes,
      defaultOwner = _ref.defaultOwner,
      defaultQuery = _ref.defaultQuery,
      onRepository = _ref.onRepository,
      config = _ref.config;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      repositories = _useState2[0],
      setRepositories = _useState2[1];

  return _react.default.createElement(_core.List, {
    className: classes.root
  }, _react.default.createElement(_.SearchForm, {
    defaultOwner: defaultOwner,
    defaultQuery: defaultQuery,
    onRepositories: setRepositories,
    config: config
  }), _react.default.createElement(_core.Divider, null), _react.default.createElement(_.Repositories, {
    repositories: repositories,
    onRepository: onRepository,
    config: config
  }));
}

SearchComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** Prefill the owner search field. */
  defaultOwner: _propTypes.default.string,

  /** Prefill the query search field. */
  defaultQuery: _propTypes.default.string,

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }).isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      overflow: 'auto',
      height: '100%'
    }
  };
};

var Search = (0, _styles.withStyles)(styles)(SearchComponent);
exports.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9TZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoQ29tcG9uZW50IiwiY2xhc3NlcyIsImRlZmF1bHRPd25lciIsImRlZmF1bHRRdWVyeSIsIm9uUmVwb3NpdG9yeSIsImNvbmZpZyIsInJlcG9zaXRvcmllcyIsInNldFJlcG9zaXRvcmllcyIsInJvb3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsInNoYXBlIiwic2VydmVyIiwic3R5bGVzIiwidGhlbWUiLCJvdmVyZmxvdyIsImhlaWdodCIsIlNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUdBOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGVBQVQsT0FNRztBQUFBLE1BTERDLE9BS0MsUUFMREEsT0FLQztBQUFBLE1BSkRDLFlBSUMsUUFKREEsWUFJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQzs7QUFBQSxrQkFDdUMscUJBQVMsRUFBVCxDQUR2QztBQUFBO0FBQUEsTUFDTUMsWUFETjtBQUFBLE1BQ29CQyxlQURwQjs7QUFHRCxTQUNFLDZCQUFDLFVBQUQ7QUFBTSxJQUFBLFNBQVMsRUFBRU4sT0FBTyxDQUFDTztBQUF6QixLQUNFLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFlBQVksRUFBRU4sWUFEaEI7QUFFRSxJQUFBLFlBQVksRUFBRUMsWUFGaEI7QUFHRSxJQUFBLGNBQWMsRUFBRUksZUFIbEI7QUFJRSxJQUFBLE1BQU0sRUFBRUY7QUFKVixJQURGLEVBT0UsNkJBQUMsYUFBRCxPQVBGLEVBUUUsNkJBQUMsY0FBRDtBQUNFLElBQUEsWUFBWSxFQUFFQyxZQURoQjtBQUVFLElBQUEsWUFBWSxFQUFFRixZQUZoQjtBQUdFLElBQUEsTUFBTSxFQUFFQztBQUhWLElBUkYsQ0FERjtBQWdCRDs7QUFFREwsZUFBZSxDQUFDUyxTQUFoQixHQUE0QjtBQUMxQlIsRUFBQUEsT0FBTyxFQUFFUyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEQTs7QUFFMUI7QUFDQVYsRUFBQUEsWUFBWSxFQUFFUSxtQkFBVUcsTUFIRTs7QUFJMUI7QUFDQVYsRUFBQUEsWUFBWSxFQUFFTyxtQkFBVUcsTUFMRTs7QUFNMUI7QUFDQVQsRUFBQUEsWUFBWSxFQUFFTSxtQkFBVUksSUFBVixDQUFlRixVQVBIOztBQVExQjtBQUNBUCxFQUFBQSxNQUFNLEVBQUVLLG1CQUFVSyxLQUFWLENBQWdCO0FBQ3RCQyxJQUFBQSxNQUFNLEVBQUVOLG1CQUFVRyxNQUFWLENBQWlCRDtBQURILEdBQWhCLEVBRUxBO0FBWHVCLENBQTVCOztBQWNBLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCVixJQUFBQSxJQUFJLEVBQUU7QUFDSlcsTUFBQUEsUUFBUSxFQUFFLE1BRE47QUFFSkMsTUFBQUEsTUFBTSxFQUFFO0FBRko7QUFEbUIsR0FBWjtBQUFBLENBQWY7O0FBT08sSUFBTUMsTUFBTSxHQUFHLHdCQUFXSixNQUFYLEVBQW1CakIsZUFBbkIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3QsXG4gIERpdmlkZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IFJlcG9zaXRvcmllcywgU2VhcmNoRm9ybSB9IGZyb20gJy4vJztcblxuZnVuY3Rpb24gU2VhcmNoQ29tcG9uZW50KHtcbiAgY2xhc3NlcyxcbiAgZGVmYXVsdE93bmVyLFxuICBkZWZhdWx0UXVlcnksXG4gIG9uUmVwb3NpdG9yeSxcbiAgY29uZmlnLFxufSkge1xuICBjb25zdCBbcmVwb3NpdG9yaWVzLCBzZXRSZXBvc2l0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFNlYXJjaEZvcm1cbiAgICAgICAgZGVmYXVsdE93bmVyPXtkZWZhdWx0T3duZXJ9XG4gICAgICAgIGRlZmF1bHRRdWVyeT17ZGVmYXVsdFF1ZXJ5fVxuICAgICAgICBvblJlcG9zaXRvcmllcz17c2V0UmVwb3NpdG9yaWVzfVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgIC8+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPFJlcG9zaXRvcmllc1xuICAgICAgICByZXBvc2l0b3JpZXM9e3JlcG9zaXRvcmllc31cbiAgICAgICAgb25SZXBvc2l0b3J5PXtvblJlcG9zaXRvcnl9XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgLz5cbiAgICA8L0xpc3Q+XG4gICk7XG59XG5cblNlYXJjaENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqIFByZWZpbGwgdGhlIG93bmVyIHNlYXJjaCBmaWVsZC4gKi9cbiAgZGVmYXVsdE93bmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogUHJlZmlsbCB0aGUgcXVlcnkgc2VhcmNoIGZpZWxkLiAqL1xuICBkZWZhdWx0UXVlcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVwb3NpdG9yeSBpcyBzZWxlY3RlZC4gKi9cbiAgb25SZXBvc2l0b3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogQ29uZmlndXJhdGlvbiByZXF1aXJlZCBpZiBwYXRocyBhcmUgcHJvdmlkZWQgYXMgVVJMLiAqL1xuICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaCA9IHdpdGhTdHlsZXMoc3R5bGVzKShTZWFyY2hDb21wb25lbnQpO1xuIl19