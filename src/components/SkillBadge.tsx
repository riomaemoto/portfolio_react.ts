import React from 'react';
interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number;
}
export const SkillBadge = ({
  name,
  icon,
  level = 0
}: SkillBadgeProps) => {
  return <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
      {icon && <div className="mb-2 text-blue-600">{icon}</div>}
      <span className="font-medium">{name}</span>
      {level > 0 && <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{
        width: `${level}%`
      }}></div>
        </div>}
    </div>;
};