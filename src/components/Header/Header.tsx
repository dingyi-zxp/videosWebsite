import { defineComponent,ref ,onMounted} from "vue";
import './Header.scss'

import Navigation from "../Navigation/Navigation"
import Search from "../Search/Search"
import Notification from "./Notification/Notification";
import User from "./User/User"

export default defineComponent({
	name: "menu",
	components:{
		Navigation, Search, Notification,User
	},
	
	data(){
		return {
			isScroll: false
		}
	},
	setup(){
		let scroll_height:any =
				document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
		let isScroll = ref(scroll_height > 0 ? true : false)

		let scroll: any = null
		const debouceScroll =()  => {	
			if ( scroll ) {
				clearTimeout(scroll)
			} 
			scroll = setTimeout(() => {	
					scroll_height=
						document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

					isScroll.value = scroll_height > 0 ? true : false

			},50)
			
		}
		
		window.onscroll = debouceScroll

		onMounted(() => {
			
		}) 


		return () => 
		<div class={ `header ${isScroll.value ? "scrollTop": ""}`} >
				<div class="content">
						<ElImage  class="content-logo" fit="cover" src="https://ssl-pubpic.51yund.com/1303841056.jpg"></ElImage>
					<div class="content-cate">
						<Navigation></Navigation>
					</div>
					<div class="content-search">
						<Search></Search>
					</div>
					<div class="content-uesr">
						<Notification></Notification>
						<User></User>
					</div>
				</div>
			</div>
		
	}
})

