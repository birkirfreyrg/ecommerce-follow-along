import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, result) {
  await mongooseConnect();
  result.json(await Order.find().sort({ createdAt: -1 }));
}
