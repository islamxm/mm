import './TextB.scss';

const TextB = ({
    onChange,
    value,
    wrapStyle,
    textStyle,
    placeholder,
    name,
    error,
}) => {

    const isError = () => {
        if(error) {
            return ' error '
        } else {
            return ''
        }
    }


    return (
        <div className={"TextB" + isError()} style={wrapStyle}>
            <textarea name={name} placeholder={placeholder} onChange={onChange} value={value}></textarea>
        </div>
    )
}

export default TextB;