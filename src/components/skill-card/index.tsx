import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
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
                    <span className="text-base-content">Tech Stack</span>
                )}
              </h3>
            </div>
          </div>
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center gap-2">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <div key={index} className="badge badge-primary badge-sm">
                    {skill}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SkillCard;
