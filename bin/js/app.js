// Generated by Haxe 4.0.5
(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Main = function() { };
Main.main = function() {
	ReactDOM.render(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_TicTacToe),{ }),window.document.getElementById("app"));
};
var react__$ReactType_ReactType_$Impl_$ = {};
react__$ReactType_ReactType_$Impl_$.fromString = function(s) {
	if(s == null) {
		return react__$ReactType_ReactType_$Impl_$.isNull();
	}
	return s;
};
react__$ReactType_ReactType_$Impl_$.fromComp = function(cls) {
	if(cls == null) {
		return react__$ReactType_ReactType_$Impl_$.isNull();
	}
	if(cls.__jsxStatic != null) {
		return cls.__jsxStatic;
	}
	return cls;
};
react__$ReactType_ReactType_$Impl_$.isNull = function() {
	window.console.error("Runtime value for ReactType is null." + " Something may be wrong with your externs.");
	return "div";
};
var view_Square = function(props) {
	React.Component.call(this,props);
};
view_Square.__super__ = React.Component;
view_Square.prototype = $extend(React.Component.prototype,{
	render: function() {
		return React.createElement(react__$ReactType_ReactType_$Impl_$.fromString("div"),{ onClick : this.props.onClick, className : "square"},React.createElement(react__$ReactType_ReactType_$Impl_$.fromString("span"),{ },this.props.value));
	}
});
var view_TicTacToe = function(props) {
	React.Component.call(this,props);
	this.state = this.initialState();
};
view_TicTacToe.__super__ = React.Component;
view_TicTacToe.prototype = $extend(React.Component.prototype,{
	initialState: function() {
		var _g = [];
		_g.push(null);
		_g.push(null);
		_g.push(null);
		_g.push(null);
		_g.push(null);
		_g.push(null);
		_g.push(null);
		_g.push(null);
		_g.push(null);
		return { xIsNextPlayer : true, previousActions : [{ squares : _g}], stepNumber : 0};
	}
	,handleSquareClick: function(i) {
		var previousActions = this.state.previousActions.slice(0,this.state.stepNumber + 1);
		var current = previousActions[previousActions.length - 1];
		var squares = current.squares.slice();
		if(this.defineWinner(squares) != null || squares[i] != null) {
			return;
		}
		squares[i] = this.state.xIsNextPlayer ? "X" : "O";
		this.setState({ previousActions : previousActions.concat([{ squares : squares}]), stepNumber : previousActions.length, xIsNextPlayer : !this.state.xIsNextPlayer});
	}
	,defineWinner: function(squares) {
		var lines = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
		var _g = 0;
		var _g1 = lines.length;
		while(_g < _g1) {
			var i = _g++;
			var a = lines[i][0];
			var b = lines[i][1];
			var c = lines[i][2];
			if(squares[a] != null && squares[a] == squares[b] && squares[a] == squares[c]) {
				return squares[a];
			}
		}
		return null;
	}
	,jumpTo: function(step) {
		this.setState({ xIsNextPlayer : step % 2 != 0 ? false : true, stepNumber : step, previousActions : this.state.previousActions});
	}
	,render: function() {
		var previousActions = this.state.previousActions;
		var current = previousActions[this.state.stepNumber];
		var winner = this.defineWinner(current.squares);
		var status = winner != null ? "Winner: " + winner : "Next player: " + (this.state.xIsNextPlayer ? "X" : "O");
		var tmp = react__$ReactType_ReactType_$Impl_$.fromString("div");
		var tmp1 = react__$ReactType_ReactType_$Impl_$.fromString("div");
		var tmp2 = react__$ReactType_ReactType_$Impl_$.fromString("div");
		var tmp3 = React.createElement(tmp1,{ className : "row"},React.createElement(tmp2,{ className : "col s12", id : "header"},React.createElement(react__$ReactType_ReactType_$Impl_$.fromString("h4"),{ },"oxo Tic Tac Toe Game oxo")));
		var tmp4 = react__$ReactType_ReactType_$Impl_$.fromString("div");
		var _g = [];
		var f = $bind(this,this.handleSquareClick);
		var tmp5 = function() {
			f(0);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 0, value : current.squares[0], onClick : tmp5}));
		var f1 = $bind(this,this.handleSquareClick);
		var tmp6 = function() {
			f1(1);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 1, value : current.squares[1], onClick : tmp6}));
		var f2 = $bind(this,this.handleSquareClick);
		var tmp7 = function() {
			f2(2);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 2, value : current.squares[2], onClick : tmp7}));
		var f3 = $bind(this,this.handleSquareClick);
		var tmp8 = function() {
			f3(3);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 3, value : current.squares[3], onClick : tmp8}));
		var f4 = $bind(this,this.handleSquareClick);
		var tmp9 = function() {
			f4(4);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 4, value : current.squares[4], onClick : tmp9}));
		var f5 = $bind(this,this.handleSquareClick);
		var tmp10 = function() {
			f5(5);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 5, value : current.squares[5], onClick : tmp10}));
		var f6 = $bind(this,this.handleSquareClick);
		var tmp11 = function() {
			f6(6);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 6, value : current.squares[6], onClick : tmp11}));
		var f7 = $bind(this,this.handleSquareClick);
		var tmp12 = function() {
			f7(7);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 7, value : current.squares[7], onClick : tmp12}));
		var f8 = $bind(this,this.handleSquareClick);
		var tmp13 = function() {
			f8(8);
		};
		_g.push(React.createElement(react__$ReactType_ReactType_$Impl_$.fromComp(view_Square),{ key : 8, value : current.squares[8], onClick : tmp13}));
		return React.createElement(tmp,{ className : "container"},tmp3,React.createElement(tmp4,{ className : "board card"},_g));
	}
});
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
view_Square.displayName = "Square";
view_TicTacToe.displayName = "TicTacToe";
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=app.js.map