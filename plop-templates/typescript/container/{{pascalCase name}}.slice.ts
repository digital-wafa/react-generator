import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  isLoading: boolean
  {{lowerCase name}}: any
  error: string
}

export const initialState: State = {
  isLoading: false,
  {{lowerCase name}}: [],
  error: ''
};

const {{pascalCase name}}Slice = createSlice({
  name: `{{constantCase destination}}_{{constantCase name}}_SLICE`,
  initialState: {
    isLoading : false
  },
  reducers: {
    {{lowerCase name}}Request: (state) => { 
      state.isLoading = true
    },
    {{lowerCase name}}RequestSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.{{lowerCase name}} = action.payload
    },
    {{lowerCase name}}RequestFailed: (state, action) => {
      state.isLoading = false
      state.error = action.payload
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
