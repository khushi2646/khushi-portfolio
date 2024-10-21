import Link from 'next/link'; // Import Link from Next.js

const ProductProjects = () => {
  // Sample data for product projects
  const projects = [
    {
      id: 1,
      title: "Sicada X",
      year: 2024,
      description:
        "Developing an innovative digital asset SaaS platform, enhancing transaction efficiency for financial service providers and corporates.",
      imageUrl: "/path-to-image1.jpg", // Replace with actual image path
      link: "/selected-work/india-index", // Add the link to the project page
    },
    {
      id: 2,
      title: "Sicada X",
      year: 2024,
      description:
        "Developing an innovative digital asset SaaS platform, enhancing transaction efficiency for financial service providers and corporates.",
      imageUrl: "/path-to-image2.jpg", // Replace with actual image path
      link: "/projects/sicada-y", // Add the link to the project page
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-2 gap-6 max-w-[1440px] h-full items-center justify-center mx-auto mt-8 ">
      {projects.map((project, index) => (
        <Link key={project.id} href={project.link}>
          <div
            className={`w-full h-fit bg-grey-100  p-3 space-y-3 hover:shadow-lg transition-shadow duration-200 ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                {/* Top Description */}
                <div className="bg-white px-3 py-4  space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-md2 font-aileron text-grey-700">
                      {project.title}
                    </div>
                    <div className="font-semibold text-md2 font-aileron text-grey-600">
                      {project.year}
                    </div>
                  </div>
                  <div className="font-aileron font-normal text-md text-grey-500">
                    {project.description}
                  </div>
                </div>

                {/* Image */}
                <div className="bg-gray-600 h-[440px] ">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} image`}
                    className="w-full h-full object-cover "
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image */}
                <div className="bg-gray-600 h-[440px] ">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} image`}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Bottom Description */}
                <div className="bg-white px-3 py-4  space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-md2 font-aileron text-grey-700">
                      {project.title}
                    </div>
                    <div className="font-semibold text-md2 font-aileron text-grey-600">
                      {project.year}
                    </div>
                  </div>
                  <div className="font-aileron font-normal text-md text-grey-500">
                    {project.description}
                  </div>
                </div>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductProjects;
