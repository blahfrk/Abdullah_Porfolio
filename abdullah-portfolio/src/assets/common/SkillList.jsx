export default function SkillList({ src, skill }) {
  return (
    <span className="flex flex-wrap items-center justify-center gap-[5px] font-roboto">
      <img src={src} alt="skill-icon" className="w-[35px]" />
      <p>{skill}</p>
    </span>
  );
}
