import * as T from "./types";

export default function StackCard({
  stack: { icon: Icon, name },
}: T.IStackCardProps) {
  return (
    <li className="flex items-center min-w-[17rem] max-w-[17rem] whitespace-nowrap gap-4 overflow-ellipsis px-4 py-4 border border-white rounded-[1.2rem] overflow-hidden">
      <Icon size={30} className="min-w-[30px]" />
      <h3 className="overflow-hidden title-3 text-ellipsis">{name}</h3>
    </li>
  );
}
