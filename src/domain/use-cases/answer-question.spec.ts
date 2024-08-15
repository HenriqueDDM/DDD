import { AnswerQuestionUseCase } from "./answer-question";
import { Answer } from "../entities/answer";

const fakeAnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(
    fakeAnswersRepository
  );

  const answer = await answerQuestionUseCase.execute({
    content: "Resposta",
    instructorId: "1",
    questionId: "2",
  });

  expect(answer.content).toEqual("Resposta");
});
