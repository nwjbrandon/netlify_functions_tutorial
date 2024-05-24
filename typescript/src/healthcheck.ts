import { Handler } from '@netlify/functions'
import { v4 as uuidv4 } from 'uuid';

const handler: Handler = async (event, context) => {
  const date = new Date().toISOString();
  const id = uuidv4()
  switch (event.httpMethod) {
    case 'GET': 
      return {
        statusCode: 200,
        body: JSON.stringify({ date, id, message: 'GET HTTP Method In TypeScript' }),
        headers: { 'content-type': 'application/json' }
      }
    default: 
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Unrecognized HTTP Method In TypeScript' }),
        headers: { 'content-type': 'application/json' }
      }
  }
}

export { handler }