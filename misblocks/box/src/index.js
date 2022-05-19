import {registerBlockType} from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import "./styles.scss";

registerBlockType("mblock/box",{

	title: "Caja",
	category: "widgets",
	icon:  "admin-users",
	attributes:{
		title:{
			source:"html",
			selector:"h4",
			default:"Register"
		},
		nameLabel:{
			type: "string",
		},
		text:{
			source: "html", 
			selector: "p"
		}
	},
	styles: [
		{
			name : "light", 
			label: "Light mode",
			isDefault: true, 
		},
		{
			name : "dark",
			label : "Dark Mode"
		}
	],
	edit,
	save,
});