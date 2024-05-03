"use client";

import logo from "@/assets/logo.png";
import AddEditNoteDialog from "@/components/global/add-edit-note-dialog";
import ThemeToggle from "@/components/global/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/global/AIChatButton";

export default function NotesNavBar() {
  const { theme } = useTheme();

  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="FlowBrain logo" width={40} height={40} />
            <span className="text-xl font-bold">NoteSwift</span>
          </Link>
          <div className="flex flex-row items-center gap-2 sm:order-3">
            <ThemeToggle />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: { width: "2.5rem", height: "2.5rem" },
                },
              }}
            />
          </div>
          <div className="flex w-full items-center justify-between gap-2 sm:ml-auto sm:w-fit">
            <Button
              onClick={() => setShowAddEditNoteDialog(true)}
              className="w-full"
            >
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
