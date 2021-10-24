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

	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.creatNewQuestion = function() {
			// console.log("点击了“1.我的问卷-创建新问卷”")
			openTabLayout("newQuestion", "./newQuestion.stml", "我的问卷2");
		};
		Tpl.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "create_content"},
				apivm.h("img", {src: "../../image/create_bg.png", alt: "bg"}),
				apivm.h(
					"view",
					{class: "create_bottom"},
					apivm.h("text", {class: "create_tip"}, "创建问卷，一步即可搞定"),
					apivm.h(
						"button",
						{class: "btn create_btn", onClick: this.creatNewQuestion},
						"创建新问卷-1"
					)
				)
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {
		".create_content": {
			width: "100%",
			height: "100%",
			background: "rgb(115, 173, 221)",
			justifyContent: "flex-end"
		},
		".create_bottom": {
			padding: "50px 0",
			background: "#fff",
			borderRadius: "20px 20px 0px 0px",
			alignItems: "center"
		},
		".create_tip": {
			textAlign: "center",
			fontWeight: "500",
			marginTop: "-20px",
			fontSize: "18px"
		},
		".btn": {
			backgroundColor: "rgb(57, 86, 139)",
			fontSize: "20px",
			fontWeight: "bold",
			height: "50px",
			width: "60%",
			margin: "20px auto",
			color: "#fff"
		}
	};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
