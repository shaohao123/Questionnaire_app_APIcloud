(function() {
	var Quesanalysis = /*@__PURE__*/ (function(Component) {
		function Quesanalysis(props) {
			Component.call(this, props);
			this.data = {
				type: "dataAnalysisControl"
			};
		}

		if (Component) Quesanalysis.__proto__ = Component;
		Quesanalysis.prototype = Object.create(Component && Component.prototype);
		Quesanalysis.prototype.constructor = Quesanalysis;
		Quesanalysis.prototype.apiready = function() {
			this.addNavClickListener();
			this.initData(false);
		};
		Quesanalysis.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Quesanalysis.prototype.edit = function() {
			api.toast({
				msg: "点击了{编辑}"
			});
		};
		Quesanalysis.prototype.share = function() {
			api.toast({
				msg: "点击了{分享}"
			});
		};
		Quesanalysis.prototype.dataAnalysis = function() {
			(this.data.type = "dataAnalysisControl"),
				api.toast({
					msg: "点击了{数据统计}"
				});
		};
		Quesanalysis.prototype.submitRecord = function() {
			api.toast({
				msg: "点击了{提交记录}"
			}),
				(this.data.type = "submitRecordControl");
		};
		Quesanalysis.prototype.ExportToMail = function() {
			api.toast({
				msg: "点击了{导出数据到邮箱}"
			});
		};
		Quesanalysis.prototype.initData = function(loadMore) {
			var that = this;
			var skip = that.dataList ? that.dataList.length : 0;
			var dataList = [];
			for (var i = 0; i < 20; i++) {
				dataList[i] = {
					title: "项目" + (i + skip),
					subtitle: "这里是子标题"
				};
			}
			var listView = document.getElementById("listView");
			if (loadMore) {
				that.dataList = that.dataList.concat(dataList);
				listView.insert({
					data: dataList
				});
			} else {
				that.dataList = dataList;
				listView.load({
					data: dataList
				});
			}
		};
		Quesanalysis.prototype.onscrolltolower = function() {
			this.initData(true);
		};
		Quesanalysis.prototype.itemClick = function(e) {
			api.alert({
				msg: "当前项索引：" + e.currentTarget.index + "  frame"
			});
		};
		Quesanalysis.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				null,

				apivm.h(
					"view",
					{class: "header_bg"},
					apivm.h(
						"view",
						{class: "header_textandicon"},
						apivm.h(
							"view",
							{class: "header_describe"},
							apivm.h(
								"text",
								{style: "color:#fff;font-size:18px;font-weight:bold"},
								" 问卷标题"
							)
						),
						apivm.h(
							"view",
							{style: "flex-direction:row; justify-content: space-between; "},

							apivm.h(
								"view",
								{class: "header_"},
								apivm.h(
									"text",
									{style: "color:#fff;font-size:12px"},
									"创建时间：？？？？"
								),
								apivm.h(
									"text",
									{style: "color:#fff;font-size:12px"},
									"总回收量：？？？？"
								)
							),

							apivm.h(
								"view",
								{style: "flex-direction:row;"},
								apivm.h(
									"view",
									{
										style:
											"height:34px; width:54px; border-radius:50%; border:1px solid #fff;margin-right:8px;",
										onClick: this.edit
									},
									apivm.h("img", {
										src: "../../image/edit.png",
										style: "hight:20px; width:20px; margin:auto"
									})
								),
								apivm.h(
									"view",
									{
										style:
											"height:34px; width:54px; border-radius:50%; border:1px solid #fff ",
										onClick: this.share
									},
									apivm.h("img", {
										src: "../../image/share.png",
										style: "hight:20px; width:20px; margin:auto"
									})
								)
							)
						)
					)
				),

				apivm.h(
					"view",
					{style: "background-color:#8eb2f5"},
					apivm.h(
						"view",
						{class: "middle_bar"},
						apivm.h(
							"view",
							{class: "middle_tab"},
							apivm.h(
								"view",
								{onClick: this.dataAnalysis},
								apivm.h(
									"text",
									{style: "height:30px;color:#FFF;font-weight:bold"},
									"数据统计"
								)
							),
							apivm.h(
								"view",
								{onClick: this.submitRecord},
								apivm.h(
									"text",
									{style: "height:30px;color:#FFF;font-weight:bold "},
									"提交记录"
								)
							)
						)
					)
				),

				apivm.h(
					"view",
					{class: "middle_and_bottom", style: "width:100%; height:100%"},
					apivm.h(
						"scroll-view",
						{class: "middle_all", style: "flex:1;"},

						apivm.h(
							"view",
							{
								style: {
									display: this.data.type === "dataAnalysisControl" ? "flex" : "none"
								}
							},
							apivm.h(
								"scroll-view",
								{style: "padding:20px 40px 10px 40px;"},

								apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h(
											"text",
											{style: "font-size:17px;font-weight: bold; "},
											"1.(单选题)你的名字"
										)
									),
									apivm.h(
										"view",
										{style: "margin-top:8px"},
										apivm.h("text", {style: "font-size:12px; opacity:0.3"}, "8次填写")
									),

									apivm.h(
										"view",
										null,
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "0-10岁")),
												apivm.h("view", null, apivm.h("text", null, "5(17)%"))
											),
											apivm.h("slider", {value: "17"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "10-20岁")),
												apivm.h("view", null, apivm.h("text", null, "1(3)%"))
											),
											apivm.h("slider", {value: "3"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "20-30岁")),
												apivm.h("view", null, apivm.h("text", null, "20(69)%"))
											),
											apivm.h("slider", {value: "90"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "30-40岁")),
												apivm.h("view", null, apivm.h("text", null, "3(10)%"))
											),
											apivm.h("slider", {value: "10"})
										)
									)
								),

								apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h(
											"text",
											{style: "font-size:17px; font-weight: bold;"},
											"2.(多选题)他的名字"
										)
									),
									apivm.h(
										"view",
										{style: "margin-top:8px"},
										apivm.h("text", {style: "font-size:12px; opacity:0.3"}, "8次填写")
									),

									apivm.h(
										"view",
										null,
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "0-10岁")),
												apivm.h("view", null, apivm.h("text", null, "5(17)%"))
											),
											apivm.h("slider", {value: "17"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "10-20岁")),
												apivm.h("view", null, apivm.h("text", null, "1(3)%"))
											),
											apivm.h("slider", {value: "3"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "20-30岁")),
												apivm.h("view", null, apivm.h("text", null, "20(69)%"))
											),
											apivm.h("slider", {value: "90"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "30-40岁")),
												apivm.h("view", null, apivm.h("text", null, "3(10)%"))
											),
											apivm.h("slider", {value: "10"})
										)
									)
								),

								apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h(
											"text",
											{style: "font-size:17px; font-weight: bold;"},
											"3.(评分题)我的名字"
										)
									),
									apivm.h(
										"view",
										{style: "margin-top:8px"},
										apivm.h("text", {style: "font-size:12px; opacity:0.3"}, "8次填写")
									),

									apivm.h(
										"view",
										null,
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "0-10岁")),
												apivm.h("view", null, apivm.h("text", null, "5(17)%"))
											),
											apivm.h("slider", {value: "17"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "10-20岁")),
												apivm.h("view", null, apivm.h("text", null, "1(3)%"))
											),
											apivm.h("slider", {value: "3"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "20-30岁")),
												apivm.h("view", null, apivm.h("text", null, "20(69)%"))
											),
											apivm.h("slider", {value: "90"})
										),
										apivm.h(
											"view",
											{style: "margin-top:10px"},
											apivm.h(
												"view",
												{style: "flex-direction:row; justify-content:space-between"},
												apivm.h("view", null, apivm.h("text", null, "30-40岁")),
												apivm.h("view", null, apivm.h("text", null, "3(10)%"))
											),
											apivm.h("slider", {value: "10"})
										)
									)
								)
							)
						),

						apivm.h(
							"view",
							{
								style: {
									display: this.data.type === "submitRecordControl" ? "flex" : "none"
								}
							},
							apivm.h(
								"list-view",
								{
									id: "listView",
									class: "main",
									"enable-back-to-top": true,
									onscrolltolower: this.onscrolltolower,
									style: "padding:20px 0 0 40px;",
									$bindCell_: function(celltype, item, index) {
										return apivm.h(
											"cell",
											{class: "cell", onclick: this$1.itemClick},
											apivm.h(
												"view",
												{style: "flex-direction:row;"},
												apivm.h(
													"view",
													null,
													apivm.h("img", {src: "../../image/avatar_demo.png"})
												),
												apivm.h(
													"view",
													{style: "margin-left:10px"},
													apivm.h("text", {class: "title"}, item.title),
													apivm.h("text", {class: "subtitle"}, item.subtitle)
												)
											)
										);
									}
								},

								apivm.h(
									"list-footer",
									{class: "footer"},
									apivm.h("text", null, "加载中...")
								)
							)
						)
					),

					apivm.h(
						"view",
						{
							style:
								"height:46px; width:90%; background-color:#3371FF; border-radius:50%; margin: auto; bottom:6px",
							onClick: this.ExportToMail
						},
						apivm.h("text", {style: "margin:auto;color:#fff; "}, "导出数据到邮箱")
					)
				)
			);
		};

		return Quesanalysis;
	})(Component);
	Quesanalysis.css = {
		".header_bg": {
			background: "url(../../image/questionAnalysisBgc.png)",
			height: "170px",
			width: "100%"
		},
		".header_textandicon": {padding: "20px 20px 0px 20px"},
		".header_describe": {margin: "14px 0 10px -5px"},
		".middle_bar": {margin: "10px"},
		".middle_tab": {flexDirection: "row", justifyContent: "space-around"},
		".main": {width: "100%", height: "100%"},
		".cell": {
			padding: "8px",
			height: "60px",
			borderBottom: "0.5px solid #8eb2f5",
			backgroundColor: "#fff"
		},
		".cell:active": {backgroundColor: "#ddd"},
		".title": {fontWeight: "bold", fontSize: "17px", color: "#000"},
		".subtitle": {color: "#333", opacity: "0.5", fontSize: "13px"},
		".footer": {justifyContent: "center", alignItems: "center"}
	};
	apivm.define("quesAnalysis", Quesanalysis);
	apivm.render(apivm.h("quesAnalysis", null), "body");
})();
