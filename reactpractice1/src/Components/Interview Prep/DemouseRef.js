import React,{useRef} from 'react'

const DemouseRef = () => {
    const InputNameRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log("hello");
        console.log(InputNameRef.current.value);
    }
  return (
    <div>DemouseRef
        <form>
            <input type="text" name="Name" ref={InputNameRef}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default DemouseRef

// explanation:-
// hook its allows us to directly dom 
// for giving this example.

/// DONE Correct Example Working Simple.