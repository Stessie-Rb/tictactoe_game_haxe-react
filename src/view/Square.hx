package view;

import react.ReactComponent;
import react.ReactMacro.jsx;

typedef SquareProps = {
    var value: String;
    var onClick: Void->Void;
}

class Square extends ReactComponentOfProps<SquareProps> {
    public function new(props:SquareProps):Void {
        super(props);
    }

    override public function render():ReactElement {
        return jsx(
            <div onClick={props.onClick} className="col s4 square">
                <span>
                    {props.value}
                </span>
            </div>
        );    
    }
}