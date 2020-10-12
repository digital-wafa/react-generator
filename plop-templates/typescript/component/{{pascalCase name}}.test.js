import React from 'react'
import { render } from '@testing-library/react'
import RenderWithReactIntl from 'shared/helpers/test'
import {{pascalCase name}} from `./{{pascalCase name}}`

describe('{{pascalCase name}}', () => {
  test('render {{pascalCase name}}', async () => {
    const { queryByTestId } = render(
      <RenderWithReactIntl>
        <{{pascalCase name}} />
      </RenderWithReactIntl>
    )
    expect(queryByTestId('{{pascalCase name}}')).not.toBeEmptyDOMElement()
  })
})
