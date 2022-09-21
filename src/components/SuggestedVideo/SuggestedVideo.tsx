import {ElImage} from "element-plus";
import {defineComponent, h} from "vue";
import "./SuggestedVideo.scss"

export default defineComponent({
	name: "SuggestedVideo",
	
	setup() {
		return () => h(
			'div',
			{
				class: "sug"
			},
			[
				h(
					ElImage,
					{
						class: "sug-screen",
						src: "https://ssl-pubpic.51yund.com/1304273761.jpg",
						fit: "cover"

					}
				)
			]
		)
	}
})