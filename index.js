let result = {
  tag: "",
  free: true,
  role: false,
  user: "maharnavbhuyan9",
  email: "maharnavbhuyan9@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");

  let key = "ema_live_RhUod2PtdTgUmQ5hSSm3LDUhxAQsv7ZmtYCPC3m1";
  let email = document.getElementById("username").value;

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  
  try {
    let res = await fetch(url);
    let result = await res.json();

    let str = "";
    for (let key of Object.keys(result)) {
      if (result[key] !== "" && result[key] !== " ") {
        str += `<div>${key}: ${result[key]}</div>`;
      }
    }
    console.log(str);
    document.getElementById("resultCont").innerHTML = str;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
