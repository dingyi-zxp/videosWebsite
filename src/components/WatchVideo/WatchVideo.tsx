import {defineComponent} from "vue";
import "./WatchVideo.scss"
import { play_svg } from "../../utils/svgIcons"

export default defineComponent({
	props: {
		src:{
			type:String
		}
	},
	setup(props, ctx) {
		return() => <div class={ "watch-play" }>
			<div class={ "watch-play--player-view" }>
				<div class={ "watch-play-active" } tabindex="0">

					<div class={ "watch-play--frame" }>
						<div class={ "watch-play-canvas" }>
							<div class={ "watch-play-canvas" }>
								<video src={ props.src } 
								tabindex="-1"
								style={ "width=100%" }></video>
						</div>
					</div>
				</div>

				<div class={ "watch-icon" }>
					<div class={ "watch-icon-restart" }>
						<button class={ "watch-icon--button" }>
							<div class={ "watch-icon--button-frame" }>
								{ play_svg }
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
		</div>
	},
})
