import {defineComponent} from "vue";

import Menu from "@/components/Header/Header"
import SuggestedVideo from "@/components/SuggestedVideo/SuggestedVideo"
import VideoList from "@/components/VideoList/VideoList"
import Footer from "@/components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation"
import Search from "../components/Search/Search"
import Notification from "../components/Header/Notification/Notification";
import User from "../components/Header/User/User"
import UserStatus from "../components/UserStatus/UserStatus";
export default defineComponent({
	name: "Home",
	components: {
		Menu,
		SuggestedVideo,
		VideoList,
		Footer,
		Navigation,
		Notification,
		Search,
		User,
		UserStatus
	},

	setup(){
		return () => (
			<div >
			<Menu 
			v-slots={{
				nav: <Navigation></Navigation>,
				search: <Search></Search>,
				user: <User></User>,
				rightDown: <UserStatus></UserStatus>
			}}
			></Menu>
			<SuggestedVideo></SuggestedVideo>
			<VideoList class="main-bottom"></VideoList>
			<Footer  class="main-footer"></Footer>
				</div>
		)
	}

})
