import React from 'react';
import PropTypes from 'prop-types';
import 'px-tree/px-tree.html';
import { createComponent } from 'utils/polymer';

const PolymerTree = createComponent('px-tree');

const Keys = { id: 'id', label: 'label', children: 'children', icon: 'icon' };
function Tree({ items }) {
  return <PolymerTree keys={JSON.stringify(Keys)} items={JSON.stringify(items)} />;
}

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

Tree.defaultProps = {
  data: [],
};

export default Tree;
