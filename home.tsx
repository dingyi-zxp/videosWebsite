import {defineComponent, ref} from "vue";

import SuggestedVideo from "@/components/SuggestedVideo/SuggestedVideo"
import VideoList from "@/components/VideoList/VideoList"
import focuse_video from "../components/FocusVideo/FocusVideo";
export default defineComponent({
	name: "Home",
	components: {
		SuggestedVideo,
		VideoList,
		focuse_video
	},

	setup(){
		const videoId = ref<string>("213")
		const openPremodel = ref<boolean>( true )
		const tesx = "xx"
		return () => (
			<div >
				<SuggestedVideo videoId= { tesx }></SuggestedVideo>
				<VideoList></VideoList>
				{
					openPremodel.value ?
					<focuse_video ></focuse_video>
						:
						<div />
				}
			</div>
		)
	}

})
