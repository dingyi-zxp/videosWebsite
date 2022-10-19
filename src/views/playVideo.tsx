import {defineComponent, onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

import watch_video from "../components/WatchVideo/WatchVideo";

export default defineComponent({
	name: 'playVideo',
	components: {
		watch_video,
	},
	setup(props, ctx) {
		const router = useRoute()

		let videoSrc = ref(router.query.src)

		onBeforeMount(() =>{
		})

		return () => <div>
			<watch_video src={ videoSrc.value }></watch_video>
		</div>
	},
})
