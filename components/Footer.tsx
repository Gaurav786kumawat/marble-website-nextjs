import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">

                {/* BRAND */}
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Ujjain Marble House
                    </h3>

                    <p className="text-sm mt-3 text-gray-400 leading-relaxed">
                        Premium Indian Marble — Honest Pricing • Trusted Quality.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <p className="font-medium text-white mb-3">Quick Links</p>

                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-yellow-400 transition"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/faq"
                                className="hover:text-yellow-400 transition"
                            >
                                FAQ
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/privacy-policy"
                                className="hover:text-yellow-400 transition"
                            >
                                Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-yellow-400 transition"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <p className="font-medium text-white mb-3">Contact</p>

                    <p className="text-sm">Ujjain, Madhya Pradesh</p>

                    <p className="text-sm mt-1">
                        📞 +91 9950703030
                    </p>

                    <p className="text-sm mt-1">
                        📩 ajaysharma@gmail.com
                    </p>
                </div>
            </div>

            {/* STRIP */}
            <div className="text-center text-xs py-4 border-t border-gray-800 text-gray-500">
                © {new Date().getFullYear()} Ujjain Marble House — All Rights Reserved
            </div>
        </footer>
    );
}

