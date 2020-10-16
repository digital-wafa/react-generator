import React from 'react'
import { FormattedMessage } from 'react-intl'
// styles
import Style from './{{pascalCase name}}.module.css'

const {{pascalCase name}} = () => {
  return (
    <div className={Style.wrapper}>
        <FormattedMessage id='{{pascalCase name}}.title' />
    </div>
  );
}

export default {{pascalCase name}}