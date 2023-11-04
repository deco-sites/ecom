const LiveButton = () => {
  return (
    <a href="/live">
    <div style={`
    z-index: 999999999999;
    position: fixed;
    bottom: 12px;
    right: 12px;
    background-color: #AC1D1D;
    color: white;
    border-radius: 300px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    `}
    >
      <span style={`
      font-size: 20px;
      font-weight: 600;
      `}>
        LIVE!
      </span>
    </div>
    </a>
  );
}

export default LiveButton;