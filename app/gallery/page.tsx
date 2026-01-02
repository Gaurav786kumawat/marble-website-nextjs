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

    // ------------------ STATE ------------------
    const [index, setIndex] = useState<number | null>(null);
    const [page, setPage] = useState(1);

    const perPage = 12;
    const totalPages = Math.ceil(images.length / perPage);

    const paginated = images.slice((page - 1) * perPage, page * perPage);

    // ------------------ ESC / ARROWS ------------------
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIndex(null);
            if (e.key === "ArrowRight" && index !== null && index < images.length - 1)
                setIndex(index + 1);
            if (e.key === "ArrowLeft" && index !== null && index > 0)
                setIndex(index - 1);
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [index]);

    // ------------------ SCROLL LOCK ------------------
    useEffect(() => {
        document.body.style.overflow = index !== null ? "hidden" : "auto";
    }, [index]);

    // ------------------ SWIPE ------------------
    let startX = 0;
    let endX = 0;
    const touchStart = (e: any) => (startX = e.touches[0].clientX);
    const touchMove = (e: any) => (endX = e.touches[0].clientX);
    const touchEnd = () => {
        if (startX - endX > 60 && index !== null && index < images.length - 1)
            setIndex(index + 1);

        if (endX - startX > 60 && index !== null && index > 0)
            setIndex(index - 1);
    };

    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
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
            <section className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {paginated.map((src, i) => (
                        <div
                            key={i}
                            className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900 cursor-pointer shadow hover:shadow-xl transition group"
                            onClick={() => setIndex((page - 1) * perPage + i)}
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={src}
                                    alt="Marble"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                    placeholder="blur"
                                    blurDataURL="/blur-placeholder.jpg"
                                />
                            </div>
                        </div>
                    ))}

                </div>

                {/* PAGINATION */}
                <div className="flex justify-center gap-2 mt-10">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-3 py-1 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded border 
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
                        className="px-3 py-1 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            </section>

            {/* LIGHTBOX */}
            {index !== null && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
                    onTouchStart={touchStart}
                    onTouchMove={touchMove}
                    onTouchEnd={touchEnd}
                >
                    {/* CLOSE */}
                    <button
                        onClick={() => setIndex(null)}
                        className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg"
                    >
                        <X size={22} />
                    </button>

                    {/* LEFT */}
                    {index > 0 && (
                        <button
                            onClick={() => setIndex(index - 1)}
                            className="absolute left-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg"
                        >
                            <ChevronLeft size={26} />
                        </button>
                    )}

                    {/* RIGHT */}
                    {index < images.length - 1 && (
                        <button
                            onClick={() => setIndex(index + 1)}
                            className="absolute right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg"
                        >
                            <ChevronRight size={26} />
                        </button>
                    )}

                    {/* IMAGE */}
                    <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center px-6">
                        <Image
                            src={images[index]}
                            alt="Zoom View"
                            width={1400}
                            height={900}
                            className="rounded-xl shadow-2xl border border-gray-800 object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
