var React = require("react");

class Caught extends React.Component {
  render() {

    console.log("this props poke caught:", this.props.caught);
    let item = this.props.caught;


        let dropList = this.props.caught.map(caught=> {
            return <option name="pokemon_id" value = {caught.id}>{caught.name}</option>
        });

    return (
      <html>
        <head />
        <body>
          <h1>Guess What You Caught?</h1>
            <label>Select list</label>
             <select id = "myList">
             {dropList}
             </select>
        </body>
      </html>
    );
  }
}

module.exports = Caught;