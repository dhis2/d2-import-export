import React from 'react'
import { SvgIcon } from 'material-ui'
import { FormControl, FormLabel } from '../material-ui'
import s from './styles.module.css'
import i18n from '@dhis2/d2-i18n'
import { isValueNil } from '../../../helpers'

function FileUploadIcon() {
    return (
        <SvgIcon>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </SvgIcon>
    )
}

export default class FileField extends React.Component {
    onClick = () => {
        this.fileRef && this.fileRef.click()
    }

    onChange = () => this.props.onChange(this.props.name, this.fileRef.files[0])

    render() {
        const { selected, required, formMeta, dataTest } = this.props
        let label = this.props.label || i18n.t('Choose a file to upload')
        let helpText = this.props.helpText
        if (selected) {
            label = selected.name
        }
        if (required) {
            label += ' *'
            if (formMeta.submitted && isValueNil(selected)) {
                helpText = i18n.t('Required')
            }
        }

        return (
            <div data-test={dataTest}>
                <FormControl className={s.formControl} onClick={this.onClick}>
                    <input
                        type="file"
                        onChange={this.onChange}
                        ref={c => (this.fileRef = c)}
                        className={s.hiddenFileInput}
                    />
                    <FileUploadIcon className={s.button} />
                    <FormLabel className={s.formLabel}>{label}</FormLabel>
                </FormControl>
                {helpText && <p className={s.helpText}>{helpText}</p>}
            </div>
        )
    }
}
