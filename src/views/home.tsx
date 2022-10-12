import {defineComponent} from "vue";

import SuggestedVideo from "@/components/SuggestedVideo/SuggestedVideo"
import VideoList from "@/components/VideoList/VideoList"
export default defineComponent({
	name: "Home",
	components: {
		SuggestedVideo,
		VideoList,
	},

	setup(){
		return () => (
			<div >
				<SuggestedVideo></SuggestedVideo>
				<VideoList></VideoList>
			</div>
		)
	}

})
