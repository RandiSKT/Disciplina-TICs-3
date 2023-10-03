import Logo from "../images/Rasta.jpg";

const About = () => {
  return (
    <div>
      <div className="logo">
        <img height="100px" width={200} src={Logo} alt="Super Shoes Logo" />
      </div>
      <header>
        <h1>
          Rasta Shoes: Caminhando na Vibração Positiva do Reggae com Estilo nos
          Pés!
        </h1>
      </header>
      <main>
        <section>
          <h2>A História por Trás da Rasta Shoes</h2>
          <p>
            Tudo começou em uma noite estrelada, ao som do lendário Bob Marley,
            quando um grupo de amigos apaixonados pela música reggae decidiu que
            era hora de levar o ritmo, as cores e a positividade do reggae a um
            nível totalmente novo...
          </p>
        </section>
        <section>
          <h2>Reggae no Coração e nos Pés</h2>
          <p>
            Na Rasta Shoes, não apenas abraçamos o reggae, nós o vestimos!
            Nossos tênis personalizados são obras-primas de cores vibrantes,
            desenhos artísticos e mensagens inspiradoras que ecoam o mantra
            reggae de amor, unidade e positividade...
          </p>
        </section>
        <section>
          <h2>Personalização sem Limites</h2>
          <p>
            Não estamos apenas vendendo tênis; estamos oferecendo uma tela em
            branco para sua criatividade. Na Rasta Shoes, a personalização não
            tem limites. Quer você queira adicionar suas próprias letras de
            música favoritas, seu próprio lema de vida ou simplesmente explodir
            com cores e padrões ousados...
          </p>
        </section>
        <section>
          <h2>Pé na Estrada com Estilo Reggae</h2>
          <p>
            Com Rasta Shoes nos pés, você não está apenas calçando um par de
            tênis; você está embarcando em uma jornada musical. Cada passo é uma
            batida, cada movimento é um ritmo, e cada momento é uma celebração
            da vida...
          </p>
        </section>
        <section>
          <h2>Conclusão: Viva, Ame e Use Rasta Shoes!</h2>
          <p>
            A Rasta Shoes não é apenas uma empresa de tênis personalizados; é um
            movimento, uma revolução de cores e positividade, um tributo à
            música que une corações e mente. Portanto, junte-se a nós nessa
            jornada, vista seus Rasta Shoes e deixe seus pés ecoarem o som do
            reggae aonde quer que você vá...
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
