import {defineComponent,ref} from "vue";
import "./UserSatus.scss"


type manage = {
	tag: string,
	icon: string,
	status: boolean
}
export default defineComponent({
	name: "UserSatus",

	setup(){
		let manageList = ref<manage[]>([
			{
				tag:"管理用户信息",
				icon:"",
				status:true
			}
		])
		return () => (
			<div class={"status"}>
			<ul>
			{
			manageList.value.map((data,index) => {
					return <li>{data.tag}</li>
				})
			}
		</ul>
			</div>
		)
		
	}
})
