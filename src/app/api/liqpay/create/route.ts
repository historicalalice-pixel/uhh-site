
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req:Request){
  const { amount, currency, description } = await req.json();
  const public_key=process.env.LIQPAY_PUBLIC_KEY!; const private_key=process.env.LIQPAY_PRIVATE_KEY!;
  if(!public_key||!private_key) return NextResponse.json({error:"Missing LiqPay keys"},{status:500});
  const order_id = `UHH_${Date.now()}`;
  const payload:any={ public_key, version:3, action:"pay", amount, currency, description, order_id, sandbox: "1" };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64");
  const signature = crypto.createHash("sha1").update(private_key + data + private_key).digest("base64");
  return NextResponse.json({ public_key, data, signature });
}
