import './InputB.scss';


const InputB = ({
    onChange,
    onBlur,
    value,
    disabled,
    error,
    placeholder,
    name,
    inputStyle,
    wrapStyle
}) => {

    const isError = () => {
        if(error) {
            return ' error '
        } else {
            return ''
        }
    }

    const isDisabled = () => {
        if(disabled) {
            return ' disabled '
        } else {
            return ''
        }
    }


    return (
        <div style={wrapStyle} className={"InputB" + isError() + isDisabled()}>
            <input style={inputStyle} name={name} type="text" placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
        </div>
    )
}

export default InputB;