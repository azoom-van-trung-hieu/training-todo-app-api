import { Request, Response } from "express";
import { uid } from "uid";
import { TODO_LIST } from "@root/mock";
import { TODO_STATUS } from "@root/constants";

export default async (req: Request, res: Response) => {
  const { description } = req.body;

  const { id: lastTodoId } = TODO_LIST[TODO_LIST.length - 1];

  const newTodo = {
    id: lastTodoId + 1,
    description,
    status: TODO_STATUS.TODO,
  };

  TODO_LIST.push(newTodo);

  return res.send(newTodo);
};
