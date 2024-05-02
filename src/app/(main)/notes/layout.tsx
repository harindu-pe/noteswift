import NotesNavbar from "./_components/notes-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NotesNavbar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
