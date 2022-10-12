import {defineComponent, h} from "vue";
import video_item from "./VideoItem/VideoItem"
import "./VideoList.scss"

type videoObject = {
	name: string,
	img: string
}
type videoListObject = {
	title: string,
	videos: Array<videoObject>
}

export default defineComponent({
	name:"VideoList",

	component:[
		video_item
	],
	
	setup(){
		const arr = [
			{
				title: "当前热门",
				videos: [
					{
						name: "cat",
						img:"https://ssl-pubpic.51yund.com/1304643773.jpg"
					},
					{
						name: "dog",
						img:"https://ssl-pubpic.51yund.com/1304643773.jpg"
					}
				]
			},
			{
				title: "当前热门",
				videos: [
					{
						name: "cat",
						img:"https://ssl-pubpic.51yund.com/1304643773.jpg"
					},
					{
						name: "dog",
						img:"https://ssl-pubpic.51yund.com/1304643773.jpg"
					}
				]
			}
		]
		
		function videoList( videosObject:videoListObject ){
			const videos = videosObject.videos
			const list = <div class={ "videos" }>
				<div class={ "videos-title " }> { videosObject.title } </div>
				<div class={ "videos-list" }>
				{
					videos.map(cover => {
						return <div class={ "videos-item" }>
							<video_item video={cover} />
						</div>
					})
				}
			</div>
			</div>

			return list
		}
		return () => arr.map(item => {
				return videoList(item)
			})
		}
	
})
