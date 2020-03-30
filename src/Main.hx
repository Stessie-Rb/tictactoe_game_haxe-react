package;

import react.ReactDOM;
import react.ReactMacro.jsx;

import view.TicTacToe;

class Main {
    static function main() {
        ReactDOM.render(jsx('<$TicTacToe/>'), js.Browser.document.getElementById('app'));
    }
}