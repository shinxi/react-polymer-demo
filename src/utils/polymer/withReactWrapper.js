import React from 'react';

const toString = Object.prototype.toString;
const loadedBowerComponents = [];
function loadBowerComponent(bowerPath, componentName) {
  if (loadedBowerComponents.indexOf(componentName) > -1) {
    return;
  }
  const link = document.createElement('link');
  link.rel = 'import';
  link.href = `bower_components/${bowerPath}`;
  document.head.appendChild(link);
  loadedBowerComponents.push(componentName);
}
function withReactWrapper(WrappedComponent, options = {}) {
  if (!WrappedComponent) {
    return null;
  }
  loadBowerComponent(options.bowerPath, WrappedComponent);
  class WithReactWrapper extends React.Component {
    componentDidMount() {
      const events = options.events || [];
      events.forEach(event => {
        const { name, reactPropName } = event;
        const prop = this.props[reactPropName];
        if (prop) {
          this.polymerElement.addEventListener(name, prop);
        }
      });
    }

    render() {
      const props = this.props;
      const keys = Object.keys(props);
      const newProps = {};
      const valTransformsByType = {
        '[object Array]': JSON.stringify,
        '[object Number]': JSON.stringify,
        '[object Date]': JSON.stringify,
        '[object Object]': JSON.stringify,
      };
      keys.forEach(key => {
        if (key === 'className') {
          newProps.class = props[key];
          return;
        }
        const propName = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
        const propVal = props[key];
        if (key === 'children' || propVal === null || propVal === undefined || propVal === false) {
          return;
        }
        const valType = toString.call(propVal);
        if (valTransformsByType[valType]) {
          newProps[propName] = valTransformsByType[valType](propVal);
        } else {
          newProps[propName] = propVal;
        }
      });
      return (
        <WrappedComponent ref={ele => (this.polymerElement = ele)} {...newProps}>
          {props.children}
        </WrappedComponent>
      );
    }
  }
  const wrappedComponentName = WrappedComponent;
  WithReactWrapper.displayName = `withReactWrapper(${wrappedComponentName})`;
  return WithReactWrapper;
}
export default withReactWrapper;
