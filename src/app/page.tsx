import { db } from "@/db";
import Link from "next/link";

// Directive for turn static route to dynamic route
// export const dynamic = "force-dynamic";
// people want to see up-to-date data
// export const revalidate = 0;
// use for front page of social media website, blogs
export default async function Home() {
  const snippets = await db.snippet.findMany();
  console.log(snippets);
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      href={`/snippets/${snippet.id}`}
      className="flex justify-between items-center p-2.5 border rounded"
      key={snippet.id}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className="border p-2 rounded" href={`snippets/new`}>
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}


