import AddCard from "@/components/AddCard"
import AddPassword from "@/components/AddPassword"
import YourPassword from "@/components/YourPassword"
import YourCards from "@/components/YourCards"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Password Manager</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Add a Credit Card</h2>
          <AddCard />
        </div>
        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Add a Password</h2>
          <AddPassword />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Passwords</h2>
          <YourPassword />
        </div>
        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Cards</h2>
          <YourCards />
        </div>
      </div>
    </div>
   
  )
}

