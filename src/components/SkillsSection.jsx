export const SkillsSection = () => {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        grid: "2 / 1",
        backgroundColor: "#161616",
        padding: "50px 140px 115px 140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "50px",
          fontWeight: "700",
          fontFamily: "Roboto",
          margin: "0",
        }}
      >
        <span style={{ color: "#70FF00" }}>Skills</span>
        <span style={{ color: "white" }}>()</span>
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "50px",
          marginTop: "130px",
          className: "programmingLanguages",
        }}
      >
        <img src="javascript-original 1.png" alt="" />
        <img src="html5-original 1.png" alt="" />
        <img src="css3-original 1.png" alt="" />
        <img src="linux-original 1.png" alt="" />
        <img src="nextjs-original 1.png" alt="" />
        <img src="nodejs-original 1.png" alt="" />
        <img src="python-original 1.png" alt="" />
        <img src="rails-plain-wordmark 1.png" alt="" />
        <img src="react-original 1.png" alt="" />
        <img src="redux-original 1.png" alt="" />
        <img src="ruby-original-wordmark 1.png" alt="" />
        <img src="typescript-original 2.png" alt="" />
      </div>
    </div>
  );
};
