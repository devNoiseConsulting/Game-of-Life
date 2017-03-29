var React = require('react');

var GameCell = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {},

    handleClick: function(e) {
        this.props.onClick(this.props.rowid, this.props.cellid);
    },

    render: function() {
        let active = this.props.cell;
        let className = (active > 0)
            ? 'alive'
            : '';
        return (
            <td className={className} onClick={this.handleClick}>&nbsp;</td>
        );
    }
});

module.exports = GameCell;
