import { defineComponent, onMounted,h } from "vue";
import NavItem from "./NavigationItem/NavigationItem"

export default defineComponent({
	name: "Navigation",
	components: {
		NavItem
	},

    setup() {
			const arr = ['321','iul','22']
			return () => (
					h(
						'div',
						{ class: "othis" },
						arr.map(item => {
						console.log(item);
						
							h(
								'div',
								{innerHTML:'222'}
							)
						})
					)
			)
    },
})
