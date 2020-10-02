


const LiMessage = () => {

    return (
        <li key={msg.id}>
            <span><h3>Message from {msg.User.firstName} {msg.User.lastName}</h3>
                {msg.message}</span>
            <span><button onClick={replyMsg}>REPLY</button></span>
            <span><button onClick={deleteMsg}>DELETE</button></span>
            <form>
                <input
                    type='text'
                    name={`reply-${msg.senderId}`}
                    value=''
                    onChange={(e) => onChangeHandler(msg.senderId)} />
                <button type='submit'>Send message</button>
            </form>
        </li>
    )
}