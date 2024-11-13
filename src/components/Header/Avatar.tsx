interface AvatarProps {
  initial: string;
}

const Avatar = ({ initial }: AvatarProps) => {
  return (
    <div className="bg-indigo-600 rounded-full min-w-8 min-h-8 flex justify-center items-center text-xl text-white">
      {initial}
    </div>
  );
};

export default Avatar;
