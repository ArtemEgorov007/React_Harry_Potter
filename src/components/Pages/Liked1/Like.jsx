import s from "./Like.module.css"
import {useState} from "react";
import redLike from "../images/like.svg"
import whiteLike from '../images/whiteLike.svg'

export function Like({setDataCard, name}) {
    const [img, setImg] = useState(false)
    console.log(img )
    return (
        <label  className={s.check}>
            <input

                className={s.check__input}
                type="checkbox"

            />
            <span className={s.check__box}></span>
        </label>
    )
}