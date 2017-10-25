import React from 'react';
import PropTypes from 'prop-types';
import { withReactWrapper } from 'utils/polymer';

const propTypes = {
{{#attributes}}
  /**
   * {{description}}
   */
  {{reactPropName}}: {{reactType}},
{{/attributes}}
};
{{#hasDefaults}}

const defaultProps = {
{{#attributes}}
{{#if defaultValue}}
  {{reactPropName}}: {{defaultValue}},
{{/if}}
{{/attributes}}
};
{{/hasDefaults}}
{{#if events}}

const events = [
{{#events}}
  /**
   * {{description}}
   */
  {
    name: '{{name}}',
    reactPropName: '{{reactPropName}}',
  },
{{/events}}
];
{{/if}}

const options = {
  tagname: '{{tagname}}',
  bowerPath: '{{bowerPath}}',
  {{#if events}}
  events,
  {{/if}}
};

const ReactWrapper = withReactWrapper('{{tagname}}', options);

class {{reactClassName}} extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

{{reactClassName}}.propTypes = propTypes;
{{#hasDefaults}}
{{reactClassName}}.defaultProps = defaultProps;
{{/hasDefaults}}

export default {{reactClassName}};
