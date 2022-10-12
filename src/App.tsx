import { defineComponent } from 'vue'
import {RouterView} from 'vue-router'
import Menu from "@/components/Menu/Menu"
import Footer from "@/components/Footer/Footer";
export default defineComponent({
	name: "App",
	setup(){
		return () => 	<div>
			<Menu></Menu>
			<RouterView />
			<Footer  class="main-footer"></Footer>
		</div>
	}
})
