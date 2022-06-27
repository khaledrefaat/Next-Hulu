interface HeaderItemProps {
  title: string;
  Icon: any;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ Icon, title }) => {
  return (
    <li className="md:mr-5 cursor-pointer text-center capitalize group">
      <Icon className="h-6 w-6 3xl:h-16 3xl:w-16 mx-auto group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest text-xs md:text-sm 3xl:text-3xl">
        {title}
      </p>
    </li>
  );
};

export default HeaderItem;
