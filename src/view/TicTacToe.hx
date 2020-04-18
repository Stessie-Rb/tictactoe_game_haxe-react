package view;

import react.ReactComponent;
import react.ReactMacro.jsx;

typedef TicTacToeState = {
    var xIsNextPlayer: Bool;
    var previousActions: Array<{squares: Array<String>}>;
    var stepNumber: Int;
} 

class TicTacToe extends ReactComponentOfState<TicTacToeState> {
    public function new(props:Dynamic):Void{
        super(props);
        state = initialState();
    }

    public function initialState():TicTacToeState {
        return{
            xIsNextPlayer: true,
			previousActions: [{
				squares: [for(i in 0...9) null]
			}],
			stepNumber: 0
		}
    }

    public function handleSquareClick(i:Int):Void {
        var previousActions = state.previousActions.slice(0, state.stepNumber + 1);
        var current = previousActions[previousActions.length - 1];
        var squares = current.squares.copy();
        if (defineWinner(squares) != null || squares[i] != null) return;
        squares[i] = state.xIsNextPlayer ? 'X' : 'O';
        setState({
            previousActions: previousActions.concat([{
                squares: squares
            }]),
            stepNumber: previousActions.length,
            xIsNextPlayer: !state.xIsNextPlayer,
        });
    }
    function defineWinner(squares:Array<String>): String {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        for(i in 0...lines.length){
            var a = lines[i][0];
            var b = lines[i][1];
            var c = lines[i][2];
            if (squares[a] != null && squares[a] == squares[b] && squares[a] == squares[c]) return squares[a];
        }
        return null;
    }

    function jumpTo(step:Int):Void {
        setState({
            xIsNextPlayer: (step % 2 != 0) ? false : true,
            stepNumber: step,
            previousActions: state.previousActions
        });
    }

    override public function render():ReactElement {
        var previousActions = state.previousActions;
        var current = previousActions[state.stepNumber];
        var winner = defineWinner(current.squares);
        var status = winner != null ? 'Winner: $winner' : ('Next player: ' + (state.xIsNextPlayer ? 'X' : 'O'));

        return jsx(
            <div className="container">
                <div className="row">
                    <div className="col s12" id="header">
                        <h4>oxo Tic Tac Toe Game oxo</h4>
                    </div>
                </div>
                <div className="row">
                    <h6>{status}</h6>
                </div>
                <div className="row">
                    <div className="col s3">
                        <div className="row">
                            <for{i in 0...9}>
                                <Square value={current.squares[i]} onClick={this.handleSquareClick.bind(i)} key={i} />
                            </for>
                        </div>
                    </div>
                    <div className="col s9">
                    <if{state.stepNumber != 9 && winner == null}>
                        <ol>
                            <for {i in 0...state.previousActions.length}>
                                <HistoryAction key={i} index={i} onClick={this.jumpTo.bind(i)} />
                            </for>
                        </ol>
                    </if>   
                    <if{winner != null}>
                        <EndOfGame winner={winner} onClick={()->setState(initialState())}/>
                    </if>
                    </div>
                </div>
            </div>
        );
    }
}