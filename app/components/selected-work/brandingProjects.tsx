const BrandingProjects = () => {
    // Sample data for branding projects
    const projects = [
      {
        id: 1,
        title: "Sicada X",
        year: 2024,
        imageUrl: "/path-to-image1.jpg", // Replace with actual image path
      },
      {
        id: 2,
        title: "Sicada Y",
        year: 2024,
        imageUrl: "/path-to-image2.jpg", // Replace with actual image path
      },
      {
        id: 3,
        title: "Sicada Z",
        year: 2024,
        imageUrl: "/path-to-image3.jpg", // Replace with actual image path
      },
      // Add more projects as needed
    ];
  
    return (
      <div className="max-w-[1440px] mx-auto px-6 mt-8">
        {/* Responsive 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full bg-grey-100 rounded-xl p-3 space-y-3"
            >
              {/* Project Title and Year */}
              <div className="bg-white px-3 py-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-md2 font-aileron text-grey-700">
                    {project.title} {project.year}
                  </div>
                </div>
              </div>
  
              {/* Project Image */}
              <div className="bg-gray-600 aspect-square rounded-lg">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} image`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BrandingProjects;
  