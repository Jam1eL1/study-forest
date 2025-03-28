import express from "express";
import prisma from "../../db/prisma/client.prisma.js";

const habitDoneRouter = express.Router();

habitDoneRouter.get("/gethabitdone/:habitId", async (req, res, next) => {
  try {
    const habitId = Number(req.params.habitId);
    const habits = await prisma.habitDone.findMany({ where: { habitId } });
    res.status(201).json(habits);
  } catch (e) {
    next(e);
  }
});

habitDoneRouter.post("/posthabitdone/:habitId", async (req, res, next) => {
  try {
    const habitId = Number(req.params.habitId);
    const { isDone, dayOfWeek } = req.body;
    const habits = await prisma.habitDone.create({
      data: {
        habitId,
        isDone,
        dayOfWeek,
      },
    });
    res.status(201).json(habits);
  } catch (e) {
    next(e);
  }
});

habitDoneRouter.patch(
  "/patchhabitdone/:habitDoneId",
  async (req, res, next) => {
    try {
      const data = req.body;
      const habitDoneId = Number(req.params.habitDoneId);
      const updatedHabit = await prisma.habitDone.update({
        where: { id: habitDoneId },
        data,
      });
      if (!updatedHabit) return res.status(404).send("can't find habit");
      res.status(204).json(updatedHabit);
    } catch (e) {
      next(e);
    }
  }
);

export default habitDoneRouter;
