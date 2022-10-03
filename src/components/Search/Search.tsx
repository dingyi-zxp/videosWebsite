import {defineComponent, h, ref} from "vue";
import { SearchIcon } from "@/utils/icons"
import "./Search.scss"
import {log} from "console";

export default defineComponent({
	name: "SearchHeader",
	setup(props, ctx) {
		const isSearch = ref(false)	
		const search = ref('')

		return ()=>(
		
			h(
				'div',
				{ class: 'search' },
				[
					!isSearch.value ?
					h(
						ElImage,
						{
							onClickCapture(){
							isSearch.value = true
						},
							class: "search-icon",
							src: SearchIcon,
								fit: "cover",
						},
					) :
					h(
						ElInput,
						{
							class:"search-input",
							onInput(newVal:string){
								search.value = newVal
								
								this.emit('update:value',newVal)
								
							},
							onChange(str:any){
								search.value = str
								console.log("cnaegi",str);
								
							},
							onBlur(event:any){
								if (search.value == ''){
									isSearch.value = false
								}
								console.log(event,"event")
							},
							
							value:search.value,
							autofocus:true,
							placeholder:"片名、人员、类型",
							
						},
						{
							prefix: h(
							ElImage,
							{
							class: "search-icon",
							src: SearchIcon,
								fit: "cover",
						},
					),
						}
					) 
				]
			)
		)
	}
})
