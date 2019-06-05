"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _awesomeDebouncePromise = _interopRequireDefault(require("awesome-debounce-promise"));

var _core2 = require("../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var repositorySearchDebounced = (0, _awesomeDebouncePromise.default)(_core2.repositorySearch, 250);

function SearchFormComponent(_ref) {
  var classes = _ref.classes,
      defaultOwner = _ref.defaultOwner,
      defaultQuery = _ref.defaultQuery,
      onRepositories = _ref.onRepositories,
      config = _ref.config;

  var _useState = (0, _react.useState)(defaultOwner),
      _useState2 = _slicedToArray(_useState, 2),
      owner = _useState2[0],
      setOwner = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultQuery),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      initialSearch = _useState6[0],
      setInitialSearch = _useState6[1];

  var updateRepositories =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(owner, query) {
      var repositories;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return repositorySearchDebounced({
                owner: owner,
                query: query,
                config: config
              });

            case 2:
              repositories = _context.sent;
              onRepositories(repositories);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateRepositories(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (!initialSearch) {
    updateRepositories(owner, query).then(function () {
      return setInitialSearch(true);
    });
  }

  var onOwner = function onOwner(_owner) {
    setOwner(_owner);
    updateRepositories(_owner, query);
  };

  var onQuery = function onQuery(_query) {
    setQuery(_query);
    updateRepositories(owner, _query);
  };

  return _react.default.createElement(_core.ListItem, {
    ContainerComponent: "div",
    className: classes.root
  }, _react.default.createElement(_core.ListItemIcon, {
    className: classes.listItemIcon
  }, _react.default.createElement(_core.IconButton, {
    onClick: function onClick() {
      return updateRepositories(owner, query);
    }
  }, _react.default.createElement(_icons.Search, null))), _react.default.createElement("form", {
    className: classes.form
  }, _react.default.createElement("div", {
    className: classes.input
  }, _react.default.createElement(_core.TextField, {
    id: "owner",
    label: "Owner",
    type: "text",
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: owner,
    autoComplete: undefined,
    onChange: function onChange(event) {
      onOwner(event.target.value);
    }
  })), _react.default.createElement("div", {
    className: classes.input
  }, _react.default.createElement(_core.TextField, {
    id: "search",
    label: "Search",
    type: "text",
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: query,
    autoFocus: true,
    autoComplete: undefined,
    onChange: function onChange(event) {
      onQuery(event.target.value);
    }
  }))));
}

SearchFormComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** Prefill the owner search field. */
  defaultOwner: _propTypes.default.string,

  /** Prefill the query search field. */
  defaultQuery: _propTypes.default.string,

  /** Function to propogate the returned repositories data array. */
  onRepositories: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }).isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      position: 'sticky',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
    },
    listItemIcon: {
      marginRight: '8px'
    },
    form: {
      width: '100%'
    },
    input: {
      width: '40%',
      display: 'inline-block',
      marginRight: '1em'
    }
  };
};

