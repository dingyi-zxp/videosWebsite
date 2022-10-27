import axios from "axios"

const baseUrl = "http://localhost:9860"

const home = {
	getIntro: "/VideoIntro"
}

async function Request( home:string ,...params:any)  {
	let data: any
	console.log(params[0]);
		
		await axios({
			url: urlDispose(home),
			method: "POST",
			params: params[0]
		})
		.then((res:any)=>{
			data = res.data.data[0]
			console.log("SuggestedVideo Request:",res.data,data);
		})
	console.log('data');
	
	return data
}

function urlDispose( home:string ){
	return baseUrl + home
}

export {
	Request,
	home
}
