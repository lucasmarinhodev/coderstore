import React from "react";
import fundosobrenos from "../assets/fundosobrenos.png";
import { GrMonospace } from "react-icons/gr";

const Sobre = () => {
  return (
    <div>
      <main
        style={{
          paddingTop: "9rem",
          backgroundColor: "#1f2937",
          minHeight: "100vh",
          backgroundImage: `url(${fundosobrenos})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          textAlign: "left",
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/370b/9542/f36581bc27f3cfa1ecad2d6bec49b069?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ctkG2M9N5DniBM5MQQCITYZjWn55C-haMkt0kLPtqu0XBNi1e8hNQmv7ypMkxROmsR5E9kuSDDy~UITVByZlJVKcNMCnZxYb8MbcuKxc4FoQWspRXrCEzn~G4TlqpOwMGq7~XcLOkE9KYvE7nTxuC46U12mD3kku6423dS-m8-s6CWv43iIclCFGQzcAzDr7cAmjSNorh~cmYGyOqs7JdyxmhB3mY9a0eJFug9qCdkM3Ud8JPin0rWPldz8FCQv59qpw5Cg0KoVD1Xm4xOF~LfTQD0jY8FRQDroYBxnuPZunDJKThqfghlLEu1tpTnNl7WJSdZ4ffTlNNzZzdBprvw__"
          alt="Logo"
          style={{
            width: "20rem",
            maxWidth: "20rem",
            marginRight: "2rem",
          }}
        />

        <div
          style={{
            color: "#f9fafb",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <h1
            style={{
              width: "16rem",
              fontFamily: "monospace",
              fontSize: "2rem",
              textTransform: "uppercase",
              marginBottom: "2rem",
              fontWeight: "bold",
              backgroundImage: "linear-gradient(to right, #DD4A2D, #5BAEBC)",
              backgroundClip: "text",
              color: "transparent",
              marginLeft: "3rem",
            }}
          >
            Sobre nós
          </h1>
          <p
            style={{
              fontFamily: "monospace",
              width: "950px",
              fontSize: "1.125rem",
              marginTop: "1rem",
              marginLeft: "3rem",
            }}
          >
            Somos uma loja dedicada a trazer o que há de melhor em periféricos
            para entusiastas de tecnologia e gamers. Nossa paixão por inovação e
            desempenho nos impulsiona a oferecer uma seleção diversificada de
            produtos que atendem desde as necessidades de usuários casuais até
            os mais exigentes profissionais. <br />
            <br /> Acreditamos que os periféricos certos podem transformar a
            experiência de qualquer usuário, elevando a performance e o conforto
            em todos os momentos, seja para trabalhar, jogar ou desfrutar de
            entretenimento. Por isso, nossa missão é fornecer produtos de alta
            qualidade e as melhores marcas do mercado, garantindo que você
            encontre exatamente o que precisa para maximizar seu potencial. Além
            disso, buscamos criar uma experiência de compra intuitiva e prática,
            onde cada visita ao nosso site seja satisfatória e inspiradora.
            <br />
            <br /> Valorizamos a confiança e a satisfação dos nossos clientes, e
            trabalhamos continuamente para manter um alto padrão de atendimento
            e suporte. Explore nossa loja e descubra a diferença que periféricos
            de qualidade podem fazer em sua rotina. Estamos aqui para ajudar
            você a encontrar as melhores soluções para suas necessidades
            tecnológicas.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
