(function() {
	var Editdesc = /*@__PURE__*/ (function(Component) {
		function Editdesc(props) {
			Component.call(this, props);
			this.data = {
				questionTitle: "",
				questionContent: ""
			};
		}

		if (Component) Editdesc.__proto__ = Component;
		Editdesc.prototype = Object.create(Component && Component.prototype);
		Editdesc.prototype.constructor = Editdesc;
		Editdesc.prototype.apiready = function() {
			this.addNavClickListener();
		};
		Editdesc.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Editdesc.prototype.save_title_details = function() {
			api.closeWin();
			api.sendEvent({
				name: "edit_save_titleAndDatails",
				extra: {
					questionTitle: this.data.questionTitle,
					questionContent: this.data.questionContent
				}
			});
		};
		Editdesc.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "edit_whole"},
				apivm.h(
					"view",
					{class: "edit"},
					apivm.h(
						"view",
						{class: "edit_title"},
						apivm.h("text", null, "问卷标题"),
						apivm.h("textarea", {
							class: "edit_title_textarea",
							placeholder: "请输入问卷标题，50个字以内",
							onInput: function(e) {
								if (typeof questionTitle != "undefined") {
									questionTitle = e.target.value;
								} else {
									this$1.data.questionTitle = e.target.value;
								}
							},
							value:
								typeof questionTitle == "undefined"
									? this.data.questionTitle
									: questionTitle
						})
					),
					apivm.h(
						"view",
						{class: "edit_content"},
						apivm.h("text", null, "问卷描述"),
						apivm.h("textarea", {
							class: "edit_content_textarea",
							placeholder: "请填写问卷描述",
							onInput: function(e) {
								if (typeof questionContent != "undefined") {
									questionContent = e.target.value;
								} else {
									this$1.data.questionContent = e.target.value;
								}
							},
							value:
								typeof questionContent == "undefined"
									? this.data.questionContent
									: questionContent
						})
					)
				),

				apivm.h(
					"view",
					null,
					apivm.h(
						"button",
						{class: "edit_btn edit_save", onClick: this.save_title_details},
						"保存"
					)
				)
			);
		};

		return Editdesc;
	})(Component);
	Editdesc.css = {
		".edit_title_textarea": {height: "150px", width: "95%", margin: "0 auto"},
		".edit_content_textarea": {height: "400px", width: "95%", margin: "0 auto"},
		text: {marginLeft: "3%", fontSize: "20px", fontWeight: "400"},
		".edit_whole": {width: "100%", height: "100%"},
		".edit": {flex: "1"},
		".edit_save": {
			height: "50px",
			width: "90%",
			backgroundColor: "#3371ff",
			borderRadius: "50%",
			alignItems: "center",
			justifyContent: "center",
			margin: "0 auto 6px auto"
		},
		".edit_btn": {fontSize: "20rem"}
	};
	apivm.define("editDesc", Editdesc);
	apivm.render(apivm.h("editDesc", null), "body");
})();
