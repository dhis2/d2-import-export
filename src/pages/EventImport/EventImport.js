import React, { useContext, useState } from 'react'
import { useConfig } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { Button } from '@dhis2/ui-core'

// import s from './EventImport.module.css';
import { eventImportPage as p } from '../../utils/pages'
import { uploadFile } from '../../utils/helper'
import { testIds } from '../../utils/testIds'
import { helpText } from '../../utils/text'
import {
    formatOptions,
    defaultFormatOption,
    defaultOrgUnitIdSchemeOption,
    defaultEventIdSchemeOption,
} from '../../utils/options'
import { Page } from '../../components/Page'
import { FileUpload } from '../../components/FileUpload'
import { RadioGroup } from '../../components/RadioGroup'
import { Switch } from '../../components/Switch'
import { MoreOptions } from '../../components/MoreOptions'
import { EventIdScheme, OrgUnitIdScheme } from '../../components/ElementSchemes'
import { FormAlerts } from '../../components/FormAlerts'
import { TaskContext, getNewestTask } from '../../contexts/'

const EventImport = () => {
    const { event: eventTasks, addTask } = useContext(TaskContext)
    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState(undefined)
    const [format, setFormat] = useState(defaultFormatOption)
    const [dryRun, setDryRun] = useState(false)
    const [orgUnitIdScheme, setOrgUnitIdScheme] = useState(
        defaultOrgUnitIdSchemeOption
    )
    const [eventIdScheme, setEventIdScheme] = useState(
        defaultEventIdSchemeOption
    )
    const [alerts, setAlerts] = useState([])
    const { baseUrl } = useConfig()

    const onImport = () => {
        // validate
        const alerts = []
        const timestamp = new Date().getTime()

        setAlerts(alerts)

        if (!file) {
            alerts.push({
                id: `file-${timestamp}`,
                warning: true,
                message: i18n.t('An import file must be selected'),
            })
        }

        if (alerts.length != 0) {
            return
        }

        // send xhr
        const apiBaseUrl = `${baseUrl}/api/`
        const endpoint = 'events.json'
        const params = [
            `dryRun=${dryRun}`,
            `orgUnitIdScheme=${orgUnitIdScheme.value}`,
            `eventIdScheme=${eventIdScheme.value}`,
            `payloadFormat=${format.value}`,
            'skipFirst=true',
            'async=true',
        ].join('&')
        const url = `${apiBaseUrl}${endpoint}?${params}`

        uploadFile({
            url,
            file,
            format: format.value,
            type: 'EVENT_IMPORT',
            setProgress,
            setAlerts,
            addEntry: (id, entry) => addTask('event', id, entry),
        })
    }

    return (
        <Page
            title={p.name}
            desc={p.description}
            icon={p.icon}
            loading={progress}
            dataTest={testIds.EventImport.Page}
            summaryTask={getNewestTask(eventTasks)}
        >
            <FileUpload
                name="upload"
                file={file}
                setFile={setFile}
                dataTest={testIds.EventImport.FileUpload}
            />
            <RadioGroup
                name="format"
                label={i18n.t('Format')}
                options={formatOptions}
                setValue={setFormat}
                checked={format}
                dataTest={testIds.EventImport.format}
            />
            <Switch
                label={i18n.t('Dry run')}
                name="dryRun"
                checked={dryRun}
                setChecked={setDryRun}
                help={helpText.dryRun}
                dataTest={testIds.EventImport.dryRun}
            />
            <MoreOptions dataTest={testIds.EventImport.MoreOptions}>
                <EventIdScheme
                    selected={eventIdScheme}
                    setSelected={setEventIdScheme}
                    dataTest={testIds.EventImport.EventIdScheme}
                />
                <OrgUnitIdScheme
                    selected={orgUnitIdScheme}
                    setSelected={setOrgUnitIdScheme}
                    dataTest={testIds.EventImport.OrgUnitIdScheme}
                />
            </MoreOptions>
            <Button
                primary
                onClick={onImport}
                dataTest={testIds.EventImport.submit}
            >
                {i18n.t('Import')}
            </Button>
            <FormAlerts
                alerts={alerts}
                dataTest={testIds.EventImport.FormAlerts}
            />
        </Page>
    )
}

export { EventImport }