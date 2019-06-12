"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepositoryMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _repository = require("../repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RepositoryMenuComponent(_ref) {
  var classes = _ref.classes,
      authentication = _ref.authentication,
      repository = _ref.repository,
      onRepository = _ref.onRepository,
      repositoryConfig = _ref.repositoryConfig;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var handleClose = function handleClose() {
    repository.close();
    setModal(false);
  };

  var handleOpen = function handleOpen() {
    setModal(true);
  };

  var button;

  if (repository && repository.owner) {
    button = _react.default.createElement(_core.Chip, {
      avatar: _react.default.createElement(_core.Avatar, {
        src: repository.owner.avatar_url
      }),
      label: repository.name,
      onDelete: handleClose,
      color: "primary"
    });
  } else {
    button = _react.default.createElement(_core.IconButton, {
      onClick: handleOpen,
      color: "inherit"
    }, _react.default.createElement(_icons.FolderShared, null));
  }

  var modalComponent = _react.default.createElement("div", null);

  if (modal && !repository) {
    var RepositoryComponent = (0, _repository.withRepository)(_react.default.createElement("div", null));
    modalComponent = _react.default.createElement(_core.Modal, {
      open: true,
      onClose: function onClose() {
        return setModal(false);
      }
    }, _react.default.createElement(_core.Paper, {
      className: classes.modal
    }, _react.default.createElement(RepositoryComponent, {
      authentication: authentication,
      repository: repository,
      onRepository: onRepository,
      repositoryConfig: repositoryConfig
    })));
  }

  return _react.default.createElement("div", null, button, modalComponent);
}

if (_repository.withRepository && _repository.withRepository.propTypes) {
  RepositoryMenuComponent.propTypes = _objectSpread({}, _repository.withRepository.propTypes);
}

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
      right: '10%',
      maxHeight: '80%',
      overflow: 'scroll'
    }
  };
};

