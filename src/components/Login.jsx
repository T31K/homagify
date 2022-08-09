import "../styles/login.css";

export default function Login() {
  const handleClick = () => {
    const clientId = "6153ce1787b1439486cd75fc3ef73054";
    const clientSecret = "0926d45e532646e7b16eceae89fc39c1";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
    ].join(" ");

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=token&show_dialog=true}`;
  };

  return (
    <div id="login">
      <div>
        <h2 className="title">Looks like you're not connected</h2>
        <button className="login" onClick={handleClick}>
          Connect Spotify
        </button>
      </div>
    </div>
  );
}
