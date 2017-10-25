import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
  /**
   * An array of objects that will be used to build the nav. Top-level items
   * can optionally have one level of children beneath them, turning the
   * top-level item into a dropdown group.
   * 
   * Selecting an item automatically selects its parent if it has one.
   * For the navigation, top-level items with children cannot be selected
   * directly - instead, users can select a child item and its parent will
   * also be marked as selected (and set as the `selectedItemParent`).
   * 
   * All items should have at least the following properties:
   * 
   * - {String} id - A unique string that identifies the item. Should only
   * contain valid ASCII characters. It's recommended to only use URI-safe
   * characters to allow for easy binding to the URL. Examples: 'home' or 'alerts'
   * - {String} label - A short, human-readable text label for the item.
   * 
   * The following optional properties can be used:
   * 
   * - {Array} children - An array of subitem objects that are children of
   * the item. Each child item should also have an `id` and `label`, and
   * may have its own child items.
   * - {Boolean=false} isTerminal - If `true` the item cannot have any children.
   * Terminal items can only be selected, not activated (navigated into).
   * Items with children should not be marked as terminal.
   * - {Boolean=false} isExhausted - If `true` the item does not have any
   * additional children available to load from a remote data source.
   * - {Boolean=true} isSelectable - If `false` the item can only be activated
   * (navigated into) to view its children, not selected.
   * 
   * The following is an example of a list of valid nav items:
   * 
   *     [
   *       { "label" : "Home",   "id" : "home" },
   *       { "label" : "Alerts", "id" : "alerts" },
   *       { "label" : "Assets", "id" : "assets", "children": [
   *         { "label" : "Asset #1", "id" : "a1" },
   *         { "label" : "Asset #2", "id" : "a2" }
   *       ] }
   *     ]
   * 
   * The item property names can be changed, e.g. to choose a different item
   * property to serve as a unique ID. See the `keys` property for details.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * Changes the item properties (keys) that will be used internally to find
   * each item's unique ID, label, and child list.
   * 
   * Use this property if you already have a predefined data schema for your
   * application and want to customize this component to match your schema.
   * Otherwise, it's recommended to leave the defaults.
   * 
   * The following properties can be set:
   * 
   * - id: [default='id'] a unique ID for the item
   * - label: [default='label'] a human-readable label
   * - children: [default='children'] an array of child items
   * 
   * If you want to configure any keys, you must set all the keys. If any
   * of the keys are not defined, the navigation will fail.
   * 
   * For example, the schema could be changed to the following:
   * 
   *     {
   *       "id" : "assetId",
   *       "label" : "assetName",
   *       "children" : "subAssets"
   *     }
   */
  keys: PropTypes.objectOf(PropTypes.any),
  /**
   * A reference to the currently selected item. Use this property to set the
   * selected item directly. The object passed to this property must be a
   * direct reference to one of the `items` objects. Changing this property
   * will automatically update the `selectedRoute`.
   * 
   * See `selectedRoute` for an alternative way to select items.
   */
  selected: PropTypes.objectOf(PropTypes.any),
  /**
   * The route to the selected item as an array of strings. Use this property
   * to set the selected item by route, or to bind to updates when the
   * selected item is changed. Changing this property will automatically
   * update the `selected` item.
   * 
   * The route array starts at the top of the graph and ends with the selected
   * item. Each route entry is a string that corresponds to the unique ID
   * of an item. The item property that this unique ID will be taken from can be
   * configured with the `key` property. By default, it will be `item.id`.
   * 
   * 
   * For example, given the following graph:
   * 
   *     [
   *       {
   *         "label" : "Dashboards",
   *         "id" : "dash",
   *         "children" : [
   *           { "label" : "Truck Statuses", "id" : "trucks" },
   *           { "label" : "Generator Alerts", "id" : "generators" }
   *         ]
   *       },
   *     ]
   * 
   * To select the "Truck Statuses" page, set the route array to:
   * 
   *     ["dash", "trucks"]
   * 
   * If the user then selects the "Generator Alerts" item, the route array
   * would be replaced with a new array with the following entries:
   * 
   *     ["dash", "generators"]
   */
  selectedRoute: PropTypes.arrayOf(PropTypes.any),
  /**
   * [Read-only] Helpful metadata about the selected item.
   * 
   * SINGLE-SELECT MODE: An object with the following information about
   * the selected item (if no selected item, all values will be null):
   * 
   * - {Object} `item`: Reference to the selected item
   * - {Array} `path`: The path to the selected item as an array. Begins with
   * the top-most item in the graph and ends with the selected item. It
   * the selected item is at the top of the graph, the array will include
   * only the selected item.
   * - {Array} `route`: Route to the selected item (see `selectedRoute`
   * for more information on how this is created)
   * - {Object} `parent`: Reference to the selected item's parent,
   * or `null` if it has no parent
   * - {Array} `children`: Reference to the selected item's children,
   * or empty array if it has no children
   * - {Array} `siblings`: Reference to the selected item's siblings (e.g.
   * the children of its parent) or an array with only the selected item
   * if it has no children.
   * 
   * MUTLI-SELECT MODE: An array of objects with metadata about each
   * selected item. Each object will be contain the same values as above.
   * If no items are selected, all values will be null.
   */
  selectedMeta: PropTypes.objectOf(PropTypes.any),
  /**
   * 
   */
  active: PropTypes.objectOf(PropTypes.any),
  /**
   * 
   */
  activeRoute: PropTypes.arrayOf(PropTypes.any),
  /**
   * [Read-only] Helpful metadata about the active item.
   * 
   * SINGLE-ACTIVE MODE: An object with the following information about
   * the active item (if no active item, all values will be null):
   * 
   * - {Object} `item`: Reference to the active item
   * - {Array} `path`: The path to the active item as an array. Begins with
   * the top-most item in the graph and ends with the active item. If
   * the active item is at the top of the graph, the array will include
   * only the active item.
   * - {Array} `route`: Route to the active item (see `activeRoute`
   * for more information on how this is created)
   * - {Object} `parent`: Reference to the active item's parent,
   * or `null` if it has no parent
   * - {Array} `children`: Reference to the active item's children,
   * or empty array if it has no children
   * - {Array} `siblings`: Reference to the active item's siblings (e.g.
   * the children of its parent) or an array with only the active item
   * if it has no children.
   * 
   * MULTI-ACTIVE MODE: An array of objects with metadata about each
   * active item. Each object will contain the same values as above.
   * If no items are active, all values will be null.
   */
  activeMeta: PropTypes.objectOf(PropTypes.any),
  /**
   * If set to true, branches (nodes with children) will not be selectable.
   * Clicking on a branch will still cause it to become active (expand), but it
   * will not be added to the selected property.
   */
  disableBranchSelect: PropTypes.bool,
  /**
   * If set to true, multiple nodes can be selected at the same time in the tree
   * by using the shift key (for selecting a range) or the ctrl/cmd key (for selecting individual nodes).
   */
  multiSelect: PropTypes.bool,
  /**
   * If set to true, multiple nodes can be activated (expanded) at the same time.
   * If set to false, expanding a node will cause other nodes to automatically collapse.
   */
  multiActivate: PropTypes.bool,
};

