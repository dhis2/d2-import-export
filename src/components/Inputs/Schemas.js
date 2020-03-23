import React from 'react'
import { hasValue, composeValidators } from '@dhis2/ui-forms'
import { SchemasField } from '../../components/'
import { SINGLE_SCHEMA_VALIDATOR } from '../../components/Schemas/SchemasField'

const NAME = 'checkedSchemas'
const VALIDATOR = composeValidators(hasValue, SINGLE_SCHEMA_VALIDATOR)
const DATATEST = 'input-schemas'

const EXCLUDE_SCHEMAS = new Set([
    'analyticsTableHooks',
    'charts',
    'constants',
    'dataElementDimensions',
    'dataEntryForms',
    'dataSetNotificationTemplates',
    'dataStores',
    'documents',
    'eventCharts',
    'eventReports',
    'icons',
    'jobConfigurations',
    'messageConversations',
    'metadataVersions',
    'minMaxDataElements',
    'oAuth2Clients',
    'programDataElements',
    'programNotificationTemplates',
    'pushAnalysis',
    'reportTables',
    'reportingRates',
    'reports',
    'sections',
    'smsCommands',
    'sqlViews',
    'trackedEntityInstanceFilters',
    'validationNotificationTemplates',
])

const Schemas = () => (
    <SchemasField
        name={NAME}
        excludeSchemas={EXCLUDE_SCHEMAS}
        validator={VALIDATOR}
        checkedByDefault
        dataTest={DATATEST}
    />
)

export { Schemas }