var React = require("react");

class Catch extends React.Component {
  render() {

    console.log("this props:", this.props);

    return (
      <html>
        <head />
        <body>
          <h1>Catch a Pokemon!</h1>
            <form className="pokemon-form" method="POST" action="/users/inter">
              <div className="user-id">
              <input
                name="user_id"
                type="hidden"
                value={this.props.id}

              />
              </div>
              <div className="pokemon-id">
              Input random Pokemon ID:<input
                name="pokemon_id"
                type="integer"
              />
              </div>
              <input type="submit" value="Submit" />
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Catch;
