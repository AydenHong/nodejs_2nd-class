import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

class App extends Component {
 constructor(props){
   super(props)
   this.state={
     name:" ",
     age:""
   }
 }

 getData = (e)=>{
   e.preventDefault()
   fetch('http://localhost:3001/data')
   .then(res=>res.json())
   .then(resData => {
     console.log(resData)
     this.setState({
       name:resData[2].name,
       age:resData[2].age
     })
   }
   )}

 postData = (e)=>{
   e.preventDefault()
   fetch('http://localhost:3001')
   }

 render(){
   return(
     <div>
       <Zoom>
       <center>
       <Flip>
         <h3>My Cats List MySQL</h3>
       </Flip>
       <form style={{flex:1 , flexDirection:'row'}}>
         <input
           type = 'text'
           id = "name"
           placeholder = "이름"
          //  ref ={name=>this.input.name}
         />
         <input
           type = 'text'
           id = "age"
           placeholder = "나이"
          //  ref ={age=>this.input.age}
         />
         <button
         style={{width:'100px', height:'20px'}}
         onClick={this.postData.bind(this)}
         >강아지 등록</button>
         <button
         style={{width:'100px', height:'20px'}}
         onClick={this.getData.bind(this)}
         >강아지 조회</button>
       </form>
       </center>
       </Zoom>
     <Zoom>
       <span>{this.state.name}의 나이는 {this.state.age}살</span>
     </Zoom>
     </div>
   )
 }
}
export default App;

// import React,{Component} from 'react';
// import Zoom from 'react-reveal/Zoom';  //var Zoom = require('react-reveal/Zoom')
// import Flip from 'react-reveal/Flip';

// class App extends Component{ //클래스 앞글자는 대문자로
//   constructor(props){
//     super(props)
//     this.state={
//       data:[] //배열
//     }
//     console.log(this.state.data)
//   }
//   // componentDidMount(){
//   //   // this.setState({ //state값을 세팅한다 ->즉, 복사본.
//   //   //   data:"변화된 페이지"
//   //   // })
//   //   // console.log(this.state.data)
//   //   this.fetchData()
//   }
//   fetchData = ()=>{
//     fetch('http://localhost:3001/data')
//     .then(res => res.json())
//     .then(resData => {
//       this.setState({
//         data:resData
//       })
//       console.log(resData)
//     })
//   }
  
//     render(){
//       return(
//         <div>
//           <Zoom>
//           <center>
//           <Flip>
//             <h3>My Cats List MySQL</h3>
//           </Flip>
//           </center>
//           </Zoom>
//         </div>
//       )
//     }
//    }
//    export default App;