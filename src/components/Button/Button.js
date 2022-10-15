import './Button.scss';

const Button = ({
    disabled,
    load,
    text,
    variant,
    type,
    style,
    size
}) => {


    const variantHandle = () => {
        switch(variant) {
            case 'default':
                return ' default '
            case 'primary':
                return ' primary '
            case 'danger':
                return ' danger '
            default:
                return ' default '
        }
    }

    const sizeHandle = () => {
        switch(size) {
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
        <button style={style} className={"Button" + variantHandle() + sizeHandle()} type={type} disabled={disabled}>
            <span className="Button__text">{text}</span>
        </button>
    )
}

export default Button;