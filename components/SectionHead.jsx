// Шапка раздела: номер на латунной линейке + заголовок и подзаголовок.
export default function SectionHead({ num, title, lead }) {
  return (
    <div className="sec-head">
      <div className="sec-num">{num}</div>
      <div className="t">
        <h2>{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
    </div>
  );
}
