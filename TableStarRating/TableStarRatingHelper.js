({
	toggleTheSelection : function(element) {
		// Star selected, remove the color
		if (!element.classList.contains("visualPickerSelected")) {
			element.classList.add("visualPickerSelected");
			element.classList.remove("visualPicker");
			return true;
		} else { // star unselected, add the color
			element.classList.remove("visualPickerSelected");
			element.classList.add("visualPicker");
			return false;
		}
	},
	setTheColor : function(element, addColor) {
		if (addColor) {
			element.classList.add("visualPickerSelected");
			element.classList.remove("visualPicker");
		} else { // star unselected, add the color
			element.classList.remove("visualPickerSelected");
			element.classList.add("visualPicker");
		}

	}
})