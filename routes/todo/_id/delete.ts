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

  const todoIndex = TODO_LIST.findIndex((todo) => todo.id === +id);

  if (todoIndex === -1) {
    return res.status(404).send({ message: "Todo not found" });
  }

  TODO_LIST.splice(todoIndex, 1);

  return res.send({ message: "Todo deleted" });
};