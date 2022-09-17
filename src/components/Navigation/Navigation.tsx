import { defineComponent,h } from "vue";
import NavItem from "./NavigationItem/NavigationItem"
import './Navigation.scss'
export default defineComponent({
	name: "Navigation",
	components: {
		NavItem
	},

    setup() {
			const originClass = 'navigation'
			const arr = ['321','iul','22']
			return () => (
					h(
						'div',
						{ class: originClass },
						arr.map(item => {
							return h(
								NavItem,
								{item, class: `${originClass}-item`}
							)
						})
					)
			)
    },
})
