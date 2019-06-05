"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 360;

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    hide: {
      display: 'none'
    },
    appBar: {},
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: '10000'
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px'
    }, theme.mixins.toolbar, {
      justifyContent: 'flex-end'
    })
  };
};

var _default = styles;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9zdHlsZXMuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImdyb3ciLCJoaWRlIiwiZGlzcGxheSIsImFwcEJhciIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ6SW5kZXgiLCJkcmF3ZXJQYXBlciIsImRyYXdlckhlYWRlciIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWl4aW5zIiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFFBQVEsRUFBRTtBQUROLEtBRG1CO0FBSXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkQsTUFBQUEsUUFBUSxFQUFFO0FBRE4sS0FKbUI7QUFPekJFLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxPQUFPLEVBQUU7QUFETCxLQVBtQjtBQVV6QkMsSUFBQUEsTUFBTSxFQUFFLEVBVmlCO0FBWXpCQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsVUFBVSxFQUFFLENBQUMsRUFESDtBQUVWQyxNQUFBQSxXQUFXLEVBQUU7QUFGSCxLQVphO0FBZ0J6QkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLEtBQUssRUFBRWIsV0FERDtBQUVOYyxNQUFBQSxVQUFVLEVBQUUsQ0FGTjtBQUdOQyxNQUFBQSxNQUFNLEVBQUU7QUFIRixLQWhCaUI7QUFxQnpCQyxJQUFBQSxXQUFXLEVBQUU7QUFDWEgsTUFBQUEsS0FBSyxFQUFFYjtBQURJLEtBckJZO0FBd0J6QmlCLElBQUFBLFlBQVk7QUFDVlYsTUFBQUEsT0FBTyxFQUFFLE1BREM7QUFFVlcsTUFBQUEsVUFBVSxFQUFFLFFBRkY7QUFHVkMsTUFBQUEsT0FBTyxFQUFFO0FBSEMsT0FJUGpCLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYUMsT0FKTjtBQUtWQyxNQUFBQSxjQUFjLEVBQUU7QUFMTjtBQXhCYSxHQUFaO0FBQUEsQ0FBZjs7ZUFpQ2VyQixNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZHJhd2VyV2lkdGggPSAzNjA7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBncm93OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGhpZGU6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0sXG4gIGFwcEJhcjoge1xuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgekluZGV4OiAnMTAwMDAnLFxuICB9LFxuICBkcmF3ZXJQYXBlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgfSxcbiAgZHJhd2VySGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19