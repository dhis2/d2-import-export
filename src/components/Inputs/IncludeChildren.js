import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import { Switch } from '../Switch'

const NAME = 'includeChildren'
const DATATEST = 'input-include-children'
const LABEL = i18n.t('Include children')

const IncludeChildren = ({ value }) => (
    <Switch name={NAME} label={LABEL} value={value} dataTest={DATATEST} />
)

IncludeChildren.propTypes = {
    value: PropTypes.bool.isRequired,
}

export { IncludeChildren }
