const SocialMediaOutline = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <section className="flex flex-col md:pt-0">
        <h1 className="text-center text-2xl font-semibold underline decoration-secondary">
          Social Media
        </h1>
        <h1 className="text-md text-center text-gray">
          Check us out on Social Media
        </h1>
        <div className="relative flex w-full flex-wrap items-center justify-center gap-x-4 lg:mx-0">
          {children}
        </div>
      </section>
    </>
  );
};

export default SocialMediaOutline;
