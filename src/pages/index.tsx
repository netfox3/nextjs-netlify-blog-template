import Link from "next/link";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, it's Ash<span className="fancy">.</span>
          </h1>
          <h2>I'm a copywriter, ux writer, content designer, and growth hacker helping startups and entrepreneurs. 
            Take a look at my <Link href="/posts"><a>projects </a></Link>and
            <Link href="https://read.cv/ashs"><a> resume </a></Link>to learn more about working with me.</h2>
          <h2><Link href="mailto:ash460711@gmail.com?subject=hi%20ash!%20"><a>Contact me &gt;&gt;</a></Link></h2>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 1.5rem;
          margin: 1rem 0 0 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.1rem;
          font-weight: 200;
          line-height: 1.25;
          max-width: 750px;
        }
        a {
          color: #3ded97;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
