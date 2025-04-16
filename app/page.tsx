import Header from "@/component/header";
import NoteList from "@/component/NoteList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <NoteList />
    </main>
  );
}
