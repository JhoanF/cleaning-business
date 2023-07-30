// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

type ContactRequest = {
  name: string
  email: string
  message: string
  not_a_bot: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message, not_a_bot } = req.body as ContactRequest

  if (!not_a_bot) {
    res.status(403).json({ message: 'You are a bot' })
  }

  if (!name || !email || !message) {
    res.status(422).json({ message: 'Invalid input' })
  }

  const newMessage = {
    email,
    message,
    name,
  }

  console.log(newMessage)
  res.status(201).json({ message: "Successfully sent message! If you don't hear back from us within 24hrs, please call us directly." })
}
