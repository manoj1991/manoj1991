import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';
import { TypeAnimation } from 'react-type-animation'; // 👈 added

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
}): React.JSX.Element => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring-3 ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              <LazyImage
                src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                alt={profile.name}
                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-full',
                  shape: '',
                })}
              />
            </div>
          </div>
        )}

        <div className="text-center mx-auto px-8">
          {/* Name */}
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>

          {/* 👇 Typing effect directly under the name */}
          {!loading && (
            <TypeAnimation
              sequence={[
                'Senior Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'React | Next.js | Node.js',
                2000,
                'Web3 | Blockchain | GraphQL',
                2000,
                // '9+ Years Experience in Software Engineering',
                // 2000,
              ]}
              wrapper="span"
              speed={50}
              className="block mt-2 text-lg font-mono"
              style={{ color: 'var(--color-primary)' }}
              repeat={Infinity}
            />
          )}

          {/* Bio */}
          <div className="mt-3 text-base-content font-mono">
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : profile.bio}
          </div>
        </div>

        {/* Description */}
        {!loading && (
          <p className="mt-6 px-6 text-sm text-center text-base-content opacity-80 leading-relaxed">
            I am a passionate web developer specializing in modern frontend
            technologies with solid exposure to backend development. I design
            and build scalable, user-centric web applications with clean,
            maintainable code to deliver high-quality digital experiences.
          </p>
        )}

        {/* Resume Button */}
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <a
              href={resumeFileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-70 hover:opacity-100 transition"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
