function Section({ title, children, className = "" }) {
  return (
    <section className={`w-full flex justify-center py-12 px-4 ${className}`}>
      <div className="max-w-3xl w-full">
        {title && (
          <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
