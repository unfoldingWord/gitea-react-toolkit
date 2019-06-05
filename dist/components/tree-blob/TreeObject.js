"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeObject = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _path = _interopRequireDefault(require("path"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A TreeObject Component to render a Git Tree tree object.
 */
function TreeObjectComponent(_ref) {
  var classes = _ref.classes,
      path = _ref.path,
      tree = _ref.tree,
      url = _ref.url,
      selected = _ref.selected,
      pathSelected = _ref.pathSelected,
      onBlob = _ref.onBlob,
      depth = _ref.depth,
      filepath = _ref.filepath;

  var _filepath = _path.default.join(filepath || '', path);

  var icon = selected ? _react.default.createElement(_icons.Folder, null) : _react.default.createElement(_icons.FolderOpen, null);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.ListItem, {
    button: true,
    selected: selected,
    className: classes.root,
    style: {
      paddingLeft: depth + 'em'
    }
  }, _react.default.createElement(_core.ListItemIcon, {
    style: {
      marginRight: 0
    }
  }, icon), _react.default.createElement(_core.ListItemText, {
    className: classes.pathText,
    primary: path + '/'
  })), _react.default.createElement(_.Tree, {
    pathSelected: pathSelected,
    tree: tree,
    url: url,
    selected: selected,
    onBlob: onBlob,
    depth: depth + 1,
    filepath: _filepath
  }));
}

TreeObjectComponent.propTypes = {
  /** @ignore */
  classes: _propTypes.default.object.isRequired,

  /** The filename or path in the Git Tree Object */
  path: _propTypes.default.string.isRequired,

  /** An array of paths from the Gitea file tree api. */
  tree: _propTypes.default.arrayOf(_propTypes.default.shape({
    path: _propTypes.default.string.isRequired,
    type: _propTypes.default.oneOf(['tree', 'blob']).isRequired
  })),

  /** The Url to fetch the listing if listing is not provided. */
  url: _propTypes.default.string,

  /** Set whether or not the File object is currently selected. */
  selected: _propTypes.default.bool,

  /** Set which of the File object is currently selected. */
  pathSelected: _propTypes.default.string,

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** The depth of the path in the tree sets the inset of the component. */
  depth: _propTypes.default.number,

  /** The nested filepath that will concatenate. */
  filepath: _propTypes.default.string
};
TreeObjectComponent.defaultProps = {
  selected: false,
  depth: 1
};

var styles = function styles(theme) {
  return {
    root: {
      paddingRight: '0.7em'
    },
    pathText: {
      paddingLeft: '0.7em'
    }
  };
};

