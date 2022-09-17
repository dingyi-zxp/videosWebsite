import { defineComponent } from "vue";
import './Header.scss'

import Navigation from "../Navigation/Navigation"
export default defineComponent({
	name: "menu",
	components:{
		Navigation
	},
	setup(){
		return () => (
			<div class="header">
				<div class="content">
					<div class="content-logo">
						<ElImage fit="cover" src="https://ssl-pubpic.51yund.com/1303841056.jpg"></ElImage>
					</div>
					<div class="content-cate">
						<Navigation></Navigation>
						hhhh
					</div>
					<div class="content-search">333</div>
					<div class="content-uesr">4444</div>
				</div>
			</div>
		)
	}
})

