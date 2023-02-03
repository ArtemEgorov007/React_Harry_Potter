import s from "./Cards.module.css";
import filled from "../../svg/filled.svg";
import empty from "../../svg/empty.svg";

export function Cards({
	name,
	actor,
	gender,
	house,
	alive,
	wand,
	image,
	like,
	dislike,
	isLiked
}) {
	console.log(isLiked);
	return (
		<div className={s.heroCard}>
			<img
				className="heroPhoto"
				src={image}
				alt=""
				height="192"
				width="332"
			/>
			<div className={s.like__container}>
				<button
					className={s.check__input}
					onClick={() => (isLiked ? dislike(name) : like(name))}
				>
					<img
						className={s.like__img}
						src={isLiked ? filled : empty}
						alt="like"
					/>
				</button>
			</div>
			<p className={s.heroTitle}> {name} </p>
			<p className={s.aboutHero}>Actor: {actor} </p>
			<p className={s.aboutHero}>Gender: {gender} </p>
			<p className={s.aboutHero}>House: {house}</p>
			<p className={s.aboutHero}>Wand core: {wand?.core} </p>
			<p className={s.aboutHero}>
				Alive: {alive === true ? "yes" : "no"}
			</p>
		</div>
	);
}

//className={s.like__img}
