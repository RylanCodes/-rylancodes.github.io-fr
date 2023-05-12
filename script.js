console.log(
  "%c👋 Bonjour, merci d'avoir visité mon site web. N'hésitez pas à me contacter!",
  "font-size: 16px; color: rgb(0, 100, 150);"
);

function copyEmailAddress() {
  const emailSpan = document.querySelector(".email");
  const emailAddress = emailSpan.textContent;
  const tooltipMessage = document.querySelector(".tooltipMessage");

  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      tooltipMessage.textContent = "Email Copied!";
      setTimeout(() => {
        tooltipMessage.textContent = "";
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy email address: ", err);
    });
}
