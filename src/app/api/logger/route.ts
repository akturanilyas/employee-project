import { NextRequest, NextResponse } from 'next/server';
import { logger } from '../../../../logger';

export async function POST(req: NextRequest) {
  const { document, variables } = await req.json();

  logger.info(`User GraphQL Request: ${document} ${variables}`);

  return NextResponse.json({
    message: 'success',
    status: 200,
  });
}
