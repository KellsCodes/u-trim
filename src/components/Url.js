import React, { useState } from 'react';
import Display from './Display'

import * as api from '../api/index'

// class ShortUrl extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: "",
//             message: "",
//             data: [],
//             requestData: false
//         }
//     }

    // handleInputUrl = e => {
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }

    // handleBtnCopy = () => {
    //         let copyText = document.getElementById("input");
    //         copyText.select();
    //         copyText.setSelectionRange(0, 99999);
    //         document.execCommand("copy");
    //         // copyText.style.backgroundColor = "#000"
    //         return;
    // }

    // handleResetFunction = () => {
    //     this.setState({
    //         message: ""
    //     })
    // }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if(!this.state.input) {
    //         return
    //     }
    //     const urlInput = { input: this.state.input};
    //     try {
    //         this.setState({
    //             requestData: true,
    //         })
    //         const { data } = await api.createUrl(urlInput);
    //         if(data) {
    //             this.setState({
    //                 requestData: false,
    //                 data: [ ],
    //                 message: [ ]
    //             })
    //             if(!data.message){
    //                 this.setState({
    //                     data: [data],
    //                     requestData: false,
    //                     input: data.shortUrl,
    //                     message: ""
    //                 });
    //             }else {
    //                 this.setState({
    //                     message: data,
    //                     requestData: false
    //                 })
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         this.setState({
    //             message: {message: "Your network connection is poor!"},
    //             requestData: false
    //         })
    //     }
    // }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <input 
//                             onChange={this.handleInputUrl} 
//                             value={this.state.input} 
//                             id="input" 
//                             name="input" 
//                             type="text" 
//                             placeholder="Shorten your link"
//                         />
//                         <button id='action-btn'>Shorten</button>
//                     </form>
//                 </div>
//                 <p className="warning">this is warning container{}</p>
//                 <Display 
//                     data={this.state.data} 
//                     message={this.state.message}
//                     requestData={this.state.requestData}
//                     copy={this.handleBtnCopy}
//                     resetMessageBox = {this.handleResetFunction}
//                 />
//             </div>
//         )
//     }
// }

const inputUrl = {inputUrl: ""}
const ShortUrl = () => {
    const [message, setMessage] = useState([]);
    const [data, setData] = useState([]);
    const [requestData, setRequestData] = useState(false);
    const [input, setInput] = useState(inputUrl);

    const handleInputUrl = e => {
        setInput({
            [e.target.name]: e.target.value
        })
    }

    const handleBtnCopy = () => {
        let copyText = document.getElementById("input");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        // copyText.style.backgroundColor = "#000"
        return;
    }

    const handleResetFunction = () => {
        setMessage([ ]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!input.inputUrl) {
            setMessage([{message: "please input a URL to be shortedned!"}]);
            return;
        }
        // const urlInput = { input: this.state.input};
        try {
            setRequestData(true);
            const { data } = await api.createUrl(input);
            if(data) {
                setRequestData(false);
                setData([ ]);
                setMessage([ ]);
                if(!data.message){
                    setData([data]);
                    setRequestData(false);
                    setInput({inputUrl: data.shortUrl});
                    setMessage([ ]);
                }else {
                    setMessage(data);
                    setRequestData(false);
                }
            }
        } catch (error) {
            console.log(error);
            setMessage([ {message: "Your network connection is poor!"} ]);
            setRequestData(false);
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputUrl}
                        value={input.inputUrl}
                        id="input"
                        name="inputUrl"
                        type="text"
                        placeholder="Shorten your link"
                    />
                    <button id='action-btn'>Shorten</button>
                </form>
            </div>
            <p className="warning">this is warning container{ }</p>
            <Display
                data={ data }
                message={ message }
                requestData={ requestData }
                copy={ handleBtnCopy }
                resetMessageBox={ handleResetFunction }
            />
        </div>
    )
}

export default ShortUrl;