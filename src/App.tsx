import { defineComponent } from 'vue'
import router from "./store/index";
import {RouterView} from 'vue-router'

export default defineComponent({
	name: "App",
	setup(){
		return () => 	<div>
			<RouterView />
		</div>
	}
})
