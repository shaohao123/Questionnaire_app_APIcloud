(function() {
	var Publish = /*@__PURE__*/ (function(Component) {
		function Publish(props) {
			Component.call(this, props);
		}

		if (Component) Publish.__proto__ = Component;
		Publish.prototype = Object.create(Component && Component.prototype);
		Publish.prototype.constructor = Publish;
		Publish.prototype.apiready = function() {
			this.addNavClickListener();
		};
		Publish.prototype.addNavClickListener = function() {
			api.addEventListener(
				{
					name: "navitembtn"
				},
				function(ret, err) {
					api.closeWin();
				}
			);
		};
		Publish.prototype.pub_ensure = function() {
			api.closeWin();
		};
		Publish.prototype.share_to_colleage = function() {
			api.toast({msg: "通过同事分享"});
		};
		Publish.prototype.share_to_workcircle = function() {
			api.toast({msg: "通过工作圈分享"});
		};
		Publish.prototype.share_to_copylink = function() {
			api.toast({msg: "复制链接"});
		};
		Publish.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "pub"},

				apivm.h(
					"view",
					{class: "pub_header"},
					apivm.h(
						"view",
						{class: "pub_publish_suc"},
						apivm.h("img", {
							class: "publish_suc_img",
							src: "../../image/publishsuc.png"
						}),
						apivm.h("text", null, "发布成功")
					),
					apivm.h(
						"view",
						{class: "pub_enter"},
						apivm.h(
							"view",
							{class: "pub_enter_style"},
							apivm.h("button", {class: "btn", onClick: this.pub_ensure}, "确定")
						)
					)
				),

				apivm.h(
					"view",
					{class: "pub_middle"},
					apivm.h(
						"view",
						{class: "pub_share"},
						apivm.h(
							"view",
							{class: "pub_share_text"},
							apivm.h(
								"text",
								{class: "share_ques"},
								"- - - - - - - ···分享问卷··· - - - - - - - "
							)
						),
						apivm.h(
							"view",
							{class: "pub_share_uponways"},
							apivm.h("text", {class: "share_ques_way"}, "你可以通过以下方式分享问卷")
						)
					)
				),

				apivm.h(
					"view",
					{class: "pub_bottom"},
					apivm.h(
						"view",
						{class: "pub_share_ways", onClick: this.share_to_colleage},
						apivm.h(
							"view",
							{class: "pub_icon_colleage"},
							apivm.h("img", {
								class: "pub_share_img",
								src: "../../image/colleage.png",
								alt: ""
							})
						),
						apivm.h("text", null, "同事")
					),
					apivm.h(
						"view",
						{class: "pub_share_ways", onClick: this.share_to_workcircle},
						apivm.h(
							"view",
							{class: "pub_icon_workcicle"},
							apivm.h("img", {
								class: "pub_share_img",
								src: "../../image/workcicle.png",
								alt: ""
							})
						),
						apivm.h("text", null, "工作圈")
					),
					apivm.h(
						"view",
						{class: "pub_share_ways", onClick: this.share_to_copylink},
						apivm.h(
							"view",
							{class: "pub_icon_copylink"},
							apivm.h("img", {
								class: "pub_share_img",
								src: "../../image/copylink.png",
								alt: ""
							})
						),
						apivm.h("text", null, "复制链接")
					)
				)
			);
		};

		return Publish;
	})(Component);
	Publish.css = {
		".publish_suc_img": {width: "70px", height: "70px"},
		".pub_share_img": {width: "28px", height: "28px", margin: "auto"},
		".pub_header": {
			width: "100%",
			height: "50%",
			justifyContent: "center",
			alignItems: "center"
		},
		".btn": {
			width: "245px",
			backgroundColor: "#588bff",
			borderRadius: "50%",
			height: "44px",
			margin: "50px 0",
			color: "white",
			fontWeight: "700"
		},
		".pub_middle": {
			width: "100%",
			height: "30%",
			justifyContent: "center",
			alignItems: "center",
			marginTop: "-50px"
		},
		".pub_share_text": {margin: "20px 0"},
		".pub_share_uponways": {opacity: "0.5"},
		".pub_bottom": {flexDirection: "row", justifyContent: "space-around"},
		".pub_share": {justifyContent: "center", alignItems: "center"},
		".share_ques": {fontSize: "20px", fontWeight: "border"},
		".pub_icon_copylink": {
			backgroundColor: "#3371ff",
			width: "60px",
			height: "60px",
			borderRadius: "50%",
			margin: "15px"
		},
		".pub_icon_workcicle": {
			backgroundColor: "#e14c46",
			width: "60px",
			height: "60px",
			borderRadius: "50%",
			margin: "15px"
		},
		".pub_icon_colleage": {
			backgroundColor: "#fec60a",
			width: "60px",
			height: "60px",
			borderRadius: "50%",
			margin: "15px"
		},
		".pub_share_ways": {alignItems: "center"}
	};
	apivm.define("publish", Publish);
	apivm.render(apivm.h("publish", null), "body");
})();
