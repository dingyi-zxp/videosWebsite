import "./MaturityRating.scss"
export default function ( rating:string ){
	return <span class={ "maturity-rating" }>
		<span class={ "maturity-number" }>
			{ rating }
		</span>
	</span>
}


