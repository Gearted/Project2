import Container1 from "../components/Page1/Container1";
import Container2 from "../components/Page1/Container2";


export default function Home() {
  return (
    <div className="home">
      <article>
        <Container1 />
      </article>
      <article>
        <Container2 />
      </article>
    
    </div>
  );
}
