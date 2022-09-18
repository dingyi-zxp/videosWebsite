import { defineComponent } from "vue";
import './Header.scss'

import Navigation from "../Navigation/Navigation"
import Search from "../Search/Search"
import Notification from "./Notification/Notification";
export default defineComponent({
	name: "menu",
	components:{
		Navigation, Search, Notification
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
					</div>
					<div class="content-search">
						<Search></Search>
					</div>
					<div class="content-uesr">
						<Notification></Notification>
					</div>
				</div>
			</div>
		)
	}
})

