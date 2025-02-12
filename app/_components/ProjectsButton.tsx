type Props = {
  children: string;
  link: string;
};

function ProjectsButton({ children, link }: Props) {
  return (
    <a href={link} target="_blank">
      <button
        className="[background:linear-gradient(144deg,#2b9178,#4bc36d_50%,#64aaa9)] dark:text-white px-4 py-2 rounded-md hover:opacity-40"
        type="button"
      >
        {children}
      </button>
    </a>
  );
}

export default ProjectsButton;
