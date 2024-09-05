const DishesCard = ({ project }) => {
  return (
    <div className="select-none">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2 px-2"
      />
      <div className="p-4">
        <h3 className=" text-yellow-100 mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm text-yellow-100">{project.description}</p>
      </div>
    </div>
  );
};

export default DishesCard;
