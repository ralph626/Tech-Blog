$(document).ready(async () => {
  // const currentUser = sessionStorage.getItem("user")
  //   ? JSON.parse(sessionStorage.getItem("user"))
  //   : null;
  // if (!currentUser) location.replace("/");
  const { data: user } = await axios.get("/auth");
  console.log(user);
  if (!user) location.replace("/");
  $("#username").text(user.userName);

  //comment button click action here
  $(".commentBtn").click(function () {
    const id = $(this).attr("id");
    $(`#comment${id}`).show();
    $(".cancelBtn").show();
    $(".submitBtn").show();
    $(".commentBtn").hide();
  });

  $(".cancelBtn").click(function () {
    $(".cancelBtn").hide();
    $(".submitBtn").hide();
    $(".commentBtn").show();
    $("textarea").hide();
  });

  $(".submitBtn").click(function () {
    const PostId = $(this).attr("id");
    const comment = $(`#comment${PostId}`).val().trim();
    const author = user.userName;

    axios.post("/post/comment", { PostId, comment, author }).then((data) => {
      console.log(data);
    });
  });
});
