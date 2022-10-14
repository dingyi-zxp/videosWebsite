import {ElImage} from "element-plus";
import {defineComponent, h,ref, onBeforeMount, onMounted, reactive,watch} from "vue";
import "./SuggestedVideo.scss"
import { videoPlay } from "../VideoPlay/VideoPlay";
import  round_btn  from "../IconRound/IconRound";
import maturity_rating from "../MaturityRating/MaturityRating"
import { svgVideoIcon } from "../../utils/svgIcons"

export default defineComponent({
	name: "SuggestedVideo",
	components:{
		round_btn
	},
	setup() {
		const state = reactive({
			videoSrc: '',
			hasVideoSrc:false
		})

		const videoState = reactive( {
			muted: false,
			volume:1,
			playing: false,
			waiting: false,
			ended: false
		})	

		let video   = document.getElementById('Id')
		let btnIcon = ref(svgVideoIcon.svgMute )
		

		onBeforeMount(() => {
			console.log('befor');
			
			testVideo()
			haveVideo()
			console.log('has src', state.hasVideoSrc);
			
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
			
			console.log(btnIcon);
		}

		function videoListener(){
			video?.addEventListener('playing',function (){
				videoState.playing = true
				videoState.ended = false
				console.log('heelou');
				
			})

			video?.addEventListener('ended', function(){
				videoState.ended = true
				videoState.playing = false
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
				console.log('eee');
				
		}

		function svgBtnStatus():any{
			if ( videoState.ended ){
				return svgVideoIcon.svgRestar
			}
			else if ( videoState.playing){
				if ( videoState.muted )
					return svgVideoIcon.svgMute
				else
					return svgVideoIcon.svgVoice
			}
		}
		
		function videoClickBtn(){
			console.log("iulyy",video?.onplaying);
			
			if ( videoState.playing ){
				videoState.muted = !videoState.muted
				video.muted = videoState.muted
			}

			btnIcon.value = svgBtnStatus()			
		}

		return () => (
		<div id={"sugid"} class={"sug"}>
			<div class={ "sug-row" }>
				<div class={ "sug-wrapper" }>
					<div class={ "sug-billboard" }>
						<ElImage v-show={ state.videoSrc == '' } class={ "sug-screen sug-static-image" } 
						src="https://occ-0-3188-3187.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaw5X613QY--I6dGT-PAneHdXsMXoafr3idCWCAN8BhK_bavNXtKBOJcJwDCB3Z9DmYh5C7dX26BfxQV1v31TLngQjsrrbKmuzwH.webp?r=6f4" 
							fit="cover" />			
							<div v-show={ state.videoSrc != '' } class={ "sug-screen" }> { videoPlay(state.videoSrc,"video") } </div>
						<div class={ "sug-left-vignette" }></div>
						<div class={ "sug-bottom-vignette" }></div>
					</div>
				</div>
				<div class={ "embedded" }>

					<round_btn v-show={ state.videoSrc != '' } onClick={ videoClickBtn } svgIcon={ btnIcon.value }></round_btn>


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
