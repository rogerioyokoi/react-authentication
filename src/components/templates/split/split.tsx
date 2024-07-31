import { Outlet } from 'react-router-dom';

interface SplitTemplateProps {
  reverse?: boolean;
}

const SplitTemplate: React.FC<SplitTemplateProps> = () => {
  return (
    <div className="flex">
      <div className="w-full">
        <Outlet />
      </div>
      <div className="w-full">Content</div>
    </div>
  );
};

export default SplitTemplate;
