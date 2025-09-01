import Link from "next/link";

export const metadata = {
  title: "transaction journeys",
  description: "interaction designer",
};

export default function TransactionsWork() {
  return (
    <div className="block-page relative w-full flex flex-col sm:flex-row bg-[#eeeeee] -mt-4 sm:-mt-8 px-4 pt-8 sm:px-8 sm:pt-8 text-black min-h-screen">
      <div className="w-full items-left px-2 sm:pl-64 sm:pr-8 flex flex-col gap-8 pb-24">
        <div className="sm:hidden w-full flex flex-row justify-between">
          <Link href="/project/painting" className="no-underline">
            ← prev: painting
          </Link>
          <Link href="/work/qr" className="no-underline">
            next: qr →
          </Link>
        </div>
        
        <div>
          <h1>Transaction Journeys</h1>
          <p className="text-gray-500">Work project coming soon...</p>
        </div>

        <div className="w-full sm:w-[480px] flex flex-col gap-4">
          <p>
            This work page is under construction. Check back soon for updates!
          </p>
        </div>

        <div className="w-full flex justify-start py-2 sm:py-4">
          <Link
            href="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
