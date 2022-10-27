import {progressProps} from "element-plus";
import {defineComponent, onMounted, ref} from "vue";
import "./VideoControl.scss"
import { play_big,videoAdvance,videoBackTime, video_voice, video_gather, video_full, video_speed, watch_pause} from "../../utils/svgIcons";

export default defineComponent({
	props: {
		videoState: {
			type: Object
		}
	},
	setup(props, ctx) {
		let progress:any
		onMounted(() => {
			let x = document.getElementsByName('progress')
			progress = x
			console.log("progress",x[0]);
			console.log(props.videoState);
			
			
		})
		function clickTime(e:any) {
			console.log(e);
			let pageX = e.pageX
			console.log(progress);
			let xx = progress[0].offsetLeft
			let progressWidth = progress[0].clientWidth
			let target = pageX - xx


			console.log(target,target / progressWidth);
			
		}

		function setVolume(){
			console.log("Volume");
			
		}
		return () => <div class={ "control" }>
			<div class={ "control-progress" }>

				<div  class={ "control-progres-play" }> 
					<div class={ "control-progres-play-flex" }>
						<div class={ "control-progres-play-line" }></div>
						<div class={ "control-progres-play-present" }></div>
						<div name={ "progress" } class={ "control-progres-all" } onClick={ clickTime }></div>
					</div>
				</div>
				</div>

				<div class={ "control-component" }>
					<div class={ "control-component-oper" }>
					{ props?.videoState.playing ? watch_pause : play_big }
					</div>
					<div class={ "control-component-oper" }>
						{videoBackTime}
					</div>
					<div class={ "control-component-oper" }>
						{ videoAdvance }
					</div>
					<div class={ "control-component-oper" } onMouseover={ setVolume }> 
						<div class={ "volume-control" }>
							<div class={ "volume-control-percent" } style={ `width:${ 130 * ( 1 * props.videoState.volume ) }px` }></div>
						</div>
						{ video_voice }
					</div>
					<div class={ "control-component-info control-component-info-frame" }> 
						雅俗共赏
					</div>
					<div class={ "control-component-oper" }> </div>
					<div class={ "control-component-oper" }>
						{ video_gather }
					</div>
					<div class={ "control-component-oper" }> { video_speed }</div>
					<div class={ "control-component-oper" }> { video_full }</div>
				</div>
		</div>
	},
})
