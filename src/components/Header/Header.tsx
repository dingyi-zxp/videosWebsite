import { defineComponent,ref ,onMounted,vShow, reactive, watch} from "vue";
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
	
	props: {
		oper: {
			type: Boolean
		}
	},

	watch:{
		oper(newVal,oldVal) {
			console.log('nn',newVal,oldVal);
			
		}
	},
	setup(props, { slots,emit }){

		console.log(props);
		
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

		return () => 
		<div class={ 'header'}  >
			<div class={ `content ${isScroll.value ? 'scrollTop': ''} ` }>
						<ElImage  class="content-logo" fit="cover" src="https://ssl-pubpic.51yund.com/1303841056.jpg"></ElImage>
					<div class="content-cate">
						{ slots.nav && slots.nav() }
					</div>
					<div class="content-search">
						{ slots.search && slots.search() }
					</div>
					<div class="content-uesr">
						{ slots.user && slots.user() }
					{props.oper}
					</div>
				</div>
				<div class={"UserMenu"}  v-show={ props.oper }>
					{slots.menu && slots.menu() }
				</div>
			</div>
		
	}
})

