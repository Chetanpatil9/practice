// import React, { useState } from 'react'

// const UseMemoHook = () => {
//     const ExpensiveFunction=()=>{
//         const [state1,setState1]=useState(0);
//         const [state2,setState2]=useState(0);

//         useMemo(()=>{
//         console.log("hlw i am expensive function.........");
//     },[])
//     }
//   return (
//     <>
//     <div>UseMemoHook:{state1} <br>{state2}</br>
//         {ExpensiveFunction()}
//         <button onClick={()=>setState1(state1+1)}>Increment</button>
//         <button>Decrement={()=>setState2(state2-1)}</button>
//     </div>
//     </>
//   )
// }




// export default useMemoHook

// problem statement :- 
// every time react manage each and evry function ets lots of everything so, how it Prevent then use useMemo