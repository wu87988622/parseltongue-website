import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="branding">ParseLtongue</h1>
          <span className="slogan">Anything is parsable</span>
        </header>
        <main>
          <form action="">
            <input className="input" type="text" />
            <button>Parse</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
