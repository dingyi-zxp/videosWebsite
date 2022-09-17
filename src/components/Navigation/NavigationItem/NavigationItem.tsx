import {defineComponent, h, PropType} from "vue";
import "./NavigationItem.scss"
interface ItemData{
	item: string,
	url:string
}
export default defineComponent({
	name: "NavigationItem",
	props: {
		item: {
			type: String as PropType<ItemData[item]>,
			default: 'not foud item'
		}
	},
	setup(props,ctx){
		return () => (
			h(
				'div',
				{
					class: 'item'
				},
				props.item
			)
		)
	}
	
})
