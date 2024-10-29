/* global Cron */

Module.register("text", {
	defaults: {
		text:'hi'
	},
	getDom () {
		const wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
	
		const textElement = document.createElement("p");
		textElement.textContent = this.config.text;
		wrapper.appendChild(textElement); 
	
		return wrapper; 
	},
});