var TreeObject = (0, _styles.withStyles)(styles)(TreeObjectComponent);
exports.TreeObject = TreeObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9UcmVlT2JqZWN0LmpzIl0sIm5hbWVzIjpbIlRyZWVPYmplY3RDb21wb25lbnQiLCJjbGFzc2VzIiwicGF0aCIsInRyZWUiLCJ1cmwiLCJzZWxlY3RlZCIsInBhdGhTZWxlY3RlZCIsIm9uQmxvYiIsImRlcHRoIiwiZmlsZXBhdGgiLCJfZmlsZXBhdGgiLCJQYXRoIiwiam9pbiIsImljb24iLCJyb290IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhdGhUZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsInR5cGUiLCJvbmVPZiIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwic3R5bGVzIiwidGhlbWUiLCJwYWRkaW5nUmlnaHQiLCJUcmVlT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBS0E7Ozs7QUFFQTs7O0FBR0EsU0FBU0EsbUJBQVQsT0FVRztBQUFBLE1BVERDLE9BU0MsUUFUREEsT0FTQztBQUFBLE1BUkRDLElBUUMsUUFSREEsSUFRQztBQUFBLE1BUERDLElBT0MsUUFQREEsSUFPQztBQUFBLE1BTkRDLEdBTUMsUUFOREEsR0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLFlBSUMsUUFKREEsWUFJQztBQUFBLE1BSERDLE1BR0MsUUFIREEsTUFHQztBQUFBLE1BRkRDLEtBRUMsUUFGREEsS0FFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQzs7QUFDRCxNQUFNQyxTQUFTLEdBQUdDLGNBQUtDLElBQUwsQ0FBVUgsUUFBUSxJQUFJLEVBQXRCLEVBQTBCUCxJQUExQixDQUFsQjs7QUFFQSxNQUFNVyxJQUFJLEdBQUdSLFFBQVEsR0FDbkIsNkJBQUMsYUFBRCxPQURtQixHQUVuQiw2QkFBQyxpQkFBRCxPQUZGO0FBSUEsU0FDRSw0REFDRSw2QkFBQyxjQUFEO0FBQ0UsSUFBQSxNQUFNLE1BRFI7QUFFRSxJQUFBLFFBQVEsRUFBRUEsUUFGWjtBQUdFLElBQUEsU0FBUyxFQUFFSixPQUFPLENBQUNhLElBSHJCO0FBSUUsSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsV0FBVyxFQUFFUCxLQUFLLEdBQUc7QUFBdEI7QUFKVCxLQU1FLDZCQUFDLGtCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUU7QUFBRVEsTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBckIsS0FDR0gsSUFESCxDQU5GLEVBU0UsNkJBQUMsa0JBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRVosT0FBTyxDQUFDZ0IsUUFEckI7QUFFRSxJQUFBLE9BQU8sRUFBRWYsSUFBSSxHQUFHO0FBRmxCLElBVEYsQ0FERixFQWVFLDZCQUFDLE1BQUQ7QUFDRSxJQUFBLFlBQVksRUFBRUksWUFEaEI7QUFFRSxJQUFBLElBQUksRUFBRUgsSUFGUjtBQUdFLElBQUEsR0FBRyxFQUFFQyxHQUhQO0FBSUUsSUFBQSxRQUFRLEVBQUVDLFFBSlo7QUFLRSxJQUFBLE1BQU0sRUFBRUUsTUFMVjtBQU1FLElBQUEsS0FBSyxFQUFFQyxLQUFLLEdBQUcsQ0FOakI7QUFPRSxJQUFBLFFBQVEsRUFBRUU7QUFQWixJQWZGLENBREY7QUEyQkQ7O0FBRURWLG1CQUFtQixDQUFDa0IsU0FBcEIsR0FBZ0M7QUFDOUI7QUFDQWpCLEVBQUFBLE9BQU8sRUFBRWtCLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZJOztBQUc5QjtBQUNBbkIsRUFBQUEsSUFBSSxFQUFFaUIsbUJBQVVHLE1BQVYsQ0FBaUJELFVBSk87O0FBSzlCO0FBQ0FsQixFQUFBQSxJQUFJLEVBQUVnQixtQkFBVUksT0FBVixDQUFrQkosbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDdEN0QixJQUFBQSxJQUFJLEVBQUVpQixtQkFBVUcsTUFBVixDQUFpQkQsVUFEZTtBQUV0Q0ksSUFBQUEsSUFBSSxFQUFFTixtQkFBVU8sS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUSxNQUFSLENBQWhCLEVBQWlDTDtBQUZELEdBQWhCLENBQWxCLENBTndCOztBQVU5QjtBQUNBakIsRUFBQUEsR0FBRyxFQUFFZSxtQkFBVUcsTUFYZTs7QUFZOUI7QUFDQWpCLEVBQUFBLFFBQVEsRUFBRWMsbUJBQVVRLElBYlU7O0FBYzlCO0FBQ0FyQixFQUFBQSxZQUFZLEVBQUVhLG1CQUFVRyxNQWZNOztBQWdCOUI7QUFDQWYsRUFBQUEsTUFBTSxFQUFFWSxtQkFBVVMsSUFqQlk7O0FBa0I5QjtBQUNBcEIsRUFBQUEsS0FBSyxFQUFFVyxtQkFBVVUsTUFuQmE7O0FBb0I5QjtBQUNBcEIsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVUc7QUFyQlUsQ0FBaEM7QUF3QkF0QixtQkFBbUIsQ0FBQzhCLFlBQXBCLEdBQW1DO0FBQ2pDekIsRUFBQUEsUUFBUSxFQUFFLEtBRHVCO0FBRWpDRyxFQUFBQSxLQUFLLEVBQUU7QUFGMEIsQ0FBbkM7O0FBS0EsSUFBTXVCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3ZCbEIsSUFBQUEsSUFBSSxFQUFFO0FBQ0ptQixNQUFBQSxZQUFZLEVBQUU7QUFEVixLQURpQjtBQUl2QmhCLElBQUFBLFFBQVEsRUFBRTtBQUNSRixNQUFBQSxXQUFXLEVBQUU7QUFETDtBQUphLEdBQUw7QUFBQSxDQUFwQjs7QUFTTyxJQUFNbUIsVUFBVSxHQUFHLHdCQUFXSCxNQUFYLEVBQW1CL0IsbUJBQW5CLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBGb2xkZXIsXG4gIEZvbGRlck9wZW4sXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IFRyZWUgfSBmcm9tICcuLyc7XG5cbi8qKlxuICogQSBUcmVlT2JqZWN0IENvbXBvbmVudCB0byByZW5kZXIgYSBHaXQgVHJlZSB0cmVlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVHJlZU9iamVjdENvbXBvbmVudCAoe1xuICBjbGFzc2VzLFxuICBwYXRoLFxuICB0cmVlLFxuICB1cmwsXG4gIHNlbGVjdGVkLFxuICBwYXRoU2VsZWN0ZWQsXG4gIG9uQmxvYixcbiAgZGVwdGgsXG4gIGZpbGVwYXRoLFxufSkge1xuICBjb25zdCBfZmlsZXBhdGggPSBQYXRoLmpvaW4oZmlsZXBhdGggfHwgJycsIHBhdGgpO1xuXG4gIGNvbnN0IGljb24gPSBzZWxlY3RlZCA/XG4gICAgPEZvbGRlciAvPiA6XG4gICAgPEZvbGRlck9wZW4gLz47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGJ1dHRvblxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiBkZXB0aCArICdlbSd9fVxuICAgICAgPlxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXRoVGV4dH1cbiAgICAgICAgICBwcmltYXJ5PXtwYXRoICsgJy8nfVxuICAgICAgICAvPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxUcmVlXG4gICAgICAgIHBhdGhTZWxlY3RlZD17cGF0aFNlbGVjdGVkfVxuICAgICAgICB0cmVlPXt0cmVlfVxuICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICBvbkJsb2I9e29uQmxvYn1cbiAgICAgICAgZGVwdGg9e2RlcHRoICsgMX1cbiAgICAgICAgZmlsZXBhdGg9e19maWxlcGF0aH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cblRyZWVPYmplY3RDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKiBUaGUgZmlsZW5hbWUgb3IgcGF0aCBpbiB0aGUgR2l0IFRyZWUgT2JqZWN0ICovXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIEFuIGFycmF5IG9mIHBhdGhzIGZyb20gdGhlIEdpdGVhIGZpbGUgdHJlZSBhcGkuICovXG4gIHRyZWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3RyZWUnLCdibG9iJ10pLmlzUmVxdWlyZWQsXG4gIH0pKSxcbiAgLyoqIFRoZSBVcmwgdG8gZmV0Y2ggdGhlIGxpc3RpbmcgaWYgbGlzdGluZyBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFNldCB3aGV0aGVyIG9yIG5vdCB0aGUgRmlsZSBvYmplY3QgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBTZXQgd2hpY2ggb2YgdGhlIEZpbGUgb2JqZWN0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC4gKi9cbiAgcGF0aFNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogRnVuY3Rpb24gdG8gcHJvcG9nYXRlIHdoZW4gdGhlIEJsb2IgaXMgc2VsZWN0ZWQuICovXG4gIG9uQmxvYjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBUaGUgZGVwdGggb2YgdGhlIHBhdGggaW4gdGhlIHRyZWUgc2V0cyB0aGUgaW5zZXQgb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgZGVwdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiBUaGUgbmVzdGVkIGZpbGVwYXRoIHRoYXQgd2lsbCBjb25jYXRlbmF0ZS4gKi9cbiAgZmlsZXBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UcmVlT2JqZWN0Q29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0ZWQ6IGZhbHNlLFxuICBkZXB0aDogMSxcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nUmlnaHQ6ICcwLjdlbScsXG4gIH0sXG4gIHBhdGhUZXh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6ICcwLjdlbScsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgVHJlZU9iamVjdCA9IHdpdGhTdHlsZXMoc3R5bGVzKShUcmVlT2JqZWN0Q29tcG9uZW50KTtcbiJdfQ==