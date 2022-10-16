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
    wrapStyle,
    type,
    size,
    readOnly
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

    const sizeHandle = () => {
        switch (size) {
            case 'sm':
                return ' sm '
            case 'md':
                return ' md '
            case 'lg': 
                return ' lg '
            default:
                return ' lg '
        }
    }


    return (
        <div style={wrapStyle} className={"InputB" + isError() + isDisabled() + sizeHandle()}>
            <input type={type} readOnly={readOnly} style={inputStyle} name={name}  placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
        </div>
    )
}

export default InputB;