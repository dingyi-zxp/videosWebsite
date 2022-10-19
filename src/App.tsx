import { defineComponent } from 'vue'
import router from "./store/index";
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
