import "./VideoPlay.scss"

function videoPlay(src:string){
	
	const video = <video class={ "video1" }
	controls 
	autoplay
	muted
	preload="auto" 
	src={src}></video>

	return video
}
export{
	videoPlay
}
