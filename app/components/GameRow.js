var React = require('react');
var GameCell = require('./GameCell');

var GameRow = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {},

    render: function() {
        let rowId = this.props.rowid;
        return (
            <tr>
                {this.props.row.map(function(cell, i) {
                    let keyId = rowId + "-" + i.toString();
                    return (<GameCell cell={cell} key={keyId}/>);
                })}
            </tr>
        );
    }
});

module.exports = GameRow;
