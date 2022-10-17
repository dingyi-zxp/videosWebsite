import {defineComponent, reactive} from "vue";
import { upper,down } from "../../utils/svgIcons";
import "./Select.scss"

export default defineComponent({
	name: "selet",

	setup(props, ctx) {
		const state = reactive({
			isSelect: false
		})

		function selectFpisode(){
			state.isSelect = !state.isSelect
		}

		return () => <div class={ "select" }>
			<div class={ "select-upper" }>
				<button class={ "select-round" }
				onClick={ selectFpisode }
				>
					<span class={"select-set"}>
					第一季
				</span>
				<span class={ "select-state-icon" }>
				{
					state.isSelect ? upper: down
				}
			</span>
		</button>
		<ui v-show={ state.isSelect } class={ "select-content" }>
			<li class={ "select-set-margin" }>
				<div class={ "select-set-flex select-set-fpisode" }>
				第1季
					<span class={ "select-set-describe" }>
						（共24集）
					</span>
				</div>
			</li>
			<li class={ "select-set-margin" }>
				<div class={ "select-set-flex select-set-fpisode" }>
				第7季
					<span class={ "select-set-describe" }>
						（共24集）
					</span>
				</div>
			</li>
			<div class={ "cut-line" }></div>
			
			<li class={ "select-set-margin" }>
				<div class={ "select-set-flex select-set-fpisode" }>
					查看全部剧集
				</div>
			</li>
		</ui>
	</div>
	</div>
	},
})
