const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="w-full bg-yellow-500 text-center">This is Layout</div>
      {children}
    </div>
  );
};

export default Layout;
