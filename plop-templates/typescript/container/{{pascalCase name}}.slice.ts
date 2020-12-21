import { createSlice } from '@reduxjs/toolkit'

interface State {}

export const initialState: State = {
  isLoading: false,
  error: ''
};

const {{pascalCase name}}Slice = createSlice({
  name: `{{pascalCase name}}_SLICE`,
  initialState: {
    isLoading : false
  },
  reducers: {
    {{lowerCase name}}Request: (state) => { 
      state.isLoading = true
    },
    {{lowerCase name}}RequestSuccess: (state, action) => {
      state.isLoading = false
    },
    {{lowerCase name}}RequestFailed: (state, action) => {
      state.isLoading = false
    }
  }
})

export const {
  {{lowerCase name}}Request,
  {{lowerCase name}}RequestSuccess,
  {{lowerCase name}}RequestFailed
} = {{pascalCase name}}Slice.actions

export type {{pascalCase name}}State = ReturnType<typeof {{pascalCase name}}Slice.reducer>;

export default {{pascalCase name}}Slice.reducer
