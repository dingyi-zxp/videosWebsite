import {ElImage} from "element-plus";
import {  defineComponent, h } from "vue";
import "./Social.scss"

export default defineComponent({
	props: {
		social: {
			type: Object,
			default: {
			}
		}
	},
	setup(props){
		return () => h(
			'div',
			{
				onClickCapture(e:any){
					console.log();
				},
			},
			[
			h(
				ElImage,
				{
					class:"social-icon",
					src: props.social.icon
				}
			 )
			]
		)
	}
})
