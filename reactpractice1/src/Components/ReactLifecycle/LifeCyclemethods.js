import React, { Component } from 'react'

class LifeCyclemethods extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    console.log("Hello world!! our component is successfully mounted");
  }
  componentDidUpdate(){
    console.log("Hello guys!! I am updated");
    alert("updated")
  }
  componentWillUnmount(){
    console.log("Component is unmounted");
  }

  increment(){
    this.setState({ count: this.state.count + 1})
  }


  render() {
    return (
      <div>LifeCyclemethods: 

        <div>{this.state.count}</div>

      <div><button onClick={()=>{this.increment()}}>Click Me !!</button></div>

         <div style={{color:'red'}}>{this.props.data}</div>
            
      </div>
    )
  }
}

export default LifeCyclemethods






































// import React, { Component } from 'react'

// class LifeCyclemethods extends Component {
//   constructor() {
//     super();
//     this.state = {
//         count:0
//     }
// }

//       componentDidMount(){
//         console.log("Hello world!! our component is successfully mounted");
//       }

//       componentWillUpdate(){
//         console.log("Hello guys!! I am updated");
//         alert("updated")
//       }

//       componentWillUnmount(){
//         console.log("component is unmounted");
//       }

//       increment(){
//         this.setState({count: this.state.count + 1})  //...count :- what ever previous value of count is going to add by one and will be asign to this count just will be updated the value.  // ajun functional component la evdh kahi krav nahi lagt fukt {count+1} sorted problem ok.
//       }

//       render(){
//         return(
           
//           <div>LifeCyclemethods: 
            
//             {/* <div>{this.state.count}</div> */}

//           <div><button onClick={()=> { this.increment() }}>Click Me !!</button></div>

//           {/* <div style={{color:'red'}}>{this.props.data}</div> */}
          
//           </div>
          

//           )
//       }
// }

// export default LifeCyclemethods