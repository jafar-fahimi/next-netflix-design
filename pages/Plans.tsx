import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Table from "../components/Table";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { products as myProducts } from "../utils/products";
import getStripe from "../utils/get-stripe";
import { Product } from "../typings";
import { NextPage } from "next";

interface Props {
  products: Product[];
}
const Plans: NextPage<Props> = ({ products }) => {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(
    myProducts[2]
  );
  const [isBillingLoading, setBillingLoading] = useState(false);

  const subscribeToPlan = async () => {
    if (!user) return;
    try {
      setBillingLoading(true);
      const stripe = await getStripe();
      const response = await fetch("/api/checkout_session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedPlan),
      });
      const result = await response.json();
      stripe?.redirectToCheckout({ sessionId: result.id });

      setBillingLoading(false);
      return response;
    } catch (err: any) {
      alert("Error occured while proceeding your payment: " + err.message);
      setBillingLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="/Netflix_2015_logo.svg"
            width={150}
            height={120}
            alt="Netflix"
            title="Back to Home Page"
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {myProducts.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={myProducts} selectedPlan={selectedPlan} />

          <button
            type="button"
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && "opacity-60"
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
