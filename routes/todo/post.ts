import { Request, Response } from "express";
import { uid } from "uid";
import { TODO_LIST } from "@root/mock";
import { TODO_STATUS } from "@root/constants";

interface RequestBody {
  description: string;
  status: number;
}

export default async (req: Request, res: Response) => {
  const { description, status } = req.body as RequestBody;

  const { id: lastTodoId } = TODO_LIST[TODO_LIST.length - 1];

  const newTodo = {
    id: lastTodoId + 1,
    description,
    status,
  };

  TODO_LIST.push(newTodo);

  return res.send(newTodo);
};
