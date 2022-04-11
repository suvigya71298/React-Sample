import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{      
      let a=text.toUpperCase();
        setText(a);
    }
    const handleOnChange =(event)=>{        
        setText(event.target.value)
        
    }
    const [text, setText] = useState('');
    const [placeh, setPlaceh] = useState('Set Text Here');
    const handleLowClick =()=>{
      let a=text.toLowerCase();
      setText(a);
    }
    
  return (
    <>
    <div className='container'>                
          <h1 >{props.heading}</h1>     
          <div className="mb-3">      
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          placeholder={placeh}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p><b>{text.length==0 ? 0 :text.split(' ').length}</b> words and <b>{text.length}</b> character</p>
      <p><b>{text.length==0 ? 0 :0.008*text.split(' ').length}</b> Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
