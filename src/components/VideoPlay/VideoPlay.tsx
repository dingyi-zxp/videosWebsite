import "./VideoPlay.scss"

function videoPlay(id:string,src:string,ref:string){
	
	const video = <video class={ "video1" }
	muted
	autoplay
	controls="controls"
	preload="auto" 
	allowfullscreen={ true }
	id={id}
	src={src}></video>
	
	return video
}

export{
	videoPlay
}
