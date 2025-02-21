function populateStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");

    // Clear previous state options
    stateSelect.innerHTML = '<option value="">Select a state</option>';

    // Country-to-State Mapping
    const states = {
        USA: ["California", "Texas", "New York", "Florida"],
        India: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"],
        UK: ["London", "Manchester", "Birmingham", "Liverpool"]
    };

    // Get selected country
    const selectedCountry = countrySelect.value;

    // Populate states if a valid country is selected
    if (selectedCountry && states[selectedCountry]) {
        states[selectedCountry].forEach(state => {
            let option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
}