"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepositoryFormMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RepositoryFormMenuComponent(_ref) {
  var classes = _ref.classes,
      authentication = _ref.authentication,
      repository = _ref.repository,
      onRepository = _ref.onRepository;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var button = _react.default.createElement(_core.IconButton, {
    color: "inherit",
    onClick: function onClick() {
      setModal(true);
    }
  }, _react.default.createElement(_icons.FolderShared, null));

  var modalComponent = _react.default.createElement("div", null);

  if (modal) {
    modalComponent = _react.default.createElement(_core.Modal, {
      open: true,
      onClose: function onClose() {
        setModal(false);
      }
    }, _react.default.createElement(_core.Paper, {
      className: classes.modal
    }, _react.default.createElement(_.RepositoryForm, {
      authentication: authentication,
      repository: repository,
      onRepository: onRepository
    })));
  }

  return _react.default.createElement(_react.default.Fragment, null, button, modalComponent);
}

RepositoryFormMenuComponent.propTypes = {};

var styles = function styles(theme) {
  return {
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

var RepositoryFormMenu = (0, _styles.withStyles)(styles, {
  withTheme: true
})(RepositoryFormMenuComponent);
exports.RepositoryFormMenu = RepositoryFormMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9SZXBvc2l0b3J5Rm9ybU1lbnUuanMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeUZvcm1NZW51Q29tcG9uZW50IiwiY2xhc3NlcyIsImF1dGhlbnRpY2F0aW9uIiwicmVwb3NpdG9yeSIsIm9uUmVwb3NpdG9yeSIsIm1vZGFsIiwic2V0TW9kYWwiLCJidXR0b24iLCJtb2RhbENvbXBvbmVudCIsInByb3BUeXBlcyIsInN0eWxlcyIsInRoZW1lIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIlJlcG9zaXRvcnlGb3JtTWVudSIsIndpdGhUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOztBQUlBOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLDJCQUFULE9BS0c7QUFBQSxNQUpEQyxPQUlDLFFBSkRBLE9BSUM7QUFBQSxNQUhEQyxjQUdDLFFBSERBLGNBR0M7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBQUEsa0JBQ3lCLHFCQUFTLEtBQVQsQ0FEekI7QUFBQTtBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUdELE1BQU1DLE1BQU0sR0FDViw2QkFBQyxnQkFBRDtBQUFZLElBQUEsS0FBSyxFQUFDLFNBQWxCO0FBQTRCLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQUVELE1BQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFBaUI7QUFBOUQsS0FDRSw2QkFBQyxtQkFBRCxPQURGLENBREY7O0FBTUEsTUFBSUUsY0FBYyxHQUFHLHlDQUFyQjs7QUFDQSxNQUFJSCxLQUFKLEVBQVc7QUFDVEcsSUFBQUEsY0FBYyxHQUNaLDZCQUFDLFdBQUQ7QUFBTyxNQUFBLElBQUksRUFBRSxJQUFiO0FBQW1CLE1BQUEsT0FBTyxFQUFFLG1CQUFNO0FBQUVGLFFBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFBa0I7QUFBdEQsT0FDRSw2QkFBQyxXQUFEO0FBQU8sTUFBQSxTQUFTLEVBQUVMLE9BQU8sQ0FBQ0k7QUFBMUIsT0FDRSw2QkFBQyxnQkFBRDtBQUNFLE1BQUEsY0FBYyxFQUFFSCxjQURsQjtBQUVFLE1BQUEsVUFBVSxFQUFFQyxVQUZkO0FBR0UsTUFBQSxZQUFZLEVBQUVDO0FBSGhCLE1BREYsQ0FERixDQURGO0FBV0Q7O0FBRUQsU0FDRSw0REFBR0csTUFBSCxFQUFXQyxjQUFYLENBREY7QUFHRDs7QUFFRFIsMkJBQTJCLENBQUNTLFNBQTVCLEdBQXdDLEVBQXhDOztBQUdBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCTixJQUFBQSxLQUFLLEVBQUU7QUFDTE8sTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLEtBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLEtBSEQ7QUFJTEMsTUFBQUEsS0FBSyxFQUFFLEtBSkY7QUFLTEMsTUFBQUEsU0FBUyxFQUFFLEtBTE47QUFNTEMsTUFBQUEsUUFBUSxFQUFFO0FBTkw7QUFEa0IsR0FBWjtBQUFBLENBQWY7O0FBV08sSUFBTUMsa0JBQWtCLEdBQUcsd0JBQVdSLE1BQVgsRUFBbUI7QUFBRVMsRUFBQUEsU0FBUyxFQUFFO0FBQWIsQ0FBbkIsRUFBd0NuQiwyQkFBeEMsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBNb2RhbCxcbiAgUGFwZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIEZvbGRlclNoYXJlZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgUmVwb3NpdG9yeUZvcm0gfSBmcm9tICcuLyc7XG5cbmZ1bmN0aW9uIFJlcG9zaXRvcnlGb3JtTWVudUNvbXBvbmVudCh7XG4gIGNsYXNzZXMsXG4gIGF1dGhlbnRpY2F0aW9uLFxuICByZXBvc2l0b3J5LFxuICBvblJlcG9zaXRvcnksXG59KSB7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IChcbiAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKSA9PiB7IHNldE1vZGFsKHRydWUpOyB9fT5cbiAgICAgIDxGb2xkZXJTaGFyZWQgLz5cbiAgICA8L0ljb25CdXR0b24+XG4gICk7XG5cbiAgbGV0IG1vZGFsQ29tcG9uZW50ID0gPGRpdiAvPjtcbiAgaWYgKG1vZGFsKSB7XG4gICAgbW9kYWxDb21wb25lbnQgPSAoXG4gICAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17KCkgPT4geyBzZXRNb2RhbChmYWxzZSk7IH19PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cbiAgICAgICAgICA8UmVwb3NpdG9yeUZvcm1cbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uPXthdXRoZW50aWNhdGlvbn1cbiAgICAgICAgICAgIHJlcG9zaXRvcnk9e3JlcG9zaXRvcnl9XG4gICAgICAgICAgICBvblJlcG9zaXRvcnk9e29uUmVwb3NpdG9yeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PntidXR0b259e21vZGFsQ29tcG9uZW50fTwvPlxuICApO1xufVxuXG5SZXBvc2l0b3J5Rm9ybU1lbnVDb21wb25lbnQucHJvcFR5cGVzID0ge1xufTtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBtb2RhbDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwJScsXG4gICAgbGVmdDogJzEwJScsXG4gICAgcmlnaHQ6ICcxMCUnLFxuICAgIG1heEhlaWdodDogJzgwJScsXG4gICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFJlcG9zaXRvcnlGb3JtTWVudSA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShSZXBvc2l0b3J5Rm9ybU1lbnVDb21wb25lbnQpO1xuIl19