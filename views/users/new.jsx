var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <p>YOU WANT CREATE NEW USER?</p>
          <form method="POST" action="/users">
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

module.exports = New;
