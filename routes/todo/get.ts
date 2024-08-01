import { Request, Response } from "express";
import { TODO_LIST } from "@root/mock";

export default async (req: Request, res: Response) => {
  return res.send(TODO_LIST);
};
