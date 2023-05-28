const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <div className="w-full bg-yellow-500 text-center mb-4 py-2">
        This is Layout
      </div>
      <div className="mx-auto xl:w-[1080px] px-4 xl:px-8">{children}</div>
    </div>
  );
};

export default Layout;
