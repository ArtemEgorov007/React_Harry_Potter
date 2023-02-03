import s from "./Header.module.css";
import { Container } from "../Container/Container";
export function Header() {
  return (
    <>
      <Container>
        <header className={s.header}>
          <h1 className={s.title}> Harry Potter</h1>
          <p className={s.subtitle}>
            View all characters from the Harry Potter universe
          </p>
        </header>
      </Container>
    </>
  );
}
