export const About = ({ knowledgePanel }) => {
  return (
    <>
      <div className="md:w-7">
        <p className="w-[300px] sm:w-[530px] xsm:w-7">
          {knowledgePanel?.description?.replace(/(Wikipedia)(?!.*\1)/, "")}
        </p>
      </div>
    </>
  );
};
