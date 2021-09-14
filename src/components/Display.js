const Display = (props) => {
    // console.log(props.requestData)
    // console.log(props.data.length)
    if(!props.requestData){
        if(props.message.length) {
            setTimeout(() => {
                // console.log(props.message)
                const { resetMessageBox } = props;
                resetMessageBox();
                if(!document.getElementById('message-alert')){
                    return;
                } else {
                    document.getElementById('message-alert').style.display = 'none';
                }
                
            }, 5000);
            const { message } = props;
            const messageDelivery = message.length ? message.map((item, i) => {
                return (
                    <h4 key={i} id='message-alert'>
                        {item.message}
                    </h4>
                )
            }) : null
            return (
                <div>
                    {messageDelivery}
                </div>
            )
        } else {
            const { data, copy } = props;
            const fullUrlDetails = data.length ? data.map((item, i) => {
                return (
                    <div className='url-board' key={i}>
                        <p id='mainurl'>{item.mainUrl.length <= 50 ? item.mainUrl : item.mainUrl.slice(0, 50)+'...'}</p>
                        <div className='url-display'>
                            <a href={`${item.mainUrl}`} target="_blank" rel="noreferrer">{item.shortUrl}</a>
                            <p id='copytext' onClick={()=> copy()}>Copy</p>
                        </div>
                    </div>
                )
            }) : null
            return (
                <div>
                    {fullUrlDetails}
                </div>
            )
        }
    }else {
        return (
            <div className="display-url">
                <div className="loading"></div>
            </div>
        )
    }
    
}

export default Display;