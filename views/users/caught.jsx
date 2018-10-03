var React = require("react");

class Caught extends React.Component {
  render() {

    console.log("this props:", this.props);

    return (
      <html>
        <head />
        <body>
          <h1>Guess What You Caught?</h1>

        </body>
      </html>
    );
  }
}

module.exports = Caught;