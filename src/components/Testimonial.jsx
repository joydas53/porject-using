import React from "react";

function Testimonial() {
  return (
    <div className="testimonial">
      <h1>testimonials</h1>
      <p className="para">
        &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident itaque reiciendis iure, perspiciatis voluptas natus obcaecati
        non voluptatem aperiam minima, fuga ab recusandae&quot;
      </p>
      <section>
        <p>Jone Dow &sol; CEO of LoremIpsum</p>
        <div>
          <article>
            <img
              src="./images/human-icon-png-1901.png"
              width="80"
              height="80"
              alt=""
            />
          </article>
          <article>
            <img
              src="./images/female-icon-7894.png"
              width="80"
              height="80"
              alt=""
            />
          </article>
          <article>
            <img
              src="./images/human-icon-png-1901.png"
              width="80"
              height="80"
              alt=""
            />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
