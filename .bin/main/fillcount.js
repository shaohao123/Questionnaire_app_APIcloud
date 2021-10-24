(function() {
	var Navitembtn = /*@__PURE__*/ (function(Component) {
		function Navitembtn(props) {
			Component.call(this, props);
			this.data = {
				checkedNoLimit: null,
				checkedOnce: null
			};
		}

		if (Component) Navitembtn.__proto__ = Component;
		Navitembtn.prototype = Object.create(Component && Component.prototype);
		Navitembtn.prototype.constructor = Navitembtn;
		Navitembtn.prototype.apiready = function() {
			this.addNavClickListener(); // 刚进到这个界面获取到之前选择的用户可填写次数 是哪一个 目的是把前面的两个圈圈标记上
			this.judgeFillCountState();
		};
		Navitembtn.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Navitembtn.prototype.judgeFillCountState = function() {
			_this = this;
			api.addEventListener(
				{
					name: "judgeFillCountState_name"
				},
				function(ret, err) {
					ret.value.key == "不限制" || ret.value.key == null
						? (_this.data.checkedNoLimit = true)
						: (_this.data.checkedOnce = true);
				}
			);
		};
		Navitembtn.prototype.radiogroupChanged = function(e) {
			api.sendEvent({
				name: "FillCountTimes",
				extra: {key: e.detail.value}
			});

			// api.closeWin()
		};
		Navitembtn.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "outside_frame"},
				apivm.h(
					"radio-group",
					{class: "radio-group", onChange: this.radiogroupChanged},
					apivm.h(
						"label",
						{class: "item"},
						apivm.h("radio", {checked: this.data.checkedNoLimit, value: "不限制"}),
						apivm.h("text", null, "不限制")
					),
					apivm.h(
						"label",
						{class: "item"},
						apivm.h("radio", {
							checked: this.data.checkedOnce,
							value: "每位用户可填写一次"
						}),
						apivm.h("text", null, "限制每名用户可填写一次")
					)
				)
			);
		};

		return Navitembtn;
	})(Component);
	Navitembtn.css = {
		".outside_frame": {margin: "16px 20px"},
		".item": {
			margin: "10px",
			borderBottom: "1px solid #e9ecf3",
			paddingBottom: "8px"
		},
		text: {fontSize: "15px"}
	};
	apivm.define("navitembtn", Navitembtn);
	apivm.render(apivm.h("navitembtn", null), "body");
})();
