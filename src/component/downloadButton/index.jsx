import "./style.css";

const DownloadButton = ({ svgRef }) => {
	function downloadBlob(blob, filename) {
		const objectUrl = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = objectUrl;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
	}
	const downloadSVG = () => {
		const svg = svgRef.current.innerHTML;
		const blob = new Blob([svg], { type: "image/svg+xml" });
		downloadBlob(blob, `qrCode.svg`);
	};
	return (
		<>
			<button onClick={downloadSVG} className="downloadButton">
				Download
			</button>
		</>
	);
};

export default DownloadButton;
