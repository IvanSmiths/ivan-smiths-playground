import React from "react";
import Link from "next/link";

function Tools() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-upper">
          <h2>Button generator</h2>
          <Link href="/button-generator">
            <a>See it</a>
          </Link>
        </div>
      </div>
      <div className="card">
        <h2>
          <span>Project #2</span>Title of the Project
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          perspiciatis blanditiis accusamus commodi consectetur id tempora rem
          iure eligendi quos eos et autem ratione exercitationem earum laborum
          ad a sequi!
        </p>
      </div>
      <div className="card">
        <h2>
          <span>Project #3</span>Title of the Project
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          perspiciatis blanditiis accusamus commodi consectetur id tempora rem
          iure eligendi quos eos et autem ratione exercitationem earum laborum
          ad a sequi!
        </p>
      </div>
    </div>
  );
}

export default Tools;
