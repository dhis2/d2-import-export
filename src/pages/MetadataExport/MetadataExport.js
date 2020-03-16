import React from 'react'
import { useConfig } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { Form } from '@dhis2/ui-forms'

import {
    formatOptions,
    compressionOptions,
    defaultFormatOption,
    defaultCompressionOption,
} from '../../utils/options'
import {
    Format,
    Schemas,
    Compression,
    SkipSharing,
    ExportButton,
} from '../../components/Inputs'
import { Page, MetadataExportIcon } from '../../components/'
import { onExport } from './form-helper'

// PAGE INFO
const PAGE_NAME = i18n.t('Metadata export')
const PAGE_DESCRIPTION = i18n.t(
    'Export meta data like data elements and organisation units in the XML, JSON or CSV format.'
)
const PAGE_ICON = <MetadataExportIcon />

const initialValues = {
    checkedSchemas: [],
    format: defaultFormatOption,
    compression: defaultCompressionOption,
    skipSharing: false,
}

const MetadataExport = () => {
    const { baseUrl } = useConfig()
    const onSubmit = onExport(baseUrl)

    return (
        <Page
            title={PAGE_NAME}
            desc={PAGE_DESCRIPTION}
            icon={PAGE_ICON}
            dataTest="page-export-metadata"
        >
            <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                render={({ handleSubmit, form, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Schemas />
                        <Format availableFormats={formatOptions} />
                        <Compression
                            availableCompressions={compressionOptions}
                        />
                        <SkipSharing value={values.skipSharing} />
                        <ExportButton />
                    </form>
                )}
            />
        </Page>
    )
}

export { MetadataExport }
