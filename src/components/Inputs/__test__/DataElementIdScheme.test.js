import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { DataElementIdScheme } from '../DataElementIdScheme'

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

describe('Input component - DataElementIdScheme', () => {
    it('should render correctly', () => {
        const file = shallow(<DataElementIdScheme />)

        expect(toJson(file)).toMatchSnapshot()
    })
})
