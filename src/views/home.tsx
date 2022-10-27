import {defineComponent, ref,onBeforeMount} from "vue";

import SuggestedVideo from "@/components/SuggestedVideo/SuggestedVideo"
import VideoList from "@/components/VideoList/VideoList"
import focuse_video from "../components/FocusVideo/FocusVideo";
import full_video from "../components/FullVideo/FullVideo";
import Menu from "@/components/Menu/Menu"
import Footer from "@/components/Footer/Footer";
import {RouterView} from "vue-router";
import axios from "axios";
import { home,Request } from "../utils/request";

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

		const openPremodel = ref<boolean>( true )
		let suggestedData = ref<any>({})
		onBeforeMount(() => {
			getSugVideo()
		})

		function clearState( val:any ){
			openPremodel.value = !val
		}

		// SuggestedVideo 
		async function getSugVideo () {

			suggestedData = await Request(home.getIntro,{

					introId:1,
					limit:1
				})
			console.log('231snren',suggestedData,suggestedData.img_info);

			
		}


		return () => (

			<div >
			<Menu></Menu>
			<SuggestedVideo 
			videoId={"homeSug"}
			suggestedData={ suggestedData }
			/>

			<VideoList></VideoList>
			<RouterView></RouterView>
			<Footer  class="main-footer"></Footer>
			</div>

		)
	}

})
