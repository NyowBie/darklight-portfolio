import React from 'react';
import { Printer } from 'lucide-react';

const Navbar = () => {
    return (
        // Since we moved to a "Sheet" layout, we don't need a traditional sticky nav.
        // This component is now effectively a null component or just holds the print button logic if needed later.
        // For now, I will render nothing to keep the "Glass Sheet" look clean, 
        // or I could add a floating action button in App.jsx (which I did with the "Live Resume" badge).
        // Let's make this an empty fragment to cleanly "remove" it without breaking imports in App.jsx if I missed removing it there.
        // Actually, let's make it a hidden utility for SEO or future headers.

        <nav className="hidden"></nav>
    );
};

export default Navbar;
