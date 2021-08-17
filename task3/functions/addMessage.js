import faunadb from "faunadb";
import dotenv from "dotenv";
import "encoding";

dotenv.config();

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const res = await client.query(q.Create(q.Ref("classes/Forms"), { data }));
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};
