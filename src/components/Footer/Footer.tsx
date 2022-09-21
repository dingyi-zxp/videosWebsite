import { defineComponent, h } from "vue"
import Social from "./Social/Social.tsx"
import { SocialIcon } from "@/utils/icons"

import "./Footer.scss"

export default defineComponent({
	components:{  
		Social
	},
	setup(){
		let social = SocialList()
		console.log(social);
		
		return () => h(
				'div',
			{
				class: "footer"
			},
			[
				social.map(item => {
					return h(
						Social,
						{
							class: "footer-social",
							social:item
						}
					)
				})
			]
		)
			
	}
})

function SocialList(){
	let socialList = new Array()
	let keys = Object.keys(SocialIcon)
	console.log(keys);
	keys.map(key => {
		socialList.push(SocialIcon[key])
	})
	
	return socialList
}
