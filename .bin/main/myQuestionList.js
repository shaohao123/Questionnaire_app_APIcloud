(function() {
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

	var Myquestionlist = /*@__PURE__*/ (function(Component) {
		function Myquestionlist(props) {
			Component.call(this, props);
		}

		if (Component) Myquestionlist.__proto__ = Component;
		Myquestionlist.prototype = Object.create(Component && Component.prototype);
		Myquestionlist.prototype.constructor = Myquestionlist;
		Myquestionlist.prototype.apiready = function() {};
		Myquestionlist.prototype.newQuestion = function() {
			openTabLayout("newQuestion", "./newQuestion.stml", "新建问卷");
		};
		Myquestionlist.prototype.gotoAnalysisResult = function() {
			openTabLayout("quesAnalysis", "./quesAnalysis.stml", "问卷详情");
		};
		Myquestionlist.prototype.render = function() {
			return apivm.h(
				"view",
				{style: "height:100%;width:100%"},
				apivm.h(
					"view",
					{style: "flex:1"},

					apivm.h(
						"view",
						{class: "mq_header"},
						apivm.h(
							"view",
							{class: "mq_header_bg"},
							apivm.h("img", {src: "../../image/myquestionbg.png"})
						),
						apivm.h(
							"view",
							{class: "mq_header_text"},
							apivm.h("img", {src: "../../image/myquestiontext.png"})
						)
					),

					apivm.h(
						"scroll-view",
						{class: "mq_list"},

						apivm.h(
							"view",
							{class: "mq_list_detail", onClick: this.gotoAnalysisResult},
							apivm.h(
								"view",
								null,
								apivm.h("img", {
									src: "../../image/questionlisttitle.png",
									style: "width:60px; hight:60px; margin: 10px 30px 10px 30px"
								})
							),
							apivm.h(
								"view",
								{style: "margin:12px 10px"},
								apivm.h(
									"text",
									{style: "font-size:20px ; font-weight:800"},
									"这里显示问卷名称"
								),
								apivm.h("text", {style: "opacity:0.4 ;margin-top:10px"}, "回收量：????")
							)
						),

						apivm.h(
							"view",
							{class: "mq_list_detail", onClick: this.gotoAnalysisResult},
							apivm.h(
								"view",
								null,
								apivm.h("img", {
									src: "../../image/questionlisttitle.png",
									style: "width:60px; hight:60px; margin: 10px 30px 10px 30px"
								})
							),
							apivm.h(
								"view",
								{style: "margin:12px 10px"},
								apivm.h(
									"text",
									{style: "font-size:20px ; font-weight:800"},
									"这里显示问卷名称"
								),
								apivm.h("text", {style: "opacity:0.4 ;margin-top:10px"}, "回收量：????")
							)
						),

						apivm.h(
							"view",
							{class: "mq_list_detail", onClick: this.gotoAnalysisResult},
							apivm.h(
								"view",
								null,
								apivm.h("img", {
									src: "../../image/questionlisttitle.png",
									style: "width:60px; hight:60px; margin: 10px 30px 10px 30px"
								})
							),
							apivm.h(
								"view",
								{style: "margin:12px 10px"},
								apivm.h(
									"text",
									{style: "font-size:20px ; font-weight:800"},
									"这里显示问卷名称"
								),
								apivm.h("text", {style: "opacity:0.4 ;margin-top:10px"}, "回收量：????")
							)
						),

						apivm.h(
							"view",
							{class: "mq_list_detail", onClick: this.gotoAnalysisResult},
							apivm.h(
								"view",
								null,
								apivm.h("img", {
									src: "../../image/questionlisttitle.png",
									style: "width:60px; hight:60px; margin: 10px 30px 10px 30px"
								})
							),
							apivm.h(
								"view",
								{style: "margin:12px 10px"},
								apivm.h(
									"text",
									{style: "font-size:20px ; font-weight:800"},
									"这里显示问卷名称"
								),
								apivm.h("text", {style: "opacity:0.4 ;margin-top:10px"}, "回收量：????")
							)
						)
					)
				),

				apivm.h(
					"view",
					{class: "mq_newques", onClick: this.newQuestion},
					apivm.h(
						"view",
						{class: "mq_newques_con"},

						apivm.h(
							"view",
							{class: "mq_newques_btn_text"},
							apivm.h("text", {class: "mq_newques_btn_text_inner"}, "+ 创建新问卷")
						)
					)
				)
			);
		};

		return Myquestionlist;
	})(Component);
	Myquestionlist.css = {
		".mq_header_text": {
			width: "130px",
			height: "40px",
			marginTop: "-80px",
			marginLeft: "40px"
		},
		".mq_header_bg": {width: "100%", height: "180px"},
		".mq_list": {marginTop: "70px"},
		".mq_list_detail": {
			height: "80px",
			width: "100%",
			border: "1px solid silver",
			flexDirection: "row"
		},
		".mq_newques": {
			flexDirection: "row",
			backgroundColor: "#3371ff",
			borderRadius: "50%",
			height: "52px",
			width: "40%",
			margin: "0 auto 12px auto"
		},
		".mq_newques_con": {flexDirection: "row", margin: "auto"},
		".mq_newques_btn_text_inner": {color: "#fff", fontSize: "20px"},
		".mq_newques_btn_text": {marginLeft: "5px"}
	};
	apivm.define("myQuestionList", Myquestionlist);
	apivm.render(apivm.h("myQuestionList", null), "body");
})();
