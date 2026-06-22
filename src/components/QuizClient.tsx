"use client";

import Link from "next/link";
import { useState } from "react";
import type { QuizQuestion } from "@/types/content";

export function QuizClient({ quizzes }: { quizzes: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="grid gap-5">
      {quizzes.map((quiz, index) => {
        const selected = answers[quiz.id];
        const isAnswered = Boolean(selected);
        const isCorrect = selected === quiz.answer;
        return (
          <article className="rounded-lg border border-line bg-white p-5 shadow-soft" key={quiz.id}>
            <p className="text-sm font-black text-primary">문제 {index + 1}</p>
            <h2 className="mt-2 text-xl font-black text-ink">{quiz.question}</h2>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {quiz.options.map((option) => (
                <button className="focus-ring rounded-lg border border-line bg-white px-4 py-3 text-left text-sm font-bold text-ink transition hover:border-primary hover:bg-softPurple" key={option} onClick={() => setAnswers((current) => ({ ...current, [quiz.id]: option }))} type="button">
                  {option}
                </button>
              ))}
            </div>
            {isAnswered ? (
              <div className={isCorrect ? "mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800" : "mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"}>
                <p className="font-black">{isCorrect ? "정답입니다." : "다시 생각해볼 포인트가 있어요."}</p>
                <p className="mt-1">정답: {quiz.answer}</p>
                <p className="mt-1">{quiz.explanation}</p>
              </div>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {quiz.relatedTerms.map((slug) => <Link className="rounded-md border border-line px-2 py-1 text-xs font-bold text-primary" href={'/terms/' + slug} key={slug}>{slug}</Link>)}
            </div>
          </article>
        );
      })}
    </div>
  );
}
