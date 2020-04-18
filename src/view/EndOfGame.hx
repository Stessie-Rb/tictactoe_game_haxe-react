package view;

import react.ReactComponent;
import react.ReactMacro.jsx;

typedef EofProps = {
    var winner: String;
    var onClick: Void->Void;
} 

class EndOfGame extends ReactComponentOfProps<EofProps> {
    public function new(props:Dynamic):Void{
        super(props);
    }

    override public function render():ReactElement {
        return jsx(
            <div>
                <h1>🏆</h1>
                <h3>{props.winner} won the game !</h3>
                <a className="waves-effect waves-light btn" onClick={props.onClick}><i className="material-icons right">play_arrow</i>Play again</a>
            </div>
        );
    }


}