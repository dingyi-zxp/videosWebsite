import {ElImage} from "element-plus";
import {defineComponent, h, onBeforeMount, reactive,watch} from "vue";
import "./SuggestedVideo.scss"
import { videoPlay } from "../VideoPlay/VideoPlay";
import { restartIcon,svgIcons } from "../IconRound/IconRound";
import maturity_rating from "../MaturityRating/MaturityRating"

export default defineComponent({
	name: "SuggestedVideo",
	
	setup() {
		const state = reactive({
			isLoadVideo: true,
			videoSrc: ''
		})
		
		watch(state, (val) => {
			haveVideo()
		})

		onBeforeMount(() => {
			testVideo()
		})

		function haveVideo(){
			if( state.videoSrc != '' ){
				state.isLoadVideo = false
			}
		}

		function testVideo() {
			setTimeout(() => {
				state.videoSrc = 'http://rjlnywy6l.hn-bkt.clouddn.com/videos/2077.mp4'
			},2000)
		}

		function watchVideo(){}

		function domVideo(){}
		return () => (
		<div id={"sugid"} class={"sug"}>
			<div class={ "sug-row" }>
				<div class={ "sug-wrapper" }>
					<div class={ "sug-billboard" }>
						<ElImage v-show={ state.isLoadVideo } class={ "sug-screen sug-static-image" } 
						src="https://occ-0-3188-3187.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaw5X613QY--I6dGT-PAneHdXsMXoafr3idCWCAN8BhK_bavNXtKBOJcJwDCB3Z9DmYh5C7dX26BfxQV1v31TLngQjsrrbKmuzwH.webp?r=6f4" 
							fit="cover" />			
						{
							state.isLoadVideo ? <div/> : <div class={ "sug-screen" }> { videoPlay(state.videoSrc) } </div>
						}
						<div class={ "sug-left-vignette" }></div>
						<div class={ "sug-bottom-vignette" }></div>
					</div>
				</div>
				<div class={ "embedded" }>
				{
					state.isLoadVideo ? null : restartIcon( svgIcons.svgMute )
				}
				{
					maturity_rating("19+")
				}
				</div>
			</div> 
			</div>
		)
	},
	mounted(){
	}
})
