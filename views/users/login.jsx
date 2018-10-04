var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <p>YOU WANT TO LOG IN?!?!?!?!</p>
          <form method="POST" action="/users/login">
            <div>
              name:<input name="name" type="text" />
            </div>
            <div>
              password:<input name="password" type="text" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
