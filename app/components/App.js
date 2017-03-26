// Hold game state in this component
var React = require('react');
var GameTable = require('./GameTable');
var GameButton = require('./GameButton');

var App = React.createClass({
    getInitialState: function() {
        let gameCells = this.initializeCells();
        return {cells: gameCells, generation: 0, run: false, runText: "Run"};
    },

    initializeCells: function() {
        let gameCells = (new Array(12)).fill(0);
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
        let gameCells = this.state.cells;
        gameCells[x][y] = gameCells[x][y]
            ? 0
            : 1;
        this.setState({cells: gameCells});
    },

    toggleRun: function() {
        let run = this.state.run;
        run = !run;
        let runText = run
            ? "Pause"
            : "Run";
        let intervalID = this.state.intervalID;
        if (run) {
            intervalID = setInterval(this.calculateGeneration, 500);
        } else {
            clearInterval(intervalID);
            intervalID = -1;
        }
        this.setState({run: run, runText: runText, intervalID: intervalID});
    },

    randomizeLife: function() {
        let gameCells = this.initializeCells();
        gameCells.forEach(function(row, x) {
            row.forEach(function(cell, y) {
                gameCells[x][y] = Math.floor(Math.random() * 4 / 3);
            }, this);
        }, this);
        this.setState({cells: gameCells});

    },

    calculateGeneration: function() {
        let generation = this.state.generation;
        let gameCells = this.state.cells;
        let newGameCells = this.initializeCells();
        gameCells.forEach(function(row, x) {
            row.forEach(function(cell, y) {
                newGameCells[x][y] = this.calculateCell(x, y);
            }, this);
        }, this);
        this.setState({
            cells: newGameCells,
            generation: ++generation
        });

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
                <div className="well">
                    <h1 className="text-center">Game of Life</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <GameTable cells={this.state.cells} onClick={this.toggleCell}/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-xs-3">
                            <GameButton text={this.state.runText} onClick={this.toggleRun}/>
                        </div>
                        <div className="col-xs-3">
                            <GameButton text="Clear" onClick={this.clearCells}/>
                        </div>
                        <div className="col-xs-3">
                            <GameButton text="Random" onClick={this.randomizeLife}/>
                        </div>
                        <div className="col-xs-3">
                            Generation: {this.state.generation}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
