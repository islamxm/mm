import './ChatMes.scss';

const ChatMes = ({id, message, icon, name, time, isMine}) => {

    const mine = () => {
        switch(isMine) {
            case '1': 
                return ''
            case '0':
                return ' mine '
        }
    }
    return (
        <div className={"ChatMes " + mine()}>
            <div className="ChatMes__el">
                <div className="ChatMes__el_body">
                    {message}
                </div>
                <div className="ChatMes__el_time">
                    {time}
                </div>
            </div>
        </div>
    )
}

export default ChatMes;