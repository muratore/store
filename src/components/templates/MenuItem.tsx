import Link from "next/link";

interface MenuItemProps {
  text?: string;
  url: string;
  selecionado?: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <Link
      href={props.url}
      className={`
    hover:text-dc-pink hover:underline underline-offset-4 hover:font-semibold cursor-pointer
     ${props.selecionado ? "text-dc-pink font-bold border-b-2 border-dc-pink" : "text-dc-gray"}
    `}
    >
      {props.text}
    </Link>
  );
};

export default MenuItem;
