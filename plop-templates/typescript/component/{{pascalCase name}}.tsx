import React from 'react'
import { FormattedMessage } from 'react-intl'
// styles
import Style from './{{pascalCase name}}.module.css'

interface Props {}

class {{pascalCase name}} extends React.Component<Props> {
  render() {
    return (
      <div className={Style.wrapper}>
          <FormattedMessage id='{{pascalCase name}}.title' />
      </div>
    );
  }
}

export default {{pascalCase name}}