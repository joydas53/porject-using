import React from "react";

function Footer() {
  return (
    <footer>
      {/* <!-- 1st column --> */}
      <div>
        <h3>bird feeds</h3>
        <p>oijfew oijesoi the joifea ssfs</p>
        <p>min max task</p>
        <p className="weeksStyle">2 weeks ago</p>
        <hr />
        <p>oijfew oijesoi the joifea ssfs</p>
        <p>min max task</p>
        <p className="weeksStyle">2 weeks ago</p>
        <hr />
        <p>oijfew oijesoi the joifea ssfs</p>
        <p>min max task</p>
        <p className="weeksStyle">2 weeks ago</p>
      </div>
      {/* <!-- 2nd column --> */}
      <div>
        <h3>new sletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          asperiores minus blanditiis quasi quo voluptate velit quaerat
        </p>
        <hr />
        <section>
          <label>Your Email Address</label>
          <input type="email" name="" id="" placeholder="example@email.com" />
          <button>sign up</button>
        </section>
      </div>
      {/* <!-- 3rd column --> */}
      <div className="foot_3rddiv">
        <h3>recent project</h3>
        <section>
          <div className="box"></div>
          <div>
            <p>oijfew oijesoi the joifea ssfs</p>
            <p>min max task</p>
            <p>2 weeks ago</p>
          </div>
        </section>
        <hr />
        <section>
          <div className="box"></div>
          <div>
            <p>oijfew oijesoi the joifea ssfs</p>
            <p>min max task</p>
            <p>2 weeks ago</p>
          </div>
        </section>
        <hr />
        <section>
          <div className="box"></div>
          <div>
            <p>oijfew oijesoi the joifea ssfs</p>
            <p>min max task</p>
            <p>2 weeks ago</p>
          </div>
        </section>
      </div>
      {/* <!-- 4th column --> */}
      <div className="foot_lastdiv">
        <h3>contact</h3>
        <section>
          <img src="" alt="" />
          <div>
            <p>0190931098103</p>
            <p>0190931098103</p>
          </div>
        </section>
        <section>
          <img src="" alt="" />
          <div>
            <p>0190931098103</p>

            <p>0190931098103</p>
          </div>
        </section>
        <section>
          <img src="" alt="" />
          <div>
            <p>0190931098103</p>

            <p>0190931098103</p>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
