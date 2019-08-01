import React from 'react'
import renderer from 'react-test-renderer'
import { Format, OPTION_CSV, OPTION_JSON, OPTION_XML } from '../Format'

jest.mock('react-final-form', () => ({
    useField: jest.fn(() => ({
        input: {
            name: 'Name',
            value: '',
            onChange: jest.fn(),
        },
        meta: {
            touched: false,
            error: '',
        },
    })),
}))

describe('Input component - Format', () => {
    it('should render correctly', () => {
        const file = renderer
            .create(<Format options={[OPTION_JSON, OPTION_XML, OPTION_CSV]} />)
            .toJSON()

        expect(file).toMatchSnapshot()
    })
})
