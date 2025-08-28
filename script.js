// Heart Button Activation

let heartIcon = document.getElementsByClassName("fa-heart");

for (let heart of heartIcon) {
  heart.addEventListener("click", function () {
    let heartCount = Number(document.getElementById("heart-count").innerText);
    let finalCount = heartCount + 1;
    document.getElementById("heart-count").innerText = finalCount;
  });
}

// Copy Button Activation

let copyBtn = document.getElementsByClassName("copy-btn");

for (let copies of copyBtn) {
  copies.addEventListener("click", function () {
    let callNumber =
      copies.parentNode.parentNode.children[2].children[0].innerText;
    alert("The number has been copied:" + " " + callNumber);
    navigator.clipboard.writeText(callNumber);
    let copyCount = Number(document.getElementById("copy-count").innerText);
    let finalCount = copyCount + 1;
    document.getElementById("copy-count").innerText = finalCount;
  });
}

// Call Button Activation

let callBtn = document.getElementsByClassName("call-btn");

for (let call of callBtn) {
  call.addEventListener("click", function () {
    let callNumber =
      call.parentNode.parentNode.children[2].children[0].innerText;
    let serviceCall =
      call.parentNode.parentNode.children[1].children[0].innerText;
    let coinCount = Number(document.getElementById("coin-count").innerText);
    let callHistory = document.getElementById("call-history");
    let timingToday = {
      timing: new Date().toLocaleTimeString(),
    };
    if (coinCount >= 20) {
      let finalCount = coinCount - 20;
      document.getElementById("coin-count").innerText = finalCount;
      alert("📞 Calling" + " " + serviceCall + " " + callNumber + "....");
      let history = document.createElement("div");
      history.innerHTML = `
        <div
            class="bg-[#4A4A4A14] border rounded-lg px-2 py-1 flex items-center justify-between w-full my-4">
            <div>
                <h2 class="font-bold">${serviceCall}</h2>
                <p class="font-semibold text-[#5C5C5C]">${callNumber}</p>
            </div>
            <div>
                <p class=" w-[80px] text-[13px] ">${timingToday.timing}</p>
            </div>
        </div>
        `;
      callHistory.append(history);
    } else {
      alert("❌ You don't have enough coins! You need at least 20 coins to make a call.");
      history.innerText = "";
    }
  });
}

// Clear Button Activation

let clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', function(){
    let callHistory = document.getElementById("call-history");
    callHistory.innerHTML = '';
})