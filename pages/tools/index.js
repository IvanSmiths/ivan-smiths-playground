/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Head from "next/head";

function Tools() {
  return (
    <>
      <Head>
        <title>Ivan Smiths - Tools </title>
        <meta
          name="description"
          content="Tools that i have created, like a button generator or a schema builder"
        />
      </Head>
      <div>
        <h1 className="large-font impact">
          Tools that may help you trough your journey.
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="card-upper">
            <h2>Button generator</h2>
            <Link href="/tools/button-generator">
              <a>See it</a>
            </Link>
          </div>
          <div className="card-content">
            <div>
              <p>
                A button generator that helps you stylyng and prototyping your
                styling ideas for your call to actions!
              </p>
            </div>
            <div>
              <Link href="/tools/button-generator">
                <a>
                  <img
                    src="/button-generator.png"
                    height="794"
                    width="1268"
                    alt="button generator"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-upper">
            <h2>Schema generator</h2>
            <Link href="/tools/schema-generator">
              <a>See it</a>
            </Link>
          </div>
          <div className="card-content">
            <div>
              <p>
                Generate various schema for your website, from Breadcrubs to
                WebPage schemas.
              </p>
            </div>
            <div>
              <Link href="/tools/schema-builder">
                <a>
                  <img
                    src="/schema-builder.png"
                    height="794"
                    width="1268"
                    alt="schema generator"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
