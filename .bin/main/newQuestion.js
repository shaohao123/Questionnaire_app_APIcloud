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

	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);

			if (enumerableOnly) {
				symbols = symbols.filter(function(sym) {
					return Object.getOwnPropertyDescriptor(object, sym).enumerable;
				});
			}

			keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};

			if (i % 2) {
				ownKeys(Object(source), true).forEach(function(key) {
					_defineProperty(target, key, source[key]);
				});
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
			} else {
				ownKeys(Object(source)).forEach(function(key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					);
				});
			}
		}

		return target;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	//打开tabLayout布局
	function openTabLayout(name, url, title, pageParam, barStyle) {
		api.openTabLayout({
			name: name,
			url: url,
			title: title,
			hideNavigationBar: false,
			// 传递数据的方式除了 sendEvent-eventListener  之外，pageparam也可以传递数据，不过一般用于传递openwin或者actionsheet的这种序号的数据
			pageParam: pageParam || null,
			navigationBar: _objectSpread2(
				{
					background: "#3371ff",
					color: "#fff",
					fontsize: 20,
					fontWeight: 500,
					leftButtons: [
						{
							// iconPath: 'widget://image/back.png',
							// iconPath: 'widget:./image/back.png',
							iconPath: "../../image/back.png",
							fontsize: 30,
							width: "5px",
							height: "5px"
						}
					]
				},

				barStyle
			)
		});
	}

	var Question = /*@__PURE__*/ (function(Component) {
		function Question(props) {
			Component.call(this, props);
			this.data = {
				// 下边这个是动态的亮的星星的个数
				value: 3,
				//
				showSingle: 1,
				showMultiple: 2,
				showAsk: 3,
				showJudge: 4
			};
		}

		if (Component) Question.__proto__ = Component;
		Question.prototype = Object.create(Component && Component.prototype);
		Question.prototype.constructor = Question;
		Question.prototype.apiready = function() {
			// 刚返回这个接麦你的时候就接收到父组件的参数
			this.initInfo();
		};
		Question.prototype.initInfo = function() {
			console.log("输出");
		};
		Question.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				null,
				apivm.h(
					"view",
					{style: "margin:10px 25px "},
					apivm.h(
						"scroll-view",
						null,

						this.props.info.show.isShowSingle === "show"
							? apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h("text", {style: "font-size:17px; "}, "1.(单选题)你的名字")
									),
									apivm.h(
										"view",
										null,
										apivm.h(
											"view",
											{style: "opacity:0.5;"},
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项1")
											),
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项2")
											),
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项3")
											),
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项4")
											)
										)
									)
							  )
							: null,

						this.props.info.show.isShowMultiple === "show"
							? apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h("text", {style: "font-size:17px;"}, "2.(多选题)你的名字")
									),
									apivm.h(
										"view",
										null,
										apivm.h(
											"view",
											{style: "opacity:0.5;"},
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项1")
											),
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项2")
											),
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项3")
											),
											apivm.h(
												"view",
												{style: "margin-top:10px"},
												apivm.h("text", {style: "font-size:15px"}, "选项4")
											)
										)
									)
							  )
							: null,

						this.props.info.show.isShowAsk === "show"
							? apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h(
											"text",
											{style: "font-size:17px;"},
											"3.(问答题)这里是问答题的题目"
										)
									),
									apivm.h(
										"view",
										null,
										apivm.h("input", {
											type: "text",
											placeholder: "请输入和题目相关的回答",
											style:
												"margin-top:10px;width:100%;height:80px;border:1px solid #fff;font-size:15px"
										})
									)
							  )
							: null,

						this.props.info.show.isShowJudge === "show"
							? apivm.h(
									"view",
									{class: "multiple_choice", style: "margin-bottom:50px"},
									apivm.h(
										"view",
										{class: "multiple_choice_text"},
										apivm.h(
											"text",
											{style: "font-size:17px;margin-bottom:30px "},
											"4.(评分题)这里是评分题哦"
										)
									),
									apivm.h(
										"view",
										null,
										apivm.h(
											"view",
											{style: "width:75%;margin:auto"},
											apivm.h(
												"view",
												{style: "flex-direction: row;justify-content:space-between"},
												(Array.isArray([1, 2, 3, 4, 5])
													? [1, 2, 3, 4, 5]
													: Object.values([1, 2, 3, 4, 5])
												).map(function(item$1) {
													return apivm.h(
														"view",
														null,
														apivm.h("img", {
															src:
																"../../image/" +
																(item$1 <= this$1.data.value ? "starActive" : "star") +
																".png",
															style: "height:22px;width:22px;"
														})
													);
												})
											),
											apivm.h(
												"view",
												{
													style:
														"flex-direction: row;justify-content:space-between;margin-top:8px"
												},
												apivm.h(
													"view",
													null,
													apivm.h("text", {style: "font-size:15px;opacity:0.5"}, "低分")
												),
												apivm.h(
													"view",
													null,
													apivm.h("text", {style: "font-size:15px;opacity:0.5"}, "高分")
												)
											)
										)
									)
							  )
							: null
					)
				)
			);
		};

		return Question;
	})(Component);
	apivm.define("question", Question);

	var Newquestion = /*@__PURE__*/ (function(Component) {
		function Newquestion(props) {
			Component.call(this, props);
			this.data = {
				// 用来接收创建页面时候的题目和题目描述传过来的数据
				questionTitle: "",
				questionContent: "",
				show: null,
				// 判断能不能看见创建好的问题页面
				isLook: "getdata",

				// 要传给组件question的数据
				formInfo: {
					// 改变question组件里的显示情况的
					show: {
						isShowSingle: "no",
						isShowMultiple: "no",
						isShowAsk: "no",
						isShowJudge: "no"
					}
				}
			};
		}

		if (Component) Newquestion.__proto__ = Component;
		Newquestion.prototype = Object.create(Component && Component.prototype);
		Newquestion.prototype.constructor = Newquestion;
		Newquestion.prototype.apiready = function() {
			this.addNavClickListener();
			this.addListenSaveDesc(); // 接收来自新建问卷题目的数据
			this.addListenCreatSbject();
		};
		Newquestion.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Newquestion.prototype.handleInputDesc = function() {
			openTabLayout("editDesc", "./editDesc.stml", "编辑标题和描述3");
		};
		Newquestion.prototype.clickFooterBtn_setting = function() {
			openTabLayout("setting", "./setting.stml", "问卷设置");
		};
		Newquestion.prototype.clickFooterBtn_preview = function() {
			openTabLayout("preview", "./preview.stml", "预览");
		};
		Newquestion.prototype.clickFooterBtn_publish = function() {
			openTabLayout("publish", "./publish.stml", "发布");
		};
		Newquestion.prototype.handleAddTitle = function() {
			api.actionSheet(
				{
					title: "添加题目",
					cancelTitle: "取消",
					// 调用的script文件夹里的常量，用map取出来
					buttons: QUESTION_TYPE.map(function(i) {
						return i.lable;
					})
				},
				function(ret, err) {
					var index = ret.buttonIndex;
					var questionType = QUESTION_TYPE.map(function(i) {
						return i.value;
					});
					var type = questionType[index - 1];
					openTabLayout(type, "./createQuestion.stml", "新建问卷", {type: type}, {});
					// console.log(type)
					// console.log(questionType)
				}
			);
		};
		Newquestion.prototype.handleAddTitle_z = function() {
			openTabLayout(
				"creatQuestion_zhu",
				"./creatQuestion_zhu.stml",
				"新建问卷-朱"
			);
		};
		Newquestion.prototype.addListenSaveDesc = function() {
			var _this = this;
			api.addEventListener(
				{
					name: "edit_save_titleAndDatails"
				},
				function(ret, err) {
					console.log(JSON.stringify(ret, null, 2));
					(_this.data.questionTitle = ret.value.questionTitle),
						(_this.data.questionContent = ret.value.questionContent),
						api.toast({
							msg: "保存成功" + _this.data.questionTitle + _this.data.questionContent
						});
				}
			);
		};
		Newquestion.prototype.addListenCreatSbject = function() {
			var this$1 = this;

			api.addEventListener(
				{
					name: "singleData"
				},
				function(ret) {
					return (
						// 控制单选题显示
						(this$1.data.formInfo.show.isShowSingle = "show"),
						// 返回单选题内容
						console.log(ret.value.key)
					);
				}
			);
		};
		Newquestion.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "create"},
				apivm.h(
					"scroll-view",
					{class: "create_con", "scroll-y": true},
					apivm.h(
						"view",
						{class: "create_question_btn", onClick: this.handleInputDesc},
						apivm.h(
							"view",
							{class: "creat_title"},
							apivm.h(
								"text",
								{class: "input_title"},
								this.data.questionTitle || "点击此处添加题目"
							)
						),
						apivm.h(
							"view",
							{class: "creat_describe"},
							apivm.h(
								"text",
								{class: "input_placeholder"},
								this.data.questionContent || "点击此处添加描述"
							)
						)
					),

					this.data.show === "show"
						? apivm.h(
								"view",
								{class: "add_question_btn", onClick: this.handleAddTitle},
								apivm.h("text", {class: "add_text"}, " ＋ 添加题目-版本1")
						  )
						: null,

					this.data.isLook === "getdata"
						? apivm.h("question", {info: this.data.formInfo})
						: null,

					apivm.h(
						"view",
						{class: "add_question_btn", onClick: this.handleAddTitle_z},
						apivm.h("text", {class: "add_text"}, " ＋ 添加题目-版本2")
					)
				),

				apivm.h(
					"view",
					{class: "create_footer row_show"},
					apivm.h(
						"view",
						{class: "footer_btn", onClick: this.clickFooterBtn_setting},
						apivm.h("img", {
							src: "../../image/setting.png",
							class: "footer_btn_icon"
						}),
						apivm.h("text", {class: "footer_btn_text"}, "设置")
					),
					apivm.h(
						"view",
						{class: "footer_btn", onClick: this.clickFooterBtn_preview},
						apivm.h("img", {
							src: "../../image/preview.png",
							class: "footer_btn_icon"
						}),
						apivm.h("text", {class: "footer_btn_text"}, "预览")
					),
					apivm.h(
						"button",
						{class: "publish_btn", onClick: this.clickFooterBtn_publish},
						"发布"
					)
				)
			);
		};

		return Newquestion;
	})(Component);
	Newquestion.css = {
		".create_question_btn": {alignItems: "center", margin: "50px 20px"},
		".creat_title": {marginBottom: "30px"},
		".input_title": {fontSize: "24px", fontWeight: "bolder"},
		".input_placeholder": {opacity: "0.4"},
		".add_question_btn": {alignItems: "center", margin: "20px 0"},
		".add_text": {fontSize: "18px", color: "#3371ff"},
		".create": {width: "100%", height: "100%", background: "#f8f8f8"},
		".create_con": {flex: "1"},
		".create_footer": {justifyContent: "space-around"},
		".footer_btn_icon": {height: "18px", width: "18px"},
		".publish_btn": {
			height: "44px",
			borderRadius: "22px",
			width: "300px",
			backgroundColor: "#3371ff",
			fontSize: "18px",
			color: "#fff"
		},
		".row_show": {flexDirection: "row", marginBottom: "10px"},
		".footer_btn": {backgroundColor: "#fff", textAlign: "center"}
	};
	apivm.define("newQuestion", Newquestion);
	apivm.render(apivm.h("newQuestion", null), "body");
})();
