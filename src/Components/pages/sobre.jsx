import React from "react";
import fundosobrenos from "../assets/fundosobrenos.png";

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
          src="https://i.ibb.co/6BgzFj9/logomaior.png"
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
              backgroundImage: "linear-gradient(to right, #4574a0, #0f00e4)",
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
