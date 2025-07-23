export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 mb-4 md:mb-0 text-center">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
