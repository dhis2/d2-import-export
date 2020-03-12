import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { EventIdScheme as EventIdSchemeGeneric } from '../ElementSchemes'

const NAME = 'eventIdScheme'
const DATATEST = 'input-event-id-scheme'
const LABEL = i18n.t('Event ID scheme')

const EventIdScheme = () => (
    <EventIdSchemeGeneric name={NAME} label={LABEL} dataTest={DATATEST} />
)

export { EventIdScheme }
