({
	doInit : function(component, event, helper) {
		var statementList = component.get("v.statements");
		var jsonValue = {};
		for (let statement of statementList) {
			jsonValue[statement.value] = 0.0;
		}
		jsonValue["average"] = 0.0;
		console.log("Statements - "+statementList);
		console.log("Options - "+component.get("v.options"));
		component.set("v.itemvalue", jsonValue);
	},
	changeCssClass : function(component, event, helper) {
		var targetElement = event.target;
		var selectedElement = targetElement.parentElement.parentElement;
		var nextElement = selectedElement.nextElementSibling;
		var prevElement = selectedElement.previousElementSibling;
		var valueSelected = '';
		// Set the value for star selection
		var children_SelectedElement = selectedElement.childNodes;
		var isStarSelected = helper.toggleTheSelection(children_SelectedElement[1]);
		if (isStarSelected) {
			valueSelected = children_SelectedElement[0].value;
			while (prevElement) {
				var childElements = prevElement.childNodes;
				helper.setTheColor(childElements[1], isStarSelected);
				prevElement = prevElement.previousElementSibling;
			}
			while (nextElement) {
				var childElements = nextElement.childNodes;
				helper.setTheColor(childElements[1], !isStarSelected);
				nextElement = nextElement.nextElementSibling;
			}
		} else {
			while (nextElement) {
				var childElements = nextElement.childNodes;
				helper.setTheColor(childElements[1], isStarSelected);
				nextElement = nextElement.nextElementSibling;
			}
			if (prevElement) {
				var childElements = prevElement.childNodes;
				valueSelected = childElements[0].value;
			} else {
				valueSelected = 0.0;
			}
		}
		console.log("Value Selected - "+valueSelected);
		var jsonItemValue = component.get("v.itemvalue");
		jsonItemValue[selectedElement.title] = parseFloat(valueSelected);
		var statementList = component.get("v.statements");
		var sumOfStars = 0.0;
		for (let statement of statementList) {
			sumOfStars += jsonItemValue[statement.value];
		}
		sumOfStars = sumOfStars / statementList.length;
		jsonItemValue["average"] = sumOfStars.toFixed(2);
		component.set("v.itemvalue", jsonItemValue);
		event.preventDefault();
	}
})