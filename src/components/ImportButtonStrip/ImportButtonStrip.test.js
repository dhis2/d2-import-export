import React from 'react'
import { render } from 'test-utils'
import '@testing-library/jest-dom/extend-expect'

import { ImportButtonStrip } from '.'

const props = {
    dataTest: 'import-strip',
    dryRunDataTest: 'import-strip-dry-run-btn',
    importDataTest: 'import-strip-import-btn',
    onImport: () => 1,
}

const r = <ImportButtonStrip {...props} />

it('matches snapshot', () => {
    const { asFragment } = render(r)
    expect(asFragment()).toMatchSnapshot()
})

it('shows dry-run and import buttons', () => {
    const { getByDataTest } = render(r)
    const strip = getByDataTest(`${props.dataTest}-button-strip`)
    const dryRunBtn = getByDataTest(props.dryRunDataTest)
    const importBtn = getByDataTest(props.importDataTest)
    expect(strip).toBeInTheDocument()
    expect(strip).toContainElement(dryRunBtn)
    expect(strip).toContainElement(importBtn)
})

it('shows help text', () => {
    const { getByDataTest } = render(r)
    const help = getByDataTest(`${props.dataTest}-help`)
    expect(help).toBeInTheDocument()
})
