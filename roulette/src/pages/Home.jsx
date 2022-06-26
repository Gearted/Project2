import Container1 from "../components/Page1/Container1";
import Container2 from "../components/Page1/Container2";
import Container3 from "../components/Page1/Container3";
import Container4 from "../components/Page1/Container4";

export default function Home() {
  return (
    <div className="home">
      <article>
        <Container1 />
      </article>
      <article>
        <Container2 />
      </article>
      <article>
        <Container3 />
      </article>
      <article>
        <Container4 />
      </article>
    </div>
  );
}
