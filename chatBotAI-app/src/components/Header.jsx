function Header({ children }) {
  return (
    <>
      <div className="h-[75px] w-full content-center rounded-md bg-gradient-to-r from-green-400 to-green-600 text-center">
        <div className="text-[24px] font-bold text-white">{children}</div>
      </div>
    </>
  );
}

export default Header;
