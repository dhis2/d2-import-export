import i18n from '@dhis2/d2-i18n'
import React from 'react'
import { RadioGroup } from '../FinalFormComponents/RadioGroup'
import { Field } from '../Field/Field'
import { Label } from '../Field/Label'

export const OPTION_YES = {
    value: 'true',
    label: i18n.t('Yes (faster for large imports)'),
}
export const OPTION_NO = { value: 'false', label: i18n.t('No') }
export const PREHEAT_CACHE_KEY = 'preheatCache'
export const PREHEAT_CACHE_DEFAULT_VALUE = OPTION_NO.value

export const PreheatCache = () => (
    <Field>
        <Label>{i18n.t('Preheat cache')}</Label>
        <RadioGroup
            name={PREHEAT_CACHE_KEY}
            label={i18n.t('Preheat cache')}
            options={[OPTION_YES, OPTION_NO]}
            dataTest="input-preheat-cache"
        />
    </Field>
)
