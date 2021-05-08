import { NextApiRequest, NextApiResponse } from 'next';
interface ErrorResponseType {
  error: string;
}

const myfunc = () => { }


export default async function GetProdList(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  // Get list of products
  if (req.method === 'GET') {
    const {
      name,
      email,
      cellphone,
      teacher,
      courses,
      available_locations,
      available_hours,
    }: {
      name: string;
      email: string;
      cellphone: string;
      teacher: boolean;
      courses: string[];
      available_hours: IAvailableHours;
    } = req.body;

    if (invalidHour) {
      res
        .status(400)
        .json({ error: 'You cannot teach between 20:00 and 7:00' });
      return;
    }

    if (!teacher) {
      if (!name || !email || !cellphone) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }
    } else if (teacher) {
      if (
        !name ||
        !email ||
        !cellphone ||
        !courses ||
        !available_hours ||
        !available_locations
      ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }
    }

    const { db } = await connect();

    const lowerCaseEmail = email.toLowerCase();
    const emailAlreadyExists = await db.findOne({ email: lowerCaseEmail });
    if (emailAlreadyExists) {
      res
        .status(400)
        .json({ error: `E-mail ${lowerCaseEmail} already exists` });
      return;
    }

    const response = await db.insertOne({
      name,
      email: lowerCaseEmail,
      cellphone,
      teacher,
      coins: 1,
      courses: courses || [],
      available_hours: available_hours || {},
      available_locations: available_locations || [],
      reviews: [],
      appointments: [],
    });

    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
