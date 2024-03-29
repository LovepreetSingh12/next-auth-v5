import type { NextApiRequest, NextApiResponse } from 'next';
import { getDb } from '@/utils/db'; // Adjust the path according to your project structure
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  try {
    const db = await getDb();
    // Optionally, perform a simple operation like listing collections
    const collections = await db.listCollections().toArray();
    return NextResponse.json(collections,{
        status:200
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json(
        { error: "Failed to get collection" },
        {
            status: 500,
        }
    )
  }
}