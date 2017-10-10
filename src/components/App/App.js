import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Hello from 'components/Hello';
import Tree from 'components/Tree';
import './App.scss';

const treeItems = [
  { label: 'Leaf 0.0', id: 'leaf-0-0' },
  { label: 'Leaf 0.1', id: 'leaf-0-1' },
  { label: 'Leaf 0.2', id: 'leaf-0-2' },
  {
    label: 'Branch 0.3',
    id: 'branch-0-3',
    children: [
      { label: 'Leaf 1.0', id: 'leaf-1-0' },
      {
        label: 'Branch 1.1',
        id: 'branch-1-1',
        children: [
          { label: 'Leaf 2.0', id: 'leaf-2-0' },
          { label: 'Leaf 2.1', id: 'leaf-2-1' },
          { label: 'Leaf 2.2', id: 'leaf-2-2' },
          { label: 'Leaf 2.3', id: 'leaf-2-3' },
        ],
      },
      { label: 'Leaf 1.2', id: 'leaf-1-2' },
      {
        label: 'Branch 1.3',
        id: 'branch-1-3',
        children: [
          { label: 'Leaf 2.0', id: 'leaf-2-0' },
          { label: 'Leaf 2.1', id: 'leaf-2-1' },
          { label: 'Leaf 2.2', id: 'leaf-2-2' },
          { label: 'Leaf 2.3', id: 'leaf-2-3' },
          { label: 'Leaf 2.4', id: 'leaf-2-4' },
          { label: 'Leaf 2.5', id: 'leaf-2-5' },
          { label: 'Leaf 2.6', id: 'leaf-2-6' },
          { label: 'Leaf 2.7', id: 'leaf-2-7' },
          { label: 'Leaf 2.8', id: 'leaf-2-8' },
        ],
      },
      { label: 'Leaf 1.4', id: 'leaf-1-4' },
      { label: 'Leaf 1.5', id: 'leaf-1-5' },
      {
        label: 'Branch 1.6',
        id: 'branch-1-6',
        children: [
          { label: 'Leaf 2.0', id: 'leaf-2-0' },
          { label: 'Leaf 2.1', id: 'leaf-2-1' },
          { label: 'Leaf 2.2', id: 'leaf-2-2' },
          { label: 'Leaf 2.3', id: 'leaf-2-3' },
          { label: 'Leaf 2.4', id: 'leaf-2-4' },
          { label: 'Leaf 2.5', id: 'leaf-2-5' },
          { label: 'Leaf 2.6', id: 'leaf-2-6' },
          { label: 'Leaf 2.7', id: 'leaf-2-7' },
          { label: 'Leaf 2.8', id: 'leaf-2-8' },
          { label: 'Leaf 2.9', id: 'leaf-2-9' },
        ],
      },
    ],
  },
  {
    label: 'Branch 0.4',
    id: 'branch-0-4',
    children: [
      { label: 'Leaf 1.0', id: 'leaf-1-0' },
      { label: 'Leaf 1.1', id: 'leaf-1-1' },
      { label: 'Leaf 1.2', id: 'leaf-1-2' },
      { label: 'Leaf 1.3', id: 'leaf-1-3' },
      { label: 'Leaf 1.4', id: 'leaf-1-4' },
      { label: 'Leaf 1.5', id: 'leaf-1-5' },
      { label: 'Leaf 1.6', id: 'leaf-1-6' },
      { label: 'Leaf 1.7', id: 'leaf-1-7' },
      { label: 'Leaf 1.8', id: 'leaf-1-8' },
    ],
  },
  { label: 'Leaf 0.5', id: 'leaf-0-5' },
  {
    label: 'Branch 0.6',
    id: 'branch-0-6',
    children: [
      { label: 'Leaf 1.0', id: 'leaf-1-0' },
      { label: 'Leaf 1.1', id: 'leaf-1-1' },
      { label: 'Leaf 1.2', id: 'leaf-1-2' },
      { label: 'Leaf 1.3', id: 'leaf-1-3' },
      { label: 'Leaf 1.4', id: 'leaf-1-4' },
      { label: 'Leaf 1.5', id: 'leaf-1-5' },
    ],
  },
  {
    label: 'Branch 0.7',
    id: 'branch-0-7',
    children: [
      { label: 'Leaf 1.0', id: 'leaf-1-0' },
      { label: 'Leaf 1.1', id: 'leaf-1-1' },
      { label: 'Leaf 1.2', id: 'leaf-1-2' },
      { label: 'Leaf 1.3', id: 'leaf-1-3' },
      { label: 'Leaf 1.4', id: 'leaf-1-4' },
      { label: 'Leaf 1.5', id: 'leaf-1-5' },
    ],
  },
  { label: 'Leaf 0.8', id: 'leaf-0-8' },
];
export default class App extends React.PureComponent {
  static propTypes = {
    onSubmitHello: PropTypes.func.isRequired,
    greeting: PropTypes.string,
  };

  render() {
    const { greeting, onSubmitHello } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{greeting || 'Welcome to ServiceMax!'}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App/App.js</code> and save to reload.
        </p>
        <div className="App-hello">
          <Hello onSubmit={onSubmitHello} />
        </div>
        <p>
          <h3>Predix Tree in React:</h3>
          <Tree items={treeItems} />
        </p>
      </div>
    );
  }
}
