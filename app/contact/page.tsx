"use client";

import { Mail, MapPin, Phone, MessageCircle, Clock, Truck } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Get In Touch
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Contact Ujjain Marble House
                    </h1>

                    <p className="text-gray-300 mt-3 max-w-2xl">
                        Call, WhatsApp or visit our yard — we’re always happy to help you select the right marble.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-7">

                {/* PHONE */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow hover:border-yellow-400/30 hover:shadow-yellow-500/10 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Phone className="text-green-400" />
                        <h3 className="font-semibold text-lg">Call Us</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">
                        Speak directly with our team for pricing & availability.
                    </p>

                    <a
                        href="tel:+919950703030"
                        className="inline-block bg-gray-800 hover:bg-black border border-gray-700 hover:border-gray-500 transition text-white px-5 py-2 rounded-lg text-sm"
                    >
                        +91 99507 03030
                    </a>
                </div>

                {/* WHATSAPP */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow hover:border-green-400/30 hover:shadow-green-500/10 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <MessageCircle className="text-green-400" />
                        <h3 className="font-semibold text-lg">Chat on WhatsApp</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">
                        Send us your requirements — we’ll respond quickly.
                    </p>

                    <a
                        href="https://wa.me/919950703030"
                        className="inline-block bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-lg text-sm shadow-lg shadow-green-900/40"
                    >
                        Start Chat
                    </a>
                </div>

                {/* EMAIL */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow hover:border-blue-400/30 hover:shadow-blue-500/10 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Mail className="text-blue-400" />
                        <h3 className="font-semibold text-lg">Email Us</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">
                        Share project details & get the best quotation.
                    </p>

                    <p className="text-sm font-medium text-gray-200">ajaysharma@example.com</p>
                </div>
            </section>

            {/* VISIT SECTION */}
            <section className="max-w-7xl mx-auto px-4 pb-10 grid md:grid-cols-2 gap-8">

                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Visit Our Yard
                    </h2>

                    <p className="text-gray-400 text-sm">
                        Explore slabs in person & choose the stone that best fits your project.
                    </p>

                    <div className="flex items-start gap-3 mt-5">
                        <MapPin className="text-red-400" />
                        <p className="text-sm text-gray-300">
                            Ujjain, Madhya Pradesh, India
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <Clock className="text-yellow-400" />
                        <p className="text-sm text-gray-300">
                            Open: 9:30 AM – 7:30 PM (All Days)
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <Truck className="text-gray-300" />
                        <p className="text-sm text-gray-300">
                            Delivery Support Across India
                        </p>
                    </div>
                </div>

                {/* MAP */}
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900/50 backdrop-blur">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            {/* MINI FAQ */}
            <section className="max-w-7xl mx-auto px-4 pb-10">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked</h2>

                <div className="space-y-4">
                    <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-800 shadow">
                        <p className="font-medium">Do you provide transport?</p>
                        <p className="text-sm text-gray-400">
                            Yes — we help arrange transport across India at competitive rates.
                        </p>
                    </div>

                    <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-800 shadow">
                        <p className="font-medium">Can I visit and select slabs personally?</p>
                        <p className="text-sm text-gray-400">
                            Absolutely. We’ll help you shortlist the best options based on your need & budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h3 className="text-xl font-semibold">
                        Ready to discuss your marble requirement?
                    </h3>

                    <a
                        href="https://wa.me/+919950703030"
                        className="mt-5 inline-block bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg shadow-lg shadow-green-900/30"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </section>

        </main>
    );
}

