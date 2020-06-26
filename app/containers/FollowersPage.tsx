import React, { useEffect, useState } from 'react'
import Followers from '../features/followers/Followers'
import { getFollowers } from 'api/easyDMAPI'
// const electron = require('electron');
// const mainProcess = electron.remote.require('./main.prod.js');

const FollowersPage = () => {
	const [followers, setFollowers] = useState([] as any)

	useEffect(() => {
		 getFollowers().then((users)=>{
			 setFollowers(users);
		 });
		
		// mainProcess.getUsers().then((users: any) => {
		// 	setFollowers(users.map((user: any) => {
		// 		const { 
		// 			name,
		// 			screen_name: screenName,
		// 			followers_count: followersCount,
		// 			friends_count: friendsCount,
		// 			verified
		// 		} = user
		// 		return { name, screenName, followersCount, friendsCount, verified }
		// 	}))
		// })
	}, [])
	
	return <Followers followers={followers} />;
}
 
export default FollowersPage;