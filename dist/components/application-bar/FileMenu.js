"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _repository = require("../repository");

var _treeBlob = require("../tree-blob");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FileMenuComponent(_ref) {
  var blob = _ref.blob;
  return _react.default.createElement(_core.List, {
    dense: true
  }, _react.default.createElement(_core.ListItem, {
    alignItems: "flex-start",
    ContainerComponent: "div",
    button: true
  }, _react.default.createElement(_core.ListItemIcon, {
    style: {
      marginRight: 0
    }
  }, _react.default.createElement(_icons.Note, null)), _react.default.createElement(_core.ListItemText, {
    primary: blob.filepath,
    secondary: (0, _helpers.humanFileSize)(blob.size)
  }), _react.default.createElement(_core.ListItemSecondaryAction, null, _react.default.createElement(_core.IconButton, {
    "aria-label": "Open Link",
    onClick: function onClick() {
      blob.close();
    }
  }, _react.default.createElement(_icons.Cancel, null)))));
}

FileMenuComponent.propTypes = {
  /** Blob data to render, if url not provided. */
  blob: _propTypes.default.shape({
    /** The filepath in the Git Tree Blob Object */
    path: _propTypes.default.string.isRequired,

    /** The url in the Git Tree Blob Object */
    url: _propTypes.default.string,

    /** The content size of the Git Tree Blob Object */
    size: _propTypes.default.number
  })
};
var FileMenu = (0, _repository.withRepository)((0, _treeBlob.withBlob)(FileMenuComponent));
exports.FileMenu = FileMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9GaWxlTWVudS5qcyJdLCJuYW1lcyI6WyJGaWxlTWVudUNvbXBvbmVudCIsImJsb2IiLCJtYXJnaW5SaWdodCIsImZpbGVwYXRoIiwic2l6ZSIsImNsb3NlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJwYXRoIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInVybCIsIm51bWJlciIsIkZpbGVNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBUUE7O0FBS0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxTQUFTQSxpQkFBVCxPQUVHO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQ0QsU0FDRSw2QkFBQyxVQUFEO0FBQU0sSUFBQSxLQUFLO0FBQVgsS0FDRSw2QkFBQyxjQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUMsWUFEYjtBQUVFLElBQUEsa0JBQWtCLEVBQUMsS0FGckI7QUFHRSxJQUFBLE1BQU07QUFIUixLQUtFLDZCQUFDLGtCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBckIsS0FDRSw2QkFBQyxXQUFELE9BREYsQ0FMRixFQVFFLDZCQUFDLGtCQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUVELElBQUksQ0FBQ0UsUUFEaEI7QUFFRSxJQUFBLFNBQVMsRUFBRSw0QkFBY0YsSUFBSSxDQUFDRyxJQUFuQjtBQUZiLElBUkYsRUFZRSw2QkFBQyw2QkFBRCxRQUNFLDZCQUFDLGdCQUFEO0FBQ0Usa0JBQVcsV0FEYjtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JILE1BQUFBLElBQUksQ0FBQ0ksS0FBTDtBQUNEO0FBSkgsS0FNRSw2QkFBQyxhQUFELE9BTkYsQ0FERixDQVpGLENBREYsQ0FERjtBQTJCRDs7QUFFREwsaUJBQWlCLENBQUNNLFNBQWxCLEdBQThCO0FBQzVCO0FBQ0FMLEVBQUFBLElBQUksRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDcEI7QUFDQUMsSUFBQUEsSUFBSSxFQUFFRixtQkFBVUcsTUFBVixDQUFpQkMsVUFGSDs7QUFHcEI7QUFDQUMsSUFBQUEsR0FBRyxFQUFFTCxtQkFBVUcsTUFKSzs7QUFLcEI7QUFDQU4sSUFBQUEsSUFBSSxFQUFFRyxtQkFBVU07QUFOSSxHQUFoQjtBQUZzQixDQUE5QjtBQVlPLElBQU1DLFFBQVEsR0FBRyxnQ0FBZSx3QkFBU2QsaUJBQVQsQ0FBZixDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgSWNvbkJ1dHRvbixcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxuICBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbixcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgTm90ZSxcbiAgQ2FuY2VsLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgeyB3aXRoUmVwb3NpdG9yeSB9IGZyb20gJy4uL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgd2l0aEJsb2IgfSBmcm9tICcuLi90cmVlLWJsb2InO1xuXG5pbXBvcnQgeyBodW1hbkZpbGVTaXplIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gRmlsZU1lbnVDb21wb25lbnQoe1xuICBibG9iLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxMaXN0IGRlbnNlPlxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgYnV0dG9uXG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgPE5vdGUgLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICBwcmltYXJ5PXtibG9iLmZpbGVwYXRofVxuICAgICAgICAgIHNlY29uZGFyeT17aHVtYW5GaWxlU2l6ZShibG9iLnNpemUpfVxuICAgICAgICAvPlxuICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIExpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBibG9iLmNsb3NlKClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhbmNlbCAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5GaWxlTWVudUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBCbG9iIGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICBibG9iOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBUaGUgZmlsZXBhdGggaW4gdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIC8qKiBUaGUgdXJsIGluIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlIGNvbnRlbnQgc2l6ZSBvZiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn1cblxuZXhwb3J0IGNvbnN0IEZpbGVNZW51ID0gd2l0aFJlcG9zaXRvcnkod2l0aEJsb2IoRmlsZU1lbnVDb21wb25lbnQpKTtcbiJdfQ==