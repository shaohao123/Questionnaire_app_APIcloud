(function() {
	var CreatquestionZhu = /*@__PURE__*/ (function(Component) {
		function CreatquestionZhu(props) {
			Component.call(this, props);
			this.data = {
				// 单选，多选的选项
				options: ["", "", "", ""],
				// v-show 显示单选 多选 问答 评分 的
				choice: "judge",
				// 星星列表的个数
				starlist: [1, 2, 3, 4, 5],
				// 低分描述和高分描述
				lowscore: "",
				highscore: "",
				// 控制星星的
				value: 3,
				// 判断创建问卷详情的界面的题目有没有数据的
				formInfo: {
					singleTitle: null
				}
			};
		}

		if (Component) CreatquestionZhu.__proto__ = Component;
		CreatquestionZhu.prototype = Object.create(Component && Component.prototype);
		CreatquestionZhu.prototype.constructor = CreatquestionZhu;
		CreatquestionZhu.prototype.apiready = function() {
			this.addNavClickListener();
		};
		CreatquestionZhu.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		CreatquestionZhu.prototype.addOption = function() {
			this.data.options.push("");
		};
		CreatquestionZhu.prototype.deleteOption = function(index) {
			this.data.options.splice(index, 1);
		};
		CreatquestionZhu.prototype.choice_change = function(value) {
			this.data.choice = value;
			api.toast({
				msg: "你点击了" + value
			});
		};
		CreatquestionZhu.prototype.onconfirm = function(e) {
			api.toast({
				msg: e.detail.value
			});

			// 获取输入框的内容同时同步到低分描述 和高分描述的位置 ---暂未实现
			// this.lowscore = e
		};
		CreatquestionZhu.prototype.updateScore = function(item) {
			this.data.value = item;
		};
		CreatquestionZhu.prototype.ensureBth = function() {
			if (this.data.formInfo.singleTitle) {
				api.sendEvent({
					name: "singleData",
					extra: {
						key: "这里是点击确定按钮之后出现的内容,未来要放置单选题的标题和选项"
					}
				});
			}
			api.closeWin();
			console.log(this.data.formInfo.singleTitle);
		};
		CreatquestionZhu.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "all_bar", style: "height:100%;margin:15px 20px ;"},

				apivm.h(
					"view",
					{class: "choice_bar"},
					apivm.h(
						"view",
						{
							class: "single_style",
							onClick: function() {
								return this$1.choice_change("single");
							}
						},
						apivm.h(
							"view",
							{style: "margin: auto;"},
							apivm.h("img", {
								src: "../../image/danxuan.png",
								style: "height:20px;width:20px;margin:auto;"
							}),
							apivm.h("text", {style: "color:#fff;margin-top:6px"}, "单选")
						)
					),
					apivm.h(
						"view",
						{
							class: "single_style",
							onClick: function() {
								return this$1.choice_change("multiple");
							}
						},
						apivm.h(
							"view",
							{style: "margin: auto;"},
							apivm.h("img", {
								src: "../../image/duoxuan.png",
								style: "height:20px;width:20px;margin:auto;"
							}),
							apivm.h("text", {style: "color:#fff;margin-top:6px"}, "多选")
						)
					),
					apivm.h(
						"view",
						{
							class: "single_style",
							onClick: function() {
								return this$1.choice_change("ask");
							}
						},
						apivm.h(
							"view",
							{style: "margin: auto;"},
							apivm.h("img", {
								src: "../../image/pingfen.png",
								style: "height:20px;width:20px;margin:auto;"
							}),
							apivm.h("text", {style: "color:#fff;margin-top:6px"}, "问答")
						)
					),
					apivm.h(
						"view",
						{
							class: "single_style",
							onClick: function() {
								return this$1.choice_change("judge");
							}
						},
						apivm.h(
							"view",
							{style: "margin: auto;"},
							apivm.h("img", {
								src: "../../image/pingfen.png",
								style: "height:20px;width:20px;margin:auto;"
							}),
							apivm.h("text", {style: "color:#fff;margin-top:6px"}, "评分")
						)
					)
				),

				apivm.h(
					"scroll-view",
					{class: "content_bar", style: "flex:1"},

					apivm.h(
						"view",
						{
							class: "content_options",
							style: {display: this.data.choice === "single" ? "flex" : "none"}
						},
						apivm.h(
							"view",
							{class: "content_title"},
							apivm.h(
								"view",
								{style: "margin-top:20px;margin-bottom:5px"},
								apivm.h("text", null, "题目")
							),
							apivm.h(
								"view",
								null,
								apivm.h("textarea", {
									style: "height:120px;width:100%",
									class: "textarea",
									placeholder: "请输入题目名称(0/100)",
									maxlength: "100",
									autofocus: true,
									onInput: function(e) {
										if (typeof formInfo != "undefined") {
											formInfo.singleTitle = e.target.value;
										} else {
											this$1.data.formInfo.singleTitle = e.target.value;
										}
									},
									value:
										typeof formInfo == "undefined"
											? this.data.formInfo.singleTitle
											: formInfo.singleTitle
								})
							)
						),
						apivm.h(
							"view",
							{style: "margin-bottom:20px"},
							apivm.h("text", null, "选项")
						),
						(Array.isArray(this.data.options)
							? this.data.options
							: Object.values(this.data.options)
						).map(function(item$1, index$1) {
							return apivm.h(
								"view",
								{style: "flex-direction:row;margin-left:20px;margin-bottom:18px"},
								apivm.h("img", {
									src: "../../image/delete_btn.png",
									onClick: function() {
										return this$1.deleteOption(index$1);
									},
									style: "height:24px;width:24px;margin-right:8px"
								}),
								apivm.h("input", {
									name: "input",
									placeholder: "请输入选项内容(max40)",
									class: "form_item_con",
									style: "width:90%"
								})
							);
						}),
						apivm.h(
							"view",
							{onClick: this.addOption, style: "flex-direction:row;margin-left:20px;"},
							apivm.h("img", {
								src: "../../image/add_btn.png",
								style: "height:24px;width:24px;margin-right:8px"
							}),
							apivm.h("text", {onClick: this.addOption}, "添加选项")
						),

						apivm.h(
							"view",
							{class: "content_scope"},
							apivm.h(
								"view",
								{style: "margin-top:10px"},
								apivm.h("text", null, "题目设置")
							),
							apivm.h(
								"view",
								{
									style:
										"flex-direction:row;justify-content:space-between;margin-top:10px;margin-left:20px"
								},
								apivm.h(
									"view",
									null,
									apivm.h("text", {style: "font-size:14px;opacity:0.7;"}, "此题必填")
								),
								apivm.h(
									"view",
									null,
									apivm.h("switch", {
										style: "height:20px;",
										checked: true,
										color: "#3371ff",
										onchange: this.onchange
									})
								)
							)
						)
					),

					apivm.h(
						"view",
						{
							class: "content_options",
							style: {display: this.data.choice === "multiple" ? "flex" : "none"}
						},

						apivm.h(
							"view",
							{class: "content_title"},
							apivm.h(
								"view",
								{style: "margin-top:20px;margin-bottom:5px"},
								apivm.h("text", null, "题目")
							),
							apivm.h(
								"view",
								null,
								apivm.h("textarea", {
									style: "height:120px;width:100%",
									class: "textarea",
									placeholder: "请输入题目名称(0/100)",
									maxlength: "100",
									autofocus: true
								})
							)
						),
						apivm.h(
							"view",
							{style: "margin-bottom:20px"},
							apivm.h("text", null, "选项")
						),
						(Array.isArray(this.data.options)
							? this.data.options
							: Object.values(this.data.options)
						).map(function(item$1, index$1) {
							return apivm.h(
								"view",
								{style: "flex-direction:row;margin-left:20px;margin-bottom:18px"},
								apivm.h("img", {
									src: "../../image/delete_btn.png",
									onClick: function() {
										return this$1.deleteOption(index$1);
									},
									style: "height:24px;width:24px;margin-right:8px"
								}),
								apivm.h("input", {
									name: "input",
									placeholder: "请输入选项内容(max40)",
									class: "form_item_con",
									style: "width:90%"
								})
							);
						}),
						apivm.h(
							"view",
							{onClick: this.addOption, style: "flex-direction:row;margin-left:20px;"},
							apivm.h("img", {
								src: "../../image/add_btn.png",
								style: "height:24px;width:24px;margin-right:8px"
							}),
							apivm.h("text", {onClick: this.addOption}, "添加选项")
						),

						apivm.h(
							"view",
							{class: "content_scope"},
							apivm.h(
								"view",
								{style: "margin-top:10px"},
								apivm.h("text", null, "题目设置")
							),
							apivm.h(
								"view",
								{
									style:
										"flex-direction:row;justify-content:space-between;margin-top:10px;margin-left:20px"
								},
								apivm.h(
									"view",
									null,
									apivm.h("text", {style: "font-size:14px;opacity:0.7;"}, "此题必填")
								),
								apivm.h(
									"view",
									null,
									apivm.h("switch", {
										style: "height:20px;",
										checked: true,
										color: "#3371ff",
										onchange: this.onchange
									})
								)
							)
						)
					),

					apivm.h(
						"view",
						{
							class: "content_options",
							style: {display: this.data.choice === "ask" ? "flex" : "none"}
						},

						apivm.h(
							"view",
							{class: "content_title"},
							apivm.h(
								"view",
								{style: "margin-top:20px;margin-bottom:5px"},
								apivm.h("text", null, "题目")
							),
							apivm.h(
								"view",
								null,
								apivm.h("textarea", {
									style: "height:120px;width:100%",
									class: "textarea",
									placeholder: "请输入题目名称(0/100)",
									maxlength: "100",
									autofocus: true
								})
							)
						),
						apivm.h(
							"view",
							{style: "margin-bottom:6px"},
							apivm.h("text", null, "输入框提示")
						),
						apivm.h(
							"view",
							null,
							apivm.h("textarea", {
								style: "height:120px;width:100%",
								class: "textarea",
								placeholder: "默认提示(请输入)",
								maxlength: "100",
								autofocus: true
							})
						),

						apivm.h(
							"view",
							{class: "content_scope"},
							apivm.h(
								"view",
								{style: "margin-top:10px"},
								apivm.h("text", null, "题目设置")
							),
							apivm.h(
								"view",
								{
									style:
										"flex-direction:row;justify-content:space-between;margin-top:10px;margin-left:20px"
								},
								apivm.h(
									"view",
									null,
									apivm.h("text", {style: "font-size:14px;opacity:0.7;"}, "此题必填")
								),
								apivm.h(
									"view",
									null,
									apivm.h("switch", {
										style: "height:20px;",
										checked: true,
										color: "#3371ff",
										onchange: this.onchange
									})
								)
							)
						)
					),

					apivm.h(
						"view",
						{
							class: "content_options",
							style: {display: this.data.choice === "judge" ? "flex" : "none"}
						},

						apivm.h(
							"view",
							{class: "content_title"},
							apivm.h(
								"view",
								{style: "margin-top:20px;margin-bottom:5px"},
								apivm.h("text", null, "题目")
							),
							apivm.h(
								"view",
								null,
								apivm.h("textarea", {
									style: "height:120px;width:100%",
									class: "textarea",
									placeholder: "请输入题目名称(0/100)",
									maxlength: "100",
									autofocus: true
								})
							)
						),

						apivm.h(
							"view",
							{style: "width:75%;margin:auto"},
							apivm.h(
								"view",
								{style: "flex-direction: row;justify-content:space-between"},
								(Array.isArray(this.data.starlist)
									? this.data.starlist
									: Object.values(this.data.starlist)
								).map(function(item$1) {
									return apivm.h(
										"view",
										null,
										apivm.h("img", {
											src:
												"../../image/" +
												(item$1 <= this$1.data.value ? "starActive" : "star") +
												".png",
											style: "height:22px;width:22px;",
											onClick: function() {
												return this$1.updateScore(item$1);
											}
										})
									);
								})
							),
							apivm.h(
								"view",
								{
									style:
										"flex-direction: row;justify-content:space-between;margin-top:5px"
								},
								apivm.h(
									"view",
									null,

									apivm.h(
										"text",
										{
											onInput: function(e) {
												if (typeof lowscore != "undefined") {
													lowscore = e.target.value;
												} else {
													this$1.data.lowscore = e.target.value;
												}
											},
											value: typeof lowscore == "undefined" ? this.data.lowscore : lowscore
										},
										this.data.lowscore || "低分",
										" "
									)
								),
								apivm.h(
									"view",
									null,

									apivm.h(
										"text",
										{
											onInput: function(e) {
												if (typeof highscore != "undefined") {
													highscore = e.target.value;
												} else {
													this$1.data.highscore = e.target.value;
												}
											},
											value:
												typeof highscore == "undefined" ? this.data.highscore : highscore
										},
										this.data.highscore || "高分"
									)
								)
							)
						),

						apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{style: "margin:30px 0 20px 0"},
								apivm.h("text", null, "低分描述")
							),
							apivm.h("input", {
								type: "text",
								placeholder: "请输入(0/10)",
								style: "width:100%;font-size:13px;opecity:0.5",
								onconfirm: this.onconfirm,
								onInput: function(e) {
									if (typeof lowscore != "undefined") {
										lowscore = e.target.value;
									} else {
										this$1.data.lowscore = e.target.value;
									}
								},
								maxlength: "10",
								value: typeof lowscore == "undefined" ? this.data.lowscore : lowscore
							})
						),
						apivm.h(
							"view",
							null,
							apivm.h(
								"view",
								{style: "margin:20px 0 20px 0"},
								apivm.h("text", null, "高分描述")
							),
							apivm.h("input", {
								type: "text",
								placeholder: "请输入(0/10)",
								onInput: function(e) {
									if (typeof highscore != "undefined") {
										highscore = e.target.value;
									} else {
										this$1.data.highscore = e.target.value;
									}
								},
								style: "width:100%;font-size:13px;opecity:0.5",
								maxlength: "10",
								value: typeof highscore == "undefined" ? this.data.highscore : highscore
							})
						),

						apivm.h(
							"view",
							{class: "content_scope"},
							apivm.h(
								"view",
								{style: "margin-top:10px"},
								apivm.h("text", null, "题目设置")
							),
							apivm.h(
								"view",
								{
									style:
										"flex-direction:row;justify-content:space-between;margin-top:10px;margin-left:20px"
								},
								apivm.h(
									"view",
									null,
									apivm.h("text", {style: "font-size:14px;opacity:0.7;"}, "此题必填")
								),
								apivm.h(
									"view",
									null,
									apivm.h("switch", {
										style: "height:20px;",
										checked: true,
										color: "#3371ff",
										onchange: this.onchange
									})
								)
							)
						)
					)
				),

				apivm.h(
					"view",
					{class: "bottom_ensure_btn", onClick: this.ensureBth},
					apivm.h(
						"view",
						{class: "bottom_ensure_btn_inner"},
						apivm.h("text", {style: "color:#fff"}, "确定")
					)
				)
			);
		};

		return CreatquestionZhu;
	})(Component);
	CreatquestionZhu.css = {
		".choice_bar": {flexDirection: "row"},
		".single_style": {
			height: "76px",
			width: "80px",
			backgroundColor: "#3371ff",
			borderRadius: "5%",
			margin: "auto"
		},
		".content_bar": {},
		".content_title": {height: "160px", width: "100%"},
		".content_scope": {},
		".content_options": {margin: "20px 0 20px 0"},
		".bottom_ensure_btn": {alignItems: "center"},
		".bottom_ensure_btn_inner": {
			height: "50px",
			width: "90%",
			backgroundColor: "#3371ff",
			borderRadius: "50%",
			alignItems: "center",
			justifyContent: "center"
		}
	};
	apivm.define("creatQuestion_zhu", CreatquestionZhu);
	apivm.render(apivm.h("creatQuestion_zhu", null), "body");
})();
