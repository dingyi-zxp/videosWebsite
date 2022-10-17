import {ElImage} from "element-plus";
import {defineComponent} from "vue";
import sug from "../SuggestedVideo/SuggestedVideo";
import "./FocusVideo.scss"
import rating_rectangle from "../Rectangle/Rectangle"
import episode from "../Episode/Fpisode";
import fpisode_video from "../FpisodeVideo/FpisodeVideo";

export default defineComponent({
	name: "FocuseVideo",

	components:{  
		sug,
		episode,
		fpisode_video
	},

	setup(props, ctx) {
		let arr = [ "卡普空" , "飞碟社", "桃乃木", "陈瑞"]
		return () => <div class={ "previewModal" }>
			<div role="dialog" tabindex={ -1 } 
			class={ "previewModal-container" }>
			<sug  videoId= "eee"></sug>
			<div class={ "previewModal-container-info" }>
				<div class={ "flex-distribution" }>
					<div class={ "flex-distribution-max" }>
						<div class={ "flex-center-time previewModal-container-margin-bottom" }>
							<span style={ "margin-right: 10px" }>2022</span>
							{ rating_rectangle("12+") } 
							<span style={ "margin:0 10px" }>1小时2分钟</span>
							{ rating_rectangle("高清","small") } 
						</div>

						<div class={ "many-word previewModal-container-margin-bottom" }>
						在《咒术回战》系列的这部前传中，一名意志消沉的高中生入读咒术高专以解除困扰着他的暴力诅咒。
						</div>
					</div>

					<div class={ "flex-distribution-min"}>
						<div class={ "previewModal-container-actor previewModal-container-margin-bottom" }>
							<span class={ "previewModal-container-actor-hint" }>演员列表:</span>
							{
								arr.map((item,index) => {
									return <a href={ "https://element.eleme.io/#/zh-CN/component/page-header" }> {item} </a>

								})
							}
						</div>
						<div class={ "previewModal-container-actor previewModal-container-margin-bottom" }>
							<span class={ "previewModal-container-actor-hint" }>类型:</span>
							{
								arr.map((item,index) => {
									return <a href={ "https://element.eleme.io/#/zh-CN/component/page-header" }> {item}</a>
								})
							}
						</div>
						<div class={ "previewModal-container-actor previewModal-container-margin-bottom" }>
							<span class={ "previewModal-container-actor-hint" }>性质:</span>
						</div>
					</div>
				</div>

				<episode style={ "margin: 30px" }></episode>
				
				<fpisode_video></fpisode_video>
			</div>


		</div>
			<div class={ "focuse" }>
				<div class={ "previewModal-backDrop" }></div>
			</div>
		</div>	
	},
}) 
