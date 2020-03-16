import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import {
    DataImport,
    DataExport,
    EventExport,
    EventImport,
    GMLImport,
    MetadataDependencyExport,
    MetadataExport,
    MetadataImport,
    JobOverview,
} from '../../pages'

const Router = () => {
    return (
        <Switch>
            <Route path="/import/data" component={DataImport} />
            <Route path="/import/event" component={EventImport} />
            <Route path="/import/gml" component={GMLImport} />
            <Route path="/import/metadata" component={MetadataImport} />
            <Route path="/export/data" component={DataExport} />
            <Route path="/export/event" component={EventExport} />
            <Route
                path="/export/metadata-dependency"
                component={MetadataDependencyExport}
            />
            <Route path="/export/metadata" component={MetadataExport} />
            <Route path="/utils/job-overview" component={JobOverview} />
            <Redirect from="*" to="/import/data" />
        </Switch>
    )
}

export { Router }
