// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import readWords from '../../services/ReadWords'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>,
) {
  res.status(200).json(readWords())
}
