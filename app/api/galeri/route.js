import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET all galeri
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM galeri ORDER BY id DESC");
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new galeri
export async function POST(req) {
  try {
    const formData = await req.formData();

    // foto (simpan ke /public/uploads)
    const file = formData.get("foto");
    let filePath = null;

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fs = require("fs");
      const path = require("path");

      const uploadDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileName = Date.now() + "_" + file.name;
      const uploadPath = path.join(uploadDir, fileName);
      fs.writeFileSync(uploadPath, buffer);

      filePath = `/uploads/${fileName}`;
    }

    await db.query("INSERT INTO galeri (foto) VALUES (?)", [filePath]);

    return NextResponse.json({ message: "Galeri berhasil ditambahkan" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
