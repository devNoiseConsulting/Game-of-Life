var React = require('react');
var GameRow = require('./GameRow');

var GameTable = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {},

    render: function() {
        return (
            <table>
                <tbody>
                    {this.props.cells.map(function(row, i) {
                        return (<GameRow row={row} rowid={i} key={i.toString()}/>);
                    })}
                </tbody>
            </table>
        );
    }
});

module.exports = GameTable;
