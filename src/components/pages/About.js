import react from "react";
import krishnaji from '../layout/krishnaji.png';
const About = () => {
    return (
        <div className="containar">
            <div className="py4">
            <img src={krishnaji}  alt="logo" />
            <figure>
  <blockquote class="blockquote">
    <h2 className="display-6">Jeevan Hai Tere Hawale Muraliya Wale</h2>
  </blockquote>
  <figcaption class="blockquote-footer">
    Hare Krishna  <cite title="Source Title">Naveen Sharma</cite>
  </figcaption>
</figure>
            </div>
        </div>
    );
};

export default About;
