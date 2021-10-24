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

	// 监听头部按钮操作
	function addListenNaviteBtn() {
		api.addEventListener(
			{
				name: "navitembtn"
			},
			function(ret, err) {
				if (ret.type === "left") {
					api.closeWin();
				}
			}
		);
	}

	var Preview = /*@__PURE__*/ (function(Component) {
		function Preview(props) {
			Component.call(this, props);
			this.data = {};
			this.compute = {
				questionList: function() {
					return api.pageParam.questionList || [];
				},
				isPreview: function() {
					return api.pageParam.isPreview;
				}
			};
		}

		if (Component) Preview.__proto__ = Component;
		Preview.prototype = Object.create(Component && Component.prototype);
		Preview.prototype.constructor = Preview;
		Preview.prototype.apiready = function() {
			//like created
			addListenNaviteBtn();
		};
		Preview.prototype.submitAnswer = function() {
			openTabLayout("answerSucc", "./answerSucc.stml", "");
		};
		Preview.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "preview"},
				apivm.h(
					"scroll-view",
					{class: "preview"},
					apivm.h(
						"view",
						{class: "preview_top"},
						apivm.h("text", {class: "question_name"}, "用户数据征集"),
						apivm.h(
							"text",
							{class: "question_desc"},
							"您的建议会让我们做得更好，感谢您的配合!"
						)
					)
				),
				!this.isPreview
					? apivm.h(
							"button",
							{class: "submit_answer_btn", onClick: this.submitAnswer},
							"提交"
					  )
					: null
			);
		};

		return Preview;
	})(Component);
	apivm.define("preview", Preview);
	apivm.render(apivm.h("preview", null), "body");
})();
