import { Cards } from "../Cards/Cards";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Link } from "react-router-dom";
import s from "./Main.module.css";

export function Main({
	setSelect,
	setSearchItem,
	filteredData,
	liked,
	like,
	dislike,
}) {
	return (
		<>
			<Container>
				<div className={s.wrapper}>
					<Input setSearchItem={setSearchItem} />
					<Select setSelect={setSelect} />
				</div>
				<section className={s.hero}>
					<div className={s.container}>
						<div className={s.grid}>
							{filteredData.map((el, i) => (
								<Cards
									key={i}
									{...el}
									like={like}
									dislike={dislike}
									liked={liked}
									isLiked={liked.includes(el.name)}
								/>
							))}
						</div>
						<div className={s.likes}>
							<button className={s.btn}>
								<svg
									className={s.show}
									width="24"
									height="23"
									viewBox="0 0 24 23"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.9997 1.97108C18.6567 -4.87192 35.3007 7.10258 11.9997 22.5001C-11.3013 7.10408 5.34267 -4.87192 11.9997 1.97108Z"
										fill="#DC3545"
									/>
								</svg>
								<Link to="/liked"> Show Liked </Link>
							</button>
						</div>
					</div>
				</section>
			</Container>
		</>
	);
}
