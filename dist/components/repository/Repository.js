"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repository = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _core2 = require("../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RepositoryComponent(_ref) {
  var classes = _ref.classes,
      url = _ref.url,
      repository = _ref.repository,
      onRepository = _ref.onRepository,
      config = _ref.config;

  var _useState = (0, _react.useState)(repository || {
    owner: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      repo = _useState2[0],
      setRepo = _useState2[1];

  var getData =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _core2.get)({
                url: url,
                config: config
              });

            case 2:
              data = _context.sent;
              setRepo(data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getData() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (Object.keys(repo.owner).length === 0) {
    getData();
  }

  var _onRepository = function _onRepository() {
    var tree_url = (0, _core2.repoTreeUrl)(repo);

    var _repo = _objectSpread({
      tree_url: tree_url
    }, repo);

    onRepository(_repo);
  };

  var owner = repo.owner,
      name = repo.name,
      full_name = repo.full_name,
      description = repo.description,
      html_url = repo.html_url;
  return _react.default.createElement(_core.ListItem, {
    alignItems: "flex-start",
    button: true,
    ContainerComponent: "div",
    onClick: _onRepository
  }, _react.default.createElement(_core.ListItemAvatar, null, _react.default.createElement(_core.Avatar, {
    alt: owner.fullname,
    src: owner.avatar_url,
    className: classes.avatar
  })), _react.default.createElement(_core.ListItemText, {
    primary: full_name || name,
    secondary: description
  }), _react.default.createElement(_core.ListItemSecondaryAction, null, _react.default.createElement(_core.IconButton, {
    "aria-label": "Open Link",
    onClick: function onClick() {
      window.open(html_url, '_blank');
    }
  }, _react.default.createElement(_icons.Code, null))));
}

RepositoryComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Url to get repository data, if repository data is not provided. */
  url: _propTypes.default.string,

  /** Repository data to render, if url not provided. */
  repository: _propTypes.default.shape({
    id: _propTypes.default.number,
    owner: _propTypes.default.object.isRequired,
    name: _propTypes.default.string.isRequired,
    full_name: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    html_url: _propTypes.default.string.isRequired,
    website: _propTypes.default.string.isRequired,
    tree_url: _propTypes.default.string
  }),

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  })
};
var styles = {
  avatar: {
    borderRadius: '20%'
  }
};
var Repository = (0, _styles.withStyles)(styles)(RepositoryComponent);
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5Q29tcG9uZW50IiwiY2xhc3NlcyIsInVybCIsInJlcG9zaXRvcnkiLCJvblJlcG9zaXRvcnkiLCJjb25maWciLCJvd25lciIsInJlcG8iLCJzZXRSZXBvIiwiZ2V0RGF0YSIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiX29uUmVwb3NpdG9yeSIsInRyZWVfdXJsIiwiX3JlcG8iLCJuYW1lIiwiZnVsbF9uYW1lIiwiZGVzY3JpcHRpb24iLCJodG1sX3VybCIsImZ1bGxuYW1lIiwiYXZhdGFyX3VybCIsImF2YXRhciIsIndpbmRvdyIsIm9wZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsInNoYXBlIiwiaWQiLCJudW1iZXIiLCJ3ZWJzaXRlIiwic2VydmVyIiwic3R5bGVzIiwiYm9yZGVyUmFkaXVzIiwiUmVwb3NpdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQVFBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsbUJBQVQsT0FNRztBQUFBLE1BTERDLE9BS0MsUUFMREEsT0FLQztBQUFBLE1BSkRDLEdBSUMsUUFKREEsR0FJQztBQUFBLE1BSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQzs7QUFBQSxrQkFDdUIscUJBQVNGLFVBQVUsSUFBSTtBQUFDRyxJQUFBQSxLQUFLLEVBQUU7QUFBUixHQUF2QixDQUR2QjtBQUFBO0FBQUEsTUFDTUMsSUFETjtBQUFBLE1BQ1lDLE9BRFo7O0FBR0QsTUFBTUMsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFB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RDtBQU8xQk0sSUFBQUEsT0FBTyxFQUFFUixtQkFBVUksTUFBVixDQUFpQkYsVUFQQTtBQVExQmQsSUFBQUEsUUFBUSxFQUFFWSxtQkFBVUk7QUFSTSxHQUFoQixDQVBrQjs7QUFpQjlCO0FBQ0ExQixFQUFBQSxNQUFNLEVBQUVzQixtQkFBVUssS0FBVixDQUFnQjtBQUN0QkksSUFBQUEsTUFBTSxFQUFFVCxtQkFBVUksTUFBVixDQUFpQkY7QUFESCxHQUFoQjtBQWxCc0IsQ0FBaEM7QUF1QkEsSUFBTVEsTUFBTSxHQUFHO0FBQ2JkLEVBQUFBLE1BQU0sRUFBRTtBQUNOZSxJQUFBQSxZQUFZLEVBQUU7QUFEUjtBQURLLENBQWY7QUFNTyxJQUFNQyxVQUFVLEdBQUcsd0JBQVdGLE1BQVgsRUFBbUJyQyxtQkFBbkIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUF2YXRhcixcbiAgTGlzdEl0ZW1UZXh0LFxuICBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbixcbiAgSWNvbkJ1dHRvbixcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29kZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgZ2V0LCByZXBvVHJlZVVybCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5mdW5jdGlvbiBSZXBvc2l0b3J5Q29tcG9uZW50KHtcbiAgY2xhc3NlcyxcbiAgdXJsLFxuICByZXBvc2l0b3J5LFxuICBvblJlcG9zaXRvcnksXG4gIGNvbmZpZyxcbn0pIHtcbiAgY29uc3QgW3JlcG8sIHNldFJlcG9dID0gdXNlU3RhdGUocmVwb3NpdG9yeSB8fCB7b3duZXI6IHt9fSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0KHt1cmwsIGNvbmZpZ30pO1xuICAgIHNldFJlcG8oZGF0YSk7XG4gIH07XG5cbiAgaWYgKE9iamVjdC5rZXlzKHJlcG8ub3duZXIpLmxlbmd0aCA9PT0gMCkge1xuICAgIGdldERhdGEoKTtcbiAgfVxuXG4gIGNvbnN0IF9vblJlcG9zaXRvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgdHJlZV91cmwgPSByZXBvVHJlZVVybChyZXBvKTtcbiAgICBjb25zdCBfcmVwbyA9IHt0cmVlX3VybCwgLi4ucmVwb307XG4gICAgb25SZXBvc2l0b3J5KF9yZXBvKTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgb3duZXIsXG4gICAgbmFtZSxcbiAgICBmdWxsX25hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaHRtbF91cmwsXG4gIH0gPSByZXBvO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RJdGVtXG4gICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICBidXR0b25cbiAgICAgIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiXG4gICAgICBvbkNsaWNrPXtfb25SZXBvc2l0b3J5fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIGFsdD17b3duZXIuZnVsbG5hbWV9XG4gICAgICAgICAgc3JjPXtvd25lci5hdmF0YXJfdXJsfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XG4gICAgICAgIC8+XG4gICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICBwcmltYXJ5PXtmdWxsX25hbWUgfHwgbmFtZX1cbiAgICAgICAgc2Vjb25kYXJ5PXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gTGlua1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oaHRtbF91cmwsJ19ibGFuaycpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29kZSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgIDwvTGlzdEl0ZW0+XG4gICk7XG59XG5cblJlcG9zaXRvcnlDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVwb3NpdG9yeSBpcyBzZWxlY3RlZC4gKi9cbiAgb25SZXBvc2l0b3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogVXJsIHRvIGdldCByZXBvc2l0b3J5IGRhdGEsIGlmIHJlcG9zaXRvcnkgZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFJlcG9zaXRvcnkgZGF0YSB0byByZW5kZXIsIGlmIHVybCBub3QgcHJvdmlkZWQuICovXG4gIHJlcG9zaXRvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3duZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZnVsbF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBodG1sX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdlYnNpdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0cmVlX3VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGF2YXRhcjoge1xuICAgIGJvcmRlclJhZGl1czogJzIwJScsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgUmVwb3NpdG9yeSA9IHdpdGhTdHlsZXMoc3R5bGVzKShSZXBvc2l0b3J5Q29tcG9uZW50KTtcbiJdfQ==