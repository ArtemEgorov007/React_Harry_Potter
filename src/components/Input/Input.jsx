import s from "./Input.module.css";

export function Input({ setSearchItem }) {
	return (
		<>
			<div>
				<p className={s.name}>Name</p>
				<input
					onChange={(event) => setSearchItem(event.target.value)}
					className={s.input}
					type="text"
					placeholder="Enter name"
				></input>
			</div>
		</>
	);
}
