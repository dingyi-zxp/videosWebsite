import {ElImage} from "element-plus";
import {defineComponent} from "vue";
import "./FpisodeVideo.scss"
import { play } from "../../utils/svgIcons"


export default defineComponent({
	name: "fpisode-video",

	setup(props, ctx) {
		return () => <div class={ "fpisode-video-frame" }>
			<div class={ "fpisode-video fpisode-video-active" } >
				<div class={ "fpisode-video-num" }>
				1
			</div>
			<div class={ "fpisode-video-img" }>
				<ElImage src="https://occ-0-3188-3187.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaw5X613QY--I6dGT-PAneHdXsMXoafr3idCWCAN8BhK_bavNXtKBOJcJwDCB3Z9DmYh5C7dX26BfxQV1v31TLngQjsrrbKmuzwH.webp?r=6f4" fit="cover">
				</ElImage>
			</div>
			<div class={ "fpisode-video-content" }>
				<div class={ "fpisode-video-content-upper" }>
					<div class={ "fpisode-video-content-upper-title" }>
					今天也是美好的一天
				</div>
				<div class={ "fpisode-video-content-upper-time" }>
				25分钟
			</div>
		</div>
		<div class={ "fpisode-video-content-intro" }>
		森罗日下部加入第八特殊消防队，一次列车火灾让他向新雇主做了一个令人印象深刻的自我介绍。
	</div>
	</div>
		</div>

			<div class={ "fpisode-video" }>
				<div class={ "fpisode-video-num" }>
				1
			</div>
			<div class={ "fpisode-video-img" }>
				<ElImage src="https://occ-0-3188-3187.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaw5X613QY--I6dGT-PAneHdXsMXoafr3idCWCAN8BhK_bavNXtKBOJcJwDCB3Z9DmYh5C7dX26BfxQV1v31TLngQjsrrbKmuzwH.webp?r=6f4" fit="cover">

				</ElImage>
			</div>
			<div class={ "fpisode-video-content" }>
				<div class={ "fpisode-video-content-upper" }>
					<div class={ "fpisode-video-content-upper-title" }>
					今天也是美好的一天
				</div>
				<div class={ "fpisode-video-content-upper-time" }>
				25分钟
			</div>
		</div>
		<div class={ "fpisode-video-content-intro" }>
		森罗日下部加入第八特殊消防队，一次列车火灾让他向新雇主做了一个令人印象深刻的自我介绍。
	</div>
	</div>
		</div>
	</div>	
	},
})
