("use strict");

window.onload = () => {
  const socialLinks = document.querySelectorAll(".social-icons a");

  if (socialLinks.length > 0) {
    socialLinks[0].addEventListener("click", () => {
      window.open(
        "https://www.linkedin.com/in/uro%C5%A1-mili%C4%87-a03257205/"
      );
    });
    socialLinks[1].addEventListener("click", () => {
      window.open("https://www.facebook.com/Urkeeeeeee98/");
    });
    socialLinks[2].addEventListener("click", () => {
      window.open("https://www.instagram.com/urke_bb/");
    });
    socialLinks[3].addEventListener("click", () => {
      window.open("https://github.com/urkebb");
    });
  }
};
