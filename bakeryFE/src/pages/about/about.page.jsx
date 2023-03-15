import './about.page.scss'
// import NoPage from "../noPpage/noPage.page";
import { BsInstagram, BsTelephoneInbound } from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import { NavLink } from "react-router-dom";

const About = () => {
  return(
      <div className="about_page">
        <div className="container">
          <div className="about_page-inner">
          <h2 className="about-header">Про нас</h2>
            <div className="about_page-text">
              
              <div className="main-text">
                {/* Ми невеликий магазин здоорвого харчування і веганських продуктів, розташований у Львові. Всю нашу продукцію ми готуємо власноруч з натуральних продуктів без використання консервантів з максимальною відачею */}
                Ми - люди, які живуть з любов‘ю до нашої планети та повагою до кожного життя. Ми мріємо жити у справедливому та безпечному світі. Харчування один з найважливіших аспектів нашого життя, який стосується здоровʼя та світосприйняття вцілому. Тому ми прагнемо надати альтернативу звичній для багатьох їжі та змінити уявлення що "корисне не може бути смачним". Критерії, за якими ми створюємо нашу продукцію - етика та користь для організму. Вся продукція створена дбайливими руками з рослинних компонентів, без додавання цукру, підсилювачів смаку, барвників, консервантів тощо. Ласкаво просимо до "нашого" світу! Давайте разом втілювати мрію про кращий світ для всіх, заради нашого майбутнього і майбутнього наших дітей.
              </div>
              <div className="contact-block">
                <h3>Зв`язатись з нами</h3>
                <div className="contact-inner">
                  <div className="cont-item">
                    <BsInstagram className='contact instagram'/>
                    <NavLink className="cont-item-text" to="https://www.instagram.com/humane_and_healthy/">@humane_and_healthy</NavLink>
                  </div>
                  <div className="cont-item">
                    <BsTelephoneInbound className='contact phone'/>
                    <div className="cont-item-text" >1111 1111 1111</div>
                  </div>
                  <div className="cont-item">
                    <TbBrandTelegram className='contact telegram'/>
                    <div className="cont-item-text" >1111 1111 1111</div>
                  </div>
                
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;