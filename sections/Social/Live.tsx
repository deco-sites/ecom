const Live = () => {
  return (
    <div style={`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    `}
    >
      <div style={`
      position: relative;
      width: 100%;
      max-width: 1080px;
      height: 100%;
      `}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/snnvmpqlRA4?si=ciUAqE3qLZ2Q2Ypg&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <div style={`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(170deg, rgba(0, 0, 0, 0.38) -103.45%, rgba(0, 0, 0, 0.49) -49.19%, rgba(0, 0, 0, 0.87) 149.52%);
      box-shadow: 2px -16px 17px 130px rgba(0, 0, 0, 0.60); 
      `}>
      </div>

      <div style={`
          width: calc(100% - 16px);
          height: 30%;
          border-radius: 18px;
          background: rgba(0, 0, 0, 0.71);
          padding: 12px;
          position: absolute;
          bottom: 8px;
          left: 8px;
          display: flex;
          flex-direction: column;
        `}>
            <div style={`flex: 1`}>
            <div style={`
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.79);
            padding: 12px;
            display: flex;
            flex-direction: column;
            `}>
                <span style={`
                color: white;
                font-size: 12px;
                font-weight: 600px;
                `}>
                    Fabrício
                </span>
                <span style={`
                color: #CFCFCF;
                font-size: 12px;
                `}>Eai pessoal!</span>
            </div>
            </div>
            
            <input type="text" placeholder="Comente!" style={`
            width: 100%;
            background-color: #ECECEC;
            border: 0;
            border-radius: 10px;
            height: 30px;
            padding-left: 6px;
            `} />
        </div>

        <div style={`
          width: calc(100% - 18px);
          margin: 9px;
          background: white;
          padding: 6px;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          border-radius: 18px;
        `}>
            <img style={`
            border-radius: 22px;
            width: 70px;
            height: 70px;
            `} src="https://http2.mlstatic.com/D_NQ_NP_682467-MLB70387735661_072023-O.webp" />

            <div style={`
            display: flex;
            flex-direction: column;
            padding-left: 12px;
            `}>
            <span style={`
                color: black;
                font-size: 14px;
                font-weight: 700;
                `}>
                    Kit Sutiãs
                </span>
                <div>
                  <span style={`
                  color: #989898;
                  font-size: 14px;
                  text-decoration: line-through;
                  text-decoration-color: red;
                  `}>R$ 19.90</span>

                  <span style={`
                  color: #black;
                  font-weight: 600;
                  font-size: 14px;
                  padding-left: 6px;
                  `}>R$ 14.90</span>
                </div>

                <button style={`
                color: white;
                font-size: 14px;
                font-weight: 600;
                background-color: #02F67C;
                padding: 3px;
                border-radius: 14px;
                `}>
                    Acessar Agora!
                </button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Live;