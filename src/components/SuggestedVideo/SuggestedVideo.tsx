import {ElImage} from "element-plus";
import {defineComponent, h,ref, onBeforeMount, onMounted, reactive,watch} from "vue";
import router from "../../router/index";
import "./SuggestedVideo.scss"
import { videoPlay } from "../VideoPlay/VideoPlay";
import  round_btn  from "../IconRound/IconRound";
import maturity_rating from "../MaturityRating/MaturityRating"
import { svgVideoIcon, close_black } from "../../utils/svgIcons"
import { play_svg,videoRate } from "../../utils/svgIcons";

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
			console.log('befor',props.videoId);
			
			testVideo()
			haveVideo()
			console.log('has src', state.hasVideoSrc);
			
		})

		onMounted(() =>{
			initVideoState()
			videoListener()
		})

		function initVideoState(){
			const domVideo = document.getElementById(props.videoId)
			videoState.muted = domVideo?.muted
			videoState.volume = domVideo?.volume
			video = domVideo
			
			console.log(btnIcon);
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
				state.videoSrc = 'http://rjlnywy6l.hn-bkt.clouddn.com/videos/Phonk-_%E9%9B%85%E4%BF%97%E5%85%B1%E8%B5%8F-%E4%BF%97%E5%85%B1%E8%B5%8F-1080P-.mp4'
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
			if ( videoState.playing ){
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
			
			emit('clearState', true)
		}

		function tabWatch(){
			console.log('to Watch');

			router.push({
				path: '/watch'
			})
			
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
				<div style={ "opacity: 1" }>
					<div class={ "sug-img-title" }>
						<ElImage class={ "sug-img-title-logo" } src="https://occ-0-4295-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQsmLCxDoxsCXZTeom0U3LvYZsPcrZ4Ut93E7eSPnPJBtDsFta-_PV4O8COaZj1I4Tf9RhRFbXwTdPxKXXQsu5s4xkIMuDhw3g3KqF3WWnQ.webp?r=b9b" style="width: 100%; opacity: 1;"></ElImage>

						<div class={ "sug-img-logo-btn" }>
							<a class={ "sug-img-logo-btn-play" } tabindex="0" href="#">
								<button class={ "sug-img-logo-btn-play-btn" } tabindex="-1">
									<div class={  "sug-img-logo-btn-play-btn-svg" } >
										{ play_svg }
									</div>
									<div class={ "sug-img-logo-btn-play-btn-word" }>
										<span onClick={ tabWatch } class={ "sug-img-logo-btn-play-btn-word-ltr" }>播放</span>
									</div>
									
								</button>
							</a>
							<round_btn class={ "sug-img-logo-btn-play-btn-margin" } svgIcon={ videoRate.love }></round_btn>
							<round_btn  class={ "sug-img-logo-btn-play-btn-margin" } svgIcon={ videoRate.like }></round_btn>
						</div>
					</div>
				</div>
			</div> 
			</div>
		)
	},
	mounted(){
	}
})
