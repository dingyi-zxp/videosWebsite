import "./Rectangle.scss"
export default ( str:string, mode:string="general" ) => {
	return <span class={ mode }>
		{ str }
	</span>
}
