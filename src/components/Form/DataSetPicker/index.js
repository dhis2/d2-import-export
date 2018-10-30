import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { FormLabel } from '../material-ui'
import { TextField, MenuItem } from 'material-ui'
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box'
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank'

import s from './styles.css'

const styles = {
    menuItem: {
        style: {
            padding: 0,
            minHeight: 24,
            lineHeight: '24px',
        },
        innerDivStyle: {
            padding: 0,
        },
    },
}

const Action = ({ label, children, onClick }) => (
    <div className={s.action} onClick={onClick}>
        {children}
        <div className={s.actionLabel}>{label}</div>
    </div>
)

export default class DataSetPicker extends React.Component {
    state = {
        filter: '',
    }

    onUpdateFilter = (evt, filter) => this.setState({ filter })

    onChange = value => {
        let list = this.props.selected
        if (list.includes(value)) {
            list = list.filter(v => v !== value)
        } else {
            list.push(value)
        }

        this.props.onChange(this.props.name, list)
    }

    filter() {
        return (
            <div className={s.filter}>
                <TextField
                    fullWidth={true}
                    hintText={i18n.t('filter data sets by name')}
                    value={this.state.filter}
                    onChange={this.onUpdateFilter}
                />
            </div>
        )
    }

    onSelectAll = () =>
        this.props.onChange(
            this.props.name,
            this.props.value.map(({ value }) => value)
        )
    onClearAll = () => this.props.onChange(this.props.name, [])

    actions() {
        return (
            <div className={s.actions}>
                <Action onClick={this.onSelectAll} label={i18n.t('Select All')}>
                    <CheckedIcon />
                </Action>
                <Action onClick={this.onClearAll} label={i18n.t('Clear All')}>
                    <UnCheckedIcon />
                </Action>
            </div>
        )
    }

    render() {
        const { value, selected } = this.props
        const filter = this.state.filter.toLowerCase()
        let values =
            filter.length === 0
                ? value
                : value.filter(({ label }) =>
                      label.toLowerCase().includes(filter)
                  )

        return (
            <div className={s.container}>
                <div className={s.header}>
                    <FormLabel className={s.formLabel}>
                        {i18n.t('Data sets')}
                    </FormLabel>
                </div>
                {this.filter()}
                {this.actions()}
                <div className={s.body}>
                    {values.map(({ value, label }) => (
                        <MenuItem
                            {...styles.menuItem}
                            key={`dateSetPicker-mi-${value}`}
                            value={value}
                            primaryText={label}
                            insetChildren={true}
                            onClick={() => this.onChange(value)}
                            leftIcon={
                                selected.includes(value) ? (
                                    <CheckedIcon />
                                ) : (
                                    <UnCheckedIcon />
                                )
                            }
                        />
                    ))}
                </div>
            </div>
        )
    }
}
