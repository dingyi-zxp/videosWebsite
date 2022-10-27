import {progressProps} from "element-plus";
import {defineComponent, onBeforeMount, onMounted, reactive, ref} from "vue";
import "./VideoControl.scss"
import { play_big,videoAdvance,videoBackTime, video_voice, video_gather, video_full, video_speed, watch_pause} from "../../utils/svgIcons";

export default defineComponent({
	props: {
		videoState: {
			type: Object
		},
	},
	setup(props, { emit }) {
		let progress:any
		let showState = reactive({
			volume:false,
			gather:false,
			speed:false,
			speedRate:3
		})
		let state = reactive({
			allTime: 0,
			progress:null
		})
		let cancelOper:any
		onBeforeMount(() => {

		})
		onMounted(() => {
			initState()
		})

		function initState(){
			
		}
		function clickTime(e:any,elementName:string) {
			let x = document.getElementsByName(elementName)
			let element = x
			let pageX = e.pageX
			let xx = element[0].offsetLeft
			let progressWidth = element[0].clientWidth
			let target = pageX - xx
			state.allTime = pageX

			let percent = target / progressWidth
			console.log("target",target,percent);
			
			emit(`${ elementName }`,percent)
		}

		function setVolume(){
			clearTimeout(cancelOper)
			showState.volume = true
		}

		function cancelVolume(){
			cancelOper = setTimeout(() => showState.volume = false, 500)
		}

		function setGather(){
			clearTimeout(cancelOper)
			showState.gather = true
		}
		function cancelGather(){
			cancelOper = setTimeout(() => showState.gather = false, 500)
		}
		function setSpeed(){
			clearTimeout(cancelOper)
			showState.speed = true
		}

		function cancelSpeed(){
			cancelOper = setTimeout(() => showState.speed = false, 500)
		}

		function selectRate( num:number ){
			showState.speedRate = num
			console.log("speed ", num);
			
			emit('updateRate', num)
		}

		function progressState() {
			let currentTime = props.videoState.currentTime
			let duration = props.videoState.duration
			
			let percent = ( currentTime / duration )
			
			return percent 
		}
		return () => <div class={ "control" }>
			<div class={ "control-progress" } >

				<div  class={ "control-progres-play" }> 
					<div name={ "progress" } class={ "control-progres-play-flex control-progres-all" } onClick={ (e) => clickTime(e,'progress') }>
						<div class={ "control-progres-play-line" }
						style={ `width: calc( 100% * ${ progressState() } )` }></div>
						<div class={ "control-progres-play-present" }></div>
					</div>
				</div>
				</div>

				<div class={ "control-component" }>
					<div class={ "control-component-oper" } onClick={ () => { emit('isPlay', true) } }>
					{ props?.videoState.playing ? watch_pause : play_big }
					</div>
					<div onClick={ () => emit('backTime',10) } class={ "control-component-oper" }>
						{videoBackTime}
					</div>
					<div onClick={ () => emit('advanceTime',10) } class={ "control-component-oper" }>
						{ videoAdvance }
					</div>
					<div class={ "control-component-oper extra-control" } onMouseover={ setVolume } onMouseout={ cancelVolume }> 
						<div name={ "volume" } v-show={ showState.volume } class={ "volume-control" } onClick={ (e) => clickTime(e, 'volume') }>
							<div   class={ "volume-control-percent" } style={ `width:${ 130 * ( 1 * props.videoState.volume ) }px` }></div>
						</div>
						{ video_voice }
					</div>
					<div class={ "control-component-info control-component-info-frame" }> 
						雅俗共赏
					</div>
					<div class={ "control-component-oper" }> </div>
					<div class={ "control-component-oper" } onMouseover={ setGather } onMouseout={ cancelGather }>
						<div class={ "gather-control" } v-show={ showState.gather }>
							<div class={ "gather-control-ltr" } >
								<div class={ "gather-control-title" }>
									领域
								</div>
								<div class={ "gather-control-content" }>
										<el-image 
										class={ "gather-control-content-img" }
										src={ "https://i.stack.imgur.com/eiVFH.gif?s=256&g=1" }
											fit={"cover"}></el-image>

										<div class={ "gather-control-content-right" }>
											<div class={ "gather-control-content-right-title" }>
												圣洁
											</div>
											<div class={"gather-control-content-right-details"}>
												修女
											</div>
										</div>
								</div>
								<div class={ "gather-control-content" }>
										<el-image 
										class={ "gather-control-content-img" }
										src={ "https://i.stack.imgur.com/eiVFH.gif?s=256&g=1" }
											fit={"cover"}></el-image>

										<div class={ "gather-control-content-right" }>
											<div class={ "gather-control-content-right-title" }>
												圣洁
											</div>
											<div class={"gather-control-content-right-details"}>
												修女
											</div>
										</div>
								</div>
								<div class={ "gather-control-content" }>
										<el-image 
										class={ "gather-control-content-img" }
										src={ "https://i.stack.imgur.com/eiVFH.gif?s=256&g=1" }
											fit={"cover"}></el-image>

										<div class={ "gather-control-content-right" }>
											<div class={ "gather-control-content-right-title" }>
												圣洁
											</div>
											<div class={"gather-control-content-right-details"}>
												修女
											</div>
										</div>
								</div>
								<div class={ "gather-control-content" }>
										<el-image 
										class={ "gather-control-content-img" }
										src={ "https://i.stack.imgur.com/eiVFH.gif?s=256&g=1" }
											fit={"cover"}></el-image>

										<div class={ "gather-control-content-right" }>
											<div class={ "gather-control-content-right-title" }>
												圣洁
											</div>
											<div class={"gather-control-content-right-details"}>
												修女
											</div>
										</div>
								</div>
							</div>
						</div>
						{ video_gather }
					</div>
					<div class={ "control-component-oper" } onMouseover={ setSpeed } onMouseout={ cancelSpeed }> 
						<div v-show={ showState.speed } class={ "speed-control" } >
							<span class={ `speed-control-text ${ props.videoState.playbackRate == 0.5 ? 'speed-control-select': '' }` } onClick={ () => selectRate(0.5) }>0.5x</span>
							<span class={ `speed-control-text ${ props.videoState.playbackRate == 1 ? 'speed-control-select': '' }` }  onClick={ () => selectRate(1) }>1.0</span>
							<span class={ `speed-control-text ${ props.videoState.playbackRate == 1.5 ? 'speed-control-select': '' }` }  onClick={ () => selectRate(1.5) }>1.5x</span>
							<span class={ `speed-control-text ${ props.videoState.playbackRate == 2 ? 'speed-control-select': '' }` }  onClick={ () => selectRate(2) }>2x</span>
						</div>
						{ video_speed }
					</div>
					<div onClick={ () => { emit('fullScroll',true) } } class={ "control-component-oper" }> { video_full }</div>
				</div>
		</div>
	},
})
