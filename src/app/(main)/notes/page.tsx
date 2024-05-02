import NoteCard from "@/components/global/note-card";
import { db } from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteSwift - Notes",
};

type Props = {};

const NotesPage = async (props: Props) => {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await db.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any notes yet. Why don't you create one?"}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
