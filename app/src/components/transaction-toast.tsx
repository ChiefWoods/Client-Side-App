export default function TransactionToast({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      <a href={link} target="_blank" className="text-info underline">
        {link}
      </a>
    </div>
  );
}
