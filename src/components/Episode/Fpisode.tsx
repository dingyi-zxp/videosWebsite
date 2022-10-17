import {defineComponent} from "vue";
import cat_select from "../Select/Select"
import "./Fpisode.scss"

export default defineComponent({
	name: "Fpisode",
	components: {
		cat_select,
	},
	setup(props, ctx) {
		return () => <div class={ "fpisode" }>
			
			<div class={ "fpisode-upper" }>
				<div class={ "fpisode-upper-left fpisode-word" }>剧集</div>
				<div class={ "fpisode-upper-right" }>
					<div >
						<cat_select></cat_select>
					</div>
				</div>
			</div>
		</div>
	},
})
