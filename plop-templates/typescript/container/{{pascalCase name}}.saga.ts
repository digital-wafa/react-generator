import { takeLatest, call, put } from "redux-saga/effects";
import { 
  {{lowerCase name}}Request, 
  {{lowerCase name}}RequestSuccess, 
  {{lowerCase name}}RequestFailed 
} from "./{{pascalCase name}}.slice";
import { {{pascalCase name}}RequestApi } from "./{{pascalCase name}}.api";

export function* get{{pascalCase name}}Saga() {
  try {
    const response = yield call({{pascalCase name}}RequestApi);
    yield put({{lowerCase name}}RequestSuccess(response.data));
  } catch (error) {
    yield put({{lowerCase name}}RequestFailed(error));
  }
}

// add {{lowerCase name}}Saga to {{destination}}/redux/sagas.js 
export function* {{lowerCase name}}Saga() {
  yield takeLatest({{lowerCase name}}Request, get{{pascalCase name}}Saga);
}
