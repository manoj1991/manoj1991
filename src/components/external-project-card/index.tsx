import { Fragment, useState } from 'react';
import LazyImage from '../lazy-image';
import { MdOpenInNew, MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? externalProjects.length - 1 : (prev as number) - 1,
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === externalProjects.length - 1 ? 0 : (prev as number) + 1,
      );
    }
  };

  const renderSkeleton = () => {
    return externalProjects.map((_, index) => (
      <div className="card shadow-md card-sm bg-base-100" key={index}>
        <div className="p-8 h-full w-full">
          {skeleton({ widthCls: 'w-full', heightCls: 'h-40' })}
        </div>
      </div>
    ));
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => {
      const maxTags = 3; // how many to show before "+N"
      const tags = item.technologies || [];
      const extraCount = tags.length > maxTags ? tags.length - maxTags : 0;

      return (
        <div
          className="relative group card shadow-md bg-base-100 cursor-pointer overflow-hidden"
          key={index}
          onClick={() => handleCardClick(index)}
        >
          {/* Project Image with hover overlay */}
          <div className="relative w-full overflow-hidden border-bottom">
            {item.imageUrl && (
              <LazyImage
                src={item.imageUrl}
                alt="thumbnail"
                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-full',
                  shape: '',
                })}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 "
              />
            )}

            {/* Overlay (now full height/width) */}
            <div className="absolute inset-0 bg-primary-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium">View Project</span>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-base-content/80 text-sm leading-relaxed mb-2 line-clamp-2">
              {item.description}
            </p>

            {/* Read more link */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent card click
                handleCardClick(index);
              }}
              className="text-primary text-xs font-medium hover:underline mb-4"
            >
              Read more...
            </button>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, maxTags).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-base-200 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {extraCount > 0 && (
                <span className="px-2 py-1 bg-base-300 rounded-md text-xs font-medium">
                  +{extraCount}
                </span>
              )}
            </div>
          </div>
        </div>
      );
    });
  };


  const renderModal = () => {
    if (selectedIndex === null) return null;
    const project = externalProjects[selectedIndex];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="relative bg-base-100 rounded-lg shadow-lg w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh]">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-xl text-base-content hover:text-primary z-index-10"
          >
            <MdClose size={24} />
          </button>

          {/* Project Image */}
          {project.imageUrl && (
            <div className="relative mb-4">
              <LazyImage
                src={project.imageUrl}
                alt={project.title}
                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-100',
                })}
                className="object-cover w-full h-100 rounded-md"
              />
            </div>
          )}

          {/* Project Details */}
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-base-content/80 mb-4">{project.description}</p>

          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-base-200 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex space-x-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <MdOpenInNew className="mr-1" /> View Live Site
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                View Code
              </a>
            )}
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-base-200 p-2 rounded-full shadow hover:bg-primary hover:text-white"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-base-200 p-2 rounded-full shadow hover:bg-primary hover:text-white"
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-1">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <MdOpenInNew className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${externalProjects.length} projects`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>

      {renderModal()}
    </Fragment>
  );
};

export default ExternalProjectCard;
