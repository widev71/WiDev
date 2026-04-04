import { NextResponse } from 'next/server';

import fs from 'fs';

import path from 'path';



export async function GET() {

  try {

    const musicDir = path.join(process.cwd(), 'public', 'music');



    if (!fs.existsSync(musicDir)) {

      return NextResponse.json({ tracks: [] });

    }



    const files = fs.readdirSync(musicDir);

    const audioFiles = files.filter(file =>

      file.endsWith('.mp3') || file.endsWith('.wav') || file.endsWith('.ogg') || file.endsWith('.m4a')

    );



    return NextResponse.json({ tracks: audioFiles });

  } catch (error) {

    console.error("Error reading music directory:", error);

    return NextResponse.json({ tracks: [] });

  }

}