import React, { useEffect, useState } from 'react'
import { useConfig } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'

import { fetchAttributes } from '../../utils/helper'
import { dataElementIdSchemeOptions } from '../../utils/options'
import { Select } from '../Select'

const DataElementIdScheme = ({ dataTest }) => {
    const { baseUrl } = useConfig()
    const [loading, setLoading] = useState(true)
    const [schemes, setSchemes] = useState([])
    const [error, setError] = useState(undefined)

    useEffect(() => {
        fetchAttributes(`${baseUrl}/api/`, 'dataElementAttribute')
            .then(attributes => setSchemes(attributes))
            .catch(error => setError(error))
        setLoading(false)
    }, [])

    const validationText =
        error &&
        `${i18n.t(
            'Something went wrong when loading the additional data element ID schemes'
        )} : ${error.message}`

    const options = [...dataElementIdSchemeOptions, ...schemes]
    return (
        <Select
            name="dataElementIdScheme"
            label={i18n.t('Data element ID scheme')}
            options={options}
            dataTest={dataTest}
            loading={loading}
            validationText={validationText}
            error={!!error}
            dense
        />
    )
}

DataElementIdScheme.propTypes = {
    dataTest: PropTypes.string.isRequired,
}

export { DataElementIdScheme }