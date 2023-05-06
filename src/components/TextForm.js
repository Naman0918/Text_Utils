import React, {useState} from 'react'
// Here use state is used to store the data at time t.
//  i.e it stores the data as soon as it is updated in the text box.
export default function TextForm(props) {
    const handleUpclick = ()=>{
        console.log("handleupclick was fired");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","Success");
    }
    const handleLoclick = ()=>{
      console.log("handleupclick was fired");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower case","Success");

  }

   const handleClearclick = ()=>{
      console.log("");
      let newText =("");
      setText(newText);
      props.showAlert("Cleared Text","Success");

  }

  // const handleCopy =()=>{
  //   var text =document.getElementById();
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // }

    const onChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text =" new text" --->This is the wroung way to change the text
    // setText=("new text") ---> This is the correct way to set text
  return (
    <div className='container' style={{color :props.mode === 'light' ? 'dark' : 'white'}}>
      <h1><b>{props.heading}</b></h1>
<div className="mb-3 ">
  <label for=" " className="form-label" ></label>
  <textarea className="form-control" value={text} placeholder='Enter the text here' style={{backgroundColor :props.mode === 'dark' ? 'light':'white'}} onChange={onChange} id="myBox" rows="8" ></textarea>
  {/* placeholder can also be used to write in the text box */}
</div>
<center>
   <button type="button" class="btn btn-outline-success m-3" onClick={handleLoclick}>Convert to Lower case</button>
   <button type="button" class="btn btn-outline-primary m-3" onClick={handleUpclick}>Convert to Upper case</button>
    <button type="button" class="btn btn-outline-danger m-3" onClick={handleClearclick}>Clear Text</button>
    {/* <button type="button" class="btn btn-outline-primary m-3" onClick={handleCopy}>Copy Text</button> */}

   </center>

   <div class="container my-3 " style={{Color:props.mode === 'dark' ? 'light':'cyan'}}>
      <h1>Your Text Summary</h1>
      <p>There are {text.split(" ").length-1} words and {text.length} letters in above text.</p>
      <p>Time required to read will be approx : {0.008 * (text.split(" ").length-1) * 60 } Seconds</p>
      <p>Time required to read will be approx : {0.008 * (text.split(" ").length-1) } Minutes</p>

    </div>
    </div>
    
  )
}
