"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-950/95 backdrop-blur border-b border-gray-800 text-white sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                    {/* LOGO */}
                    <Link
                        href="/"
                        className="text-lg md:text-xl font-bold tracking-wide"
                    >
                        <span className="text-yellow-400">Ujjain</span> Marble House
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden md:flex gap-6 text-sm">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/products", label: "Products" },
                            { href: "/why-us", label: "Why Us" },
                            { href: "/about", label: "About Us" },
                            { href: "/calculator", label: "Calculator" },
                            { href: "/gallery", label: "Gallery" },
                            { href: "/faq", label: "FAQ" },
                            { href: "/contact", label: "Contact" },
                        ].map((l, i) => (
                            <Link
                                key={i}
                                href={l.href}
                                className="hover:text-yellow-400 transition"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* DESKTOP CTA */}
                    <a
                        href="https://wa.me/919950703030"
                        className="hidden md:block bg-green-600 hover:bg-green-700 transition text-sm px-4 py-2 rounded-lg shadow shadow-green-900/30"
                    >
                        WhatsApp
                    </a>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden border border-gray-700 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                        onClick={() => setOpen(true)}
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            {/* BACKDROP */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MOBILE SLIDE MENU */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white z-50 shadow-2xl border-l border-gray-800 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                    <p className="font-semibold">Menu</p>
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col px-5 py-4 gap-4 text-sm">

                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
                    <Link href="/why-us" onClick={() => setOpen(false)}>Why Us</Link>
                    <Link href="/calculator" onClick={() => setOpen(false)}>Calculator</Link>
                    <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
                    <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

                    <a
                        href="https://wa.me/919950703030"
                        className="mt-4 bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow shadow-green-900/30"
                        onClick={() => setOpen(false)}
                    >
                        <MessageCircle size={18} /> WhatsApp Us
                    </a>
                </div>
            </div>
        </>
    );
}
