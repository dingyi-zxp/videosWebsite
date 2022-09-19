import {defineComponent, h, ref} from "vue";
import { SearchIcon } from "@/utils/icons"
import "./Search.scss"

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
							onInput(newVal:string){

								search.value = newVal
								this.$emit('update:value',newVal)
								
							},
							value:search.value,
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
