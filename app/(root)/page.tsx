import Link from "next/link";

import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const questions = [
  {
    _id: "1",
    title: "Question 1",
    description: "Content of question 1",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Question 2",
    description: "Content of question 2",
    tags: [
      { _id: "1", name: "Next.js" },
      { _id: "2", name: "CSS" },
    ],
    upvotes: 15,
    answers: 51,
    views: 101,
    createdAt: new Date(),
  },
];
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home({ searchParams }: SearchParams) {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase() || "")
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}> Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          otherClasses="flex-1"
          placeholder="Search Questions..."
        />
      </section>
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
}
