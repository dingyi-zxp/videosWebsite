import {defineComponent,watch} from "vue"
import "./IconRound.scss"



export default defineComponent({
	props: {
		svgIcon:{
			type: SVGElement
		},
	},
	watch:{
		svgIcon(n,o){
			console.log('eelu987987lnie');
			
			console.log(n,o);
		}
	},
	setup(props){
		return () => <span class={ "ActionButtons" }>
						<button class={ "color-supplementary hasIcon round ltr-uhap25" } type="button">
							<div class={ "button-icon-line-height" }>
								<div class={ "video-icon-size flex-center" }>
										{ props.svgIcon }
								</div>
							</div>
						</button>
					</span>

	}
})
