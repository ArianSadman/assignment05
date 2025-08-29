// Find them as NodeList
const favourite = document.querySelectorAll(".favourite-icon");
const cardTitle = document.querySelectorAll(".card-title");
const serviceName = document.querySelectorAll(".service-name");
const contactNumber = document.querySelectorAll(".contact-number");
const actionBtnCopy = document.querySelectorAll(".action-btn-copy");
const actionBtnCall = document.querySelectorAll(".action-btn-call");

// Get value of an element
function getValue(id) {
  return parseInt(document.getElementById(id).innerText);
}

// Set value to an element
function setValue(id, value) {
  document.getElementById(id).innerText = value;
}

// Toggle features with two buttons for small/mobile devices (upto 640px)
function toggle_mode_for_mobile_device(id) {
  document.getElementById("service-card-container").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("block");

  // If window-width > 640px, then remove toggle feature and display both card and history section fully.
  window.addEventListener("resize", () => {
    if (window.outerWidth > 640) {
      document.getElementById("service-card-container").classList.remove("hidden");
      document.getElementById("service-card-container").classList.add("block");
    }
  });
}

// Responsive mode (small/mobile devices): Toggling button background
function toggle_button_bg(id) {
  document.getElementById("view-hotlines-btn").classList.add("bg-lime-100");
  document.getElementById("view-history-btn").classList.add("bg-lime-100");
  document.getElementById(id).classList.remove("bg-lime-100");
}

// Toggle features with two buttons for small/mobile devices (upto 640px)
document.getElementById("view-hotlines-btn").addEventListener("click", () => {
  toggle_mode_for_mobile_device("service-card-container");
  toggle_button_bg("view-hotlines-btn");
});
document.getElementById("view-history-btn").addEventListener("click", () => {
  toggle_mode_for_mobile_device("history-section");
  toggle_button_bg("view-history-btn");
});

// Click to heart-icon of any cards and increase count
for (let i = 0; i < favourite.length; i++) {
  favourite[i].addEventListener("click", () => {
    setValue("favourite-count", getValue("favourite-count") + 1);
  });
}

// Click to copy button of any cards
for (let i = 0; i < actionBtnCopy.length; i++) {
  actionBtnCopy[i].addEventListener("click", () => {
    navigator.clipboard
      .writeText(contactNumber[i].innerText)
      .then(() => {
        alert(`নম্বর কপি করা হয়েছে (Number is copied): ${contactNumber[i].innerText}`);
      })
      .catch((error) => {
        alert(`নম্বর কপি করতে ব্যর্থ (Failed to copy), ${error}`);
        return;
      });
    setValue("copy-tally", getValue("copy-tally") + 1);
  });
}

// Click to call button of any cards
for (let i = 0; i < actionBtnCall.length; i++) {
  actionBtnCall[i].addEventListener("click", () => {
    const currentCoin = getValue("currency-count");
    if (currentCoin < 20) {
      alert(`❌ আপনার কাছে পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20 টি কয়েন লাগবে।`);
      return;
    }
    setValue("currency-count", currentCoin - 20);

    alert(`📞 Calling ${serviceName[i].innerText} (${cardTitle[i].innerText}) \n ${contactNumber[i].innerText}`);
    const lastCall = document.createElement("div");
    lastCall.innerHTML = `
        <div class="bg-gray-50 flex justify-between items-center p-3 inter-font text-sm rounded-lg gap-1 mt-3 ">
          <div>
            <h1 class="mb-[2px] font-semibold">${cardTitle[i].innerText}</h1>
            <p class="text-gray-600">${contactNumber[i].innerText}</p>
          </div>
          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `;
    const container = document.getElementById("history-container");
    container.insertBefore(lastCall, container.firstChild);
  });
}

// Clear call history
document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("history-container").innerText = "";
});