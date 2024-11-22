document.querySelectorAll(".banner_close").forEach((closeButton) => {
    closeButton.addEventListener("click", () =>
      closeButton.closest(".banner").remove()
    );
  });
  