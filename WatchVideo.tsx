import {defineComponent, onBeforeMount, onMounted, reactive,vShow} from "vue";
import "./WatchVideo.scss"
import { play_svg } from "../../utils/svgIcons"

export default defineComponent({
	props: {
		src:{
			type:String
		}
	},
	setup(props, ctx) {

		const videoState = reactive({
			playing: false,
			ended: false
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

			videoState.playing = true
			videoDom.play()
		}

		function initVideoState(){
			videoState.playing = false
			videoState.ended = false
		}

		function videoListener(){
			videoDom?.addEventListener( 'playing',function(){
				console.log('play watch playing');
				
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

		function mousemove(){
			console.log('hee');
			
		}
		return() => <div class={ "watch-play" } onMousemove={ mousemove }>
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

				<div class={ "watch-control" } tabindex="1">

					<div class={ "watch-control--upper" }></div>

					<div class={ "watch-control--footer" }></div>

				</div>
				<div class={ "watch-icon" } tabindex="1">
					eincer
				</div>
			</div>
		</div>
		</div>
	},
})
