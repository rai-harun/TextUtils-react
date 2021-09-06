import { useState } from "react";

const TextForm = (props) => {
   const [text, setText] = useState('');

   const handleOnChange = (e)=>{
    // console.log(e.target.value)
    setText(e.target.value)
  }

   const handleUppercase = ()=>{
      // console.log("UPPERCASE button was clicked")
      if(text !== ''){
        setText(text.toUpperCase())
        props.showAlert("Changed to UPPERCASE!","success")
      } else{
        props.showAlert("Write something first before converting to UPPERCASE!","warning")
      }
   }
   
   const handleLowercase = ()=>{      
      if(text !== ''){
        setText(text.toLowerCase())
        props.showAlert("Changed to lowercase!","success")
      } else{
        props.showAlert("Write something first before converting to lowercase!","warning")
      }
   }

   const handleSpaceRemover = ()=>{

    if(text !== ''){
      // way1
      //  setText(text.trim())

      // way2
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "));
      // alert('Space removed');
      props.showAlert("Extra spaces have been removed!","success")
    } else{
      props.showAlert("Write something first before removing extra spaces!","warning")
    }
    
   }
   
   const handleTextClear = ()=>{
     setText("");
     props.showAlert("Text box cleared!","success");
   }

   const handleTextCopy = ()=>{
    if(text !== ''){
      var myTextBox = document.getElementById('myTextBox')
      myTextBox.select()
      myTextBox.setSelectionRange(0, 99999); //for mobile
      navigator.clipboard.writeText(myTextBox.value);
      props.showAlert("Text copied!","success")
    } else{
      props.showAlert("Write something first before copy it!","warning")
    }     
   }

  return (
    <>
    <div className="container my-4 " style={{color:props.mode === 'dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myTextBox"
          rows="8" placeholder="Enter text here" value={text} onChange={handleOnChange}
          style={{backgroundColor:props.mode === 'light'? 'white':props.textareaColor, color:props.mode === 'dark'? 'white':'black'}}
        ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mb-3 me-3" onClick={handleUppercase}>UPPERCASE</button>
      <button disabled = {text.length===0} className="btn btn-secondary mb-3 me-3" onClick={handleLowercase}>lowercase</button>
      <button disabled = {text.length===0} className="btn btn-warning mb-3 me-3" onClick={handleSpaceRemover}>Remove Whitespace</button>
      <button disabled = {text.length===0} className="btn btn-info mb-3 me-3" onClick={handleTextClear}>Clear Text</button>
      <button disabled = {text.length===0} className="btn btn-danger mb-3 me-3" onClick={handleTextCopy}>Copy Text</button>
    </div>

    <div className="container my-2" style={{color:props.mode === 'dark'? 'white':'black'}}>
      <h1>Your text summary</h1>
      {/* <p>{text.split(" ").length<2?0:text.trim().split(" ").length} words, {text.length} characters</p> */}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)} mins read</p>
      <h4>{text.length>0? text:'Write something the textbox above to preview here'}</h4>
    </div>
    </>
  );
};

export default TextForm;
