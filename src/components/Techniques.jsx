import React from "react";
import "./Techniques.css";
import relax from "../images/relax.jpg";
import rotina from "../images/rotina.jpg";
import terapia from "../images/terapia.jpg";
import corrida from "../images/corrida.jpg";
import respiracao from "../images/respiracao.gif";
import Footer from "./Footer";

function Techniques() {
  return (
    <div className="techniques-container">
      <article>
        <h1>Técnica 1: Exercícios de Relaxamento</h1>
        <section>
          <p>
            Um exemplo de exercício de relaxamento é a técnica de tensão e
            relaxamento muscular. Comece concentrando-se em um grupo muscular,
            como os ombros. Intencionalmente contraia esses músculos por alguns
            segundos e, em seguida, relaxe completamente. Sinta a diferença
            entre tensão e relaxamento.
          </p>
        </section>
        <img src={relax} alt="realaxamento" />
        <section>
          <h2>Como fazer:</h2>
          <p>
            Encontre um local tranquilo e confortável. Feche os olhos e
            concentre-se em cada grupo muscular, um de cada vez. Contraia e
            relaxe, liberando a tensão à medida que prossegue. Isso pode ajudar
            a aliviar a tensão e a ansiedade no corpo.
          </p>
        </section>
      </article>

      <article>
        <hr />
        <h1>Técnica 2: Exercício Físico</h1>
        <section>
          <p>
            Você pode fazer caminhadas, corridas, nadar, dançar, praticar ioga
            ou qualquer atividade que goste. Por exemplo, se escolher caminhar,
            saia para uma caminhada de 30 minutos todos os dias.
          </p>
        </section>
        <img src={corrida} alt="corrida" />
        <section>
          <h2>Como fazer:</h2>
          <p>
            Inclua exercícios físicos na sua rotina diária. Encontre uma
            atividade que lhe traga prazer, para que seja mais provável que você
            a mantenha a longo prazo. Comece devagar e aumente a intensidade
            gradualmente.
          </p>
        </section>
      </article>

      <article>
        <hr />
        <h1>Técnica 3: Técnicas de Respiração</h1>
        <section>
          <p>
            A técnica de respiração abdominal envolve inspirar profundamente
            pelo nariz, fazendo com que seu abdômen se expanda, e expirar
            lentamente pela boca, esvaziando completamente os pulmões.
          </p>
        </section>
        <img src={respiracao} alt="respiracao" />
        <section>
          <h2>Como fazer:</h2>
          <p>
            Sente-se ou deite-se confortavelmente. Coloque uma mão sobre o peito
            e a outra sobre o abdômen. Inspire profundamente pelo nariz,
            enchendo o abdômen, e depois expire lentamente pela boca. Repita
            várias vezes até se sentir mais relaxado.
          </p>
        </section>
      </article>

      <article>
        <hr />
        <h1>Técnica 4: Terapia Cognitivo-Comportamental (TCC)</h1>
        <section>
          <p>
            Em sessões de TCC, você trabalhará com um terapeuta para identificar
            pensamentos negativos automáticos e distorcidos. Por exemplo, se
            você se preocupa constantemente com o futuro, o terapeuta pode
            ajudá-lo a questionar esses pensamentos e encontrar evidências que
            os contradigam.
          </p>
        </section>
        <img src={terapia} alt="terapia" />
        <section>
          <h2>Como fazer:</h2>
          <p>
            Procure um terapeuta treinado em TCC. As sessões geralmente são
            semanais e envolvem a colaboração ativa entre você e o terapeuta
            para identificar, desafiar e substituir padrões de pensamento
            negativos.
          </p>
        </section>
      </article>

      <article>
        <hr />
        <h1>Técnica 5: Estabelecer uma Rotina Saudável</h1>
        <section>
          <p>
            Crie uma rotina que inclua horários regulares para dormir e acordar,
            fazer refeições balanceadas, fazer pausas para relaxar durante o dia
            e fazer atividades de lazer.
          </p>
        </section>
        <img src={rotina} alt="rotina" />
        <section>
          <h2>Como fazer:</h2>
          <p>
            Crie um cronograma diário que inclua horários específicos para todas
            essas atividades. Mantenha um registro para acompanhar seu progresso
            e ajuste conforme necessário.
          </p>
        </section>
      </article>
      <Footer />
    </div>
  );
}

export default Techniques;
