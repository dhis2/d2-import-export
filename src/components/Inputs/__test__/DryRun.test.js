import React from 'react'
import renderer from 'react-test-renderer'
import { DryRun } from '../DryRun'

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

describe('Input component - DryRun', () => {
    it('should render correctly', () => {
        const file = renderer.create(<DryRun />).toJSON()

        expect(file).toMatchSnapshot()
    })
})
