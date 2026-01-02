"use client";

import { Gem, Handshake, ShieldCheck, MapPin } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        About Us
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        About Ujjain Marble House
                    </h1>

                    <p className="text-gray-300 mt-3 max-w-3xl">
                        We’re an Indian marble supply business focused on genuine quality, fair
                        pricing and a smooth buying experience — right from enquiry to delivery.
                    </p>
                </div>
            </section>

            {/* STORY */}
            <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Our Story
                    </h2>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        Ujjain Marble House was started with a simple vision — to make the marble
                        buying process transparent, comfortable and trustworthy for every customer.
                        <br /><br />
                        Whether you’re building a home, showroom or commercial project — we
                        help you select the right stone based on quality, budget and durability.
                        <br /><br />
                        Instead of pushing sales, we focus on guiding you with genuine information —
                        just like we would advise our own family.
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900/40 backdrop-blur h-72">
                    <img
                        src="/homepage/ujjain-marble-house.png"
                        alt="Marble Yard"
                        className="w-full h-full object-cover"
                    />
                </div>

            </section>

            {/* VALUES */}
            <section className="max-w-7xl mx-auto px-4 pb-14">
                <h2 className="text-xl font-semibold mb-6">
                    What We Stand For
                </h2>

                <div className="grid md:grid-cols-3 gap-7">

                    {[
                        {
                            icon: <ShieldCheck className="text-green-400" size={28} />,
                            title: "Transparency",
                            desc: "Clear communication, genuine pricing and honest guidance at every step."
                        },
                        {
                            icon: <Gem className="text-yellow-400" size={28} />,
                            title: "Quality First",
                            desc: "We offer only selected quality material — so your project gets the best finish."
                        },
                        {
                            icon: <Handshake className="text-purple-400" size={28} />,
                            title: "Long-Term Relationships",
                            desc: "Our work doesn’t end at sale — we stay with you till your project completes."
                        }
                    ].map((v, i) => (
                        <div
                            key={i}
                            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 shadow hover:border-yellow-400/30 hover:shadow-yellow-500/10 transition"
                        >
                            <div className="mb-3">{v.icon}</div>
                            <h3 className="font-semibold text-lg">{v.title}</h3>
                            <p className="text-sm text-gray-400 mt-2">{v.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* LOCATION */}
            <section className="max-w-7xl mx-auto px-4 pb-14">
                <div className="bg-gray-900/70 border border-gray-800 p-6 rounded-xl shadow flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <MapPin className="text-red-400" size={28} />
                    <div>
                        <h3 className="font-semibold text-lg">
                            Based in Ujjain, Madhya Pradesh
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Supplying premium Indian marble with delivery assistance across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h3 className="text-xl font-semibold">
                        Want help choosing the right marble?
                    </h3>

                    <a
                        href="https://wa.me/9950703030"
                        className="mt-5 inline-block bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg shadow-lg shadow-green-900/30"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </section>

        </main>
    );
}
