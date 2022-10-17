import {defineComponent, h,withDirectives, ref,vShow, reactive} from "vue";
import { SearchIcon } from "@/utils/icons"
import "./Search.scss"

import {ElImage, ElInput} from "element-plus";

export default defineComponent({
	name: "SearchHeader",
	setup( props ) {
		const state = reactive({
			isSearch: false,
			search: ''
		})

		const searchIcon = <ElImage class="search-icon" src={SearchIcon} fit="cover"></ElImage>

		// search button
		const searchBtn = <div onClick={() => { 
			console.log('eee');
			state.isSearch = true 
		} }>
			{searchIcon}
		</div>


		const searchVal = <ElInput class={"search-input"} 
		type="text"
		v-model={ state.search } 
		placeholder={"片名、人员、类型"}
		autofocus="autofocus"
		v-slots={{
			prefix:searchIcon
		}}	
		onInput={(newVal:string) => {
			state.search = newVal
			emit('update:value',newVal)
		}}
		onChange={(newVal) => {
			state.search = newVal
		}}
		onBlur={(event:any) => {
			if (state.search == ''){}
			state.isSearch = false
		}}
		></ElInput>

		return ()=>(
			<div class={ "search" }>
				<div v-show={!state.isSearch}>
				{ searchBtn }	
			</div>
				<div v-show={state.isSearch}>
					{ searchVal }
				</div>
			</div>
		)
	}
})
