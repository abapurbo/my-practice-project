import React from "react";

export default function Card() {
    return (
        <div className="max-w-sm bg-pink-100 rounded-2xl p-6">
            {/* Quote Icon */}
            <div className="text-gray-400 text-4xl mb-3">&ldquo;</div>

            {/* Message */}
            <p className="text-gray-700 leading-relaxed mb-6">
                A posture corrector works by providing support and gentle alignment
                to your shoulders, back, and spine, encouraging you to maintain proper
                posture throughout the day.
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-[#0F4C49] mb-4"></div>

            {/* Profile */}
            <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 bg-[#0F4C49] rounded-full"></div>

                <div>
                    <h3 className="text-[#0D1F23] font-bold text-lg">Awlad Hossin</h3>
                    <p className="text-gray-500 text-sm">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
}
