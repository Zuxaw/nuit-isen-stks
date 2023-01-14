function Page404() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <span className="relative block px-16 py-4 btn btn-primary normal-case">
          <a href="/">Go Back Home</a>
        </span>
      </button>
    </main>
  );
}

export default Page404;
