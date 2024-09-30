import React from "react";
import { LiaNode } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";
import { TbCircleLetterC } from "react-icons/tb";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiNextjsLine,
  RiFirebaseFill,
  RiTailwindCssFill,
  RiJavaFill,
  RiFlutterFill,
} from "react-icons/ri";
import {
  SiMui,
  SiDotnet,
  SiMysql,
  SiMicrosoftsqlserver,
  SiCanva,
  SiGimp,
  SiJira,
  SiC,
  SiFigma,
  SiMongodb,
  SiDocker,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { Skill } from "./Skill";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pl-5">
      <h1 className="font-semibold text-center text-4xl">Technologies</h1>

      {/* Front-End Technologies */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Front-End Technologies</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="HTML" icon={<RiHtml5Fill className="text-2xl text-orange-600" />} />
          <Skill name="CSS" icon={<RiCss3Fill className="text-2xl text-blue-600" />} />
          <Skill name="JavaScript" icon={<RiJavascriptFill className="text-2xl text-yellow-500" />} />
          <Skill name="React.js" icon={<RiReactjsLine className="text-2xl text-blue-500" />} />
          <Skill name="Next.js" icon={<RiNextjsLine className="text-2xl text-white" />} />
          <Skill name="Material UI" icon={<SiMui className="text-2xl text-blue-600" />} />
          <Skill name="Tailwind CSS" icon={<RiTailwindCssFill className="text-2xl text-teal-400" />} />
        </div>
      </div>

      {/* Mobile App Development Technologies */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Mobile App Development Technologies</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="Flutter" icon={<RiFlutterFill className="text-2xl text-blue-600" />} />
        </div>
      </div>

      {/* Back-End Technologies */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Back-End Technologies</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="Node.js" icon={<LiaNode className="text-2xl text-blue-600" />} />
        </div>
      </div>

      {/* Databases */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Databases</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="MSSQL" icon={<SiMicrosoftsqlserver className="text-2xl text-white" />} />
          <Skill name="MySQL" icon={<GrMysql className="text-2xl text-white" />} />
        </div>
      </div>

      {/* Programming Languages */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Programming Languages</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="JAVA" icon={<RiJavaFill className="text-2xl text-blue-400" />} />
          <Skill name="C language" icon={<TbCircleLetterC className="text-2xl text-blue-400" />} />
        </div>
      </div>

      {/* Tools */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Tools</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="git" icon={<FaGitAlt className="text-2xl text-orange-700" />} />
          <Skill name="Figma" icon={<SiFigma className="text-2xl text-[#00C4CC]" />} />
          <Skill name="Gimp" icon={<SiGimp className="text-2xl text-amber-800" />} />
        </div>
      </div>

      {/* Backend Services */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Backend Services</div>
        <div className="flex flex-wrap gap-6">
          <Skill name="Firebase" icon={<RiFirebaseFill className="text-2xl text-blue-600" />} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
