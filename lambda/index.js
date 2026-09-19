const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'Quests';

// Main handler function
exports.handler = async (event) => {
  console.log('Event received:', JSON.stringify(event));

  try {
    // Parse mood from query string or body
    const mood = event.queryStringParameters?.mood || 
                (event.body ? JSON.parse(event.body).mood : null);

    if (!mood) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'mood parameter is required' })
      };
    }

    // Query DynamoDB for matching quests
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: 'mood = :mood',
      ExpressionAttributeValues: {
        ':mood': mood
      }
    };

    const result = await dynamoDB.scan(params).promise();
    let quests = result.Items || [];

    // Shuffle and return 6 random quests
    const shuffled = quests.sort(() => Math.random() - 0.5).slice(0, 6);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        mood: mood,
        quests: shuffled,
        count: shuffled.length
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
};
