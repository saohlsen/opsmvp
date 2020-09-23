// import React, { useState} from 'react'
// import axios from 'axios'


// import Search from './components/Search'
// import Results from './components/Results'


// function App() {

//   const [state, setState] = useState({
//     s: "",
//     results: [],
//     selected: {},
//   })
//   const apiurl = "http://www.omdbapi.com/?apikey=fe6e7b38";
  
//   //search requst
//   const search = (e) => {
//     ///losten for keys
//     if(e.key === "Enter") {
//       axios(apiurl + "&s=" + state.s).then(({data}) => {
//         let results = data.Search;

//         //console.log(data)
//         setState(prevState => {
//           return {...prevState, results: results}
//         })
//       })
//     }
//   }


//   const handaleInput = (e) => {
//     let s = e.target.value;

//     setState(prevState => {
//       return { ...prevState, s: s}
//     })
//     //console.log(state.s)

//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Movie Search App</h1>  
//       </header>
//       <main>
//         <Search handaleInput={handaleInput} search={search}/>
//         <Results results={state.results} />
//       </main>
//     </div>
//   );
// }

// export default App;

