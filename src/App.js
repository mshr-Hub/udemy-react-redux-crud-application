// import React, { Component } from 'react';
/** クラスコンポーネント */
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log('I am changed.')}} />
//       </React.Fragment>
//     );
//   }
// }

import React from 'react';
/** 関数(ファンクショナル)コンポーネント */
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
