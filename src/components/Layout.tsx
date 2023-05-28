export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-gray-100">
      <div className="w-full bg-teal-500 text-center mb-4 py-2 fixed absolute top-0 left-0 font-bold text-white">
        Crypto Collectable Wallet
      </div>
      <div className="mx-auto xl:w-[1080px] px-4 xl:px-8 pt-16 min-h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
};
