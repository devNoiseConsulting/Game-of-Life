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
                    return (<GameCell cell={cell} rowid={rowId} cellid={i} key={keyId} onClick={this.props.onClick}/>);
                }, this)}
            </tr>
        );
    }
});

module.exports = GameRow;
