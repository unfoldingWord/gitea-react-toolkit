"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFile = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function withFileComponent(Component) {
  function FileComponent(props) {
    var authentication = props.authentication,
        repository = props.repository,
        blob = props.blob,
        file = props.file,
        onFile = props.onFile,
        fileConfig = props.fileConfig;

    var _useState = (0, _react.useState)(file),
        _useState2 = _slicedToArray(_useState, 2),
        _file = _useState2[0],
        setFile = _useState2[1];

    var _useState3 = (0, _react.useState)(),
        _useState4 = _slicedToArray(_useState3, 2),
        deleted = _useState4[0],
        setDeleted = _useState4[1];

    var hasFile = function hasFile() {
      return !!_file;
    };

    var filepath, defaultContent;

    if (fileConfig) {
      filepath = fileConfig.filepath;
      defaultContent = fileConfig.defaultContent;
    }

    if (blob) {
      filepath = blob.filepath;
    }

    var updateFile = function updateFile(__file) {
      if (onFile) onFile(__file);else setFile(__file);
    };

    var populateFile =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var __file, _content;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _helpers.ensureFile)({
                  filepath: filepath,
                  defaultContent: defaultContent,
                  authentication: authentication,
                  config: fileConfig,
                  repository: repository
                });

              case 2:
                __file = _context3.sent;
                _context3.next = 5;
                return (0, _helpers.getContent)({
                  file: __file
                });

              case 5:
                _content = _context3.sent;

                __file.close = function () {
                  updateFile();
                  if (fileConfig.updateBlob) fileConfig.updateBlob();
                };

                __file.content = _content;
                __file.filepath = __file.path;

                if (repository.permissions.push) {
                  __file.saveContent =
                  /*#__PURE__*/
                  function () {
                    var _ref2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(content) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return (0, _helpers.saveContent)({
                                content: content,
                                authentication: authentication,
                                repository: repository,
                                file: __file
                              });

                            case 2:
                              populateFile();

                            case 3:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }();

                  __file.dangerouslyDelete =
                  /*#__PURE__*/
                  _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2() {
                    var _deleted;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return (0, _helpers.deleteFile)({
                              authentication: authentication,
                              repository: repository,
                              file: __file
                            });

                          case 2:
                            _deleted = _context2.sent;

                            if (_deleted) {
                              setDeleted(true);
                              updateFile();
                              if (fileConfig.updateBlob) fileConfig.updateBlob();
                            }

                            return _context2.abrupt("return", deleted);

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));
                }

                updateFile(__file);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function populateFile() {
        return _ref.apply(this, arguments);
      };
    }();

    if (!hasFile() && filepath && !deleted) populateFile();

    var component = _react.default.createElement("div", null);

    if (hasFile()) {
      component = _react.default.createElement(Component, _extends({}, props, {
        file: _file
      }));
    }

    return component;
  }

  FileComponent.propTypes = {
    /** The full filepath for the file. */
    filepath: _propTypes.default.string,

    /** Pass a previously returned file object to bypass the selection. */
    file: _propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      path: _propTypes.default.string.isRequired,
      sha: _propTypes.default.string.isRequired,
      download_url: _propTypes.default.string.isRequired,
      content: _propTypes.default.string.isRequired
    }),

    /** Function to propogate when the Blob is selected. */
    onFile: _propTypes.default.func,

    /** Pass a blob object. */
    blob: _propTypes.default.shape({
      /** The full filepath generated in the Tree/Blob Object */
      filepath: _propTypes.default.string.isRequired
    }),

    /** Function to propogate when the Blob is selected. */
    onEdit: _propTypes.default.func,

    /** Authentication object returned from a successful withAuthentication login. */
    authentication: _propTypes.default.shape({
      config: _propTypes.default.shape({
        server: _propTypes.default.string.isRequired,
        headers: _propTypes.default.shape({
          Authorization: _propTypes.default.string.isRequired
        }).isRequired
      }).isRequired,
      user: _propTypes.default.shape({
        username: _propTypes.default.string.isRequired,
        email: _propTypes.default.string.isRequired
      }).isRequired
    }),

    /** Repository tree_url can be used in place of blobConfig */
    repository: _propTypes.default.shape({
      owner: _propTypes.default.shape({
        username: _propTypes.default.string.isRequired
      }),
      name: _propTypes.default.string.isRequired
    }).isRequired
  };
  return FileComponent;
}

