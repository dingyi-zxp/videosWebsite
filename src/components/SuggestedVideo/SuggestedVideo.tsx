import {ElImage} from "element-plus";
import {defineComponent, h,ref, onBeforeMount, onMounted, reactive,watch} from "vue";
import "./SuggestedVideo.scss"
import { videoPlay } from "../VideoPlay/VideoPlay";
import { restartIcon,svgIcons } from "../IconRound/IconRound";
import maturity_rating from "../MaturityRating/MaturityRating"
import { svgVideo } from "@/utils/svgIcons"

export default defineComponent({
	name: "SuggestedVideo",
	
	setup() {
		const state = reactive({
			videoSrc: '',
			hasVideoSrc:false
		})

		const videoState = reactive( {
			muted: false,
			volume:1,
			paying: false,
			waiting: false,
			ended: false
		})	

		let video  = document.getElementById('Id')

		watch(state, (val) => {
			haveVideo()
		})

		onBeforeMount(() => {
			console.log('befor');
			
			testVideo()
		})

		onMounted(() =>{
			initVideoState()
			videoListener()
		})

		function initVideoState(){
			const domVideo = document.getElementById('Id')
			videoState.muted = domVideo?.muted
			videoState.volume = domVideo?.volume
			video = domVideo
			console.log(videoState);
		}

		function videoListener(){
			video?.addEventListener('click', videoClickBtn)

			video?.addEventListener('playing',function (){
				videoState.paying = true
				videoState.ended = false
				console.log(videoState);
				
			})

			video?.addEventListener('ended', function(){
				videoState.ended = true
				videoState.paying = false
			})

		}

		function haveVideo(){
			if( state.videoSrc != '' ){
				state.hasVideoSrc = true
			}
		}

		function testVideo() {
			setTimeout(() => {
				state.videoSrc = 'http://rjlnywy6l.hn-bkt.clouddn.com/videos/2077.mp4'
			},2000)
		}

		function svgButton(){
			if ( videoState.ended )
				return svgVideo.restartIcon
			else if ( videoState.muted && videoState.paying){
				return svgIcons.svgMute
			}
		}

		function videoClickBtn(){
			console.log('video click');
			
			if ( videoState.paying && videoState.muted ){
				console.log(video);
				
				console.log(video.muted);
				video.muted = false
				console.log(video.muted);
				
				console.log('close mute');
				
			}
		}
		function domVideo(){}
		return () => (
		<div id={"sugid"} class={"sug"}>
			<div class={ "sug-row" }>
				<div class={ "sug-wrapper" }>
					<div class={ "sug-billboard" }>
						<ElImage v-show={ !state.hasVideoSrc } class={ "sug-screen sug-static-image" } 
						src="https://occ-0-3188-3187.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaw5X613QY--I6dGT-PAneHdXsMXoafr3idCWCAN8BhK_bavNXtKBOJcJwDCB3Z9DmYh5C7dX26BfxQV1v31TLngQjsrrbKmuzwH.webp?r=6f4" 
							fit="cover" />			
							<div v-show={ state.hasVideoSrc } class={ "sug-screen" }> { videoPlay(state.videoSrc,"video") } </div>
						<div class={ "sug-left-vignette" }></div>
						<div class={ "sug-bottom-vignette" }></div>
					</div>
				</div>
				<div class={ "embedded" }>
				{
					state.hasVideoSrc ? restartIcon( svgButton() ) : null 
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
