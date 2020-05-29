import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import { hasValue, composeValidators } from '@dhis2/ui-forms'
import { ResourcePickerField } from '../index'
import { resourceTypes } from '../ResourcePicker/resourceTypes'

const NAME = 'selectedUsers'
const DATATEST = 'input-user-picker'
const LABEL = i18n.t('Users')
const LISTNAME = 'userPicker'
const FILTERLABEL = i18n.t('Filter users by name')
const ERRORMESSAGE = i18n.t('Something went wrong when loading the users!')
const RESOURCETYPE = resourceTypes.USER

const SINGLE_USER_VALIDATOR = selectedUsers =>
    selectedUsers.length == 0
        ? i18n.t('At least one user must be selected')
        : undefined

const SINGLE_EXACT_USER_VALIDATOR = selectedUsers =>
    selectedUsers.length != 1 ? i18n.t('One user must be selected') : undefined

const UserPicker = ({ multiSelect, show, ...rest }) => {
    const userValidator = multiSelect
        ? SINGLE_USER_VALIDATOR
        : SINGLE_EXACT_USER_VALIDATOR
    const validator = composeValidators(hasValue, userValidator)

    return (
        show && (
            <ResourcePickerField
                name={NAME}
                resourceType={RESOURCETYPE}
                errorMessage={ERRORMESSAGE}
                listName={LISTNAME}
                label={LABEL}
                filterLabel={FILTERLABEL}
                dataTest={DATATEST}
                multiSelect={multiSelect}
                validator={validator}
                withActions={true}
                {...rest}
            />
        )
    )
}

UserPicker.defaultProps = {
    multiSelect: true,
}

UserPicker.propTypes = {
    multiSelect: PropTypes.bool,
    show: PropTypes.bool,
}

export { UserPicker }
