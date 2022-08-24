type TitleProps = {
  text: string;
};
const Title = ({ text = "" }: TitleProps) => (
  <h1 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl capitalize dark:text-white">
    {text}
  </h1>
);

export default Title;
