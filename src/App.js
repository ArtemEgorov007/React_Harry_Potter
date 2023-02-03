import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Liked } from "./components/Pages/Liked/Liked";

const savedLikes = JSON.parse(localStorage.getItem("likedNames")) ?? [];

function App() {
	const [liked, setLiked] = useState(savedLikes);
	localStorage.setItem("LikedNames", JSON.stringify(liked));
	// const [hero, setHero] = useState(data);

	const like = (name) => setLiked((p) => [...liked, name]);
	const dislike = (name) => setLiked(liked.filter((elem) => elem !== name));

	// useEffect(() => {
	// 	localStorage.setItem("likedNames", JSON.stringify(liked));
	// }, [liked]);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							like={like}
							liked={liked}
							dislike={dislike}
							setLiked={setLiked}
						></Home>
					}
				/>
				<Route
					path="/liked"
					element={
						<Liked
							like={like}
							liked={liked}
							dislike={dislike}
						></Liked>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
