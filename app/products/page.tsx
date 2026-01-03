"use client";

import Image from "next/image";

export default function Products() {

    const products = [
        { name: "Makrana White Marble", img: "/products/marble-1.jpg", tag: "Premium Quality" },
        { name: "Green Marble", img: "/products/marble-2.jpg", tag: "Best Seller" },
        { name: "Katni Marble", img: "/products/marble-3.jpg", tag: "Popular Choice" },
        { name: "Rajasthan White", img: "/products/marble-4.jpg", tag: "High Demand" },
        { name: "Agaria White", img: "/products/marble-5.jpg", tag: "Top Grade" },
        { name: "Brown Marble", img: "/products/marble-6.jpg", tag: "Durable Choice" },
        { name: "Rajasthan White", img: "/products/marble-7.jpg", tag: "High Demand" },
        { name: "Agaria White", img: "/products/marble-8.jpg", tag: "Top Grade" },
        { name: "Brown Marble", img: "/products/marble-9.jpg", tag: "Durable Choice" },
    ];

    return (
        <main className="min-h-screen bg-gray-950 text-gray-300">

            {/* HEADER */}
            <section className="border-b border-gray-800 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Our Collection
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Explore Premium Indian Marble
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Handpicked stones with the finest finish, honest pricing and quality you can trust.
                    </p>
                </div>
            </section>

            {/* PRODUCTS GRID */}
            <section className="max-w-7xl mx-auto px-4 py-14">

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">

                    {products.map((p, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                        >

                            {/* IMAGE */}
                            <div className="relative h-56 w-full">
                                <Image
                                    src={p.img}
                                    alt={p.name}
                                    fill
                                    className="object-cover"
                                />

                                <span className="absolute top-3 left-3 text-xs bg-yellow-200/90 text-yellow-900 px-2 py-1 rounded-md font-medium">
                                    {p.tag}
                                </span>
                            </div>

                            {/* DETAILS */}
                            <div className="p-5">

                                <h3 className="font-semibold text-lg text-white">
                                    {p.name}
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Available in multiple sizes & finishes.
                                </p>

                                <a
                                    href="https://wa.me/+919950703030"
                                    className="mt-4 inline-block text-sm bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg shadow shadow-green-900/40"
                                >
                                    Get Best Price
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </section>
        </main>
    );
}

