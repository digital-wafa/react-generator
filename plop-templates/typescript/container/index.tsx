import { connect } from 'react-redux'
import {{ pascalCase name }} from './{{pascalCase name}}'


export const mapStateToProps = (state: any) => {
  return {
    {{ lowerCase name }}: state.{{ lowerCase name }}Reducer,
  }
}

export default connect(mapStateToProps)({{ pascalCase name }})
