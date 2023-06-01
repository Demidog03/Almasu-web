import './About.css'
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function About(props) {
    return (
        <div>

            <section className="about__achievements">
                <div className="container about__achievements-container">
                    <div className="about__achievements-left">
                        <img src="./images/about.png"/>
                    </div>

                    <div className="about__achievements-right">
                        <h1>Мы предоставляем каждому пользователю необходимую ему услугу!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam velit, assumenda,
                            obcaecati molestiae voluptatem placeat alias iste ad modi sunt quidem veniam recusandae
                            possimus consequuntur quisquam soluta vero sapiente.
                        </p>

                    </div>
                </div>
            </section>


            <section className="team">
                <h2>Наша команда</h2>
                <div className="container team__container">
                    <article className="team__member">
                        <div className="team__member-image">
                            <img src="./images/kamilka.jpg" height="215.5" width="215.5"/>
                        </div>
                        <div className="team__member-info">
                            <h4>Камила Киюбаева</h4>
                            <p>Участник “Almasu”</p>
                        </div>
                        <div className="team__member-socials">
                            <a href="https://instagram.com"><i className="uil uil-instagram"></i></a>
                            <a href="https://twitter.com"><i className="uil uil-twitter-alt"></i></a>
                            <a href="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></a>
                        </div>
                    </article>

                    <article className="team__member">
                        <div className="team__member-image">
                            <img src="./images/gulka.jpeg" height="215.5" width="215.5"/>
                        </div>
                        <div className="team__member-info">
                            <h4>Гульфайрус Алияр</h4>
                            <p>Участник “Almasu”</p>
                        </div>
                        <div className="team__member-socials">
                            <a href="https://instagram.com"><i className="uil uil-instagram"></i></a>
                            <a href="https://twitter.com"><i className="uil uil-twitter-alt"></i></a>
                            <a href="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></a>
                        </div>
                    </article>


                    <article className="team__member">
                        <div className="team__member-image">
                            <img src="./images/izel.jpg" height="215.5" width="215.5"/>
                        </div>
                        <div className="team__member-info">
                            <h4>Изель <br/> Абуова</h4>
                            <p>Участник “Almasu”</p>
                        </div>
                        <div className="team__member-socials">
                            <a href="https://instagram.com"><i className="uil uil-instagram"></i></a>
                            <a href="https://twitter.com"><i className="uil uil-twitter-alt"></i></a>
                            <a href="https://linkedin.com"><i className="uil uil-linkedin-alt"></i></a>
                        </div>
                    </article>


                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default About;
