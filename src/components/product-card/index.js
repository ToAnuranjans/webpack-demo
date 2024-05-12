import React from "react";

export default function ProductCard({ user }) {
    return (
        <li className="py-4 flex-8">
            <img className="object-cover h-20 w-20" src={user.image} alt="" />
            <div className="ml-3">
                <p className="text-lg font-medium text-red-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>
        </li>
    )
}