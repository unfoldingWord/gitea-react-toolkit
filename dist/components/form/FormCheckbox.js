"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheckbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormCheckboxComponent(_ref) {
  var name = _ref.name,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  return _react.default.createElement(_core.FormControlLabel, {
    label: label,
    control: _react.default.createElement(_core.Checkbox, {
      color: "primary",
      value: "private",
      defaultChecked: checked,
      disabled: disabled,
      name: name,
      id: name + Math.random(),
      onChange: onChange
    })
  });
}

FormCheckboxComponent.propTypes = {
  classes: _propTypes.default.object.isRequired,

  /** The name/id of the field, must be unique. */
  name: _propTypes.default.string.isRequired,

  /** The label of the field. */
  label: _propTypes.default.string.isRequired,

  /** Prepopulate the default value. */
  checked: _propTypes.default.bool,

  /** The function to propogate changes. */
  onChange: _propTypes.default.func,

  /** Set if this field should be required. */
  required: _propTypes.default.bool,

  /** Set if this field should be disabled. */
  disabled: _propTypes.default.bool
};
FormCheckboxComponent.defaultProps = {};

var styles = function styles(theme) {
  return {
    root: {}
  };
};

var FormCheckbox = (0, _withStyles.default)(styles)(FormCheckboxComponent);
exports.FormCheckbox = FormCheckbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vRm9ybUNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkZvcm1DaGVja2JveENvbXBvbmVudCIsIm5hbWUiLCJsYWJlbCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwiTWF0aCIsInJhbmRvbSIsInByb3BUeXBlcyIsImNsYXNzZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJyZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIkZvcm1DaGVja2JveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBS0EsU0FBU0EscUJBQVQsT0FNRztBQUFBLE1BTERDLElBS0MsUUFMREEsSUFLQztBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQztBQUNELFNBQ0UsNkJBQUMsc0JBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRUgsS0FEVDtBQUVFLElBQUEsT0FBTyxFQUNMLDZCQUFDLGNBQUQ7QUFBVSxNQUFBLEtBQUssRUFBQyxTQUFoQjtBQUEwQixNQUFBLEtBQUssRUFBQyxTQUFoQztBQUNFLE1BQUEsY0FBYyxFQUFFQyxPQURsQjtBQUMyQixNQUFBLFFBQVEsRUFBRUUsUUFEckM7QUFDK0MsTUFBQSxJQUFJLEVBQUVKLElBRHJEO0FBRUUsTUFBQSxFQUFFLEVBQUVBLElBQUksR0FBR0ssSUFBSSxDQUFDQyxNQUFMLEVBRmI7QUFFNEIsTUFBQSxRQUFRLEVBQUVIO0FBRnRDO0FBSEosSUFERjtBQVVEOztBQUVESixxQkFBcUIsQ0FBQ1EsU0FBdEIsR0FBa0M7QUFDaENDLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRE07O0FBRWhDO0FBQ0FYLEVBQUFBLElBQUksRUFBRVMsbUJBQVVHLE1BQVYsQ0FBaUJELFVBSFM7O0FBSWhDO0FBQ0FWLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVHLE1BQVYsQ0FBaUJELFVBTFE7O0FBTWhDO0FBQ0FULEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVJLElBUGE7O0FBUWhDO0FBQ0FWLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVLLElBVFk7O0FBVWhDO0FBQ0FDLEVBQUFBLFFBQVEsRUFBRU4sbUJBQVVJLElBWFk7O0FBWWhDO0FBQ0FULEVBQUFBLFFBQVEsRUFBRUssbUJBQVVJO0FBYlksQ0FBbEM7QUFnQkFkLHFCQUFxQixDQUFDaUIsWUFBdEIsR0FBcUMsRUFBckM7O0FBR0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDdkJDLElBQUFBLElBQUksRUFBRTtBQURpQixHQUFMO0FBQUEsQ0FBcEI7O0FBSU8sSUFBTUMsWUFBWSxHQUFHLHlCQUFXSCxNQUFYLEVBQW1CbEIscUJBQW5CLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbExhYmVsLFxuICBDaGVja2JveCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5mdW5jdGlvbiBGb3JtQ2hlY2tib3hDb21wb25lbnQgKHtcbiAgbmFtZSxcbiAgbGFiZWwsXG4gIGNoZWNrZWQsXG4gIG9uQ2hhbmdlLFxuICBkaXNhYmxlZCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgY29udHJvbD17XG4gICAgICAgIDxDaGVja2JveCBjb2xvcj1cInByaW1hcnlcIiB2YWx1ZT1cInByaXZhdGVcIlxuICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtjaGVja2VkfSBkaXNhYmxlZD17ZGlzYWJsZWR9IG5hbWU9e25hbWV9XG4gICAgICAgICAgaWQ9e25hbWUgKyBNYXRoLnJhbmRvbSgpfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuRm9ybUNoZWNrYm94Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKiogVGhlIG5hbWUvaWQgb2YgdGhlIGZpZWxkLCBtdXN0IGJlIHVuaXF1ZS4gKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKiogVGhlIGxhYmVsIG9mIHRoZSBmaWVsZC4gKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIFByZXBvcHVsYXRlIHRoZSBkZWZhdWx0IHZhbHVlLiAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIFRoZSBmdW5jdGlvbiB0byBwcm9wb2dhdGUgY2hhbmdlcy4gKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKiogU2V0IGlmIHRoaXMgZmllbGQgc2hvdWxkIGJlIHJlcXVpcmVkLiAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBTZXQgaWYgdGhpcyBmaWVsZCBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkZvcm1DaGVja2JveENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ2hlY2tib3ggPSB3aXRoU3R5bGVzKHN0eWxlcykoRm9ybUNoZWNrYm94Q29tcG9uZW50KTtcbiJdfQ==