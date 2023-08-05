const DescriptionOutline = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <div className="relative max-w-6xl text-center md:px-6 md:py-0">
        <h1 className="py-6 text-2xl font-semibold underline decoration-secondary">
          Description
        </h1>
        <div className="py-4">{children}</div>
      </div>
    </>
  );
};

export default DescriptionOutline;
