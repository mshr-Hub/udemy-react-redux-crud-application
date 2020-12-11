import React, { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = 'Hi, Tom!'
    // const dom = <h1 className="foo">{greeting}</h1>
    // return dom;

    // return <input type="button" value="button" onClick={() => {console.log('I am clicked.')}}/>;
    // return <input type="text" onChange={() => {console.log('I am changed.')}} />;

    // 返せるタグは一括りのみで、複数のタグを返すことはできいない。
    // return (
    //   <div>
    //     <label htmlFor="bar">bar</label>
    //     <input type="text" onChange={() => {console.log('I am changed.')}} />
    //   </div>
    // );

    // React.Flagment を使うと、余計なdivタグを出力させずに返すことができる。
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log('I am changed.')}} />
      </React.Fragment>
    );
  }
}

export default App;
