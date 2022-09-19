import { defineComponent,h, ref, watch } from "vue";
import NavItem from "./NavigationItem/NavigationItem"
import './Navigation.scss'
export default defineComponent({
	name: "Navigation",
	components: {
		NavItem
	},

    setup() {
			const originClass = 'navigation'
			const arr = [
				{
					id: 1,
					cate: "home"
				},
				{
					id: 2,
					cate: 'program'
				},
				{
					id: 3,
					cate: 'movie'
				}
			]
			const currId = ref(1)
			watch(currId, (newVal,oldVal) => {
					currId.value = newVal
					console.log(currId.value);
			})
			return () => (
					h(
						'div',
						{ class: originClass },
						arr.map(item => {
							return h(
								NavItem,
								{
									id: item.id,
									item: item.cate,
									class: `${originClass}-item  ${item.id == currId.value ? 'navigation-select ': ''}`,
									onClickCapture(e: any){
										currId.value = e.target.id
									},
								}
							)
						})
					)
			)
    },
})
