const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg">
      <h3>{title}</h3>
      <div>
        {text.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default Article;
