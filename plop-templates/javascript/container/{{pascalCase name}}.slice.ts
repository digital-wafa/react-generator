import { createSlice } from '@reduxjs/toolkit'

const {{pascalCase name}}Slice = createSlice({
  name: `{{pascalCase name}}_SLICE`,
  initialState: {
    isLoading : false
  },
  reducers: {
    {{lowerCase name}}Request: (state) => { 
      state.isLoading = false
    },
    {{lowerCase name}}Success: (state, action) => {
      state.isLoading = false
    },
    {{lowerCase name}}Failed: (state, action) => {
      state.isLoading = false
    }
  }
})

export const {
  {{lowerCase name}}Request,
  {{lowerCase name}}Success,
  {{lowerCase name}}Failed
} = {{pascalCase name}}Slice.actions

export default {{pascalCase name}}Slice.reducer

