import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname == '/json_rpc') {
    const url = `http://${process.env.MONERO_HOST ?? '127.0.0.1'}:${process.env.MONERO_PORT ?? 18081}/json_rpc`;

    try {
      await fetch(url, { method: 'HEAD' });

      return NextResponse.rewrite(new URL(url, request.url));
    } catch (error) {
      return NextResponse.next();
    }
  }
};
