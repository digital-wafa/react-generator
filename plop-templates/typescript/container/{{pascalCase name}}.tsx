import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux';
// actions
import { {{lowerCase name}}Request } from './{{pascalCase name}}.slice';
// styles
import Style from './{{pascalCase name}}.module.css'

interface Props {}

const {{pascalCase name}} = ({}:Props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({{lowerCase name}}Request());
  }, [dispatch]);

  return (
    <div className={Style.wrapper}>
      <FormattedMessage id='{{pascalCase name}}.title' />
    </div>
  )

}

export default {{pascalCase name}}
