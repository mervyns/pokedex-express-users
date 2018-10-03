var React = require("react");

class New extends React.Component {
  render() {
      const actionUrl = `/users/${this.props.user.id}/?_method=PUT`
    return (
      <html>
        <head />
        <body>
          <form method="POST" action={actionUrl}>
            <div>
              USER ID:<input name="userId" type="text" value={this.props.user.id} />
            </div>
            <div>
              POKEMON ID:<input name="pokemonId" type="text"/>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
