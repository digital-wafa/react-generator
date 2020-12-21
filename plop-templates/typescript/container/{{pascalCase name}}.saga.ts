import { takeLatest, call, put } from "redux-saga/effects";
import { 
  {{pascalCase name}}Request, 
  {{pascalCase name}}RequestSuccess, 
  {{pascalCase name}}RequestFailed 
} from "./Home.slice";
import { fetch{{pascalCase name}}Api } from "./{{pascalCase name}}.api";

export function* get{{pascalCase name}}Saga() {
  try {
    const response = yield call(fetch{{pascalCase name}}Api);
    yield put({{pascalCase name}}RequestSuccess(response.data));
  } catch (error) {
    yield put({{pascalCase name}}RequestFailed(error));
  }
}

export function* {{pascalCase name}}Saga() {
  yield takeLatest({{pascalCase name}}Request.type, get{{pascalCase name}}Saga);
}
