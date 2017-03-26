var React = require('react');

var GameButton = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
    },

    render: function() {
        return (
          <button onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
});

module.exports = GameButton;
