import { callCrossmintAPI } from '@/app/utils/crossmint';
import { NextRequest, NextResponse } from 'next/server';
import admin from '@/app/utils/firebase';

export async function POST(req: NextRequest, res: NextResponse) {  
  try {
    const token = req.headers.get('authorization');

    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const decodedToken = await admin.auth().verifyIdToken(token);

    const body = {
      chain: 'polygon',
      email: decodedToken.email
    }

    const apiResponse = await callCrossmintAPI("v1-alpha1/wallets", { method: "POST", body });
    return NextResponse.json(
      apiResponse,
      { status: 200 }
    )
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    )
  }
}
