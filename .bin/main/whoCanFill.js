(function() {
	var Whocanfill = /*@__PURE__*/ (function(Component) {
		function Whocanfill(props) {
			Component.call(this, props);
		}

		if (Component) Whocanfill.__proto__ = Component;
		Whocanfill.prototype = Object.create(Component && Component.prototype);
		Whocanfill.prototype.constructor = Whocanfill;
		Whocanfill.prototype.apiready = function() {
			this.addNavClickListener();
		};
		Whocanfill.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Whocanfill.prototype.checkboxgroupChanged = function() {
			api.toast({
				msg: "点击了公开可见"
			});
		};
		Whocanfill.prototype.department_btn = function() {
			api.toast({
				msg: "点击了部门"
			});
		};
		Whocanfill.prototype.inner_group_btn = function() {
			api.toast({
				msg: "点击了内部群"
			});
		};
		Whocanfill.prototype.contact_person_btn = function() {
			api.toast({
				msg: "点击了联系人"
			});
		};
		Whocanfill.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "bar", style: "margin:10px 25px"},

				apivm.h(
					"view",
					{class: "public_see row_show distance"},
					apivm.h("view", null, apivm.h("text", null, "公开可见")),
					apivm.h(
						"view",
						{style: " margin-left:auto"},
						apivm.h(
							"checkbox-group",
							{class: "group", onchange: this.checkboxgroupChanged},
							apivm.h("label", null, apivm.h("checkbox", {value: "public_saw"}))
						)
					)
				),

				apivm.h(
					"view",
					{class: "department row_show distance", onClick: this.department_btn},
					apivm.h("view", null, apivm.h("text", null, "部门")),
					apivm.h(
						"view",
						{class: "row_show", style: "margin-left:auto"},
						apivm.h("view", null, apivm.h("text", {style: "opacity:0.3"}, "请选择")),
						apivm.h(
							"view",
							{style: "width:16px; height:16px;margin:auto 5px"},
							apivm.h("img", {src: "../../image/jiantou.png"})
						)
					)
				),

				apivm.h(
					"view",
					{class: "inner_group row_show distance", onClick: this.inner_group_btn},
					apivm.h("view", null, apivm.h("text", null, "内部群")),
					apivm.h(
						"view",
						{class: "row_show", style: "margin-left:auto"},
						apivm.h("view", null, apivm.h("text", {style: "opacity:0.3"}, "请选择")),
						apivm.h(
							"view",
							{style: "width:16px; height:16px;margin:auto 5px"},
							apivm.h("img", {src: "../../image/jiantou.png"})
						)
					)
				),

				apivm.h(
					"view",
					{
						class: "contact_person row_show distance",
						onClick: this.contact_person_btn
					},
					apivm.h("view", null, apivm.h("text", null, "联系人")),
					apivm.h(
						"view",
						{class: "row_show", style: "margin-left:auto"},
						apivm.h("view", null, apivm.h("text", {style: "opacity:0.3"}, "请选择")),
						apivm.h(
							"view",
							{style: "width:16px; height:16px;margin:auto 5px"},
							apivm.h("img", {src: "../../image/jiantou.png"})
						)
					)
				)
			);
		};

		return Whocanfill;
	})(Component);
	Whocanfill.css = {
		".row_show": {flexDirection: "row"},
		".distance": {
			margin: "25px 0 0 0",
			paddingBottom: "8px",
			borderBottom: "1px solid #E9ECF3"
		},
		text: {fontSize: "16px"}
	};
	apivm.define("whoCanFill", Whocanfill);
	apivm.render(apivm.h("whoCanFill", null), "body");
})();
