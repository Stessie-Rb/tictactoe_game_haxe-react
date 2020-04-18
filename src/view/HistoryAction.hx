package view;

import react.ReactComponent;
import react.ReactMacro.jsx;

typedef HistoryActionProps = {
    var index : Int;
    var onClick : Void -> Void;
}

class HistoryAction extends ReactComponentOfProps<HistoryActionProps> {
    public function new(props:HistoryActionProps):Void {
        super(props);
    }

    override public function render():ReactElement {
        var description = props.index == 0 ?'Game starts' : 'Move #${props.index}';
        return jsx(
            <li key={props.index}>
                <a href="#" onClick={props.onClick}>{description}</a>
            </li>
        );
    }
}