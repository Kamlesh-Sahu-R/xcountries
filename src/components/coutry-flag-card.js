export function CountryFlagCard({name, flag }) {
    return (
      <div style ={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid black",
        gap: "4px",
        height: "190px",
        width: "190px",
        borderRadius: "5px",
        objectFit: "cover",
        overflow: "hidden",
      }}>
        <div style ={{
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          width: "100%",
        }}>
          <img 
            style ={{
              height: "100%",
              width: "70%",
              marginTop: "10px",
              objectFit: "cover",
            }}
            src = {flag} alt = {`flag of ${name}`} />
        </div>
        <h2>{name}</h2>
      </div>
    );
}