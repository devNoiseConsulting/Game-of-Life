// Hold game state in this component
var React = require('react');
var GameTable = require('./GameTable');
var GameButton = require('./GameButton');

var App = React.createClass({
    getInitialState: function() {
        let gameCells = (new Array(20)).fill((new Array(30)).fill(0));
        return {cells: gameCells};
    },

    componentDidMount: function() {},

    render: function() {
        //console.log(this.state.cells);
        return (
            <div>
                <h1>App</h1>
                <GameTable cells={this.state.cells}/>
                <GameButton/>
            </div>
        );
    }
});

module.exports = App;
