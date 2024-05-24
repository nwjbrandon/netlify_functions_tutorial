import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  switch (event.httpMethod) {
    case 'GET': 
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'GET HTTP Method In TypeScript' }),
        headers: { 'content-type': 'application/json' }
      }
    case 'POST':
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'POST HTTP Method In TypeScript' }),
        headers: { 'content-type': 'application/json' }
      }
      case 'PUT':
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'PUT HTTP Method In TypeScript' }),
          headers: { 'content-type': 'application/json' }
        }
      case 'DELETE':
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'DELETE HTTP Method In TypeScript' }),
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