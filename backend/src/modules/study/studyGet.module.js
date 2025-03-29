import express from 'express';
import prisma from '../../db/prisma/client.prisma.js';

const studyGetRouter = express.Router();

studyGetRouter.get('/', async (req, res, next) => {
  try {
    const {
      offset = 0,
      limit = 6,
      sort = 'desc',
      search = '',
      orderBy = 'createAt',
    } = req.query;

    const study = await prisma.study.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            nickName: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        emojis: true,
        habits: {
          include: {
            HabitDone: true,
          },
        },
      },
      omit: {
        encryptedPassword: true,
      },
      orderBy: {
        [orderBy]: sort === 'desc' ? 'desc' : 'asc',
      },
      skip: Number(offset),
      take: Number(limit),
    });

    console.log(study);

    res.status(200).json({ success: true, data: study });
  } catch (e) {
    next(e);
  }
});

export default studyGetRouter;
