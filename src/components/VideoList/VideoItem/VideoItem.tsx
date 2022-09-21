import {ElImage} from "element-plus";
import {defineComponent, h, PropType} from "vue";
import "./VideoItem.scss"

interface interVideo{
	video: {
		name:string,
		img: string
	}
}
export default defineComponent({
	name: "Video",

	props:{
		video: { 
			type:Object as PropType<interVideo[video]>,
		}
	},


	setup(props,ctx){
		let { video } = props
		return () => (
			h(
				"div",
				{
					class:"video"
				},
				[
					h(
						ElImage,
						{
							class:"video-img",
							src: video.img,
							fit:"cover"
						}
					)
				]
			)
		
		)	
	}
})
