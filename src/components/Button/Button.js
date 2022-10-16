import './Button.scss';
import {LoadingOutlined} from '@ant-design/icons';


const Button = ({
    disabled,
    load,
    text,
    variant,
    type,
    style,
    size,
    onClick
}) => {


    const variantHandle = () => {
        switch(variant) {
            case 'default':
                return ' default '
            case 'primary':
                return ' primary '
            case 'danger':
                return ' danger '
            case 'success':
                return ' success '
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

    const loadHandle = () => {
        if(load) {
            return ' load '
        } else {
            return ''
        }
    }
    


    return (
        <button onClick={onClick} style={style} className={"Button" + variantHandle() + sizeHandle() + loadHandle()} type={type} disabled={disabled}>
            {
                load ? (
                    <div className="Button__load">
                        <LoadingOutlined/>
                    </div>
                ) : null
            }
            <span className="Button__text">{text}</span>
        </button>
    )
}

export default Button;