import { defineComponent,ref ,onMounted} from "vue";
import './Header.scss'


import Navigation from "../Navigation/Navigation"
import Search from "../Search/Search"
import Notification from "./Notification/Notification";
import User from "./User/User"
import UserStatus from "../UserStatus/UserStatus";

export default defineComponent({
	name: "menu",
	components:{
		Navigation, Search, Notification,User, UserStatus
	},
	
	data(){
		return {
			isScroll: false
		}
	},
	setup(props, { slots }){
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
						{ slots.nav && slots.nav() }
					</div>
					<div class="content-search">
						{ slots.search && slots.search() }
					</div>
					<div class="content-uesr">
						{ slots.user && slots.user() }
					</div>
				</div>
				<div class={"UserMenu"}>
					{slots.rightDown && slots.rightDown() }
				</div>
			</div>
		
	}
})

