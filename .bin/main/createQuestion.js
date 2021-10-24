(function() {
	// 问卷题目类型
	var QUESTION_TYPE = [
		{
			lable: "单选题",
			value: "radio"
		},
		{
			lable: "多选题",
			value: "check"
		},
		{
			lable: "问答题",
			value: "ask"
		},
		{
			lable: "评分题",
			value: "score"
		}
	];

	var Score1 = /*@__PURE__*/ (function(Component) {
		function Score1(props) {
			Component.call(this, props);
			this.data = {
				list: [1, 2, 3, 4, 5],
				value: 2
			};
		}

		if (Component) Score1.__proto__ = Component;
		Score1.prototype = Object.create(Component && Component.prototype);
		Score1.prototype.constructor = Score1;
		Score1.prototype.apiready = function() {};
		Score1.prototype.updateScore = function(item) {
			this.fire("updateScore2", item);
			this.data.value = item;
		};
		Score1.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "score_con"},

				apivm.h(
					"view",
					{class: "score_star"},
					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item$1) {
						return apivm.h(
							"view",
							{class: "img_star"},
							apivm.h("img", {
								class: "score_img",
								src:
									"../../image/" +
									(item$1 <= this$1.data.value ? "starActive" : "star") +
									".png",
								onClick: function() {
									return this$1.updateScore(item$1);
								}
							})
						);
					})
				),

				apivm.h(
					"view",
					{class: "score_text"},
					apivm.h("text", null, "低分描述1"),
					apivm.h("text", null, "高分描述2")
				)
			);
		};

		return Score1;
	})(Component);
	Score1.css = {
		".score_star": {flexDirection: "row"},
		".score_img": {height: "30px", width: "30px"},
		".score_text": {
			flexDirection: "row",
			justifyContent: "space-between",
			backgroundColor: "#bfa"
		}
	};
	apivm.define("score1", Score1);

	var Createquestion = /*@__PURE__*/ (function(Component) {
		function Createquestion(props) {
			Component.call(this, props);
			this.data = {
				formInfo: {
					// sccore组件里定义的，可以不写
					title: null,
					// 数组里边对应着的是每有一个元素，就有一个delete的横条
					options: ["", ""],
					// “此项必填” 的开关
					isRequire: false,
					// 控制评分描述的几个星星亮的
					score: 2
				}
			};
			this.compute = {
				questionType: function() {
					return api.pageParam.type || null;
				},
				questionTypeName: function() {
					var this$1 = this;

					var cur = QUESTION_TYPE.find(function(item) {
						return item.value === this$1.questionType;
					});
					return cur.lable;
				}
			};
		}

		if (Component) Createquestion.__proto__ = Component;
		Createquestion.prototype = Object.create(Component && Component.prototype);
		Createquestion.prototype.constructor = Createquestion;
		Createquestion.prototype.apiready = function() {
			this.addNavClickListener();
		};
		Createquestion.prototype.addNavClickListener = function() {
			api.addEventListener({name: "navitembtn"}, function(ret, err) {
				api.closeWin();
			});
		};
		Createquestion.prototype.addOption = function() {
			this.data.formInfo.options.push(null);
		};
		Createquestion.prototype.removeOption = function(index) {
			this.data.formInfo.options.splice(index, 1);
		};
		Createquestion.prototype.updateScore = function(e) {
			this.data.formInfo.score = e.detail;
		};
		Createquestion.prototype.updateRequired = function(e) {
			this.data.formInfo.isRequire = e.detail.value;
		};
		Createquestion.prototype.clickSubmitBtn = function() {
			api.toast({msg: "确认提交啦~~~~~" + JSON.stringify(this.data.formInfo)});
		};
		Createquestion.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "add_question"},
				apivm.h(
					"scroll-view",
					{class: "add_question_con", "scroll-y": ""},
					apivm.h(
						"form",
						{class: "add_form"},

						apivm.h("text", null, this.questionType),

						apivm.h(
							"view",
							{class: "form_item form_item_title"},
							apivm.h("text", null, this.questionTypeName)
						),

						apivm.h(
							"view",
							{class: "form_item"},
							apivm.h("text", {class: "form_item_label"}, "题目"),
							apivm.h("input", {
								name: "input",
								placeholder: "请输入题目名称",
								class: "form_item_con"
							})
						),

						["radio", "check"].includes(this.questionType)
							? apivm.h(
									"view",
									{class: "form_item"},
									apivm.h("text", {class: "form_item_label"}, "选项"),

									(Array.isArray(this.data.formInfo.options)
										? this.data.formInfo.options
										: Object.values(this.data.formInfo.options)
									).map(function(item$1, index$1) {
										return apivm.h(
											"view",
											{class: "form_item_option"},
											apivm.h(
												"text",
												{
													onClick: function() {
														return this$1.removeOption(index$1);
													}
												},
												"delete"
											),
											apivm.h("input", {
												name: "input",
												placeholder: "请输入选项内容",
												class: "form_item_con"
											})
										);
									}),
									apivm.h("text", {onClick: this.addOption}, "+ 添加选项")
							  )
							: null,

						this.questionType === "ask"
							? apivm.h(
									"view",
									{class: "form_item"},
									apivm.h("text", {class: "form_item_label"}, "输入框提示"),
									apivm.h("input", {
										name: "input",
										placeholder: "默认提示'请输入'",
										class: "form_item_con"
									})
							  )
							: null,

						this.questionType === "score"
							? apivm.h(
									"view",
									{class: "form_item"},

									apivm.h("score1", {
										onUpdateScore2: this.updateScore,
										class: "form_item"
									}),

									apivm.h(
										"view",
										{class: "form_item"},
										apivm.h("text", {class: "form_item_label"}, "低分描述"),
										apivm.h("input", {
											name: "input",
											placeholder: "请输入",
											class: "form_item_con"
										})
									),

									apivm.h(
										"view",
										{class: "form_item"},
										apivm.h("text", {class: "form_item_label"}, "高分描述"),
										apivm.h("input", {
											name: "input",
											placeholder: "请输入",
											class: "form_item_con"
										})
									)
							  )
							: null,

						apivm.h(
							"view",
							{class: "form_item"},
							apivm.h("text", {class: "form_item_label"}, "题目设置"),
							apivm.h(
								"view",
								null,
								apivm.h("text", null, "此项必填"),

								apivm.h("switch", {onchange: this.updateRequired})
							)
						)
					)
				),
				apivm.h(
					"button",
					{onClick: this.clickSubmitBtn, class: "submit_btn"},
					"确定111111111"
				)
			);
		};

		return Createquestion;
	})(Component);
	Createquestion.css = {
		".add_question": {height: "100%", width: "100%"},
		".add_question_con": {flex: "1"},
		".form_item_option": {flexDirection: "row"},
		".form_item_title": {flexDirection: "row", alignItems: "center"},
		".type_icon": {marginRight: "12px"},
		".submit_btn": {
			height: "45px",
			lineHeight: "45px",
			background: "skyblue",
			color: "#fff"
		}
	};
	apivm.define("createQuestion", Createquestion);
	apivm.render(apivm.h("createQuestion", null), "body");
})();
