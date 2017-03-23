var React = require('react');

var GameCell = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {},

    render: function() {
        return (
            <td className="active">&nbsp;</td>
        );
    }
});

module.exports = GameCell;
