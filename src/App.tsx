import { defineComponent } from 'vue'
import Menu from "@/components/Header/Header"

export default defineComponent({
	name: "App",
	components: {
		Menu
	},
	setup(){
		return () => (
			<>
			<Menu></Menu>
				</>
		)
	}
})
