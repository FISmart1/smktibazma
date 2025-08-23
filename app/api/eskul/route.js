import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET all eskul
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM eskul ORDER BY id DESC");
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new eskul
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name_eskul = formData.get("name_eskul");
    const desk = formData.get("desk");
    const pembimbing = formData.get("pembimbing");

    // upload logo
    const file = formData.get("logo");
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

    await db.query(
      "INSERT INTO eskul (name_eskul, desk, pembimbing, logo) VALUES (?, ?, ?, ?)",
      [name_eskul, desk, pembimbing, filePath]
    );

    return NextResponse.json({ message: "Eskul berhasil ditambahkan" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
