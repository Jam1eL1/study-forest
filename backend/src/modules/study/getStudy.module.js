import express from 'express';
import prisma from '../../db/prisma/client.prisma.js';

const getStudy = express.Router();

getStudy.get('/get-study', async (req, res, next) => {
  try {
    const {
      offset = 0,
      limit = 10,
      sort = 'desc',
      search = '',
      orderBy = 'createAt',
    } = req.query;

    console.log(offset, limit, sort, search, orderBy);

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
        ],
      },
      orderBy: {
        [orderBy]: sort === 'desc' ? 'desc' : 'asc',
      },
      skip: Number(offset),
      take: Number(limit),
    });

    res.status(200).json({ success: true, data: study });
  } catch (e) {
    next(e);
  }
});

export default getStudy;
