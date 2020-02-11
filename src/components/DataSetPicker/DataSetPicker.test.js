import React from 'react'
import { render, wait } from 'test-utils'
import '@testing-library/jest-dom/extend-expect'

import { DataSetPicker } from '.'

const props = {
    selected: [],
    setSelected: () => 1,
    multiSelect: false,
    withFilter: false,
    withActions: false,
    dataTest: 'data-set-picker',
}

it('matches snapshot', async () => {
    const { asFragment } = render(<DataSetPicker {...props} />)
    expect(asFragment()).toMatchSnapshot()
    await wait()
})

it('renders multi-select list', async () => {
    const { asFragment } = render(<DataSetPicker {...props} multiselect />)
    expect(asFragment()).toMatchSnapshot()
    await wait()
})

it('renders filterable list', async () => {
    const { asFragment } = render(<DataSetPicker {...props} withFilter />)
    expect(asFragment()).toMatchSnapshot()
    await wait()
})

it('renders select/clear all actions', async () => {
    const { asFragment } = render(<DataSetPicker {...props} withActions />)
    expect(asFragment()).toMatchSnapshot()
    await wait()
})

/* http://localhost:8080/api/32/dataSets?fields=id%2CdisplayName&paging=false
{"dataSets":[{"id":"lyLU2wR22tC","displayName":"ART monthly summary"},{"id":"BfMAe6Itzgt","displayName":"Child Health"},{"id":"VTdjfLXXmoi","displayName":"Clinical Monitoring Checklist "},{"id":"Lpw6GcnTrmS","displayName":"Emergency Response"},{"id":"TuL8IOPzpHh","displayName":"EPI Stock"},{"id":"rsyjyJmYD4J","displayName":"Expenditures"},{"id":"V8MHeZHIrcP","displayName":"Facility Assessment"},{"id":"vc6nF5yZsPR","displayName":"HIV Care Monthly"},{"id":"EDzMBk0RRji","displayName":"HIV Peadiatric monthly summary"},{"id":"Nyh6laLdBEJ","displayName":"IDSR Weekly"},{"id":"j38YW1Am7he","displayName":"IDSR Weekly (Start Wednesday)"},{"id":"PLq9sJluXvc","displayName":"Inpatient Morbidity/Mortality Summary"},{"id":"ULowA8V3ucd","displayName":"Life-Saving Commodities"},{"id":"EKWVBc5C0ms","displayName":"MNCH Quarterly Report"},{"id":"eZDhcZi6FLP","displayName":"Morbidity"},{"id":"pBOMPrpg1QX","displayName":"Mortality < 5 years"},{"id":"ce7DSxx5H2I","displayName":"Mortality < 5 years by age group"},{"id":"YFTk3VdO9av","displayName":"Mortality < 5 years by gender"},{"id":"YZhd4nu3mzY","displayName":"Mortality < 5 years Narratives"},{"id":"Rl58JxmKJo2","displayName":"PMTCT monthly summary"},{"id":"aLpVgfXiz0f","displayName":"Population"},{"id":"Y8gAn9DfAGU","displayName":"Project Management"},{"id":"QX4ZTUbOt3a","displayName":"Reproductive Health"},{"id":"N4fIX1HL3TQ","displayName":"Staffing"},{"id":"SF8FDSqw30D","displayName":"TB Facility Reporting Form"},{"id":"OsPTWNqq26W","displayName":"TB/HIV (VCCT) monthly summary"}]}
*/
