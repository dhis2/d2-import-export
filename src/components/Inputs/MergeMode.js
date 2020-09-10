import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { RadioGroupField } from '../index'

const mergeModeOptions = [
    {
        value: 'MERGE',
        label: i18n.t(
            'MERGE: Only overwrite the old property if the new property value is not-null',
            {
                nsSeparator: '>',
            }
        ),
    },
    {
        value: 'REPLACE',
        label: i18n.t(
            'REPLACE: Overwrite regardless of whether the new property value is null',
            {
                nsSeparator: '>',
            }
        ),
    },
]
const defaultMergeModeOption = mergeModeOptions[0].value

const NAME = 'mergeMode'
const DATATEST = 'input-merge-mode'
const LABEL = i18n.t('Merge mode')
const HELPTEXT = i18n.t('Strategy to take when merging two objects')

const MergeMode = () => (
    <RadioGroupField
        name={NAME}
        label={LABEL}
        options={mergeModeOptions}
        helpText={HELPTEXT}
        dataTest={DATATEST}
        vertical
    />
)

export { MergeMode, defaultMergeModeOption }
