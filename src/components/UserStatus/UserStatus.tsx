import {defineComponent,ref} from "vue";
import "./UserStatus.scss"

import { StatusIcon } from "@/utils/icons";


type manage = {
	tag: string,
	icon: string,
	status: boolean
}
export default defineComponent({
	name: "UserSatus",

	setup(){
		const manageList = ref<manage[]>([
			{
				tag:"管理用户信息",
				icon:"https://ssl-pubpic.51yund.com/1308502556.jpg",
				status:true
			},

			{
				tag:"管理用户信息",
				icon:"https://ssl-pubpic.51yund.com/1308502556.jpg",
				status: false
			}
		])


		// show icon
		function showIcon( src:string, classNum:number = 0 ){
			
			// class image
			let classImg:string = ""

			// classNum select class
			switch ( classNum ){
				case 0:
					classImg = "status-icon"
					break
				case 1:
					classImg = "status-mode"
					break
				case 2:
					classImg = "status-mode-opacity"
					break
			}
			return <ElImage class={ classImg } src={ src }></ElImage>

		}

		// on status boolean show status-icon
		function isStatus(status:boolean){
			const exites = showIcon(StatusIcon, status ? 1 : 2)
			
			return exites
		}


		function tag(text: string){
			return <div class={"status-tag"}>{text}</div>
		}

		return () => (
			<div class={"status"}>
			{
			manageList?.value?.map((data,index) => {
				return <div class={"status-menu"}>
							{showIcon(data.icon)}
									{ tag(data.tag) }
									{ isStatus(data.status) }
							</div>
				})
			}
			</div>
		)
		
	}
})

