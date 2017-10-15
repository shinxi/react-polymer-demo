import React from 'react';
import Meta from './meta.json';
// This function takes a component...
function createComponent(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    componentDidMount() {
      const events = Meta[WrappedComponent];
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
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent ref={ele => (this.polymerElement = ele)} {...this.props} />;
    }
  };
}
export default createComponent;
