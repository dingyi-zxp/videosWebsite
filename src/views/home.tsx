import {defineComponent, ref} from "vue";

import SuggestedVideo from "@/components/SuggestedVideo/SuggestedVideo"
import VideoList from "@/components/VideoList/VideoList"
import focuse_video from "../components/FocusVideo/FocusVideo";
import full_video from "../components/FullVideo/FullVideo";
import Menu from "@/components/Menu/Menu"
import Footer from "@/components/Footer/Footer";
export default defineComponent({
	name: "Home",
	components: {
		SuggestedVideo,
		VideoList,
		focuse_video,
		full_video,
		Menu,
		Footer
	},

	setup(){
		const videoId = ref<string>("213")
		const openPremodel = ref<boolean>( true )
		const tesx = "xx"

		function clearState( val:any ){
			openPremodel.value = !val
		}

		return () => (

			<div >
			<Menu></Menu>
				<SuggestedVideo></SuggestedVideo>
				<VideoList></VideoList>
				<focuse_video></focuse_video>
			<Footer  class="main-footer"></Footer>
			</div>

		)
	}

})
