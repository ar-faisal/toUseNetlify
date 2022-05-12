import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function TextForm(props) {

    const handleUpClick = () => {
        if(text==='')
        {
            let var2="Enter text first!!!";
        props.alertfunc(var2,'yellow');
        }
        else{
        let var1="SUCCESS: Your text has been converted to upper case";
        props.alertfunc(var1,'green');

        let newText = text.toUpperCase();
        setText(newText);
        }
    }
    
    const handleLowClick = () => {
        if(text==='')
        {
            let var2="Enter text first!!!";
        props.alertfunc(var2,'yellow');
        }
        else{

        let var1="SUCCESS: Your text has been converted to lower case";
        props.alertfunc(var1,'green');
        let newText = text.toLowerCase();
        setText(newText);
        }
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const [text, setText] = useState('');

    /*for react bootstrap modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const closeWithReplace = () => {
       setShow(false);
        
        //for alert message
        let var0="SUCCESS: Your text has been replaced";
        props.alertfunc(var0);
       
        let var1=document.getElementById('textArea1').value;
        let var2=document.getElementById('textArea2').value;
        let var3=text.replaceAll(var1,var2)
        
        setText(var3);
         
    }
    function wordCounter(str) {
        
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        var count = str.split(' ').length;
        return count;
    }
    const clearFunc = () => {
        if(text==='')
        {
            let var2="Enter text first!!!";
        props.alertfunc(var2,'yellow');
        }
        else{

        let var1="SUCCESS: Your text has been cleared";
        props.alertfunc(var1,'green');
        setText('');
        }
    }
    function handleCopy() {
        if(text==='')
        {
            let var2="Enter text first!!!";
        props.alertfunc(var2,'yellow');
        }
        else{
        let var1="SUCCESS: Your text has been copied to clipboard";
        props.alertfunc(var1,'red');
        var copyText = document.getElementById('exampleFormControlTextarea1');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        }
    }   

    return (

        <>

            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <div className="form-group mb-5 mt-5">
                    <label htmlFor="exampleFormControlTextarea1" className="mb-2">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode ==='dark'?'grey':'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
                
                
                <Button variant="primary" className="mx-1" onClick={handleShow}>
                    replace text
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>TEXT REPLACER</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 pt-3">
                                    <h6>ENTER TEXT TO REPLACE:</h6>
                                </div>
                                <div className="col-md-6">
                                <textarea id="textArea1"></textarea>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 pt-3">
                                <h6>ENTER NEW TEXT:</h6>
                                </div>
                                <div className="col-md-6">
                                <textarea id="textArea2"></textarea>
                                </div>

                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={closeWithReplace}>
                            Replace All
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button className="btn btn-danger mx-1" onClick={clearFunc}>clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>copy to clipboard</button>
            </div>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <div className="mt-5">
                    <h4>Your text summary</h4>
                    <p>{wordCounter(text)} words and {text.length} characters</p>
                </div>
            </div>
        </>

    )
}
