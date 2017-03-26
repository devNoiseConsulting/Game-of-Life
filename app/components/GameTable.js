var React = require('react');
var GameRow = require('./GameRow');

var GameTable = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {},

    render: function() {
        return (
            <table className="table table-bordered">
                <tbody>
                    {this.props.cells.map(function(row, i) {
                        return (<GameRow row={row} rowid={i} key={i.toString()} onClick={this.props.onClick}/>);
                    }, this)}
                </tbody>
            </table>
        );
    }
});

module.exports = GameTable;
