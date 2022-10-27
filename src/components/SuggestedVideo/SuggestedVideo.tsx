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
		},
		suggestedData: {
			type: Object
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

		let suggestedData = ref<any>({})
		

		onBeforeMount(() => {
			testVideo()
			haveVideo()
			console.log("eeeeuuu",props.suggestedData);
			
		suggestedData = props.suggestedData
			console.log("suggestedData",suggestedData,suggestedData.img_info);
			
		})

		onMounted(() =>{
			initVideoState()
			videoListener()
			
			console.log("suggestedData",suggestedData,suggestedData.img_info);
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
				state.videoSrc = "https://ssl-pubpic.51yund.com/1312376525.mp4"
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
			
			router.push({
				path: `/browse`
			})
			emit('clearState', true)
		}

		function tabWatch(){
			console.log('to Watch');
			let src:string = 'https://lookcat213.oss-cn-fuzhou.aliyuncs.com/Phonk-_%E9%9B%85%E4%BF%97%E5%85%B1%E8%B5%8F-%E4%BF%97%E5%85%B1%E8%B5%8F-1080P-.mp4'
			router.push({
				path: `/watch`,
				query: {
					src:src
				}
			})
			
		}
		return () => (
		<div id={"sugid"} class={"sug"}>
			<div class={ "sug-row" }>
				<div class={ "sug-wrapper" }>
					<div class={ "sug-billboard" }>
						<ElImage v-show={  !state.hasVideoSrc } class={ "sug-screen sug-static-image" } 
						src={ suggestedData.img_info }
							fit="cover" />			
						<div v-show={ state.hasVideoSrc} class={ "sug-screen" }> { videoPlay(props?.videoId,suggestedData.sug_video,"video") } </div> <div class={ "sug-left-vignette" }></div>
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
						<ElImage class={ "sug-img-title-logo" } src={ suggestedData.logo_intro } style="width: 70%; opacity: 1;"></ElImage>

						<div class={ "sug-img-logo-btn" }>
							<a  class={ "sug-img-logo-btn-play" } tabindex="0" href="#">
								<button class={ "sug-img-logo-btn-play-btn" } tabindex="-1">
									<div class={  "sug-img-logo-btn-play-btn-svg" } >
										{ play_svg }
									</div>
									<div class={ "sug-img-logo-btn-play-btn-word" }>
										<span onClick={ tabWatch } class={ "sug-img-logo-btn-play-btn-word-ltr" }>播放</span>
									</div>
									
								</button>

							</a>
							<a></a>
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
