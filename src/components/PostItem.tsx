import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #3ded97;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
              font-size:1.1rem;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
