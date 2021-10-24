(function() {
	var Indate = /*@__PURE__*/ (function(Component) {
		function Indate(props) {
			Component.call(this, props);
			this.data = {
				checked_permanent_judge: null,
				checked_you_decide_judge: null,
				time_show: null
			};
		}

		if (Component) Indate.__proto__ = Component;
		Indate.prototype = Object.create(Component && Component.prototype);
		Indate.prototype.constructor = Indate;
		Indate.prototype.apiready = function() {
			this.addNavClickListener(); // 问卷有效期 监听
			this.judgeValidPeriodState();
		};
		Indate.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Indate.prototype.judgeValidPeriodState = function() {
			api.pageParam.key == "永久有效" || api.pageParam.key == null
				? (this.data.checked_permanent_judge = true)
				: (this.data.checked_you_decide_judge = true);
		};
		Indate.prototype.update_indate = function(e) {
			api.sendEvent({
				name: "update_indate",
				extra: {key: e.detail.value}
			});
		};
		Indate.prototype.render = function() {
			return apivm.h(
				"view",
				{style: "margin:20px 25px"},

				apivm.h(
					"view",
					null,
					apivm.h(
						"radio-group",
						{onChange: this.update_indate},
						apivm.h(
							"label",
							{class: "distance"},
							apivm.h("radio", {
								value: "永久有效",
								checked: this.data.checked_permanent_judge
							}),
							apivm.h("text", null, "永久有效")
						),
						apivm.h(
							"label",
							{class: "distance"},
							apivm.h("radio", {
								value: "指定有效期",
								checked: this.data.checked_you_decide_judge
							}),
							apivm.h("text", null, "指定有效期")
						)
					)
				),

				apivm.h(
					"view",
					null,

					apivm.h(
						"view",
						{class: "row_show distance"},
						apivm.h("view", null, apivm.h("text", null, "开始时间")),
						apivm.h(
							"view",
							{class: "row_show", style: "margin-left:auto", onClick: this.start_time},
							apivm.h("view", null, apivm.h("text", null, "2021.08.27 16:45")),
							apivm.h(
								"view",
								{style: "margin:auto 5px"},
								apivm.h("img", {
									src: "../../image/jiantou.png",
									style: "width:15px ; height:15px"
								})
							)
						)
					),

					apivm.h(
						"view",
						{class: "row_show distance"},
						apivm.h("view", null, apivm.h("text", null, "结束时间")),
						apivm.h(
							"view",
							{class: "row_show", style: "margin-left:auto", onClick: this.end_time},
							apivm.h("view", null, apivm.h("text", null, "2021.08.30 16:45")),
							apivm.h(
								"view",
								{style: "margin:auto 5px"},
								apivm.h("img", {
									src: "../../image/jiantou.png",
									style: "width:15px ; height:15px"
								})
							)
						)
					)
				)
			);
		};

		return Indate;
	})(Component);
	Indate.css = {
		".row_show": {flexDirection: "row"},
		".distance": {
			marginBottom: "30px",
			borderBottom: "1px solid #e9ecf3",
			paddingBottom: "8px"
		}
	};
	apivm.define("indate", Indate);
	apivm.render(apivm.h("indate", null), "body");
})();
