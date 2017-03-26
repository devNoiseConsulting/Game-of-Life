// Hold game state in this component
var React = require('react');
var GameTable = require('./GameTable');
var GameButton = require('./GameButton');

var App = React.createClass({
    getInitialState: function() {
        let gameCells = this.initializeCells();
        return {cells: gameCells, run: false, runText: "Run"};
    },

    initializeCells: function() {
        let gameCells = (new Array(10)).fill(0);
        gameCells = gameCells.map(function(subArray) {
            return (new Array(30)).fill(0);
        });
        return gameCells;
    },

    clearCells: function() {
        let gameCells = this.initializeCells();
        this.setState({cells: gameCells});
    },

    toggleCell: function(x, y) {
        console.log("toggleCell", x, y);
        let gameCells = this.state.cells;
        gameCells[x][y] = gameCells[x][y]
            ? 0
            : 1;
        this.setState({cells: gameCells});
    },

    toggleRun: function() {
        console.log('toggleRun');
        let run = this.state.run;
        run = !run;
        let runText = run
            ? "Run"
            : "Pause";
        this.setState({run: run, runText: runText});
        this.calculateGeneration();
    },

    calculateGeneration: function() {
        let gameCells = this.state.cells;
        let newGameCells = this.initializeCells();
        gameCells.forEach(function(row, x) {
            row.forEach(function(cell, y) {
                newGameCells[x][y] = this.calculateCell(x, y);
            }, this);
        }, this);
        this.setState({cells: newGameCells});

    },

    calculateCell: function(x, y) {
        let gameCells = this.state.cells;
        let total = 0;

        let xEnd = ((x + 1) >= gameCells.length)
            ? gameCells.length
            : x + 2;
        let yEnd = ((y + 2) >= gameCells[x].length)
            ? gameCells[x].length
            : y + 2;

        let xStart = (x < 1)
            ? 0
            : x - 1;
        let yStart = (y < 1)
            ? 0
            : y - 1;

        for (i = xStart; i < xEnd; i++) {
            for (j = yStart; j < yEnd; j++) {
                total += gameCells[i][j];
            }
        }
        total -= gameCells[x][y];

        let cellLife = 0;
        if (gameCells[x][y]) {
            if ((total === 2) || (total === 3)) {
                cellLife = 1;
            }
        } else {
            if (total === 3) {
                cellLife = 1;
            }
        }
        return cellLife;
    },

    componentDidMount: function() {},

    render: function() {
        return (
            <div>
                <h1>App</h1>
                <GameTable cells={this.state.cells} onClick={this.toggleCell}/>
                <GameButton text={this.state.runText} onClick={this.toggleRun}/>
                <GameButton text="Clear" onClick={this.clearCells}/>
            </div>
        );
    }
});

module.exports = App;
