import { connect } from 'react-redux'
import {{ pascalCase name }} from './{{pascalCase name}}'
// state
import { RootState } from 'shared/redux/storeType';

export const mapStateToProps = (state: RootState) => {
  // add {{ lowerCase name }}State to {{destination}}/redux/reducers.ts 
  const { {{destination}}Reducer: { {{ lowerCase name }}State } } = state;

  return {
    {{ lowerCase name }}State
  };
};

export default connect(mapStateToProps)({{ pascalCase name }})
