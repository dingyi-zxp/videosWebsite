import {defineComponent, onBeforeMount, onMounted, reactive,vShow} from "vue";
import "./WatchVideo.scss"
import { play_svg,watch_back } from "../../utils/svgIcons"
import video_control from "../VideoControl/VideoControl";

import router from "../../router/index"

export default defineComponent({
	props: {
		src:{
			type:String
		}
	},
	components: { 
		video_control
	},
	setup(props, ctx) {

		const videoState = reactive({
			playing: false,
			ended: false,
			volume: 1,
			playbackRate:1,
			duration: 0,
			currentTime: 0
		})

		const showState = reactive({
			control: false
		})

		let videoDom:any

		onBeforeMount(() => {

		})


		onMounted(() => {
			videoDom = document.getElementById('playWatch')
			console.log(videoDom);
			initVideoState()
			videoListener()
			
		})
	

		function playWatch(){
			console.log( 'play watch' );
			
			if ( videoState.ended == true ){
				videoDom.currentTime = 0
			}

			videoDom.play()
		}

		function initVideoState(){
			videoState.playing = false
			videoState.ended = false
			videoState.volume = videoDom.volume
			videoState.playbackRate = videoDom.playbackRate
			console.log("eeeu",videoDom.playbackRate, videoDom.duration);
			console.log(videoDom.duration);
			getDuration()
			
		}
		 // set duration
		function getDuration(){
			let timeset:any
			timeset = setTimeout(function () {
　    let duration = videoDom.duration;
　　  if(isNaN(duration)){
　　　　getDuration();
　　  }else{
			console.log(duration);
					videoState.duration = duration
　　　　　　clearInterval(timeset);
　　　　}
　  　}, 10);
		}

		function watchCurrentTime(){
			let timeset: any
			timeset = setTimeout(() => {
				let currentTime = videoDom.currentTime
			
				
				if ( currentTime == videoState.duration ){
					clearTimeout(timeset)
					
					console.log( "ended video",currentTime);
				} else {
					videoState.currentTime = currentTime
					watchCurrentTime()
				}
			}, 100)
		}

		function videoListener(){
			videoDom?.addEventListener( 'playing',function(){
				console.log('play watch playing');
				
					watchCurrentTime()
					//					videoDom.muted = false
				videoState.playing = true
				videoState.ended = false
			})

			videoDom?.addEventListener( 'ended', function(){
				console.log('play watch ended');
					
				videoState.playing = false,
				videoState.ended = true 
			} )
		}

		function stopWatchPlay(){
			console.log('stop watch play');
			
			videoDom?.pause()

			videoState.playing = false
		}

		let mouseTimeout:any
		let mouseTimeoutCancal:any
		function mouseScreen(){
			mouseTimeout = setTimeout(() => {
				showState.control = true
				clearTimeout(mouseTimeoutCancal)
				mouseTimeoutCancal = setTimeout(() => {
					showState.control = false
					clearTimeout(mouseTimeout)
				},1000)
			},50)
		}

		function isPlay( is:boolean ){
			
			if ( videoState.ended ){
				videoDom.play()
			}

			if ( videoState.playing ){
				videoState.ended = true
				videoState.playing = false
				videoDom.pause()
			}
		}

		function UpdateVideoPercent( percent:any ){
			videoDom.currentTime = videoState.duration * percent
			videoState.currentTime = videoDom.currentTime
		}

		function updateVolume(volume:any){
			console.log( "volume",volume );
			videoDom.volume = volume
			console.log( "volume2",videoDom.volume);
			videoState.volume = videoDom.volume
			
		}
		
		function backPage(){
			router.go(-1)
		}
		return() => <div class={ "watch-play" } onMousemove={ mouseScreen } >
			<div class={ "watch-play--player-view" }>
				<div class={ "watch-play-active" } tabindex="0">

					<div class={ "watch-play--frame"} onClick={stopWatchPlay}>
						<div class={ "watch-play-canvas" }>
							<div class={ "watch-play-canvas" }>
								<video id="playWatch" src={ props.src } 
								tabindex="-1"
								muted
								autoplay
								style={ "width=100%" }></video>
						</div>
					</div>
				</div>

				<div v-show={ !videoState.playing } class={ "watch-icon" } onClick={ playWatch }>
					<div class={ "watch-icon-restart" }>
						<button class={ "watch-icon--button" }>
							<div class={ "watch-icon--button-frame" }>
								{ play_svg }
							</div>
						</button>
					</div>
				</div>

			</div>
				<div class={ "watch-control" } v-show={ showState.control }>
					<div class={ "watch-control--upper" }>
						<div class={ "watch-control--upper-right" } onClick={ backPage }>
						{ watch_back }
						</div>
					</div>

					<div class={ "watch-control--footer" } >
						<video_control 
						onUpdateRate={ (num:number) => { videoDom.playbackRate = num;  videoState.playbackRate = num} } 
						onFullScroll={ (f:boolean) => { videoDom.requestFullscreen()  }}
						onBackTime = { ( time:number ) => { videoDom.currentTime = videoDom.currentTime - time } }
						onAdvanceTime = { ( time:number ) => { videoDom.currentTime = videoDom.currentTime + time } }
						onIsPlay = { ( is:boolean ) => { isPlay(is) } } 
						onProgress = { (percent:any) => { UpdateVideoPercent(percent) } }
						onVolume = { (volume:any) => {  updateVolume(volume)}}
						videoState={videoState}></video_control>
					</div>

				</div>
		</div>
		</div>
	},
})
