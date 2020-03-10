import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'

import { SelectField } from '../Select'
import { eventIdSchemeOptions } from '../../utils/options'

const EventIdScheme = ({ dataTest }) => {
    return (
        <SelectField
            name="eventIdScheme"
            label={i18n.t('Event ID scheme')}
            options={eventIdSchemeOptions}
            dense
            dataTest={dataTest}
        />
    )
}

EventIdScheme.propTypes = {
    dataTest: PropTypes.string.isRequired,
}

export { EventIdScheme }
