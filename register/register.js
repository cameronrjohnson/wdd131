let participantCount = 1;

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required>
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}">
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}">
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}">
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

document.getElementById("add").addEventListener("click", function () {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  const addButton = document.getElementById("add");
  addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const totalFees = calculateTotalFees();
  const adultName = document.getElementById("adult_name").value;
  const participantCount = document.querySelectorAll("[id^=fname]").length;
  document.querySelector("form").style.display = "none";
  const summary = document.getElementById("summary");
  summary.innerHTML = successTemplate({ name: adultName, participants: participantCount, fees: totalFees });
  summary.style.display = "block";
});

function calculateTotalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((total, feeInput) => total + (parseFloat(feeInput.value) || 0), 0);
}

function successTemplate(info) {
  return `
    <h2>Thank You!</h2>
    <p>Thank you ${info.name} for registering.</p>
    <p>You have registered ${info.participants} participants and owe $${info.fees.toFixed(2)} in fees.</p>
  `;
}