var SearchForm = (0, _styles.withStyles)(styles)(SearchFormComponent);
exports.SearchForm = SearchForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9TZWFyY2hGb3JtLmpzIl0sIm5hbWVzIjpbInJlcG9zaXRvcnlTZWFyY2hEZWJvdW5jZWQiLCJyZXBvc2l0b3J5U2VhcmNoIiwiU2VhcmNoRm9ybUNvbXBvbmVudCIsImNsYXNzZXMiLCJkZWZhdWx0T3duZXIiLCJkZWZhdWx0UXVlcnkiLCJvblJlcG9zaXRvcmllcyIsImNvbmZpZyIsIm93bmVyIiwic2V0T3duZXIiLCJxdWVyeSIsInNldFF1ZXJ5IiwiaW5pdGlhbFNlYXJjaCIsInNldEluaXRpYWxTZWFyY2giLCJ1cGRhdGVSZXBvc2l0b3JpZXMiLCJyZXBvc2l0b3JpZXMiLCJ0aGVuIiwib25Pd25lciIsIl9vd25lciIsIm9uUXVlcnkiLCJfcXVlcnkiLCJyb290IiwibGlzdEl0ZW1JY29uIiwiZm9ybSIsImlucHV0IiwidW5kZWZpbmVkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwic2hhcGUiLCJzZXJ2ZXIiLCJzdHlsZXMiLCJ0aGVtZSIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luTGVmdCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiU2VhcmNoRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsR0FBRyxxQ0FBdUJDLHVCQUF2QixFQUF5QyxHQUF6QyxDQUFsQzs7QUFFQSxTQUFTQyxtQkFBVCxPQU1HO0FBQUEsTUFMREMsT0FLQyxRQUxEQSxPQUtDO0FBQUEsTUFKREMsWUFJQyxRQUpEQSxZQUlDO0FBQUEsTUFIREMsWUFHQyxRQUhEQSxZQUdDO0FBQUEsTUFGREMsY0FFQyxRQUZEQSxjQUVDO0FBQUEs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QjtBQU96QnBCLElBQUFBLFlBQVksRUFBRTtBQUNacUIsTUFBQUEsV0FBVyxFQUFFO0FBREQsS0FQVztBQVV6QnBCLElBQUFBLElBQUksRUFBRTtBQUNKbUIsTUFBQUEsS0FBSyxFQUFFO0FBREgsS0FWbUI7QUFhekJsQixJQUFBQSxLQUFLLEVBQUU7QUFDTGtCLE1BQUFBLEtBQUssRUFBRSxLQURGO0FBRUxFLE1BQUFBLE9BQU8sRUFBRSxjQUZKO0FBR0xELE1BQUFBLFdBQVcsRUFBRTtBQUhSO0FBYmtCLEdBQVo7QUFBQSxDQUFmOztBQW9CTyxJQUFNRSxVQUFVLEdBQUcsd0JBQVdSLE1BQVgsRUFBbUJuQyxtQkFBbkIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1JY29uLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIFNlYXJjaCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcbmltcG9ydCBBd2Vzb21lRGVib3VuY2VQcm9taXNlIGZyb20gJ2F3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZSc7XG5cbmltcG9ydCB7IHJlcG9zaXRvcnlTZWFyY2ggfSBmcm9tICcuLi8uLi9jb3JlJztcblxuY29uc3QgcmVwb3NpdG9yeVNlYXJjaERlYm91bmNlZCA9IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UocmVwb3NpdG9yeVNlYXJjaCwgMjUwKTtcblxuZnVuY3Rpb24gU2VhcmNoRm9ybUNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIGRlZmF1bHRPd25lcixcbiAgZGVmYXVsdFF1ZXJ5LFxuICBvblJlcG9zaXRvcmllcyxcbiAgY29uZmlnLFxufSkge1xuICBjb25zdCBbb3duZXIsIHNldE93bmVyXSA9IHVzZVN0YXRlKGRlZmF1bHRPd25lcik7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoZGVmYXVsdFF1ZXJ5KTtcbiAgY29uc3QgW2luaXRpYWxTZWFyY2gsIHNldEluaXRpYWxTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHVwZGF0ZVJlcG9zaXRvcmllcyA9IGFzeW5jIChvd25lciwgcXVlcnkpID0+IHtcbiAgICBjb25zdCByZXBvc2l0b3JpZXMgPSBhd2FpdCByZXBvc2l0b3J5U2VhcmNoRGVib3VuY2VkKHtvd25lciwgcXVlcnksIGNvbmZpZ30pO1xuICAgIG9uUmVwb3NpdG9yaWVzKHJlcG9zaXRvcmllcyk7XG4gIH1cblxuICBpZiAoIWluaXRpYWxTZWFyY2gpIHtcbiAgICB1cGRhdGVSZXBvc2l0b3JpZXMob3duZXIsIHF1ZXJ5KVxuICAgIC50aGVuKCgpPT4gc2V0SW5pdGlhbFNlYXJjaCh0cnVlKSApO1xuICB9XG5cbiAgY29uc3Qgb25Pd25lciA9IChfb3duZXIpID0+IHtcbiAgICBzZXRPd25lcihfb3duZXIpO1xuICAgIHVwZGF0ZVJlcG9zaXRvcmllcyhfb3duZXIsIHF1ZXJ5KTtcbiAgfVxuXG4gIGNvbnN0IG9uUXVlcnkgPSAoX3F1ZXJ5KSA9PiB7XG4gICAgc2V0UXVlcnkoX3F1ZXJ5KTtcbiAgICB1cGRhdGVSZXBvc2l0b3JpZXMob3duZXIsIF9xdWVyeSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbVxuICAgICAgQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtSWNvbn0+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlUmVwb3NpdG9yaWVzKG93bmVyLCBxdWVyeSl9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9J293bmVyJyBsYWJlbD0nT3duZXInIHR5cGU9J3RleHQnXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3duZXJ9ICBhdXRvQ29tcGxldGU9e3VuZGVmaW5lZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtvbk93bmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9J3NlYXJjaCcgbGFiZWw9J1NlYXJjaCcgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeX0gYXV0b0ZvY3VzICBhdXRvQ29tcGxldGU9e3VuZGVmaW5lZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtvblF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvTGlzdEl0ZW0+XG4gICk7XG59XG5cblNlYXJjaEZvcm1Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBQcmVmaWxsIHRoZSBvd25lciBzZWFyY2ggZmllbGQuICovXG4gIGRlZmF1bHRPd25lcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFByZWZpbGwgdGhlIHF1ZXJ5IHNlYXJjaCBmaWVsZC4gKi9cbiAgZGVmYXVsdFF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogRnVuY3Rpb24gdG8gcHJvcG9nYXRlIHRoZSByZXR1cm5lZCByZXBvc2l0b3JpZXMgZGF0YSBhcnJheS4gKi9cbiAgb25SZXBvc2l0b3JpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICBtYXJnaW5MZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGxpc3RJdGVtSWNvbjoge1xuICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgfSxcbiAgZm9ybToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgd2lkdGg6ICc0MCUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpblJpZ2h0OiAnMWVtJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hGb3JtID0gd2l0aFN0eWxlcyhzdHlsZXMpKFNlYXJjaEZvcm1Db21wb25lbnQpO1xuIl19