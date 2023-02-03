import { Link } from "react-router-dom";
import s from "./Liked.module.css";
import { Cards } from "../../Cards/Cards";
import { Container } from "../../Container/Container";
import { data } from "../../Cards/hp";

export function Liked({ like, dislike, liked }) {
	const filteredData = data.filter((elem) => liked.includes(elem.name));

	return (
		<>
			<Container>
				<div className={s.liked}>
					<Link to="/">
						<div className={s.bbb}>
							<button className={s.btn}>← Back To All</button>
						</div>
					</Link>
					<h1 className={s.likers}>Liked ones</h1>
					<p className={s.pep}>
						Your favorite characters from the Harry Potter universe.
					</p>
					<div className={s.spans}></div>
				</div>
				<section className={s.hero}>
					<div className={s.grid}>
						{filteredData.map((el, i) => (
							<Cards
								isLiked={liked.includes(el.name)}
								filteredData={filteredData}
								like={like}
								dislike={dislike}
								liked={liked}
								key={i}
								{...el}
							/>
						))}
					</div>
				</section>
			</Container>
		</>
	);
}
