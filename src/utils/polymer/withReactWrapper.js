import React from 'react';
import Meta from './meta.json';

function withReactWrapper(WrappedComponent, propsNeedStrinify = []) {
  class WithReactWrapper extends React.Component {
    componentDidMount() {
      const events = Meta[WrappedComponent] || [];
      events.forEach((event) => {
        const eventName = event.name;
        const propName = `-${eventName}`.replace(/-(\w)/g, (match, group) => group.toUpperCase());
        const prop = this.props[`on${propName}`];
        if (prop) {
          this.polymerElement.addEventListener(eventName, prop);
        }
      });
    }

    render() {
      const props = this.props;
      const keys = Object.keys(props);
      const newProps = {};
      keys.forEach((key) => {
        const propName = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
        if (propsNeedStrinify.indexOf(key) > -1) {
          newProps[propName] = JSON.stringify(props[key]);
        } else {
          newProps[propName] = props[key];
        }
      });
      return <WrappedComponent ref={ele => (this.polymerElement = ele)} {...newProps} />;
    }
  }
  const wrappedComponentName = WrappedComponent || 'Component';
  WithReactWrapper.displayName = `withReactWrapper(${wrappedComponentName})`;
  return WithReactWrapper;
}
export default withReactWrapper;
