import "./App.css";
import { QRCodeSVG } from "qrcode.react";
import { useState, useRef } from "react";
import AnimateBack from "./component/animateBack";

import DownloadButton from "./component/downloadButton";
import Footer from "./component/footer";

function App() {
	const [qrCode, setQrCode] = useState(); // QrCode Svg State
	const inputRef = useRef(); // Input useRef
	const svgRef = useRef(); // Svg useRef

	const qrCreate = () => {
		setQrCode(inputRef.current.value);
	};

	return (
		<>
			<div className="qrWrapper">
				<AnimateBack />
				<div className="qrCardWrapper">
					<div className="qrCard">
						<div className="qrInput">
							<input type="text" ref={inputRef} placeholder="https://..." />
							<button
								onClick={() => {
									qrCreate();
								}}>
								Generate QR code
							</button>
						</div>
					</div>
					<div className="qrCode">
						{qrCode && (
							<div ref={svgRef}>
								<QRCodeSVG value={qrCode} level="Q" />
							</div>
						)}
					</div>
					{qrCode && <DownloadButton svgRef={svgRef} />}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