const defaultProps = {
  keys: {"id":"id","label":"label","children":"children","icon":"icon"},
  selectedMeta: null,
  activeMeta: null,
  disableBranchSelect: false,
  multiSelect: false,
  multiActivate: false,
};

const events = [
  /**
   * px-app-asset-selected
   */
  {
    name: 'px-app-asset-selected',
    reactPropName: 'onPxAppAssetSelected',
  },
  /**
   * Fired when the `selected` property changes.
   */
  {
    name: 'selected-changed',
    reactPropName: 'onSelectedChanged',
  },
  /**
   * Fired when the `selectedRoute` property changes.
   */
  {
    name: 'selected-route-changed',
    reactPropName: 'onSelectedRouteChanged',
  },
  /**
   * Fired when the `selectedMeta` property changes.
   */
  {
    name: 'selected-meta-changed',
    reactPropName: 'onSelectedMetaChanged',
  },
  /**
   * px-app-asset-activated
   */
  {
    name: 'px-app-asset-activated',
    reactPropName: 'onPxAppAssetActivated',
  },
  /**
   * Fired when the `active` property changes.
   */
  {
    name: 'active-changed',
    reactPropName: 'onActiveChanged',
  },
  /**
   * Fired when the `activeRoute` property changes.
   */
  {
    name: 'active-route-changed',
    reactPropName: 'onActiveRouteChanged',
  },
  /**
   * Fired when the `activeMeta` property changes.
   */
  {
    name: 'active-meta-changed',
    reactPropName: 'onActiveMetaChanged',
  },
];

const options = {
  tagname: 'px-tree',
  bowerPath: 'px-tree/px-tree.html',
  events,
};

const ReactWrapper = withReactWrapper('px-tree', options);

class Tree extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

Tree.propTypes = propTypes;
Tree.defaultProps = defaultProps;

export default Tree;
