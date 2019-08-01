import React from 'react'
import renderer from 'react-test-renderer'
import { Strategy } from '../Strategy'

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

describe('Input component - Strategy', () => {
    it('should render correctly', () => {
        const file = renderer.create(<Strategy />).toJSON()

        expect(file).toMatchSnapshot()
    })
})
