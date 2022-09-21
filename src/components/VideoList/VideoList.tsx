import {defineComponent, h} from "vue";
import VideoItem from "./VideoItem/VideoItem"
import "./VideoList.scss"
export default defineComponent({
	name:"VideoList",

	component:[
		VideoItem
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

		return () => h(
			'div',
			{
				class:"videos"
			},
			[
				arr.map(item => {
					return ( 
						h(
							"div",
							{
								class:"videos-frame"
							},
							[ 
								h(
									"div",
									{ class:"videos-title" },
									item.title,
								),
								h(
									'div',
									{
										class:"videos-list"
									},
									[
										item.videos.map(video => {
											return(
												h(
													VideoItem,
													{
														class: "videos-item",
														video:video
													}
												)
											)
										})
									]
								 )
							],
						)
					)				
			 })
			]
			
		)
	}
})
