import {defineComponent, onBeforeMount, onMounted} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
	name: "FullVideo",
	setup() {
			
		onMounted(() => {
		})
		function playerVideo(){

			console.log('iii');
			let elem = document.getElementById('231')

			elem.requestFullscreen()

			useRouter().push('/watch')

			console.log('iii');
			
		}


		return () => <div id="eee2">
				<video src="http://rjlnywy6l.hn-bkt.clouddn.com/videos/Phonk-_%E9%9B%85%E4%BF%97%E5%85%B1%E8%B5%8F-%E4%BF%97%E5%85%B1%E8%B5%8F-1080P-.mp4" v-show={ true } id="231" autoplay muted>
		
				</video>
				<button onClick={ playerVideo } style={ "margin-top:200px" }> 播放</button>
		</div>
	}
})