var withFile = withFileComponent;
exports.withFile = withFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvd2l0aEZpbGUuanMiXSwibmFtZXMiOlsid2l0aEZpbGVDb21wb25lbnQiLCJDb21wb25lbnQiLCJGaWxlQ29tcG9uZW50IiwicHJvcHMiLCJhdXRoZW50aWNhdGlvbiIsInJlcG9zaXRvcnkiLCJibG9iIiwiZmlsZSIsIm9uRmlsZSIsImZpbGVDb25maWciLCJfZmlsZSIsInNldEZpbGUiLCJkZWxldGVkIiwic2V0RGVsZXRlZCIsImhhc0ZpbGUiLCJmaWxlcGF0aCIsImRlZmF1bHRDb250ZW50IiwidXBkYXRlRmlsZSIsIl9fZmlsZSIsInBvcHVsYXRlRmlsZSIsImNvbmZpZyIsIl9jb250ZW50IiwiY2xvc2UiLCJ1cGRhdGVCbG9iIiwiY29udGVudCIsInBhdGgiLCJwZXJtaXNzaW9ucyIsInB1c2giLCJzYXZlQ29udGVudCIsImRhbmdlcm91c2x5RGVsZXRlIiwiX2RlbGV0ZWQiLCJjb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJzaGFwZSIsIm5hbWUiLCJpc1JlcXVpcmVkIiwic2hhIiwiZG93bmxvYWRfdXJsIiwiZnVuYyIsIm9uRWRpdCIsInNlcnZlciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJvd25lciIsIndpdGhGaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMkJDLFNBQTNCLEVBQXNDO0FBQ3BDLFdBQVNDLGFBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUEsUUFFM0JDLGNBRjJCLEdBUXpCRCxLQVJ5QixDQUUzQkMsY0FGMkI7QUFBQSxRQUczQkMsVUFIMkIsR0FRekJGLEtBUnlCLENBRzNCRSxVQUgyQjtBQUFBLFFBSTNCQyxJQUoyQixHQVF6QkgsS0FSeUIsQ0FJM0JHLElBSjJCO0FBQUEsUUFLM0JD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RCxNQUFBQSxJQUFJLEVBQUVILG1CQUFVQyxNQUFWLENBQWlCRztBQUpHLEtBQWhCLEVBS1RBO0FBdkNxQixHQUExQjtBQTBDQSxTQUFPbkMsYUFBUDtBQUNEOztBQUVNLElBQU0rQyxRQUFRLEdBQUdqRCxpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdldENvbnRlbnQsIHNhdmVDb250ZW50LCBlbnN1cmVGaWxlLCBkZWxldGVGaWxlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZnVuY3Rpb24gd2l0aEZpbGVDb21wb25lbnQoQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIEZpbGVDb21wb25lbnQgKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0aGVudGljYXRpb24sXG4gICAgICByZXBvc2l0b3J5LFxuICAgICAgYmxvYixcbiAgICAgIGZpbGUsXG4gICAgICBvbkZpbGUsXG4gICAgICBmaWxlQ29uZmlnLFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IFtfZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShmaWxlKTtcbiAgICBjb25zdCBbZGVsZXRlZCwgc2V0RGVsZXRlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgaGFzRmlsZSA9ICgpID0+ICEhX2ZpbGU7XG5cbiAgICBsZXQgZmlsZXBhdGgsIGRlZmF1bHRDb250ZW50O1xuXG4gICAgaWYgKGZpbGVDb25maWcpIHtcbiAgICAgIGZpbGVwYXRoID0gZmlsZUNvbmZpZy5maWxlcGF0aDtcbiAgICAgIGRlZmF1bHRDb250ZW50ID0gZmlsZUNvbmZpZy5kZWZhdWx0Q29udGVudDtcbiAgICB9XG4gICAgaWYgKGJsb2IpIHtcbiAgICAgIGZpbGVwYXRoID0gYmxvYi5maWxlcGF0aDtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVGaWxlID0gKF9fZmlsZSkgPT4ge1xuICAgICAgaWYgKG9uRmlsZSkgb25GaWxlKF9fZmlsZSk7XG4gICAgICBlbHNlIHNldEZpbGUoX19maWxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZUZpbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBfX2ZpbGUgPSBhd2FpdCBlbnN1cmVGaWxlKFxuICAgICAgICB7ZmlsZXBhdGgsIGRlZmF1bHRDb250ZW50LCBhdXRoZW50aWNhdGlvbiwgY29uZmlnOiBmaWxlQ29uZmlnLCByZXBvc2l0b3J5fVxuICAgICAgKTtcbiAgICAgIGNvbnN0IF9jb250ZW50ID0gYXdhaXQgZ2V0Q29udGVudCh7ZmlsZTogX19maWxlfSk7XG4gICAgICBfX2ZpbGUuY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUZpbGUoKVxuICAgICAgICBpZiAoZmlsZUNvbmZpZy51cGRhdGVCbG9iKSBmaWxlQ29uZmlnLnVwZGF0ZUJsb2IoKTtcbiAgICAgIH07XG4gICAgICBfX2ZpbGUuY29udGVudCA9IF9jb250ZW50O1xuICAgICAgX19maWxlLmZpbGVwYXRoID0gX19maWxlLnBhdGg7XG4gICAgICBpZiAocmVwb3NpdG9yeS5wZXJtaXNzaW9ucy5wdXNoKSB7XG4gICAgICAgIF9fZmlsZS5zYXZlQ29udGVudCA9IGFzeW5jIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgYXdhaXQgc2F2ZUNvbnRlbnQoXG4gICAgICAgICAgICB7Y29udGVudCwgYXV0aGVudGljYXRpb24sIHJlcG9zaXRvcnksIGZpbGU6IF9fZmlsZX1cbiAgICAgICAgICApO1xuICAgICAgICAgIHBvcHVsYXRlRmlsZSgpO1xuICAgICAgICB9O1xuICAgICAgICBfX2ZpbGUuZGFuZ2Vyb3VzbHlEZWxldGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgX2RlbGV0ZWQgPSBhd2FpdCBkZWxldGVGaWxlKHthdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgZmlsZTogX19maWxlfSk7XG4gICAgICAgICAgaWYgKF9kZWxldGVkKSB7XG4gICAgICAgICAgICBzZXREZWxldGVkKHRydWUpO1xuICAgICAgICAgICAgdXBkYXRlRmlsZSgpO1xuICAgICAgICAgICAgaWYgKGZpbGVDb25maWcudXBkYXRlQmxvYikgZmlsZUNvbmZpZy51cGRhdGVCbG9iKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWxldGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGVGaWxlKF9fZmlsZSk7XG4gICAgfTtcblxuICAgIGlmICghaGFzRmlsZSgpICYmIGZpbGVwYXRoICYmICFkZWxldGVkKSBwb3B1bGF0ZUZpbGUoKTtcblxuICAgIGxldCBjb21wb25lbnQgPSA8ZGl2IC8+O1xuICAgIGlmIChoYXNGaWxlKCkpIHtcbiAgICAgIGNvbXBvbmVudCA9IDxDb21wb25lbnQgey4uLnByb3BzfSBmaWxlPXtfZmlsZX0gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIEZpbGVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIC8qKiBUaGUgZnVsbCBmaWxlcGF0aCBmb3IgdGhlIGZpbGUuICovXG4gICAgZmlsZXBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqIFBhc3MgYSBwcmV2aW91c2x5IHJldHVybmVkIGZpbGUgb2JqZWN0IHRvIGJ5cGFzcyB0aGUgc2VsZWN0aW9uLiAqL1xuICAgIGZpbGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzaGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRvd25sb2FkX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICAgIC8qKiBGdW5jdGlvbiB0byBwcm9wb2dhdGUgd2hlbiB0aGUgQmxvYiBpcyBzZWxlY3RlZC4gKi9cbiAgICBvbkZpbGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKiBQYXNzIGEgYmxvYiBvYmplY3QuICovXG4gICAgYmxvYjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIC8qKiBUaGUgZnVsbCBmaWxlcGF0aCBnZW5lcmF0ZWQgaW4gdGhlIFRyZWUvQmxvYiBPYmplY3QgKi9cbiAgICAgIGZpbGVwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gICAgLyoqIEZ1bmN0aW9uIHRvIHByb3BvZ2F0ZSB3aGVuIHRoZSBCbG9iIGlzIHNlbGVjdGVkLiAqL1xuICAgIG9uRWRpdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqIEF1dGhlbnRpY2F0aW9uIG9iamVjdCByZXR1cm5lZCBmcm9tIGEgc3VjY2Vzc2Z1bCB3aXRoQXV0aGVudGljYXRpb24gbG9naW4uICovXG4gICAgYXV0aGVudGljYXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBoZWFkZXJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgfSkuaXNSZXF1aXJlZCxcbiAgICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgICB1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSkuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgICAvKiogUmVwb3NpdG9yeSB0cmVlX3VybCBjYW4gYmUgdXNlZCBpbiBwbGFjZSBvZiBibG9iQ29uZmlnICovXG4gICAgcmVwb3NpdG9yeTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG93bmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSksXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZXR1cm4gRmlsZUNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IHdpdGhGaWxlID0gd2l0aEZpbGVDb21wb25lbnQ7XG4iXX0=