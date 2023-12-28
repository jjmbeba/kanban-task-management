import Board from "@/components/Board";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-background relative">
      <Board/>
      <Sidebar/>
    </main>
  )
}
