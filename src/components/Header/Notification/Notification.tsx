import {render, h} from "vue";
import "./Notification.scss"
import { NotifiIcon } from "@/utils/icons";
export default {
	name: "Notification",
	render(){
		
		return h(
			'div',
			{
				class: 'notifi'
			},
			[
				h(
			ElImage,
			{
				class:'notifi-icon',
				src:NotifiIcon,
				fit:'cover'
			},
		)
			]
		) 
	}
}
