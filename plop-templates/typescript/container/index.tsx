import { connect } from 'react-redux'
import {{ pascalCase name }} from './{{pascalCase name}}'
import { {{ lowerCase name }}Request } from "./{{pascalCase name}}.slice";


export const mapStateToProps = (state: any) => {
  return {
    {{ lowerCase name }}: state.{{ lowerCase name }}Reducer,
  }
}

export const mapDispatchToProps = { {{ lowerCase name }}Request }

export default connect(mapStateToProps, mapDispatchToProps)({{ pascalCase name }})
