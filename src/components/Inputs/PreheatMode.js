import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { RadioGroupField } from '../'

const preheatModeOptions = [
    { value: 'REFERENCE', label: i18n.t('Reference') },
    { value: 'ALL', label: i18n.t('All') },
    { value: 'NONE', label: i18n.t('None') },
]
const defaultPreheatModeOption = preheatModeOptions[0]

const NAME = 'preheatMode'
const DATATEST = 'input-preheat-mode'
const LABEL = i18n.t('Preheat mode')

const PreheatMode = () => (
    <RadioGroupField
        name={NAME}
        label={LABEL}
        options={preheatModeOptions}
        dataTest={DATATEST}
    />
)

export { PreheatMode, defaultPreheatModeOption }
