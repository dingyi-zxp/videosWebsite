import {ElImage} from "element-plus";
import {defineComponent, h, reactive} from "vue";
import "./SuggestedVideo.scss"
import { videoPlay } from "../VideoPlay/VideoPlay";

export default defineComponent({
	name: "SuggestedVideo",
	
	setup() {
		const state = reactive({
			isLoadVideo: true
		})
		return () => <div id={"sugid"} class={"sug"}>
			<div class={ "sug-row" }>
				<div class={ "sug-wrapper" }>
					<div class={ "sug-billboard sug-row" }>
						<ElImage v-show={ state.isLoadVideo } class={ "sug-screen" } 
						src="https://ssl-pubpic.51yund.com/1304273761.jpg" 
							fit="cover" />			
						{
							state.isLoadVideo ? <div/> : <div class={ "sug-screen" }> { videoPlay } </div>
						}
					</div>
					<div class={ "sug-left-vignette" }></div>
				</div>
			</div>
		</div>
	},
	mounted(){
	}
})
