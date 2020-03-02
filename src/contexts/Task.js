import React from 'react'
import i18n from '@dhis2/d2-i18n'

import {
    DataIcon,
    EventIcon,
    GMLIcon,
    MetadataImportIcon,
} from '../components/Icon'

const TaskContext = React.createContext(undefined)

const getNewestTask = tasks =>
    Object.keys(tasks)
        .map(k => tasks[k])
        .sort((a, b) => (a.created < b.created ? 1 : -1))[0]

const categoryTypes = [
    {
        key: 'data',
        importType: 'DATAVALUE_IMPORT',
        icon: <DataIcon />,
        label: i18n.t('Data'),
    },
    {
        key: 'event',
        importType: 'EVENT_IMPORT',
        icon: <EventIcon />,
        label: i18n.t('Event'),
    },
    {
        key: 'gml',
        importType: 'GML_IMPORT',
        icon: <GMLIcon />,
        label: i18n.t('GML'),
    },
    {
        key: 'metadata',
        importType: 'METADATA_IMPORT',
        icon: <MetadataImportIcon />,
        label: i18n.t('Metadata'),
    },
]

const allCategories = categoryTypes.map(({ importType }) => importType)

export { TaskContext, getNewestTask, categoryTypes, allCategories }
