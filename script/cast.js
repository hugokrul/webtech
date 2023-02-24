for (let i = 1; i < 7; i++) {
  const element = document.getElementById("c" + i);
  element.addEventListener("click", () => {
    document.getElementById("c" + i + "ListItem").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}
