import React from 'react';
import PropTypes from 'prop-types';
import 'px-tree/px-tree.html';

const Keys = { id: 'id', label: 'label', children: 'children', icon: 'icon' };
function Tree({ items }) {
  return <px-tree keys={JSON.stringify(Keys)} items={JSON.stringify(items)} />;
}

Tree.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

Tree.defaultProps = {
  data: [],
};
export default Tree;
