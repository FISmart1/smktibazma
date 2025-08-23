import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET all prestasi
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM prestasi ORDER BY id DESC");
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new prestasi
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name_prestasi = formData.get("name_prestasi");
    const siswa = formData.get("siswa");
    const desk = formData.get("desk");
    const tingkat = formData.get("tingkat");
    const alamat = formData.get("alamat");
    const tanggal = formData.get("tanggal");

    // foto (bisa disimpan di folder public/uploads/)
    const file = formData.get("foto");
    let filePath = null;

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fs = require("fs");
      const uploadPath = `public/uploads/${file.name}`;
      fs.writeFileSync(uploadPath, buffer);

      filePath = `/uploads/${file.name}`;
    }

    await db.query(
      "INSERT INTO prestasi (name_prestasi, siswa, desk, tingkat, alamat, tanggal, foto) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name_prestasi, siswa, desk, tingkat, alamat, tanggal, filePath]
    );

    return NextResponse.json({ message: "Prestasi berhasil ditambahkan" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
