import s from "./Select.module.css";
import { data } from "../Cards/hp";

export function Select({ setSelect }) {
	function schools(arr) {
		const sch = arr.map((el) => el.house).filter((el) => el !== "");
		const sch1 = [...new Set(sch)];
		return sch1;
	}
	const school = schools(data);

	return (
		<div>
			<p className={s.school}>School</p>
			<select
				onChange={(event) => setSelect(event.target.value)}
				className={s.select}
				name="school"
				required
				id="school"
			>
				{school.map((el, i) => (
					<option value={el} key={i}>
						{el}
					</option>
				))}
			</select>
		</div>
	);
}
