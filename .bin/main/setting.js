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

	var Setting = /*@__PURE__*/ (function(Component) {
		function Setting(props) {
			Component.call(this, props);
			this.data = {
				// fillcount
				fillCountTimes: null,
				// indate
				valid_period: null
			};
		}

		if (Component) Setting.__proto__ = Component;
		Setting.prototype = Object.create(Component && Component.prototype);
		Setting.prototype.constructor = Setting;
		Setting.prototype.apiready = function() {
			this.addNavClickListener(); // 监听的是【每位用户填写次数】界面
			this.listenFillCount(); // 监听【问卷有效期界面】
			this.listenIndate();
		};
		Setting.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Setting.prototype.setting_whoCanFill = function() {
			openTabLayout("whoCanFill", "./whoCanFill.stml", "发布范围");
		};
		Setting.prototype.onchange = function(e) {
			api.toast({
				msg: e.detail.value ? "已开启" : "已关闭"
			});
		};
		Setting.prototype.listenIndate = function() {
			_this = this;
			api.addEventListener(
				{
					name: "update_indate"
				},
				function(ret, err) {
					_this.data.valid_period = ret.value.key;
				}
			);
		};
		Setting.prototype.setting_indate = function() {
			openTabLayout("setting_indate", "./indate.stml", "问卷有效期", {
				key: this.data.valid_period
			});
		};
		Setting.prototype.listenFillCount = function() {
			_this = this;
			api.addEventListener(
				{
					name: "FillCountTimes"
				},
				function(ret, err) {
					_this.data.fillCountTimes = ret.value.key;
				}
			);
		};
		Setting.prototype.setting_fillcount = function() {
			openTabLayout("fillcount", "./fillcount.stml", "每位用户填写次数");
			_this = this;
			setTimeout(function() {
				api.sendEvent({
					name: "judgeFillCountState_name",
					extra: {
						key: _this.data.fillCountTimes
					}
				});
			}, 300);
		};
		Setting.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "setting_con "},
				apivm.h(
					"view",
					{class: "setting_item_box1 row_show ", onClick: this.setting_whoCanFill},
					apivm.h("text", {class: "setting_item_box1_who"}, "谁可以填写"),
					apivm.h(
						"view",
						{class: "setting_item_box1_visible row_show right"},
						apivm.h("text", null, "公开可见"),
						apivm.h("img", {
							src: "../../image/jiantou.png",
							alt: "select",
							style: "width:18px; height:18px;"
						})
					)
				),
				apivm.h(
					"view",
					{class: "setting_item_box2  "},
					apivm.h(
						"view",
						{class: "setting_item_box2_first"},
						apivm.h(
							"view",
							null,
							apivm.h("text", {style: "line-height:30px"}, "匿名填写")
						),

						apivm.h(
							"view",
							{class: "switch-box"},
							apivm.h("switch", {
								class: "switch-scale",
								color: "#3371FF",
								height: "22px",
								width: "40px",
								checked: true,
								onchange: this.onchange
							})
						)
					),

					apivm.h(
						"view",
						{class: "setting_item_box2_anonymous_switch row_show "},
						apivm.h(
							"text",
							{class: "setting_item_box2_anonymous_switch_text"},
							"开启后，将不会记录用户的个人信息"
						)
					)
				),

				apivm.h(
					"view",
					{class: "setting_item_box3 row_show ", onClick: this.setting_indate},
					apivm.h("text", {class: "setting_item_box3_time"}, "问卷有效期"),
					apivm.h(
						"view",
						{class: "setting_item_box3_time_choose row_show right"},
						apivm.h("text", null, this.data.valid_period || "永久有效"),
						apivm.h("img", {
							src: "../../image/jiantou.png",
							alt: "select",
							style: "width:18px; height:18px;"
						})
					)
				),

				apivm.h(
					"view",
					{class: "setting_item_box4 row_show ", onClick: this.setting_fillcount},
					apivm.h("text", {class: "setting_item_box4_times"}, "每位用户填写次数"),
					apivm.h(
						"view",
						{class: "setting_item_box4_times_choose row_show right"},
						apivm.h("text", null, this.data.fillCountTimes || "不限制"),
						apivm.h("img", {
							src: "../../image/jiantou.png",
							alt: "select",
							style: "width:18px; height:18px;"
						})
					)
				)
			);
		};

		return Setting;
	})(Component);
	Setting.css = {
		".setting_con": {margin: "20px 30px"},
		".setting_item_box1,\r\n.setting_item_box3,\r\n.setting_item_box4": {
			height: "55px",
			borderBottom: "1px solid #E9ECF3"
		},
		text: {lineHeight: "60px", fontSize: "15px"},
		".row_show": {flexDirection: "row"},
		img: {margin: "auto 0px", marginRight: "10px", marginLeft: "8px"},
		".right": {marginLeft: "auto"},
		".setting_item_box2": {marginTop: "16px", borderBottom: "1px solid #E9ECF3"},
		".setting_item_box2_first": {
			flexDirection: "row",
			justifyContent: "space-between"
		},
		".setting_item_box2_anonymous_switch": {marginTop: "-10px"},
		".setting_item_box2_anonymous_switch_text": {opacity: "0.5", fontSize: "14px"}
	};
	apivm.define("setting", Setting);
	apivm.render(apivm.h("setting", null), "body");
})();
