// Hold game state in this component
var React = require('react');
var GameTable = require('./GameTable');
var GameButton = require('./GameButton');

var App = React.createClass({
    getInitialState: function() {
        let gameCells = (new Array(10)).fill(0);
        gameCells = gameCells.map(function(subArray) {
            return (new Array(30)).fill(0);
        });
        gameCells[5][5] = 1;
        return {cells: gameCells};
    },

    toggleCell: function(x, y) {
        let gameCells = this.state.cells;
        gameCells[x][y] = !gameCells[x][y];
        this.setState({cells: gameCells});
    },

    componentDidMount: function() {},

    render: function() {
        return (
            <div>
                <h1>App</h1>
                <GameTable cells={this.state.cells} onClick={this.toggleCell}/>
                <GameButton/>
            </div>
        );
    }
});

module.exports = App;
