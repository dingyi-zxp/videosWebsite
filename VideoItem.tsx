import {ElImage} from "element-plus";
import {defineComponent, h, PropType, reactive, ref} from "vue";
import "./VideoItem.scss"
import round_btn from "../../IconRound/IconRound";
import { videoRate,dot } from "../../../utils/svgIcons";
import rating_rectangle from "../../Rectangle/Rectangle"

interface interVideo{
	video: {
		name:string,
		img: string
	}
}

export default defineComponent({
	name: "Video",
	
	components:{
		round_btn
	},
	props:{
		video: { 
			type:Object as PropType<interVideo[video]>,
		}
	},


	setup(props,ctx){
		let { video } = props
		let isFocus = ref<Boolean>(false)
		let types = ["日本","日常","卡爱"]
	function focusObj(e:any) {
		isFocus.value = true
		console.log('focus',e);
	}
	
	function outFocus( e:any ){
		isFocus.value = false
		console.log('outk')
	}
	function clickVideo(){
		console.log(video.name);
	}
	function _dot(){
		return dot
	}
	function toVideoInfo(){
		console.log("to");
		
	}
			return () => <div class={ "video" }
			onClick={ clickVideo }
			>
				<ElImage class={ "video-img" } src={video.img} fit="cover"></ElImage>
				<div class={ "details" }>
					<div class={ "details-layout" }>
						<div class={ "details-upper layout flex-hypodispersion" }>
							<div class={ "details-upper-title" }>
								{ video.name }
							</div>
							<round_btn onClick={ () => { toVideoInfo }} class={ "details-upper-info" } svgIcon={ videoRate.arrow_down }></round_btn>
						</div>

						<div class={ "details-btn layout flex-hypodispersion" }>
							<round_btn svgIcon={ videoRate.love }></round_btn>
							<round_btn svgIcon={ videoRate.like }></round_btn>
							<round_btn svgIcon={ videoRate.nolike }></round_btn>
							<round_btn svgIcon={ videoRate.collect }></round_btn>
						</div>

						<div class={ "details-rating layout" }>
							{ rating_rectangle("12+") }
							<div class={ "details-time" }>
								2小时3分钟
								{ rating_rectangle("高清","small") }
							</div>
						</div>

						<div class={ "details-type " }>
						{
							types.map( (item,index) => {
								return <span class={ "flex-align-center font-small" }>
									{ item }
									{
										index != types.length - 1 ?
											_dot()
											:
											''
									}
								</span>
							} )
						}
						</div>
						
					</div>
				</div>
		</div>
	}
})
