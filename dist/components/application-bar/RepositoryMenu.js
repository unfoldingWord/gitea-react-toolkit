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

var _ = require("../");

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
    var RepositoryComponent = (0, _.withRepository)(_react.default.createElement("div", null));
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

RepositoryMenuComponent.propTypes = _objectSpread({}, _.withRepository.propTypes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9SZXBvc2l0b3J5TWVudS5qcyJdLCJuYW1lcyI6WyJSZXBvc2l0b3J5TWVudUNvbXBvbmVudCIsImNsYXNzZXMiLCJyZXBvc2l0b3J5Iiwib25SZXBvc2l0b3J5IiwicmVwb3NpdG9yeUNvbmZpZyIsIm1vZGFsIiwic2V0TW9kYWwiLCJoYW5kbGVDbG9zZSIsImNsb3NlIiwiaGFuZGxlT3BlbiIsImJ1dHRvbiIsIm93bmVyIiwiYXZhdGFyX3VybCIsIm5hbWUiLCJtb2RhbENvbXBvbmVudCIsIlJlcG9zaXRvcnlDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJ3aXRoUmVwb3NpdG9yeSIsInN0eWxlcyIsInRoZW1lIiwiYXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiUmVwb3NpdG9yeU1lbnUiLCJ3aXRoVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsdUJBQVQsT0FLRztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLGdCQUNDLFFBRERBLGdCQUNDOztBQUFBLGtCQUN5QixxQkFBUyxLQUFULENBRHpCO0FBQUE7QUFBQSxNQUNNQyxLQUROO0FBQUEsTUFDYUMsUUFEYjs7QUFHRCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTCxJQUFBQSxVQUFVLENBQUNNLEtBQVg7QUFDQUYsSUFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkgsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBSUksTUFBSjs7QUFDQSxNQUFJUixVQUFVLElBQUlBLFVBQVUsQ0FBQ1MsS0FBN0IsRUFBb0M7QUFDbENELElBQUFBLE1BQU0sR0FDSiw2QkFBQyxVQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUUsNkJBQUMsWUFBRDtBQUFRLFFBQUEsR0FBRyxFQUFFUixVQUFVLENBQUNTLEtBQVgsQ0FBaUJDO0FBQTlCLFFBRFY7QUFFRSxNQUFBLEtBQUssRUFBRVYsVUFBVSxDQUFDVyxJQUZwQjtBQUdFLE1BQUEsUUFBUSxFQUFFTixXQUhaO0FBSUUsTUFBQSxLQUFLLEVBQUM7QUFKUixNQURGO0FBUUQsR0FURCxNQVNPO0FBQ0xHLElBQUFBLE1BQU0sR0FDSiw2QkFBQyxnQkFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFRCxVQURYO0FBRUUsTUFBQSxLQUFLLEVBQUM7QUFGUixPQUlFLDZCQUFDLG1CQUFELE9BSkYsQ0FERjtBQVFEOztBQUVELE1BQUlLLGNBQWMsR0FBRyx5Q0FBckI7O0FBQ0EsTUFBSVQsS0FBSyxJQUFJLENBQUNILFVBQWQsRUFBMEI7QUFDeEIsUUFBTWEsbUJBQW1CLEdBQUcsc0JBQWUseUNBQWYsQ0FBNUI7QUFDQUQsSUFBQUEsY0FBYyxHQUNaLDZCQUFDLFdBQUQ7QUFBTyxNQUFBLElBQUksRUFBRSxJQUFiO0FBQW1CLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTVIsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBO0FBQTVCLE9BQ0UsNkJBQUMsV0FBRDtBQUFPLE1BQUEsU0FBUyxFQUFFTCxPQUFPLENBQUNJO0FBQTFCLE9BQ0UsNkJBQUMsbUJBQUQ7QUFDRSxNQUFBLFVBQVUsRUFBRUgsVUFEZDtBQUVFLE1BQUEsWUFBWSxFQUFFQyxZQUZoQjtBQUdFLE1BQUEsZ0JBQWdCLEVBQUVDO0FBSHBCLE1BREYsQ0FERixDQURGO0FBV0Q7O0FBRUQsU0FDRSwwQ0FDR00sTUFESCxFQUVHSSxjQUZILENBREY7QUFNRDs7QUFFRGQsdUJBQXVCLENBQUNnQixTQUF4QixxQkFDS0MsaUJBQWVELFNBRHBCOztBQUlBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsS0FBSyxFQUFFLE1BREQ7QUFFTkMsTUFBQUEsTUFBTSxFQUFFO0FBRkYsS0FEaUI7QUFLekJqQixJQUFBQSxLQUFLLEVBQUU7QUFDTGtCLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSxLQUZBO0FBR0xDLE1BQUFBLElBQUksRUFBRSxLQUhEO0FBSUxDLE1BQUFBLEtBQUssRUFBRSxLQUpGO0FBS0xDLE1BQUFBLFNBQVMsRUFBRSxLQUxOO0FBTUxDLE1BQUFBLFFBQVEsRUFBRTtBQU5MO0FBTGtCLEdBQVo7QUFBQSxDQUFmOztBQWVPLElBQU1DLGNBQWMsR0FBRyx3QkFBV1gsTUFBWCxFQUFtQjtBQUFFWSxFQUFBQSxTQUFTLEVBQUU7QUFBYixDQUFuQixFQUF3QzlCLHVCQUF4QyxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIEljb25CdXR0b24sXG4gIEF2YXRhcixcbiAgTW9kYWwsXG4gIFBhcGVyLFxuICBDaGlwLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBGb2xkZXJTaGFyZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IHdpdGhSZXBvc2l0b3J5IH0gZnJvbSAnLi4vJztcblxuZnVuY3Rpb24gUmVwb3NpdG9yeU1lbnVDb21wb25lbnQoe1xuICBjbGFzc2VzLFxuICByZXBvc2l0b3J5LFxuICBvblJlcG9zaXRvcnksXG4gIHJlcG9zaXRvcnlDb25maWcsXG59KSB7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHJlcG9zaXRvcnkuY2xvc2UoKTtcbiAgICBzZXRNb2RhbChmYWxzZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE1vZGFsKHRydWUpO1xuICB9XG5cbiAgbGV0IGJ1dHRvbjtcbiAgaWYgKHJlcG9zaXRvcnkgJiYgcmVwb3NpdG9yeS5vd25lcikge1xuICAgIGJ1dHRvbiA9IChcbiAgICAgIDxDaGlwXG4gICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e3JlcG9zaXRvcnkub3duZXIuYXZhdGFyX3VybH0gLz59XG4gICAgICAgIGxhYmVsPXtyZXBvc2l0b3J5Lm5hbWV9XG4gICAgICAgIG9uRGVsZXRlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b24gPSAoXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVufVxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgPlxuICAgICAgICA8Rm9sZGVyU2hhcmVkIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGxldCBtb2RhbENvbXBvbmVudCA9IDxkaXYgLz47XG4gIGlmIChtb2RhbCAmJiAhcmVwb3NpdG9yeSkge1xuICAgIGNvbnN0IFJlcG9zaXRvcnlDb21wb25lbnQgPSB3aXRoUmVwb3NpdG9yeSg8ZGl2IC8+KTtcbiAgICBtb2RhbENvbXBvbmVudCA9IChcbiAgICAgIDxNb2RhbCBvcGVuPXt0cnVlfSBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cbiAgICAgICAgICA8UmVwb3NpdG9yeUNvbXBvbmVudFxuICAgICAgICAgICAgcmVwb3NpdG9yeT17cmVwb3NpdG9yeX1cbiAgICAgICAgICAgIG9uUmVwb3NpdG9yeT17b25SZXBvc2l0b3J5fVxuICAgICAgICAgICAgcmVwb3NpdG9yeUNvbmZpZz17cmVwb3NpdG9yeUNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2J1dHRvbn1cbiAgICAgIHttb2RhbENvbXBvbmVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVwb3NpdG9yeU1lbnVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAuLi53aXRoUmVwb3NpdG9yeS5wcm9wVHlwZXNcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgYXZhdGFyOiB7XG4gICAgd2lkdGg6ICczNXB4JyxcbiAgICBoZWlnaHQ6ICczNXB4JyxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMCUnLFxuICAgIGxlZnQ6ICcxMCUnLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICBtYXhIZWlnaHQ6ICc4MCUnLFxuICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBSZXBvc2l0b3J5TWVudSA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShSZXBvc2l0b3J5TWVudUNvbXBvbmVudCk7XG4iXX0=