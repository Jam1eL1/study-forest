import express from "express";
import prisma from "../../db/prisma/client.prisma.js";

const habitsRouter = express.Router();

habitsRouter.get("/gethabit/:studyId", async (req, res, next) => {
  try {
    const studyId = Number(req.params.studyId);
    const habits = await prisma.habit.findMany({ where: { studyId } });
    res.status(201).json(habits);
  } catch (e) {
    next(e);
  }
});

habitsRouter.patch("/patchhabit/:habitId", async (req, res, next) => {
  try {
    const data = req.body;
    const habitId = Number(req.params.habitId);
    const updatedHabit = await prisma.habit.update({
      where: { id: habitId },
      data,
    });
    if (!updatedHabit) return res.status(404).send("can't find habit");
    res.status(204).json(updatedHabit);
  } catch (e) {
    next(e);
  }
});

habitsRouter.post("/posthabit/:studyId", async (req, res, next) => {
  try {
    const studyId = Number(req.params.studyId);
    const { title } = req.body;
    const habit = await prisma.habit.create({
      data: { title, studyId },
    });
    res.json(habit);
  } catch (e) {
    next(e);
  }
});
habitsRouter.delete("/deletehabit/:habitId", async (req, res, next) => {
  try {
    const habitId = Number(req.params.habitId);
    const habitExists = await prisma.habit.findUnique({
      where: { id: habitId },
    });

    if (!habitExists) return res.status(404).send("Habit not found");

    const deletedHabit = await prisma.habit.delete({
      where: { id: habitId },
    });
    res.status(200).json(deletedHabit);
  } catch (e) {
    next(e);
  }
});
export default habitsRouter;
