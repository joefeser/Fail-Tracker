$(function () {
	$("span.issue-preview").click(function () {
		var id = $(this).attr("data-issue-id");
		$("#issue-preview-dialog")
				.html("<em>Loading...</em>")
				.dialog({ modal: true, width: 500, height: 350 })
				.load(ViewBag.buildDetailsUrl(id) + "/delete-me");

		//				//Error handing: function (response, status) {
		//					if (status == "error") {
		//						$(".ui-dialog-content").dialog("close");
		//						alert("Something went wrong!");
		//					}
		//				}
	});

	$("span.issue-delete").click(function () {
		var id = $(this).attr("data-issue-id");

		Site.confirm({
			title: "Delete this issue?",
			text: "Are you sure you wish to delete this issue?  You cannot undo this action.  All history will be lost!",
			confirmAction: function () {
//				$.ajax({
//					url: "/delete",
//					method: "post",
//					error: function () { alert("something else went wrong!"); }
//				});
				$.post("/delete");
			}
		});
	});
});
