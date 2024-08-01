import { Request, Response } from "express";
import { uid } from "uid";
import { TODO_LIST } from "@root/mock";
import { TODO_STATUS } from "@root/constants";

interface RequestBody {
  description?: string;
  status?: number;
}

export default async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, status } = req.body as RequestBody;

  const todo = TODO_LIST.find((todo) => todo.id === +id);

  if (!todo) {
    return res.status(404).send({ message: "Todo not found" });
  }

  if (description) {
    todo.description = description;
  }

  if (status !== undefined) {
    todo.status = status;
  }

  return res.send(todo);
};
