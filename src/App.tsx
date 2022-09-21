import { defineComponent } from 'vue'
import Menu from "@/components/Header/Header"
import SuggestedVideo from "@/components/SuggestedVideo/SuggestedVideo"
import VideoList from "@/components/VideoList/VideoList"
import Footer from "@/components/Footer/Footer";
export default defineComponent({
	name: "App",
	components: {
		Menu,
		SuggestedVideo,
		VideoList,
		Footer,
	},
	setup(){
		return () => (
			<div >
			<Menu></Menu>
			<SuggestedVideo></SuggestedVideo>
			<VideoList></VideoList>
			<Footer></Footer>
				</div>
		)
	}
})
