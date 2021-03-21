$(document).ready(() => {
  const currentUser = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null;
  if (!currentUser) location.replace("/");
  $("#username").text(currentUser.userName);
});
