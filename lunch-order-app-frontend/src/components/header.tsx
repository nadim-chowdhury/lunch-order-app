import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b mb-10">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-rose-500">Lunch App</h1>
        </Link>

        <div className="gap-6 font-medium space-x-6">
          <Link
            href="/restaurants/create"
            className="hover:text-rose-600 transition-all duration-300"
          >
            Create Restaurants
          </Link>
          <Link
            href="/food-packs/create"
            className="hover:text-rose-600 transition-all duration-300"
          >
            Create Food Packs
          </Link>
          <Link
            href="/winner"
            className="hover:text-rose-600 transition-all duration-300"
          >
            Today&apos;s Winner
          </Link>
        </div>
      </div>
    </div>
  );
}
