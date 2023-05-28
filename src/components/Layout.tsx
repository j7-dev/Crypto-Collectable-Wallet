import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full bg-teal-500 text-center mb-4 py-2 fixed top-0 left-0 font-bold text-white z-50">
        <Link to="/">Crypto Collectable Wallet</Link>
      </div>
      <div className="mx-auto xl:w-[1080px] px-4 xl:px-8 pt-16 min-h-screen overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};
