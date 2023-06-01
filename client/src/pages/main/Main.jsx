import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Main(props) {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <div className="header__left">
                        <h1>Платформа обмена услугами</h1>
                        <p>
                            Найдите помощь и помогите другим, торгуя временем, а не деньгами.
                        </p>
                        <a href="services.html" className="btn btn-primary">Поехали</a>

                    </div>

                    <div className="header__right">
                        <div className="header__right-image">
                            <img src="./images/header.svg"/>
                        </div>
                    </div>
                </div>
            </header>


            <section className="categories">
                <div className="container categories__container">
                    <div className="categories__left">
                        <h1>Категории</h1>
                        <p>
                            Мы превращаем информацию в полезные идеи. Мы работаем, чтобы понять ваши проблемы, и
                            стремимся сделать вашу жизнь легче, чтобы добиться успеха.
                        </p>
                        <a href="#" className="btn">Узнать больше</a>
                    </div>

                    <div className="categories__right">
                        <article className="category">
              <span className="category__icon">
                <i className="uil uil-bitcoin-circle"></i>
              </span>
                            <h5>Автомеханик</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
                        </article>

                        <article className="category">
              <span className="category__icon">
                <i className="uil uil-palette"></i>
              </span>
                            <h5>Богословие/Религия</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
                        </article>

                        <article className="category">
              <span className="category__icon">
                <i className="uil uil-usd-circle"></i>
              </span>
                            <h5>Домашний повар</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
                        </article>

                        <article className="category">
              <span className="category__icon">
                <i className="uil uil-megaphone"></i>
              </span>
                            <h5>Языки и переводы</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
                        </article>

                        <article className="category">
              <span className="category__icon">
                <i className="uil uil-music"></i>
              </span>
                            <h5>Электрик</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
                        </article>

                        <article className="category">
              <span className="category__icon">
                <i className="uil uil-puzzle-piece"></i>
              </span>
                            <h5>Business</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="courses">
                <h2>Наши популярные услуги</h2>
                <div className="container courses__container">
                    <article className="course">
                        <div className="course__image">
                            <img src="./images/service.jpeg"/>
                            <div className="course__info">
                                <h4>В поисках учителя пения</h4>
                                <p>
                                    Мне интересно научиться петь. Любое руководство приветствуется!
                                </p>

                                <a href="#" className="btn btn-primary">Узнать больше</a>
                            </div>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course__image">
                            <img src="./images/service.jpeg"/>
                            <div className="course__info">
                                <h4>В поисках учителя пения</h4>
                                <p>
                                    Мне интересно научиться петь. Любое руководство приветствуется!
                                </p>

                                <a href="#" className="btn btn-primary">Узнать больше</a>
                            </div>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course__image">
                            <img src="./images/service.jpeg"/>
                            <div className="course__info">
                                <h4>В поисках учителя пения</h4>
                                <p>
                                    Мне интересно научиться петь. Любое руководство приветствуется!
                                </p>

                                <a href="#" className="btn btn-primary">Узнать больше</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="faqs">
                <h2>Часто задаваемые вопросы</h2>
                <div className="container faqs__container">
                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>

                    <article className="faq">
                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                        <div className="question__answer">
                            <h4>Как узнать, какие услуги мне подходят?</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui
                                similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae
                                architecto aliquid nostrum numquam quibusdam.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="container testimonials__container mySwiper">
                <h2>Отзывы об "ALMASU"</h2>
                <div className="swiper-wrapper">
                    <article className="testimonial swiper-slide">
                        <div className="avatar">
                            <img src="./images/kamilka.jpg"/>
                        </div>
                        <div className="testimonial__info">
                            <h5>Izel</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial__body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint
                                dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!
                            </p>
                        </div>
                    </article>

                    <article className="testimonial swiper-slide">
                        <div className="avatar">
                            <img src="./images/kamilka.jpg"/>
                        </div>
                        <div className="testimonial__info">
                            <h5>Izel</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial__body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint
                                dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!
                            </p>
                        </div>
                    </article>

                    <article className="testimonial swiper-slide">
                        <div className="avatar">
                            <img src="./images/kamilka.jpg"/>
                        </div>
                        <div className="testimonial__info">
                            <h5>Izel</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial__body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint
                                dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!
                            </p>
                        </div>
                    </article>

                    <article className="testimonial swiper-slide">
                        <div className="avatar">
                            <img src="./images/kamilka.jpg"/>
                        </div>
                        <div className="testimonial__info">
                            <h5>Izel</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial__body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint
                                dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!
                            </p>
                        </div>
                    </article>

                    <article className="testimonial swiper-slide">
                        <div className="avatar">
                            <img src="./images/kamilka.jpg"/>
                        </div>
                        <div className="testimonial__info">
                            <h5>Izel</h5>
                            <small>Student</small>
                        </div>
                        <div className="testimonial__body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint
                                dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!
                            </p>
                        </div>
                    </article>
                </div>
                <div className="swiper-pagination"></div>
            </section>

            <Footer/>
        </div>
    );
}

export default Main;
