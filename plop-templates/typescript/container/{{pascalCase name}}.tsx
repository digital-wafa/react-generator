import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
// styles
import Style from './{{pascalCase name}}.module.css'

interface Props {}

const {{pascalCase name}} = ({}:Props) => {

  const [value, setValue] = useState('')

  return (
    <div className={Style.wrapper}>
      <FormattedMessage id='{{pascalCase name}}.title' />
    </div>
  )

}

export default {{pascalCase name}}
