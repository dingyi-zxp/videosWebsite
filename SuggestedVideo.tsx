import {ElImage} from "element-plus";
import {defineComponent, h,ref, onBeforeMount, onMounted, reactive,watch} from "vue";
import "./SuggestedVideo.scss"
import { videoPlay } from "../VideoPlay/VideoPlay";
import  round_btn  from "../IconRound/IconRound";
import maturity_rating from "../MaturityRating/MaturityRating"
import { svgVideoIcon, close_black } from "../../utils/svgIcons"

export default defineComponent({
	name: "SuggestedVideo",
	components:{
		round_btn
	},

	props: {
		videoId: {
			type: String
		},
		haveClose: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { emit }) {
		const state = reactive({
			videoSrc: '',
			hasVideoSrc:false,
			hasPlay: false
		})

		const videoState = reactive( {
			muted: false,
			volume:1,
			playing: false,
			waiting: false,
			ended: false
		})	

		let video   = document.getElementById(props.videoId)
		let btnIcon = ref(svgVideoIcon.svgMute )
		

		onBeforeMount(() => {
			testVideo()
			haveVideo()
			
		})

		onMounted(() =>{
			initVideoState()
			videoListener()
			console.log("videoState",videoState);
			
		})

		function initVideoState(){
			const domVideo = document.getElementById(props.videoId)
			videoState.muted = domVideo?.muted
			videoState.volume = domVideo?.volume
			video = domVideo
			
		}

		function videoListener(){
			video?.addEventListener('playing',function (){
				videoState.playing = true
				videoState.ended = false
			})

			video?.addEventListener('ended', function(){
				videoState.ended = true
				videoState.playing = false
				state.hasVideoSrc = false
				state.hasPlay = true
				console.log('hasPlay',state.hasPlay);
				
				btnIcon.value = svgVideoIcon.svgRestar
			})

		}

		function haveVideo(){
			if( state.videoSrc != '' ){
				state.hasVideoSrc = true
			}
		}

		function testVideo() {
			setTimeout(() => {
				state.videoSrc = 'http://rjlnywy6l.hn-bkt.clouddn.com/videos/%E4%BD%A0%E7%9A%84%E5%85%A8%E5%8D%A1%E6%B1%A0%E8%B7%AF%E8%BF%87-%E4%BD%A0%E7%9A%84%E5%85%A8%E5%8D%A1%E6%B1%A0%E8%B7%AF%E8%BF%87-1080P-.mp4'
					haveVideo()
			},2000)
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
			console.log(videoState);
			

			
			if ( videoState.playing ){
				console.log("ss playing");
				
				videoState.muted = !videoState.muted
				video.muted = videoState.muted
			} else if ( videoState.ended ) {
				state.hasVideoSrc = true
				video.currentTime = 9
				setTimeout(() => { video.play() } ,100)
				console.log(video.error);
				
			}
		
			
			btnIcon.value = svgBtnStatus()			
		}

		function clickClear() {
			console.log('clearState');
			
			emit('clearState', false)
		}

		return () => (
		<div id={"sugid"} class={"sug"}>
			<div class={ "sug-row" }>
				<div class={ "sug-wrapper" }>
					<div class={ "sug-billboard" }>
						<ElImage v-show={  !state.hasVideoSrc } class={ "sug-screen sug-static-image" } 
						src="https://occ-0-3188-3187.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaw5X613QY--I6dGT-PAneHdXsMXoafr3idCWCAN8BhK_bavNXtKBOJcJwDCB3Z9DmYh5C7dX26BfxQV1v31TLngQjsrrbKmuzwH.webp?r=6f4" 
							fit="cover" />			
						<div v-show={ state.hasVideoSrc} class={ "sug-screen" }> { videoPlay(props?.videoId,state.videoSrc,"video") } </div> <div class={ "sug-left-vignette" }></div>
						<div class={ "sug-bottom-vignette" }></div>
						{
							props.haveClose ?
							<div class={ "sug-close-previewModal" } onClick={ clickClear }> 
								{ close_black }
							</div>
								:
								<div></div>
						}
					</div>
				</div>
				<div class={ "embedded" }>

					<round_btn v-show={ state.hasVideoSrc || state.hasPlay} onClick={ videoClickBtn } svgIcon={ btnIcon.value }></round_btn>


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
