"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
    const images = [
        "/gallery/img1.jpeg",
        "/gallery/img2.jpeg",
        "/gallery/img3.jpeg",
        "/gallery/img4.jpeg",
        "/gallery/img5.jpeg",
        "/gallery/img6.jpeg",
        "/gallery/img7.jpeg",
        "/gallery/img8.jpeg",
        "/gallery/img9.jpeg",
        "/gallery/img10.jpeg",
        "/gallery/img11.jpeg",
        "/gallery/img12.jpeg",
        "/gallery/img13.jpeg",
        "/gallery/img14.jpeg",
        "/gallery/img15.jpeg",
    ];

    const [index, setIndex] = useState<number | null>(null);
    const [page, setPage] = useState(1);

    const perPage = 12;
    const totalPages = Math.ceil(images.length / perPage);
    const paginated = images.slice((page - 1) * perPage, page * perPage);

    // disable page scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = index !== null ? "hidden" : "auto";
    }, [index]);

    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Gallery
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Our Marble Collection
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Real photos — premium Indian marble direct from source.
                    </p>
                </div>
            </section>

            {/* GRID */}
            <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

                    {paginated.map((src, i) => (
                        <button
                            key={i}
                            className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition group"
                            onClick={() => setIndex((page - 1) * perPage + i)}
                        >
                            {/* FIXED 4:3 RATIO BOX — ALWAYS PERFECT */}
                            <div className="relative w-full pb-[75%]">
                                <Image
                                    src={src}
                                    alt="Marble"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                    sizes="(max-width:768px) 50vw, 25vw"
                                />
                            </div>
                        </button>
                    ))}

                </div>

                {/* PAGINATION */}
                <div className="flex justify-center gap-2 mt-10 flex-wrap">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-4 py-2 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-4 py-2 rounded border 
                ${page === i + 1
                                    ? "bg-yellow-500 text-black border-yellow-500"
                                    : "bg-gray-800 border-gray-700"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="px-4 py-2 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Next
                    </button>

                </div>
            </section>

            {/* LIGHTBOX */}
            {index !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center">

                    {/* CLOSE */}
                    <button
                        onClick={() => setIndex(null)}
                        className="fixed top-4 right-4 md:top-6 md:right-6 
                 z-[10050] bg-white/15 hover:bg-white/25 
                 text-white p-3 md:p-3.5 rounded-full"
                    >
                        <X size={22} />
                    </button>

                    {/* LEFT */}
                    {index > 0 && (
                        <button
                            onClick={() => setIndex(index - 1)}
                            className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2
                   z-[10050] bg-white/15 hover:bg-white/25 
                   p-3 md:p-4 rounded-full text-white"
                        >
                            <ChevronLeft size={26} />
                        </button>
                    )}

                    {/* RIGHT */}
                    {index < images.length - 1 && (
                        <button
                            onClick={() => setIndex(index + 1)}
                            className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2
                   z-[10050] bg-white/15 hover:bg-white/25 
                   p-3 md:p-4 rounded-full text-white"
                        >
                            <ChevronRight size={26} />
                        </button>
                    )}

                    {/* IMAGE BOX */}
                    <div className="relative w-[94vw] md:w-[90vw] max-w-5xl h-[80vh] z-[10000]">
                        <Image
                            src={images[index]}
                            alt="Zoom View"
                            fill
                            className="object-contain rounded-xl border border-gray-800 shadow-2xl"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}

        </main>
    );
}
