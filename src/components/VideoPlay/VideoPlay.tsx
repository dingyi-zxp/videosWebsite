import "./VideoPlay.scss"

function videoPlay(src:string,ref:string){
	
	const video = <video class={ "video1" }
	autoplay
	muted
	preload="auto" 
	id="Id"
	src={src}></video>
	
	return video
}

export{
	videoPlay
}
