import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "What is the best way to learn React?" },
  { _id: "2", title: "How do I optimize my Next.js application?" },
  { _id: "3", title: "What are the new features in JavaScript ES2023?" },
  { _id: "4", title: "How to manage state in large React applications?" },
  { _id: "5", title: "What are the best practices for API design?" },
];
const popularTqags = [
  { _id: "1", name: "React", questions: 1200 },
  { _id: "2", name: "Next.js", questions: 800 },
  { _id: "3", name: "JavaScript", questions: 1500 },
  { _id: "4", name: "CSS", questions: 600 },
  { _id: "5", name: "HTML", questions: 400 },
];
const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              href={ROUTES.QUESTION(question._id)}
              key={question._id}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTqags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