var RepositoryMenu = (0, _styles.withStyles)(styles, {
  withTheme: true
})(RepositoryMenuComponent);
exports.RepositoryMenu = RepositoryMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9SZXBvc2l0b3J5TWVudS5qcyJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5TWVudUNvbXBvbmVudCIsImNsYXNzZXMiLCJhdXRoZW50aWNhdGlvbiIsInJlcG9zaXRvcnkiLCJvblJlcG9zaXRvcnkiLCJyZXBvc2l0b3J5Q29uZmlnIiwibW9kYWwiLCJzZXRNb2RhbCIsImhhbmRsZUNsb3NlIiwiY2xvc2UiLCJoYW5kbGVPcGVuIiwiYnV0dG9uIiwib3duZXIiLCJhdmF0YXJfdXJsIiwibmFtZSIsIm1vZGFsQ29tcG9uZW50IiwiUmVwb3NpdG9yeUNvbXBvbmVudCIsIndpdGhSZXBvc2l0b3J5IiwicHJvcFR5cGVzIiwic3R5bGVzIiwidGhlbWUiLCJhdmF0YXIiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJSZXBvc2l0b3J5TWVudSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSx1QkFBVCxPQU1HO0FBQUEsTUFMREMsT0FLQyxRQUxEQSxPQUtDO0FBQUEsTUFKREMsY0FJQyxRQUpEQSxjQUlDO0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsWUFFQyxRQUZEQSxZQUVDO0FBQUEsTUFEREMsZ0JBQ0MsUUFEREEsZ0JBQ0M7O0FBQUEsa0JBQ3lCLHFCQUFTLEtBQVQsQ0FEekI7QUFBQTtBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUdELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJMLElBQUFBLFVBQVUsQ0FBQ00sS0FBWDtBQUNBRixJQUFBQSxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSCxJQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFJSSxNQUFKOztBQUNBLE1BQUlSLFVBQVUsSUFBSUEsVUFBVSxDQUFDUyxLQUE3QixFQUFvQztBQUNsQ0QsSUFBQUEsTUFBTSxHQUNKLDZCQUFDLFVBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRSw2QkFBQyxZQUFEO0FBQVEsUUFBQSxHQUFHLEVBQUVSLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQkM7QUFBOUIsUUFEVjtBQUVFLE1BQUEsS0FBSyxFQUFFVixVQUFVLENBQUNXLElBRnBCO0FBR0UsTUFBQSxRQUFRLEVBQUVOLFdBSFo7QUFJRSxNQUFBLEtBQUssRUFBQztBQUpSLE1BREY7QUFRRCxHQVRELE1BU087QUFDTEcsSUFBQUEsTUFBTSxHQUNKLDZCQUFDLGdCQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUVELFVBRFg7QUFFRSxNQUFBLEtBQUssRUFBQztBQUZSLE9BSUUsNkJBQUMsbUJBQUQsT0FKRixDQURGO0FBUUQ7O0FBRUQsTUFBSUssY0FBYyxHQUFHLHlDQUFyQjs7QUFDQSxNQUFJVCxLQUFLLElBQUksQ0FBQ0gsVUFBZCxFQUEwQjtBQUN4QixRQUFNYSxtQkFBbUIsR0FBRyxnQ0FBZSx5Q0FBZixDQUE1QjtBQUNBRCxJQUFBQSxjQUFjLEdBQ1osNkJBQUMsV0FBRDtBQUFPLE1BQUEsSUFBSSxFQUFFLElBQWI7QUFBbUIsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNUixRQUFRLENBQUMsS0FBRCxDQUFkO0FBQUE7QUFBNUIsT0FDRSw2QkFBQyxXQUFEO0FBQU8sTUFBQSxTQUFTLEVBQUVOLE9BQU8sQ0FBQ0s7QUFBMUIsT0FDRSw2QkFBQyxtQkFBRDtBQUNFLE1BQUEsY0FBYyxFQUFFSixjQURsQjtBQUVFLE1BQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsTUFBQSxZQUFZLEVBQUVDLFlBSGhCO0FBSUUsTUFBQSxnQkFBZ0IsRUFBRUM7QUFKcEIsTUFERixDQURGLENBREY7QUFZRDs7QUFFRCxTQUNFLDBDQUNHTSxNQURILEVBRUdJLGNBRkgsQ0FERjtBQU1EOztBQUVELElBQUlFLDhCQUFrQkEsMkJBQWVDLFNBQXJDLEVBQWdEO0FBQzlDbEIsRUFBQUEsdUJBQXVCLENBQUNrQixTQUF4QixxQkFDS0QsMkJBQWVDLFNBRHBCO0FBR0Q7O0FBRUQsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsTUFERDtBQUVOQyxNQUFBQSxNQUFNLEVBQUU7QUFGRixLQURpQjtBQUt6QmpCLElBQUFBLEtBQUssRUFBRTtBQUNMa0IsTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLEtBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLEtBSEQ7QUFJTEMsTUFBQUEsS0FBSyxFQUFFLEtBSkY7QUFLTEMsTUFBQUEsU0FBUyxFQUFFLEtBTE47QUFNTEMsTUFBQUEsUUFBUSxFQUFFO0FBTkw7QUFMa0IsR0FBWjtBQUFBLENBQWY7O0FBZU8sSUFBTUMsY0FBYyxHQUFHLHdCQUFXWCxNQUFYLEVBQW1CO0FBQUVZLEVBQUFBLFNBQVMsRUFBRTtBQUFiLENBQW5CLEVBQXdDL0IsdUJBQXhDLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgSWNvbkJ1dHRvbixcbiAgQXZhdGFyLFxuICBNb2RhbCxcbiAgUGFwZXIsXG4gIENoaXAsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIEZvbGRlclNoYXJlZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgd2l0aFJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3J5JztcblxuZnVuY3Rpb24gUmVwb3NpdG9yeU1lbnVDb21wb25lbnQoe1xuICBjbGFzc2VzLFxuICBhdXRoZW50aWNhdGlvbixcbiAgcmVwb3NpdG9yeSxcbiAgb25SZXBvc2l0b3J5LFxuICByZXBvc2l0b3J5Q29uZmlnLFxufSkge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICByZXBvc2l0b3J5LmNsb3NlKCk7XG4gICAgc2V0TW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICBzZXRNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIGxldCBidXR0b247XG4gIGlmIChyZXBvc2l0b3J5ICYmIHJlcG9zaXRvcnkub3duZXIpIHtcbiAgICBidXR0b24gPSAoXG4gICAgICA8Q2hpcFxuICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtyZXBvc2l0b3J5Lm93bmVyLmF2YXRhcl91cmx9IC8+fVxuICAgICAgICBsYWJlbD17cmVwb3NpdG9yeS5uYW1lfVxuICAgICAgICBvbkRlbGV0ZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uID0gKFxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbn1cbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgID5cbiAgICAgICAgPEZvbGRlclNoYXJlZCAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBsZXQgbW9kYWxDb21wb25lbnQgPSA8ZGl2IC8+O1xuICBpZiAobW9kYWwgJiYgIXJlcG9zaXRvcnkpIHtcbiAgICBjb25zdCBSZXBvc2l0b3J5Q29tcG9uZW50ID0gd2l0aFJlcG9zaXRvcnkoPGRpdiAvPik7XG4gICAgbW9kYWxDb21wb25lbnQgPSAoXG4gICAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17KCkgPT4gc2V0TW9kYWwoZmFsc2UpfT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XG4gICAgICAgICAgPFJlcG9zaXRvcnlDb21wb25lbnRcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uPXthdXRoZW50aWNhdGlvbn1cbiAgICAgICAgICAgIHJlcG9zaXRvcnk9e3JlcG9zaXRvcnl9XG4gICAgICAgICAgICBvblJlcG9zaXRvcnk9e29uUmVwb3NpdG9yeX1cbiAgICAgICAgICAgIHJlcG9zaXRvcnlDb25maWc9e3JlcG9zaXRvcnlDb25maWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtidXR0b259XG4gICAgICB7bW9kYWxDb21wb25lbnR9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmlmICh3aXRoUmVwb3NpdG9yeSAmJiB3aXRoUmVwb3NpdG9yeS5wcm9wVHlwZXMpIHtcbiAgUmVwb3NpdG9yeU1lbnVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIC4uLndpdGhSZXBvc2l0b3J5LnByb3BUeXBlc1xuICB9O1xufVxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGF2YXRhcjoge1xuICAgIHdpZHRoOiAnMzVweCcsXG4gICAgaGVpZ2h0OiAnMzVweCcsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTAlJyxcbiAgICBsZWZ0OiAnMTAlJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgbWF4SGVpZ2h0OiAnODAlJyxcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgUmVwb3NpdG9yeU1lbnUgPSB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoUmVwb3NpdG9yeU1lbnVDb21wb25lbnQpO1xuIl19