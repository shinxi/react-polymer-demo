import React from 'react';
import PropTypes from 'prop-types';
import '{{bowerPath}}';
import { withReactWrapper } from 'utils/polymer';

{{#if propsNeedStrinify}}
const propsNeedStrinify = {{propsNeedStrinify}}
{{/if}}
const ReactWrapper = withReactWrapper('{{tagname}}'{{#if propsNeedStrinify}}, propsNeedStrinify{{/if}});

class {{reactClassName}} extends React.Component {
  render() {
    return <ReactWrapper {...this.props} />;
  }
}

{{reactClassName}}.propTypes = {
{{#attributes}}
  /**
   * {{description}}
   */
  {{reactPropName}}: {{reactType}},
{{/attributes}}
};

{{reactClassName}}.defaultProps = {
{{#attributes}}
{{#if defaultValue}}
  {{reactPropName}}: {{defaultValue}},
{{/if}}
{{/attributes}}
};
export default {{reactClassName}};
