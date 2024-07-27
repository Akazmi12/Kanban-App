import { ReactNode } from "react";
import { updatedInitialData } from "../../utils/sample-data";

export const SideBar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-start items-start gap-10">
      <div className="min-w-[250px] h-screen bg-[#F3F8FF] p-4 shadow-lg">
        <div className="w-full text-center text-[40px] mb-4 font-bold text-[#7E30E1]">
          Kanba
        </div>
        {Object.keys(updatedInitialData).map((key) => (
          <div className="flex w-full justify-between items-center cursor-pointer mb-4 mt-4">
            <div className="font-bold">{key}</div>
            <div className="text-[20px]">{">"}</div>
          </div>
        ))}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
};
