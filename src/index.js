import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { init } from 'd2/lib/d2'
import './locales'
import './index.css'
import App from './App'
import { store } from './store'
import { initApi } from './helpers/api'
import * as serviceWorker from './serviceWorker'

/**
 * Initialize d2
 */

const { REACT_APP_DHIS2_BASE_URL } = process.env

init({
    baseUrl: `${REACT_APP_DHIS2_BASE_URL}/api/`,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
})
    .then(initApi)
    .then(() => {
        /**
         * Initialize material ui theme
         */

        lightBaseTheme.palette.primary1Color = '#4c708c'
        lightBaseTheme.palette.primary2Color = '#4c708c'
        lightBaseTheme.palette.primary3Color = '#4c708c'
        lightBaseTheme.palette.pickerHeaderColor = '#4c708c'

        return getMuiTheme(lightBaseTheme)
    })
    .then(muiTheme => {
        ReactDOM.render(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </MuiThemeProvider>
            </Provider>,
            document.getElementById('root')
        )
    })

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */

serviceWorker.unregister()
