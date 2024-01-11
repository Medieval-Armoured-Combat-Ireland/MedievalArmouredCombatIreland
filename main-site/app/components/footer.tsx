'use client';
import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link
                        href="#about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
