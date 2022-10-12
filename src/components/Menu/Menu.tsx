import {defineComponent, reactive, ref} from "vue";
import "./Menu.scss"

import Menu from "@/components/Header/Header"
import Navigation from "@/components/Navigation/Navigation"
import Search from "@/components/Search/Search"
import User from "@/components/Header/User/User"
import UserStatus from "@/components/UserStatus/UserStatus";
export default defineComponent({
	name: "Menu",

	components: {
		Menu,
		Navigation,
		Search,
		User,
		UserStatus
	},
	setup(props, {emit}) {
		const state = reactive({
			oper: false,
		})

		const oper = ref(false)
		const onOper = (val:any) => {
			console.log(val)
			emit('oper', val)
			state.oper = val

			console.log(state.oper);
		}

		const menu = <Menu
			v-slots={{
				nav: <Navigation></Navigation>,
				search: <Search></Search>,
				user: <User onOper={ onOper }></User>,
				menu: <UserStatus></UserStatus>
			}}

			v-modeloper={ state.oper }
		> </Menu>

		return () => 	<div class={"menu"}>
			{ menu }
			<div>{ state.te }</div>
		</div>
	}
})
