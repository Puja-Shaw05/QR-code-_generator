import QRcode from 'qrcode';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState();
  const [qrCode, setQrCode] = useState();

  const generateQrCode = () => {
    QRcode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#000000ff',//0000ffff is in blue , 335383ff, 335383fff with light 000000ff,ffffffff with light 000000ff
        light: '#ffffffff'
      }
    },
      (err, url) => {
        if (err) {
          return console.error(err);
        }
        console.log(url);
        setQrCode(url);
      })
  }

  return (
    <div className="app">
      <h1>Qr Code Generator</h1>
      <input type="text"
        placeholder="e.g. http://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={generateQrCode}>Generate</button>

      {qrCode && <>
        <img src={qrCode} />
        <a href={qrCode} download="qrCode.png">download</a>
      </>}

    </div>
  )
}

export default App
