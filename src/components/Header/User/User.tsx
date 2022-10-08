import {ElAvatar, ElImage} from "element-plus"
import { render ,h, ref, defineComponent} from "vue"
import { UserStatusUp, UserStatusDown } from "@/utils/icons"
import "./User.scss"
export default defineComponent({
	name: "User",
		// 用户操作
		setup()
		{
		const oper = ref(true) 
		
		function mouseover() {
			oper.value = true
		}

		function mouseleave(){
			oper.value = false
		}

		return () => (
			<div class='user' onMouseover={mouseover} onMouseleave={mouseleave} onClick={() => oper.value = !oper.value }>
				<ElImage class="user-avatar" src="https://ssl-pubpic.51yund.com/1304276047.png" fit="cover"></ElImage>
				<ElImage class="user-status" src={oper.value ? UserStatusUp : UserStatusDown} fit="cover"></ElImage>
				
			</div>
		)
		}
	
}) 
