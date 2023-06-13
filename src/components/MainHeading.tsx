export default function MainHeading({ children }: Props) {
  return (
    <h1 className="text-xl lg:text-4xl font-semibold text-primary-900 dark:text-primary-600">
      {children}
    </h1>
  );
}
