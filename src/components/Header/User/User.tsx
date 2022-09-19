import {ElAvatar, ElImage} from "element-plus"
import { render ,h, ref, defineComponent} from "vue"
import { UserStatusUp, UserStatusDown } from "@/utils/icons"
import "./User.scss"
export default defineComponent({
	name: "User",

		// 用户操作
		setup()
		{
		const oper = ref(false) 
		return () => h(
				'div',
				{
					onClick(event:any){
						oper.value = !oper.value
						console.log(oper.value,!oper.value);

					},
					class: 'user'
				},
				[
					h(
						ElAvatar,
						{
							class: "user-avatar",
							src:"",
							shape: "square",
							fit:"cover"
						}
					),

					h(
						ElImage,
						{
							class: "user-status",
							src: oper.value ? UserStatusUp : UserStatusDown,
							fit:"cover"
						}
					)
				]
			)
		}
	
}) 
