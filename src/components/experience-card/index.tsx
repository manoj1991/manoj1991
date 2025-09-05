import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full timeline-dot border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h2 className="font-semibold">{position}</h2>
    <div className="my-0.5 text-xs">{time}</div>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  </li>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };
  return (
    <div className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body p-8">
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                {loading ? (
                  skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                ) : (
                  <span className="text-base-content ">Experience</span>
                )}
              </h3>
            </div>
          </div>
        <div className="card shadow-lg card-sm bg-base-100">
          <div className="card-body">
            <div className="text-base-content">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4 timeline-line white-bg">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {experiences.map((experience, index) => (
                      <ListItem
                        key={index}
                        time={`${experience.from} - ${experience.to}`}
                        position={experience.position}
                        company={experience.company}
                        companyLink={
                          experience.companyLink
                            ? experience.companyLink
                            : undefined
                        }
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
