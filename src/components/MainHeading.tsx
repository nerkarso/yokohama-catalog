export default function MainHeading({ children }: Props) {
  return (
    <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-primary-900 dark:text-primary-600">
      {children}
    </h1>
  );
}
