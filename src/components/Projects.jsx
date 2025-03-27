import styles from "@/styles/projects.module.css";

export const Projects = () => {
  return (
    <div
      style={{
        grid: "3",
        background:
          "linear-gradient(130.36deg,#000000 0%,#272727 44.03%,#494949 99.99%,#727272 100%   )",
      }}
    >
      <p style={{ fontSize: "50px", fontWeight: "700", fontFamily: "Roboto" }}>
        <span style={{ color: "#70FF00" }}>Projects</span>
        <span style={{ color: "white" }}>()</span>
      </p>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          alignItems: "center",
        }}
      >
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
        <img
          className={styles.awef}
          src="stanley-dai-73OZYNjVoNI-unsplash 3.png"
          alt=""
        />
      </div>
    </div>
  );
};
