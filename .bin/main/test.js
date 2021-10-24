(function() {
	var Test = /*@__PURE__*/ (function(Component) {
		function Test(props) {
			Component.call(this, props);
		}

		if (Component) Test.__proto__ = Component;
		Test.prototype = Object.create(Component && Component.prototype);
		Test.prototype.constructor = Test;
		Test.prototype.apiready = function() {};
		Test.prototype.render = function() {
			return apivm.h("view", null, apivm.h("question", {info: "zheshiyiduani"}));
		};

		return Test;
	})(Component);
	apivm.define("test", Test);
	apivm.render(apivm.h("test", null), "body");
})();
