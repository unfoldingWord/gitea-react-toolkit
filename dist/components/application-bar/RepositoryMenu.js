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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9SZXBvc2l0b3J5TWVudS5qcyJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5TWVudUNvbXBvbmVudCIsImNsYXNzZXMiLCJyZXBvc2l0b3J5Iiwib25SZXBvc2l0b3J5IiwicmVwb3NpdG9yeUNvbmZpZyIsIm1vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVDbG9zZSIsImNsb3NlIiwiaGFuZGxlT3BlbiIsImJ1dHRvbiIsIm93bmVyIiwiYXZhdGFyX3VybCIsIm5hbWUiLCJtb2RhbENvbXBvbmVudCIsIlJlcG9zaXRvcnlDb21wb25lbnQiLCJ3aXRoUmVwb3NpdG9yeSIsInByb3BUeXBlcyIsInN0eWxlcyIsInRoZW1lIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiUmVwb3NpdG9yeU1lbnUiLCJ3aXRoVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsdUJBQVQsT0FLRztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLGdCQUNDLFFBRERBLGdCQUNDOztBQUFBLGtCQUN5QixxQkFBUyxLQUFULENBRHpCO0FBQUE7QUFBQSxNQUNNQyxLQUROO0FBQUEsTUFDYUMsUUFEYjs7QUFHRCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTCxJQUFBQSxVQUFVLENBQUNNLEtBQVg7QUFDQUYsSUFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkgsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBSUksTUFBSjs7QUFDQSxNQUFJUixVQUFVLElBQUlBLFVBQVUsQ0FBQ1MsS0FBN0IsRUFBb0M7QUFDbENELElBQUFBLE1BQU0sR0FDSiw2QkFBQyxVQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUUsNkJBQUMsWUFBRDtBQUFRLFFBQUEsR0FBRyxFQUFFUixVQUFVLENBQUNTLEtBQVgsQ0FBaUJDO0FBQTlCLFFBRFY7QUFFRSxNQUFBLEtBQUssRUFBRVYsVUFBVSxDQUFDVyxJQUZwQjtBQUdFLE1BQUEsUUFBUSxFQUFFTixXQUhaO0FBSUUsTUFBQSxLQUFLLEVBQUM7QUFKUixNQURGO0FBUUQsR0FURCxNQVNPO0FBQ0xHLElBQUFBLE1BQU0sR0FDSiw2QkFBQyxnQkFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFRCxVQURYO0FBRUUsTUFBQSxLQUFLLEVBQUM7QUFGUixPQUlFLDZCQUFDLG1CQUFELE9BSkYsQ0FERjtBQVFEOztBQUVELE1BQUlLLGNBQWMsR0FBRyx5Q0FBckI7O0FBQ0EsTUFBSVQsS0FBSyxJQUFJLENBQUNILFVBQWQsRUFBMEI7QUFDeEIsUUFBTWEsbUJBQW1CLEdBQUcsZ0NBQWUseUNBQWYsQ0FBNUI7QUFDQUQsSUFBQUEsY0FBYyxHQUNaLDZCQUFDLFdBQUQ7QUFBTyxNQUFBLElBQUksRUFBRSxJQUFiO0FBQW1CLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTVIsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBO0FBQTVCLE9BQ0UsNkJBQUMsV0FBRDtBQUFPLE1BQUEsU0FBUyxFQUFFTCxPQUFPLENBQUNJO0FBQTFCLE9BQ0UsNkJBQUMsbUJBQUQ7QUFDRSxNQUFBLFVBQVUsRUFBRUgsVUFEZDtBQUVFLE1BQUEsWUFBWSxFQUFFQyxZQUZoQjtBQUdFLE1BQUEsZ0JBQWdCLEVBQUVDO0FBSHBCLE1BREYsQ0FERixDQURGO0FBV0Q7O0FBRUQsU0FDRSwwQ0FDR00sTUFESCxFQUVHSSxjQUZILENBREY7QUFNRDs7QUFFRCxJQUFJRSw4QkFBa0JBLDJCQUFlQyxTQUFyQyxFQUFnRDtBQUM5Q2pCLEVBQUFBLHVCQUF1QixDQUFDaUIsU0FBeEIscUJBQ0tELDJCQUFlQyxTQURwQjtBQUdEOztBQUVELElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsS0FBSyxFQUFFLE1BREQ7QUFFTkMsTUFBQUEsTUFBTSxFQUFFO0FBRkYsS0FEaUI7QUFLekJqQixJQUFBQSxLQUFLLEVBQUU7QUFDTGtCLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSxLQUZBO0FBR0xDLE1BQUFBLElBQUksRUFBRSxLQUhEO0FBSUxDLE1BQUFBLEtBQUssRUFBRSxLQUpGO0FBS0xDLE1BQUFBLFNBQVMsRUFBRSxLQUxOO0FBTUxDLE1BQUFBLFFBQVEsRUFBRTtBQU5MO0FBTGtCLEdBQVo7QUFBQSxDQUFmOztBQWVPLElBQU1DLGNBQWMsR0FBRyx3QkFBV1gsTUFBWCxFQUFtQjtBQUFFWSxFQUFBQSxTQUFTLEVBQUU7QUFBYixDQUFuQixFQUF3QzlCLHVCQUF4QyxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIEljb25CdXR0b24sXG4gIEF2YXRhcixcbiAgTW9kYWwsXG4gIFBhcGVyLFxuICBDaGlwLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBGb2xkZXJTaGFyZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IHdpdGhSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yeSc7XG5cbmZ1bmN0aW9uIFJlcG9zaXRvcnlNZW51Q29tcG9uZW50KHtcbiAgY2xhc3NlcyxcbiAgcmVwb3NpdG9yeSxcbiAgb25SZXBvc2l0b3J5LFxuICByZXBvc2l0b3J5Q29uZmlnLFxufSkge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICByZXBvc2l0b3J5LmNsb3NlKCk7XG4gICAgc2V0TW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICBzZXRNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIGxldCBidXR0b247XG4gIGlmIChyZXBvc2l0b3J5ICYmIHJlcG9zaXRvcnkub3duZXIpIHtcbiAgICBidXR0b24gPSAoXG4gICAgICA8Q2hpcFxuICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtyZXBvc2l0b3J5Lm93bmVyLmF2YXRhcl91cmx9IC8+fVxuICAgICAgICBsYWJlbD17cmVwb3NpdG9yeS5uYW1lfVxuICAgICAgICBvbkRlbGV0ZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uID0gKFxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbn1cbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgID5cbiAgICAgICAgPEZvbGRlclNoYXJlZCAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBsZXQgbW9kYWxDb21wb25lbnQgPSA8ZGl2IC8+O1xuICBpZiAobW9kYWwgJiYgIXJlcG9zaXRvcnkpIHtcbiAgICBjb25zdCBSZXBvc2l0b3J5Q29tcG9uZW50ID0gd2l0aFJlcG9zaXRvcnkoPGRpdiAvPik7XG4gICAgbW9kYWxDb21wb25lbnQgPSAoXG4gICAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17KCkgPT4gc2V0TW9kYWwoZmFsc2UpfT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XG4gICAgICAgICAgPFJlcG9zaXRvcnlDb21wb25lbnRcbiAgICAgICAgICAgIHJlcG9zaXRvcnk9e3JlcG9zaXRvcnl9XG4gICAgICAgICAgICBvblJlcG9zaXRvcnk9e29uUmVwb3NpdG9yeX1cbiAgICAgICAgICAgIHJlcG9zaXRvcnlDb25maWc9e3JlcG9zaXRvcnlDb25maWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtidXR0b259XG4gICAgICB7bW9kYWxDb21wb25lbnR9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmlmICh3aXRoUmVwb3NpdG9yeSAmJiB3aXRoUmVwb3NpdG9yeS5wcm9wVHlwZXMpIHtcbiAgUmVwb3NpdG9yeU1lbnVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIC4uLndpdGhSZXBvc2l0b3J5LnByb3BUeXBlc1xuICB9O1xufVxuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGF2YXRhcjoge1xuICAgIHdpZHRoOiAnMzVweCcsXG4gICAgaGVpZ2h0OiAnMzVweCcsXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTAlJyxcbiAgICBsZWZ0OiAnMTAlJyxcbiAgICByaWdodDogJzEwJScsXG4gICAgbWF4SGVpZ2h0OiAnODAlJyxcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgUmVwb3NpdG9yeU1lbnUgPSB3aXRoU3R5bGVzKHN0eWxlcywgeyB3aXRoVGhlbWU6IHRydWUgfSkoUmVwb3NpdG9yeU1lbnVDb21wb25lbnQpO1xuIl19