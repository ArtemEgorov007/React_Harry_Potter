import { Header } from "..//..//Header/Header";
import { Main } from "..//../Main/Main";
import { useState } from "react";
import { data } from "../../Cards/hp";

export function Home({ like, dislike, liked, setLiked }) {
	const [searchItem, setSearchItem] = useState("");
	const [select, setSelect] = useState("");

	const filteredData = data.filter(
		(value) =>
			value.name
				.toLowerCase()
				.includes(searchItem.toLowerCase().trim()) &&
			value.house.includes(select)
	);
	return (
		<>
			<Header />
			<Main
				setSearchItem={setSearchItem}
				setSelect={setSelect}
				like={like}
				dislike={dislike}
				liked={liked}
				setLiked={setLiked}
				filteredData={filteredData}
			/>
		</>
	);
}
